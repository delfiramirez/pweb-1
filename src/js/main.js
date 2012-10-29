/* TODO


call CSS3.js
call https://github.com/douglascrockford/JSON-js/blob/master/json2.js
call JQuery
Build app flow


et....

TRY: use Google JSAPI to load external CDN APIS from Google

*/

/* Appcacache --------------------------------------------------------*/

/*detect */
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

var messageCacheStatus = "Not supported";
if (window.applicationCache) 
{
   var meuAppCache = window.applicationCache;
   switch ( meuAppCache.status ) 
   {
      case meuAppCache.UNCACHED : 
         messageCacheStatus = "Not cached"; 
         break;
      case meuAppCache.IDLE : 
         messageCacheStatus = "Idle"; 
         break;
      case meuAppCache.CHECKING : 
         messageCacheStatus = "Checking"; 
         break;
      case meuAppCache.DOWNLOADING : 
         messageCacheStatus = "Downloading"; 
         break;
      case meuAppCache.UPDATEREADY : 
         messageCacheStatus = "Update ready"; 
         break;
      case meuAppCache.OBSOLETE : 
         messageCacheStatus = "Obsolete"; 
         break;
      default : 
        messageCacheStatus = "Unexpected Status ( " + 
                       meuAppCache.status.toString() + ")";
        break;
   }
}
return messageCacheStatus;

  // _______________________________________________________________________________________
//Appcache

window.applicationCache.addEventListener('updateready', function(e) {
  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    window.applicationCache.swapCache();
    if (confirm('An updated version of this site is available.')) {
      window.location.reload();
    }
  }
}, false);
 


function ourLocation(){

//show map LatLng

}

function loadLocation(){

	//var maps

	//load googleapi


}



/* xhr send data for Forms and JSON 29 Oct 2012 */

function sendForm() {
  var formData = new FormData();
  formData.append('username', 'johndoe');
  formData.append('id', 123456);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
  xhr.onload = function(e) { ... };

  xhr.send(formData);
}