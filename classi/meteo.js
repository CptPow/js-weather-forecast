import prendoDati from "../app/index.js";
//creo XML HTTP Request
let xhr = new XMLHttpRequest();
xhr.open("GET", "database/meteo.json");
xhr.send()
xhr.responseType = "json";
xhr.onload = function() {
let meteoDati = xhr.response
prendoDati(meteoDati)
}

class Meteo {
    #ore
    #tipo
    #umidita
    #temp
    constructor(ore, tipo, umidita, temp){
        this.#ore = ore;
        this.#tipo = tipo;
        this.#umidita = umidita;
        this.#temp = temp;
    }
    get ore () {
        return this.#ore
    };
    get tipo () {
        return this.#tipo
    };
    get umidita () {
        return this.#umidita
    };
    get temp () {
        return this.#temp
    };
};

export default Meteo

