abstract class Country {
    capital: string;
    population: number;
    timeZone: string;
    officialLanguage: string;
    northHemisphere: boolean;

    constructor(capital: string, population: number, timeZone: string, officialLanguage: string, northHemisphere: boolean) {
        this.capital = capital;
        this.population = population;
        this.timeZone = timeZone;
        this.officialLanguage = officialLanguage;
        this.northHemisphere = northHemisphere;
    }

    abstract welcome(): string;
}

class Turkey extends Country {
    constructor(capital: string, population: number, timeZone: string, officialLanguage: string, northHemisphere: boolean) {
        super(capital, population, timeZone, officialLanguage, northHemisphere);
    }
    welcome() {
        let welc: string;
        welc = "Welcome to " + this.capital;
        return welc;
    }
}

let country:Turkey = new Turkey("Ankara", 84780000, 'GMT+3', "Turkish", true);
console.log(country.welcome());