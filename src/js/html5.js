document.documentElement.className = document.documentElement.className.replace(/(\s|^)no-js(\s|$)/, '$1js$2');

document.createElement('aside');
document.createElement('article');
document.createElement('canvas');
document.createElement('command');
document.createElement('datalist');
document.createElement('details');
document.createElement('figure');
document.createElement('figcaption');
document.createElement('footer');
document.createElement('keygen');
document.createElement('header');
document.createElement('hgroup');
document.createElement('menu');
document.createElement('nav');
document.createElement('output');
document.createElement('progress');
document.createElement('picture');
document.createElement('section');
document.createElement('time');
document.createElement('wbr');

/* Simple device detection

Use carefully, to be replaced by CSS link

For testing purposes */

if(navigator.connection && navigator.connection.type !== 3){ //not 2g
    document.write('<link rel="stylesheet" href="hi-res-backgrounds.css" media="only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (-o-device-pixel-ratio:3/2),only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:1.5dppx)">');
}

/* DEBUGGING
W3C pointer tester
http://www.w3.org/TR/pointerlock/
Just for debugging purposes, avoid in stage production. 
*/


document.addEventListener("click", function (e) {
  if (e._isSynthetic)
    return;
  // send a synthetic click
  var ee = document.createEvent("MouseEvents");
  ee._isSynthetic = true;
  x = myCursor.x;
  y = myCursor.y;
  ee.initMouseEvent("click", true, true, null, 1,
                    x + e.screenX - e.clientX,
                    y + e.screenY - e.clientY,
                    x,
                    y);
  var target = document.elementFromPoint(x, y)
  if (target)
    target.dispatchEvent(ee)
});

/* end  */


/* DEBUGGING
Peter Koch's browser detection
http://www.quirksmode.org/js/detect.html
*/

var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent)
      || this.searchVersion(navigator.appVersion)
      || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i=0;i<data.length;i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
      else if (dataProp)
        return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
    {   string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    },
    {   // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },
    {     // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],
  dataOS : [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    },
    {
         string: navigator.userAgent,
         subString: "iPhone",
         identity: "iPhone/iPod"
      },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }
  ]

};
BrowserDetect.init();

/*end*/

function addEventSimple(obj,evt,fn) {
  if (obj.addEventListener)
    obj.addEventListener(evt,fn,false);
  else if (obj.attachEvent)
    obj.attachEvent('on'+evt,fn);
};

function removeEventSimple(obj,evt,fn) {
  if (obj.removeEventListener)
    obj.removeEventListener(evt,fn,false);
  else if (obj.detachEvent)
    obj.detachEvent('on'+evt,fn);
};
  // ref: http://diveintohtml5.org/detect.html

  function supports_input_placeholder()
  {
    var i = document.createElement('input');
    return 'placeholder' in i;
  }

  if(!supports_input_placeholder()) {
    var fields = document.getElementsByTagName('INPUT');
    for(var i=0; i < fields.length; i++) {
      if(fields[i].hasAttribute('placeholder')) {
        fields[i].defaultValue = fields[i].getAttribute('placeholder');
        fields[i].onfocus = function() { if(this.value == this.defaultValue) this.value = ''; }
        fields[i].onblur = function() { if(this.value == '') this.value = this.defaultValue; }
      }
    }
  };