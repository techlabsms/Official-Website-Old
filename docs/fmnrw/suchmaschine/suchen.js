/* JAVASCRIPT SUCHEN.JS - SUCHMASCHINE V3.1 ERZEUGT MIT SCANHTML VON WWW.WEBLORENZ.DE */
/* 2 GLOBALE VARIABLEN DER SUCHE */
var str_suchbegriff = "";
var url_zielframe = "_parent";

function in_html_format( str_start )
{
var lang = 0;
var zahl1 = 0;
var neuer_str = "";
var der_str = "";
	lang = str_start.length;
	for (zahl1=0; zahl1<lang;zahl1++)
	{
		der_str = str_start.charAt(zahl1);
		if ( der_str == "ä") { der_str = "&auml;" };
		if ( der_str == "ö") { der_str = "&ouml;" };
		if ( der_str == "ü") { der_str = "&uuml;" };
		if ( der_str == "Ä") { der_str = "&Auml;" };
		if ( der_str == "Ö") { der_str = "&Ouml;" };
		if ( der_str == "Ü") { der_str = "&Uuml;" };
		if ( der_str == "ß") { der_str = "&szlig;" };
		neuer_str = neuer_str + der_str ;
	}	
	return neuer_str;
}

function string_gefunden( str )
{
	 var ist_gefunden = false;
	 var str2 = "";
	 var suchstr3 = "";
	 str2 = str.toLowerCase();
	 suchstr3 = str_suchbegriff.toLowerCase();
	 suchstr3 = in_html_format( suchstr3 );
	 str2 = " " + str2 + " ";
	 ist_gefunden = ( str2.indexOf( suchstr3 ) > -1 ) 
	 return( ist_gefunden );
}

function starte_suche()
{
var frame1 = "sucheingabe";
var frame2 = "suchergebnis";
var url_zielframe = "_top";
var eingabeframe = parent.frames[frame1];
var ausgabeframe = parent.frames[frame2];
var eingabedokument = eingabeframe.document;
var ausgabedokument = ausgabeframe.document;

var count = 0;  	
	with ( ausgabedokument )
	{
		open();
		// FORMULARKOPF SCHREIBEN...
		writeln("<html>");
		writeln("<head>");
		writeln("<title>SUCHERGEBNIS</title>");
		writeln("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
		writeln("<link rel=\"stylesheet\" href=\"suchstyle.css\" type=\"text/css\">");
		//MAIN CSS
		writeln("<link rel=\"stylesheet\" href=\"../content/styles/stylevs.css\" type=\"text/css\">");
		writeln("</head>");
		writeln("<body bgcolor=\"#FFFFFF\" text=\"#000000\" link=\"#0000CC\" vlink=\"#000099\" alink=\"#CC0000\">");
		writeln("<font face=\"Arial, Helvetica, sans-serif\" size=\"2\">");
				
				/* WERBETEXT ABFANG */
                //writeln("<div align=\"CENTER\">- HIER IST IHR WERBRTEXT -</div><BR>\n");
				
                /* WERBETEXT ENDE */
				writeln("<div class = \"wrapper\">");
				writeln("<div class=\"container\" id=\"docs\">");
				//
				writeln("<table style=\"BORDER-TOP: 0px solid rgb(51, 102, 204);\" BORDER=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#E5ECF9\" width=\"100%\" align=left>\n"); 
                writeln("<tr>\n");
				writeln("<td><font color=\"#0000CC\" size=2><b>\n");
				writeln ("<span class= \"rahmen\">Suchergebnis:</span>\n");//("&nbsp;SUCHERGEBNIS:\n");
				writeln("</b></font></td>\n");
				writeln("<td align=\"right\" width=\"220\" nowrap><font color=\"#0099FF\" size=2></font></td>\n");//... im neuen Browserfenster &ouml;ffnen.&nbsp;
				writeln("</tr>\n");
				writeln("</table>\n");
				writeln("<br><br>\n");
				
		writeln("<ol>");
		for (var i=1 ; i<Entry.length; i++)
		{
			if ( string_gefunden( Entry[i].UrlTitle )
			|| string_gefunden( Entry[i].Keywords )
            || string_gefunden( Entry[i].Beschreibung )
			   )
			{
				writeln("<li><p>");
				writeln( Entry[i].titel_url() );
				writeln("</p></li>");
				count++;
			}
		}
   		writeln("</ol>");
				

		if ( count == 0 )
	   	{
	     //writeln("<b><font color=\"#000099\" size=2>Zum Suchbegriff [ ",str_suchbegriff," ] wurden keine Daten gefunden...</font></b>");
 		  // EINE WEITERE ZEILE, WENN DIE DATENBANK FEHLT...
		  if ( i < 2 )
	   	   {           
		   writeln("<b><font color=\"#CC0000\" size=2>Die Datei 'datenbank.js' wurde nicht gefunden, oder ist defekt...</font></b>");
		   writeln("<br>\n");
		   writeln("<font color=\"#339900\" size=2>Bitte installieren Sie Vereine & Steuern neu !</font>");
		   }
		   else
		   {
	       writeln("<p><span class= \"fail\">Zum Suchbegriff [ ",str_suchbegriff," ] wurden leider keine Daten gefunden...</span></p>");
		   }
		  writeln("<br><br>\n");
          writeln("<table BORDER=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#E5ECF9\" width=\"100%\" align=left>\n"); 
          writeln("<tr>\n");
          writeln("<td nowrap>\n");
		  writeln("<span class= \"rahmen_u\">Geben Sie einen neuen Suchbegriff ein und klicken Sie auf Suchen !</span>\n");
          writeln("</td>\n");
          writeln("</tr>\n");
          writeln("</table>\n");
		}
		if ( count == 1 )
	   	{
          writeln("<table BORDER=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#E5ECF9\" width=\"100%\" align=left>\n"); 
          writeln("<tr>\n");
          writeln("<td nowrap><font face=\"Arial, Helvetica, sans-serif\" size=\"2\" color=\"#000099\">\n");
		  writeln("&nbsp;Zum Suchbegriff [ ",str_suchbegriff," ] wurde nur ein Eintrag gefunden !\n");
          writeln("</font></td>\n");
          writeln("</tr>\n");
          writeln("</table>\n");
		}
		if ( count > 1 )
	   	{
          writeln("<table BORDER=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#E5ECF9\" width=\"100%\" align=left>\n"); 
          writeln("<tr>\n");
          writeln("<td nowrap>\n");//<font face=\"Arial, Helvetica, sans-serif\" size=\"1\" color=\"#000099\">
		  writeln("<span class= \"rahmen_u\">Zum Suchbegriff [ ",str_suchbegriff," ] wurden " ,count, " Eintr&auml;ge gefunden !</span>\n");
          writeln("</td>\n");//</font>
          writeln("</tr>\n");
          writeln("</table>\n");
		}
			     
		 /* WERBETEXT ANFANG */
		writeln("</font>");
		writeln("<font face=\"Arial, Helvetica, sans-serif\" size=\"2\" color=\"#999999\">");
		writeln("<br><br><CENTER><b>_____________</b><br>");
		/*writeln("<br>Diese Suchmaschine wurde mit Software von www.weblorenz.de erzeugt");*/
		writeln("</CENTER>");
		 /* WERBETEXT ENDE */
		
		writeln("</font>");
		//Ende Wrapper
		writeln("</div>");
		writeln("</div>");
		writeln("</body>");
		writeln("</html>");
		close();
		if ( count == 0 )
	   	{
        eingabedokument.suchform.suchbegriff.focus();
        }
   	}
}

function pruefe_eingabe()
{
var frame1 = "sucheingabe";
var eingabeframe = parent.frames[frame1];
var eingabedokument = eingabeframe.document;

// STRING FORMATIEREN ERST FÜHRENDE UND DANN ALLE LEERZEICHEN ENTFERNEN...
var strstart = eingabedokument.suchform.suchbegriff.value;
var strziel = strstart.replace(/^\s+/,"");
var leerpos =  strziel.indexOf(" ");
	if (leerpos > 1)
	{
	var strok1 = strziel.substring(0, leerpos);
	strziel = strok1;
	}
	// NUN NOCH LEERZEICHEN DER SUCHEINGABE ENTFERNEN...
	var str_array = strziel.split(" ");
	var str_neu = str_array.join("");
	strziel = str_neu;
	// NUN SEMIKOLON UND KOMMA ENTFERNEN...
	strziel = strziel.replace(';',"");
	strziel = strziel.replace(',',"");
	eingabedokument.suchform.suchbegriff.value = strziel;

 if(eingabedokument.suchform.suchbegriff.value.length < 2)
  {  
  alert( "Ihr Suchbegrff sollte mindestens 2 Zeichen enthalten !" );
  eingabedokument.suchform.suchbegriff.focus();
  }
  else
  {	  
  str_suchbegriff = eingabedokument.suchform.suchbegriff.value;
  starte_suche();
  }
}

function sucheingabeEnter()
{
	pruefe_eingabe();
	return (false);
}

function titel_url()   // Die Titelzeile als Url...
{ 
  with( this )
  {
   var url1 = "";
   /* Beispiel für den Offline-Frame-Link Replace !  
   url1 = url1 + "<a href=\"javascript:parent.frames['_blank'].location.replace('" + this.Url + "')\">";
   */
   url1 = url1 + "<a class=\"lnkziel\" href=\"" + this.Url + "\" target="+url_zielframe+">";
   url1 = url1 + "<b>" + UrlTitle + "</b>\n";
   url1 = url1 + "</a>\n";
   url1 = url1 + "<p class=\"kap\">" + Kapitel + "</p>\n";           //"<br>" + Kapitel + "\n";
   url1 = url1 + "<p class=\"bei_text\">" + Beschreibung + "</p>\n";
  }
  return(url1);
}

function Element(Url,UrlTitle,Kapitel,Beschreibung,Keywords)
{
   this.Url = Url;
   this.UrlTitle = UrlTitle;
   this.Kapitel = Kapitel;
   this.Beschreibung = Beschreibung;
   this.Keywords = Keywords;
   this.titel_url = titel_url;
}

Entry = new Array();