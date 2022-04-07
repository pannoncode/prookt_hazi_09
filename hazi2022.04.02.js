console.log("Házi");
/*

    1. Írjatok egy compare (összehasonlít) függvény, mely paraméterként megkap 2 Date objektumot
        - ha az első paraméter ksiebb a másodiknál, akkor visszatér egy "<" jellel
        - ha nagyobb, ekkor egy ">" jellel,
        - ha egyenlőek, akor egy "=" jellel.
*/

let d1 = new Date("2021-12-11");
let d2 = new Date("2022/12/11");

let compare = (date1, date2) => {

    if (date1 < date2)
        return "<";
    else if (date1 > date2)
        return ">";
    else if (date1 === date2)
        return "=";
};



/*
    2. Írjatok egy equals függvényt, mely eldönti 2 dátum stringről, hogy azok egyenlőek-e vagy sem.
        (akkor is, ha különböző formátumban adjuk meg a dátumokat, tehát itt nem string összehasonlítást kérek)
        - true-vel tér vissza, ha egyenlőek, false-al, ha nem.
*/

let equals = (date1, date2) => {
    if (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDay() === date2.getDay())
        return true;
    else
        return false;
};



/*
    3. Írjatok egy milisecoundToDay függvényt, amel paraméterként meg kap egy miliszekundumot, majd visszatér
       a napok számával, amelyet miliszekundumban adtunk meg.

*/

let milisecoundToDay = s => {
    return "Az " + s + "ms összesen " + s / (24 * 60 * 60 * 1000) + " nap";
};



/*
    4. Írjatok egy függvény, mely kivon 2 dátumot egymásból, és visszaadja a 2 dátum közt eltelt időt
*/

let dateSubtraction = (date1, date2) => {
    let result = date1 - date2;
    return "Ennyi nap van a két dátum között: " + Math.abs(result) / (24 * 60 * 60 * 1000) + " és ennyi év: " + Math.abs(result) / (365 * 24 * 60 * 60 * 1000);
};



/*
    5. Írjatok egy howOld függvényt, mely paraméterként megkapja valakinek a születési dátumát, és
        visszatér egy számmal, mégpedig azzal, hogy hány éves az illető.

*/

let howOld = date => {
    let today = new Date();
    return "Te jelenleg " + (today.getFullYear() - date.getFullYear()) + " éves vagy";
};