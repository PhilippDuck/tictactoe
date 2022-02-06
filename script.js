"use strict"

let machineOverviewJSOnData;
let viewAll = false;
window.onload = getData();

function showDetail() {
    if (this.className.includes("span2")) {
        this.removeChild(this.lastChild);
        this.className = "anlage";
    } else {
        console.log(this);
        const detail = document.createElement("div");
        detail.className = "detail";
        const newP = document.createElement("p");
        newP.innerHTML = `<strong>Details:</strong>
                        <table>
                            <tr>
                                <td>
                                    Stückzahl:
                                </td>
                                <td class="number">
                                    342
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Takzeit (s):
                                </td>
                                <td class="number">
                                    32,4
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Stillstandszeit (min):
                                </td>
                                <td class="number">
                                    42
                                </td>
                            </tr>
                        </table>
                        `;
        detail.append(newP);
        const classname = this.className;
        this.className = `${classname} span2`;
        this.append(detail);
    }
    
}

function buildGrid(anlagen, showAll) {
    deleteContent();

    const anlagenLenght = Object.keys(anlagen).length;

    let highestNIOAnlage = {anlage: null, nios: 0};
    let lowestNIOAnlage = {anlage: null, nios: 0};
    const animationDuration = 80;
    for (const [anlagenKey, anlagenValue] of Object.entries(anlagen)) {
        let anlageNio = false;
        let anzahlNio = 0;
        const main = document.getElementById("main");

        const anlage = document.createElement("div");
        anlage.className = "anlage";
        anlage.addEventListener("click", showDetail);

        const title = document.createElement("h4");
        title.innerText = anlagenValue["anlage"]["name"];
        anlage.append(title);

        const inventarnummer = document.createElement("h5");
        inventarnummer.innerText = anlagenValue["anlage"]["inventarnummer"];
        anlage.append(inventarnummer);
        
    
        const kennzahlen = document.createElement("div")
        kennzahlen.className = "kennzahlen";
        
        // Erstelle das Kennzahlen Grid:
        for (const [key, value] of Object.entries(anlagenValue["anlage"]["kennzahlen"]))  {
            let kennzahlNio = false;
            //console.log(`${key}: ${value}`);
            const kennzahl = document.createElement("div");
            kennzahl.className = "kennzahl";


            const classname = kennzahl.className;
            if (anlagenValue["anlage"]["status"] !== 1) {
                kennzahl.className = `${classname} noData`;
            } else if (value == 1) {
                kennzahl.className = `${classname} io`;
            } else {
                kennzahl.className = `${classname} nio`;
                anlageNio = true;
                anzahlNio += 1;
                kennzahlNio = true;
            }

            if (key === "taktzeit") {
                if (value || kennzahl.classList.contains("noData")) {
                    kennzahl.innerHTML = "<img src='img/clock.png'> Taktzeit";
                } else {
                    kennzahl.innerHTML = "<img src='img/clock_white.png'> Taktzeit";
                }
            } else if (key === "mehrfachlaeuferquote") {
                if (value || kennzahl.classList.contains("noData")) {
                    kennzahl.innerHTML = "<img src='img/dlq.png'> Direkt<wbr>läufer<wbr>quote";
                } else {
                    kennzahl.innerHTML = "<img src='img/dlq_white.png'> Direkt<wbr>läufer<wbr>quote";
                }
            } else if (key === "bildverarbeitung") {
                if (value || kennzahl.classList.contains("noData")) {
                    kennzahl.innerHTML = "<img src='img/cam.png'> Kamera<wbr>systeme";
                } else {
                    kennzahl.innerHTML = "<img src='img/cam_white.png'> Kamera<wbr>systeme";
                }
            } else if (key === "schrauber") {
                if (value || kennzahl.classList.contains("noData")) {
                    kennzahl.innerHTML = "<img src='img/drill.png'> Schraub<wbr>technik";
                } else {
                    kennzahl.innerHTML = "<img src='img/drill_white.png'> Schraub<wbr>technik";
                }
                
            }

            if (showAll === true || kennzahlNio) {
                kennzahlen.append(kennzahl);
                kennzahlNio = false;
            }
        }

        anlage.append(kennzahlen);

        // Wenn die Anlage NIO-Kennzahlen besitzt wird sie nach "vorne" einsortiert
        // hat sie mehr NIO-Kennzahlen als die vorherige Anlage wird sie vor 
        // die letzte NIO-Anlage einsortiert:
        if (anlageNio) {
            if (!highestNIOAnlage["anlage"]) {
                main.insertAdjacentElement("afterbegin", anlage);
                highestNIOAnlage = {anlage: anlage, nios: anzahlNio}
                lowestNIOAnlage = {anlage: anlage, nios: anzahlNio}
            } else if (anzahlNio >= highestNIOAnlage["nios"]) { 
                highestNIOAnlage["anlage"].before(anlage);
                highestNIOAnlage = {anlage: anlage, nios: anzahlNio} 
            } else if (anzahlNio < lowestNIOAnlage["nios"]) {
                lowestNIOAnlage["anlage"].after(anlage);
            } else {
                lowestNIOAnlage["anlage"].after(anlage);
            }
            //highestNIOAnlage = {anlage: anlage, nios: anzahlNio}
        } else if (showAll){
            main.append(anlage);
        }
        
    }

    // Sortiere Elemente und füge Animationsdelay hinzu
    const main = document.getElementById("main");
    console.log(main);
    let elements = main.querySelectorAll(".anlage");
    for (let i = 0; i < Object.entries(elements).length; i++) {
        elements[i].style.animationDelay = `${i*animationDuration}ms`;
    }
}

// Wechselt zwischen "Zeige Alle" und "Zeige nur NIO".
function toggleViewAll() {
    const button = document.getElementById("viewToggleButton");
    if (viewAll) {
        buildGrid(machineOverviewJSOnData, false);
        button.innerText = "Alle anzeigen";
        viewAll = false;
    } else {
        buildGrid(machineOverviewJSOnData, true);
        button.innerText = "Zeige nur NIO´s";
        viewAll = true;
    }
}

// löscht den Gesamten Content aus dem <main> Tag.
function deleteContent() {
    const main = document.getElementById("main");
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}


// Holt den Datensatz aus der JSON Datei
// und baut das Grid
function getData() {
    fetch("machineOverview.JSON")
    .then(res => res.json())
    .then(data => {
        machineOverviewJSOnData = data;
        randomizeData()
    })
}

// Gibt zufällig 1 oder 0 zurück. Die Wahrscheinlichkeit 
// eine 1 zu erhalten ist höher
function getRandomValue() {
    let randomInt = Math.floor(Math.random() * 2);
    if (randomInt === 0) {
        randomInt = Math.floor(Math.random() * 2);
        if (randomInt === 0) {
            randomInt = Math.floor(Math.random() * 2);
        }
    }
    return randomInt;
}

// Randomisiert die Kennzahlen mithilfe der getRandomValue() funktion.
function randomizeData() {
    for (let [anlagenKey, anlagenValue] of Object.entries(machineOverviewJSOnData)) { 
        for (let [key, value] of Object.entries(anlagenValue["anlage"]["kennzahlen"]))  {
            anlagenValue["anlage"]["kennzahlen"][key] = getRandomValue();
        }
    }
    buildGrid(machineOverviewJSOnData,viewAll);
}
