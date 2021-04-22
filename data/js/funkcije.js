var artikalJson = [
  {
    "id": 1,
    "naziv": "Muska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 2,
    "naziv": "Zenska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 3,
    "naziv": "Decija cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 4,
    "naziv": "Nova cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 5,
    "naziv": "Stara cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 6,
    "naziv": "Letnja cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 7,
    "naziv": "Zimska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 8,
    "naziv": "Zimska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 9,
    "naziv": "Zimska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 10,
    "naziv": "Zimska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  },
  {
    "id": 11,
    "naziv": "Zimska cipela",
    "opis": "Italijanske kozne cizme",
    "cena": "2345",
    "boja": "crna"
  }
]




try {


  //#region ISPISIVANJE ZAGLAVLJA

  function ispisZaglavlja() {

  }

  //#endregion



  //#region ISPISIVANJE ZAGLAVLJA

  function ispisZaglavlja() {

  }

  //#endregion


  //#region ISPISIVANJE ZAGLAVLJA

  function ispisZaglavlja() {

  }

  //#endregion




  //#region ISPISIVANJE ZAGLAVLJA

  function ispisZaglavlja() {

  }

  //#endregion



  //#region ISPISIVANJE ZAGLAVLJA

  function ispisZaglavlja() {

  }

  //#endregion



  //#region ISPISIVANJE ZAGLAVLJA

  function ispisZaglavlja() {

  }

  //#endregion




  //#region ISPIS ARTIKALA
  // FUNKCIJA ZA ISPISIVANJE ARTIKALA IZ BAZE PODATAKA
  var listaDivSadrzaj = [];
  var listaDivRow = [];
  var listaDivCardGroup = [];
  var listaDivCardImena = [];
  var listaImgImena = [];
  var listaDivCardBody = [];
  var listaParImena = [];
  var listaParTextImena = [];
  var listaParCena = [];
  var listaButImena = [];

  var divArtikalPrikaz = document.createElement("DIV");


  //#endregion

  function ispisArtikala(brojArtikalaUkupno) {
    for (i = 0; i < brojArtikalaUkupno; i++) {
      listaDivSadrzaj.push("divSadrzaj" + i);
      listaDivRow.push("divRow" + i);
      listaDivCardGroup.push("divCardGroup" + i);
      listaDivCardImena.push("divArtikal" + i);
      listaImgImena.push("cardImage" + i);
      listaDivCardBody.push("divNazivArtikla" + i);
      listaParImena.push("cardTextParagraph" + i);
      listaParCena.push("parCena" + i);
      listaButImena.push("cardButton" + i);

      listaDivSadrzaj[i] = document.createElement("DIV");
      listaDivRow[i] = document.createElement("DIV");
      listaDivCardGroup[i] = document.createElement("DIV");
      listaDivCardImena[i] = document.createElement("DIV");
      listaImgImena[i] = document.createElement("img");
      listaDivCardBody[i] = document.createElement("DIV");
      listaParImena[i] = document.createElement("h5");
      listaParTextImena[i] = document.createElement("p");
      listaParCena[i] = document.createElement("p");
      listaButImena[i] = document.createElement("button");

      listaImgImena[i].classList.add("card-img-top");
      listaImgImena[i].setAttribute("src", "data/css/card_" + i + ".jpg");



      listaDivSadrzaj[i].appendChild(listaDivRow[i]);
      listaDivCardGroup[i].appendChild(listaDivCardImena[i]);
      listaDivCardGroup[i].classList.add("col");

      listaDivRow[i].classList.add("col");
      listaDivRow[i].appendChild(listaDivCardGroup[i]);
      listaDivSadrzaj[i].classList.add("sadrzaj");
      listaDivCardImena[i].appendChild(listaImgImena[i]);



      listaDivCardBody[i].classList.add("card-body");
      listaDivCardImena[i].appendChild(listaDivCardBody[i]);
      listaDivCardImena[i].setAttribute("width", "18rem");
      listaDivCardImena[i].classList.add("card");

      var textNazivArtikla = document.createTextNode(artikalJson[i].naziv)
      var textCenaArtikal = document.createTextNode(artikalJson[i].cena);
      var textDugmeArtikal = document.createTextNode("DODAJ U KORPU");









      listaParImena[i].appendChild(textNazivArtikla);
      listaParImena[i].classList.add("card-title");
      listaDivCardBody[i].appendChild(listaParImena[i]);


      listaParTextImena[i].appendChild(textCenaArtikal);
      listaParTextImena[i].classList.add("card-text");
      listaDivCardBody[i].appendChild(listaParTextImena[i]);








      listaButImena[i].appendChild(textDugmeArtikal);
      listaButImena[i].classList.add("btn-primary")
      listaButImena[i].classList.add("btn");
      listaButImena[i].setAttribute("href", "#");
      listaDivCardBody[i].appendChild(listaButImena[i]);




      

      

      divArtikalPrikaz.appendChild(listaDivRow[i]);

    }

    divArtikalPrikaz.classList.add("row");
    divArtikalPrikaz.classList.add("row-cols-1");
    divArtikalPrikaz.classList.add("row-cols-md-3");
    divArtikalPrikaz.classList.add("g-4");

    document.getElementById("sadrzajId").appendChild(divArtikalPrikaz);
  }
}
catch (greska) {
  console.log("Fajl se nalazi na lokaciji: " + greska.stack)
  console.log("Greska na liniji broj: " + greska.lineNumber)
  console.log("Opis greske: " + greska.message);
}



