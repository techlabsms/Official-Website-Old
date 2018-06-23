/*Vereine & Steuern Version 9.0 Beta | Revision 150721*/

/*GLOBALE VARIABLEN DEKLARIEREN*/
var version  = 'Version 9.0 Beta';
var revision = '| Revision 150721';

/*FUNKTION FUSSZEILE
--DER LINK ZU DIESER DATEI MUSS IM KOPF BEKANNT GEMACHT WERDEN !!!*/
function fusszeile()
{
document.writeln("<p>Copyright 2015 Finanzministerium NRW</p>");
document.writeln("<p><span>"+ version +"&nbsp;"+ revision +"</span></p>");
}

/*FUNKTION BREADCRUBS STARTSEITE
--DIE GLOBALEN VARIABLEN WERDEN IN DER DATEI NOTIERT !!!*/
function bc_start(){
document.write("<a href=\"index.html\">Start</a>&nbsp;> <a href=\"./content/17/contentslist.html\">"+ kap +"</a>&nbsp; > "+ seite +" ");
}

/*FUNKTION BREADCRUBS
--DIE GLOBALEN VARIABLEN WERDEN IN DER DATEI NOTIERT !!!*/
function bc(){
document.write("<a href=\"../../index.html\">Start</a>&nbsp;> <a href=\"index.html\">"+ kap +"</a>&nbsp; > "+ seite +" ");
}

/*FUNKTION BREADCRUBS
--DIE GLOBALEN VARIABLEN WERDEN IN DER DATEI NOTIERT !!!*/
function bc_eine(){
document.write("<a href=\"../../index.html\">Start</a>&nbsp;> <a href=\"index.html\">"+ kap +"</a>&nbsp;  "+ seite +" ");
}

/*FUNKTION BREADCRUBS INHALTSÜBERSICHT
--DIE GLOBALEN VARIABLEN WERDEN IN DER DATEI NOTIERT !!!*/
function bc_sitemap(){
document.write("<a href=\"../../index.html\">Start</a>&nbsp;> <a href=\"contentslist.html\">"+ kap +"</a>&nbsp;  "+ seite +" ");
}

/*FUNKTION SEITE VORWÄRTS UND RÜCKWÄRTS
--DIE GLOBALEN VARIABLEN FÜR DIE LINKS WERDEN IN DER DATEI NOTIERT !!!*/
function vz()
{
document.writeln("<a class=\"vz\"href=\""+ zur +"\" title=\"ein Beitrag zurück\">&lt; zurück</a><span class=\"trenn\">&nbsp;|&nbsp;</span><a class=\"vz\"href=\""+ vor +"\" title=\"Ein Beitrag weiter\">vor &gt;</a>");
}

/*FUNKTION iv() = INHALTSÜBERSICHT
--RUFT IN ALLEN SEITEN DEN LINK UNTER DER NAVIGATION AUF !!!*/
function iv()
{
document.writeln("<div class=\"link_to_contentslist\">");
document.writeln("<img src=\"../images/arrow_contentslist_right.gif\" alt=\"\" width=\"16\" height=\"5\" />");
document.writeln("<a href=\"../17/contentslist.html\">Inhaltsübersicht</a>");
document.writeln("</div>");
}

/*FUNKTION logo_vs() = LOGO BEITRAGENDE
DER FUNKTIONSAUFRUF FÜGT DAS LOGO FINANZVERWALTUNG EIN !!!*/
function logo_vs()
{
document.writeln("<div class=\"vs_logo\"><img src=\"../../content/images/vs_logo.png\" alt=\"Ende Beitrag\" width=\"200\" height=\"32\" /></div>");
}

/*FUNKTION HEADER-BAR
--RUFT DEN KOPF DER SEITE AUF !!!*/
function h_bar()
{
document.writeln("<div class=\"heading_bar\">");
document.writeln("<div class=\"manual_name\"><a href=\"../../index.html\">Vereine & Steuern</a></div>");
document.writeln("<!--<div class=\"print\"><a href=\"javascript:void(0);\" target=\"_self\" onclick=\"openPrintWindow();\">Drucken</a></div>-->");
document.writeln("<form name=\"suchen\" action=\"\" onSubmit=\"sende_eingabe(); return false\">");
document.writeln("<div class=\"search_button\" onmouseout=\"this.className='search_button';\" onmouseover=\"this.className='search_button_mouseover';\">");
document.writeln("<button id=\"id_search_button\" type=\"submit\">Suche</button>");
document.writeln("</div>");
document.writeln("<div class=\"search_input\">");
document.writeln("<input type=\"text\" name=\"suchtext\" id=\"id_search\" value=\"\" size=\"\">");
document.writeln("</div>");
document.writeln("</form>");
document.writeln("<div class=\"absender\"></div>");
document.writeln("</div>");
}

/*FUNKTION HEADER-BAR STARTSEITE(INDEX)
--RUFT DEN KOPF DER SEITE AUF !!!*/
function h_bar_start()
{
document.writeln("<div class=\"heading_bar\">");
document.writeln("<div class=\"manual_name\"><a href=\"index.html\">Vereine & Steuern</a></div>");
document.writeln("<!--<div class=\"print\"><a href=\"javascript:void(0);\" target=\"_self\" onclick=\"openPrintWindow();\">Drucken</a></div>-->");
document.writeln("<!--<form name=\"suchen\" action=\"\" onSubmit=\"sende_eingabe(); return false\">");
document.writeln("<div class=\"search_button\" onmouseout=\"this.className='search_button';\" onmouseover=\"this.className='search_button_mouseover';\">");
document.writeln("<button id=\"id_search_button\" type=\"submit\">Suche</button>");
document.writeln("</div>");
document.writeln("<div class=\"search_input\">");
document.writeln("<input type=\"text\" name=\"suchtext\" id=\"id_search\" value=\"\" size=\"\">");
document.writeln("</div>");
document.writeln("</form>-->");
document.writeln("<div class=\"absender\"></div>");
document.writeln("</div>");
}