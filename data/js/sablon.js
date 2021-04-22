var divKontejner = document.createElement("DIV");


var divZaglavlje = document.createElement("DIV");
var divNavigacija = document.createElement("DIV");
var divMapa = document.createElement("DIV");
var divKategorije = document.createElement("DIV");
var divTagovi = document.createElement("DIV");
var divSadrzaj = document.createElement("DIV");
var divPodnozje = document.createElement("DIV");





try {


    divKontejner.classList.add("container");
    divKontejner.classList.add("border");




    
    // divZaglavlje.setAttribute("id", "zaglavljeId");
    // divZaglavlje.classList.add("zaglavlje");
    // divKontejner.appendChild(divZaglavlje);

    // divNavigacija.setAttribute("id", "navigacijaId");
    // divNavigacija.classList.add("navigacija");
    // divKontejner.appendChild(divNavigacija);

    // divMapa.setAttribute("id", "mapaId");
    // divMapa.classList.add("mapa");
    // divKontejner.appendChild(divMapa);

    // divKategorije.setAttribute("id", "kategorijeId");
    // divKategorije.classList.add("kategorije");
    // divKontejner.appendChild(divKategorije);

    // divTagovi.setAttribute("id", "tagoviId");
    // divTagovi.classList.add("tagovi");
    // divKontejner.appendChild(divTagovi);


    divSadrzaj.setAttribute("id", "sadrzajId");
    divSadrzaj.classList.add("sadrzaj");
    divSadrzaj.classList.add("row-cols-3");
    // divKontejner.appendChild(divSadrzaj);

    // divPodnozje.setAttribute("id", "podnozjeId");
    // divPodnozje.classList.add("podnozje");
    // divKontejner.appendChild(divPodnozje);




    //  document.body.appendChild(divKontejner);




    ispisArtikala(11);

}
catch(greska){
    console.log("Fajl se nalazi na lokaciji: " + greska.stack)
    console.log("Greska na liniji broj: " + greska.lineNumber)
    console.log("Opis greske: " + greska.message);
}