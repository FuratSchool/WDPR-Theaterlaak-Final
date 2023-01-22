//wou deze file gebruiken als voorbeeld voor de db context. 
//Zalen volgens de case
const zaalArray =[
    {
        id: "1",
        eersteRangCap: 20,
        tweedeRangCap: 100,
        derdeRangCap: 120,
    },
    {
        id: "2",
        eersteRangCap: 20,
        tweedeRangCap: 160,
    },
    {
        id: "3",
        eersteRangCap: 10,
        tweedeRangCap: 80,
    },
    {
        id: "4",
        eersteRangCap: 40,
        tweedeRangCap: 200,
        derdeRangCap: 200,
    }
]
// een voorstelling speelt zich af bij een zaal, een zaal heeft vaste prijzen per voorstelling?
//dit is een voorbeeld, uiteindelijk is er data dat opgehaald moet worden, zoals artiest naam etc.
const voorstellingVoorbeeldArray = [
    {
        id: "1",
        Titel: "Requiem van Mozart",
        Artiest: "Bach choir en Orchestra",
        Prijs: 10,
    },
    {
        id: "2",
        Titel: "The Best of Joe Hisaishi",
        Artiest: "String quartet",
        Prijs: 20,

    },
    {
        id: "3",
        Titel: "Vivaldi Four Seasons",
        Artiest: "Vivaldi",
        Prijs: 15,

    },
    {
        id: "4",
        Titel: "A tribute to Hans Zimmer",
        Artiest: "Hans Zimmer Candlelight",
        Prijs: 12,

    },
]
function getVoorstelling(id){
    let voorstellingData = voorstellingVoorbeeldArray.find(v => v.id === id); 

    //als het niet gevonden is wordt undefined gereturned, zou ook zonder de return kunnen maar is duidelijker.
    if (voorstellingData === undefined){
    console.log("Voorstelling id " + id + " niet gevonden")
    return undefined;
    }

    return voorstellingData;
}

//Verder bestaan er 10 ruimtes, elk ruimte heeft 30 personen capaciteit. 

//idk of het dan nodig is om een array te maken.

const ruimteArray = [
    {
        id: "1",
    },
    {
        id: "2",
    },
    {
        id: "3",
    },
    {
        id: "4",
    },
    {
        id: "5",
    },
    {
        id: "6",
    },
    {
        id: "7",
    },
    {
        id: "8",
    },
    {
        id: "9",
    },
    {
        id: "10",
    },
]
export {zaalArray, voorstellingVoorbeeldArray, getVoorstelling};