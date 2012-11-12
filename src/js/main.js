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
}
return message_CacheStatus;

console.log( message_CacheStatus );
  // _______________________________________________________________________________________
//Appcache

window.applicationCache.addEventListener('updateready', function(e) {
  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    window.applicationCache.swapCache();
    if (confirm('updated version of this site available.')) {
      window.location.reload();
    }
  }
}, false);
 


function document_location(){




}

function our_location(){

//show map LatLng

}

function load_location(){

	//var maps

	//load googleapi


}

