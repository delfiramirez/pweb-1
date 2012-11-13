/* TODO


call CSS3.js
call https://github.com/douglascrockford/JSON-js/blob/master/json2.js
Build app flow


et....

TRY: use Google JSAPI to load external CDN APIS from Google

*/

/*Basics and redirects */



/*Avoid iframe busting ------------------------------*/
 if (self != top) {

  top.location.replace(location.href);
 }

/*Detect AJAX ---------------------------------------*/

/* Set up variables */

var corporate_project = ['/blog/','/mission/','/vision/', '/num_value/'];

var oudated_message = 'We are maintaining this part of the site. Please follow the back button';

  //sendRequest('data/text/header.txt',setHeader);
  //sendRequest('data/text/nav.txt',setNavigation);
  //sendRequest('data/text/footer.txt',setFooter);

//http://www.w3.org/TR/access-control/

var invocation = new XMLHttpRequest();
var url = 'register.html';
     
function load_test_page(){
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}


/* Appcacache --------------------------------------------------------*/
/*detect */
function appcache_deteccio(){

if (window.applicationCache) {

  var appCache = window.applicationCache;
   appCache.addEventListener('error', appCacheError, false);
   appCache.addEventListener('checking', checkingEvent, false);
   appCache.addEventListener('noupdate', noUpdateEvent, false);
   appCache.addEventListener('downloading', downloadingEvent, false);
   appCache.addEventListener('progress', progressEvent, false);
   appCache.addEventListener('updateready', updateReadyEvent, false);
   appCache.addEventListener('cached', cachedEvent, false);
}

var message_CacheStatus = "Not supported";

if (window.applicationCache) 
{
   var meuAppCache = window.applicationCache;
   switch ( meuAppCache.status ) 
   {
      case meuAppCache.UNCACHED : 
         message_CacheStatus = "Not cached"; 
         break;
      case meuAppCache.IDLE : 
         message_CacheStatus = "Idle"; 
         break;
      case meuAppCache.CHECKING : 
         message_CacheStatus = "Checking"; 
         break;
      case meuAppCache.DOWNLOADING : 
         message_CacheStatus = "Downloading"; 
         break;
      case meuAppCache.UPDATEREADY : 
         message_CacheStatus = "Update ready"; 
         break;
      case meuAppCache.OBSOLETE : 
         message_CacheStatus = "Obsolete"; 
         break;
      default : 
        message_CacheStatus = "Unexpected Status ( " + 
                       meuAppCache.status.toString() + ")";
        break;
   }
   return message_CacheStatus;
   console.log( message_CacheStatus );
   //error a dpurar
}
};





// Appcache

window.applicationCache.addEventListener('updateready', function(e) {

  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {

    window.applicationCache.swapCache();

    if (confirm('updated version of this site available.')) {

      window.location.reload();
    }
  }
}, false);
 

//Gmaps location

document_location = function(){




}

our_location = function(){

//show map LatLng

}

load_location = function(){

	//var maps
  //+
	//load googleapi


}

//Progess Load files HTML% progess TAG Nov 2012 -----*/

var incremental_proges = 0;

var finished_proges = false;

var completed_progres = 100;


crea_proges = function () {
    var progess_bar = document.getElementById("prog");

    var num_val = document.getElementById("num_value");

    progess_bar.num_value = incremental_proges;

    num_val.innerHTML = Math.round((incremental_proges / completed_progres) * 100) + "%";

    incremental_proges++;

    if (incremental_proges > 100) finished_proges = true;

    if (!finished_proges) setTimeout("crea_proges()", 100);

    else {
        finished_proges = false;
        incremental_proges = 0;
    }
}

/*Set Cookie ------------------------------------*/

document.cookie="resolution= '+Math.max(screen.width,screen.height)+'; path=/";
console.log(document.cookie);

var useActiveX = !window.ActiveXObject && window.ActiveXObject;
function loadJSON(file,callback){
    var xobj;
    if(useActiveX){
        xobj = new ActiveXObject("Microsoft.XMLHTTP"); 
    }else{
        xobj = new XMLHttpRequest();
    }
    xobj.callback = callback;
    if(xobj.overrideMimeType){
        xobj.overrideMimeType("application/json");
    }
    xobj.open('GET', file, false);
    xobj.onreadystatechange = function(){
        if(this.readyState == 4){
            this.callback(this);
        }
     }
     xobj.send(null);
}

loadJSON("http://raw.github.com/delfiramirez/pweb-1/addons/src/data/template.json",function(obj){
    console.log(obj.responseText);
});

