//* JQuery methods used in the project */

/**

A: All the content will be loaded via ajax /jsonp

b: Use of JQuery as a library

c: Try look up to  other libraries 

**/

//Simple test to validate contact form 

//Simple call to lad and detect registerd users

//Simple request to get external news feed

//Triple request to load multimedia data on select/ request


//1. TODO: declare JQuery



//2. Receive and update data

/* Get user from contact form : contact.html*/


function getUserDetails(){
   $.getJSON( "edummie.json",{userid : $("#userid").val()}, displayUserDetails);
 }

 function displayUserDetails(data) {
  if ( data.error) 
  {
      $("#name").val("")  
      $("#emaile").val("")
      alert( data.error);
  }
  else 
  {      
   $("#name").val( data.first_name);
   $("#emaile").val( data.salary);
  }
}

/*Show activity stream from user : activity-stream.html*/

