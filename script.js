

const anlagenKennzahlen = [
    {anlage: {
        name: "RCEPS Lenkung 1",
        inventarnummer: 9305306,
        kostenstelle: 3172,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "RCEPS Sensor 2",
        inventarnummer: 9306582,
        kostenstelle: 3172,
        kennzahlen: {
            taktzeit: false,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MLB-EVO Lenkung 1",
        inventarnummer: 9306997,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MLB-EVO Lenkung 3",
        inventarnummer: 9306799,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: false,
        }
    }},
    {anlage: {
        name: "MLB-EVO Lenkung 4",
        inventarnummer: 9308631,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MLB-EVO Sensor 1",
        inventarnummer: 9305284,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Lenkung 1",
        inventarnummer: 9306581,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Lenkung 2",
        inventarnummer: 9307526,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: false,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Lenkung 3",
        inventarnummer: 9308129,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: false,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Sensor 1",
        inventarnummer: 9306599,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Sensor 2",
        inventarnummer: 9308250,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "PPE Lenkung",
        inventarnummer: 9310017,
        kostenstelle: 3280,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "PPE Sensor",
        inventarnummer: "nicht definiert",
        kostenstelle: 3280,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: false,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MEB Lenkung",
        inventarnummer: 9308672,
        kostenstelle: 3279,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},

]

const anlagenFlops = [
    {anlage: {
        name: "RCEPS Lenkung 1",
        inventarnummer: 9305306,
        kostenstelle: 3172,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "RCEPS Sensor 2",
        inventarnummer: 9306582,
        kostenstelle: 3172,
        kennzahlen: {
            taktzeit: false,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MLB-EVO Lenkung 1",
        inventarnummer: 9306997,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MLB-EVO Lenkung 3",
        inventarnummer: 9306799,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: false,
        }
    }},
    {anlage: {
        name: "MLB-EVO Lenkung 4",
        inventarnummer: 9308631,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MLB-EVO Sensor 1",
        inventarnummer: 9305284,
        kostenstelle: 3271,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Lenkung 1",
        inventarnummer: 9306581,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Lenkung 2",
        inventarnummer: 9307526,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: false,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Lenkung 3",
        inventarnummer: 9308129,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: false,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Sensor 1",
        inventarnummer: 9306599,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MQB Sensor 2",
        inventarnummer: 9308250,
        kostenstelle: 3278,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "PPE Lenkung",
        inventarnummer: 9310017,
        kostenstelle: 3280,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "PPE Sensor",
        inventarnummer: 0000000,
        kostenstelle: 3280,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: false,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},
    {anlage: {
        name: "MEB Lenkung",
        inventarnummer: 9308672,
        kostenstelle: 3279,
        kennzahlen: {
            taktzeit: true,
            mehrfachlaeuferquote: true,
            bildverarbeitung: true,
            schrauber: true,
        }
    }},

]

function buildGrid() {

    const anlagenLenght = Object.keys(anlagenKennzahlen).length;

    console.log(anlagenLenght);

    for (const [anlagenKey, anlagenValue] of Object.entries(anlagenKennzahlen)) {
        const main = document.getElementById("main");

        const anlage = document.createElement("div");
        anlage.className = "anlage";

        const title = document.createElement("h4");
        title.innerText = anlagenValue["anlage"]["name"];
        anlage.append(title);

        const inventarnummer = document.createElement("h5");
        inventarnummer.innerText = anlagenValue["anlage"]["inventarnummer"];
        anlage.append(inventarnummer);
        
    
        const kennzahlen = document.createElement("div")
        kennzahlen.className = "kennzahlen";
    
        for (const [key, value] of Object.entries(anlagenValue["anlage"]["kennzahlen"]))  {
            //console.log(`${key}: ${value}`);
            const kennzahl = document.createElement("div");
            kennzahl.className = "kennzahl";
    
            if (key === "taktzeit") {
                kennzahl.innerHTML = "<img src='img/clock.png'> Taktzeit";
            } else if (key === "mehrfachlaeuferquote") {
                kennzahl.innerHTML = "<img src='img/dlq.png'> DLQ";
            } else if (key === "bildverarbeitung") {
                kennzahl.innerHTML = "<img src='img/cam.png'> IBV";
            } else if (key === "schrauber") {
                kennzahl.innerHTML = "<img src='img/drill.png'> Schrauber";
            }

            const classname = kennzahl.className;
            if (value === true) {
                kennzahl.className = `${classname} io`;
            } else {
                kennzahl.className = `${classname} nio`;
            }
    
            kennzahlen.append(kennzahl);
        }
    
        anlage.append(kennzahlen);
    
        main.append(anlage);
    }
}

window.onload = buildGrid();