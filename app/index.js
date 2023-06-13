import Meteo from "../classi/meteo.js";
//creo funzione per prendere meteo dati
function prendoDati(obj){
    const body = document.querySelector("body");
    obj.forecast.forEach(element => {

        //seleziono l'immagine in base al tempo
        let picture;
        switch (element.type) {
            case "soleggiato":
                picture = `<img src="../img/sole.svg"></img>`;
                break;
        case "piovoso":
            picture = `<img src="../img/pioggia.svg"></img>`;
            break;
            case "temporali":
                picture = `<img src="../img/temporale.svg"></img>`;
                break;
            case "nuvoloso":
                picture = `<img src="../img/cloud-sun.svg"></img>`;
                break;
        };

        //creo la card
        let card = `<article><div>${picture}</div><p>Meteo previsto: ${element.type}</p><p>Orario previsto: ${element.hour}</p><p>Tasso di umidità: ${element.humidity}%</p><p>Temperatura: ${element.temperature}°C</p></article>`
        body.innerHTML += card;
    });
    };

    export default prendoDati;
