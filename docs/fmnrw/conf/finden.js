
<!--
function SetzeCursor() 
     // DEN CURSOR AUF DIE 1. ZEILE SETZEN ... 
	{
		document.suchen.suchtext.focus();
	}
 
function replaceUmlauts(string, index){
		    var anArray = new Array(2);
		    anArray[0] = new Array("Ö", "ö", "Ä", "ä", "Ü", "ü", "ß");
		    anArray[1] = new Array("&Ouml;", "&ouml;", "&Auml;", "&auml;", "&Uuml;", "&uuml;", "&szlig;");
		    
		    for (var i=0; i<anArray[index].length; i++){
				myRegExp = new RegExp(anArray[index][i],"g");
				string = string.replace(myRegExp, anArray[(index==0?1:0)][i]);
			}
		    return string;
		}
 
function sende_eingabe()
{	
	var sucheing = document.forms.suchen.elements.suchtext.value;
	//var sucheing = document.forms.suchen.elements.suchtext.value.toLowerCase();
 
	// STRING FORMATIEREN FÜHRENDE UND ALLE LEERZEICHEN ENTFERNEN...
	var strziel = sucheing.replace(/^\s+/,"");
	var leerpos =  strziel.indexOf(" ");
	// EINEN 2. TEXT ENTFERNEN...
	if (leerpos > 1)
	{
	var strok1 = strziel.substring(0, leerpos);
	sucheing = strok1;
	}
	// NUN NOCH ALLE LEERZEICHEN DER SUCHEINGABE ENTFERNEN...
	var str_array = sucheing.split(" ");
	var str_neu = str_array.join("");
	sucheing = str_neu;
	// NUN SEMIKOLON UND KOMMA ENTFERNEN...
	sucheing = sucheing.replace(';',"");
	sucheing = sucheing.replace(',',"");	
 
	// UMLAUTE FÜR DIE ÜBERTRAGUNG BEI MOZILLA FIREFOX UMWANDELN...
	var str_uml = replaceUmlauts(sucheing, 0);
	 sucheing = str_uml;
	// NUN EINGABEPRÜFUNG UND URL ERZEUGUNG...
	if (sucheing.length >  1)
	{
	var neuurl = "../../suchmaschine/suchindex.htm?";  // HIER DEN ZIELPFAD EINGEBEN....
	//alert(neuurl+sucheing);
	window.top.location.href = neuurl+sucheing;
	}
	else
	{
        document.forms.suchen.elements.suchtext.value = sucheing;
		alert('FEHLER BEI DER SUCHEINGABE:\n\n'
		     +'Bitte mindestens 2 Zeichen als Suchbegriff eingeben !');
		document.suchen.suchtext.focus();
		return false;
	}
}
//-->
