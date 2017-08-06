///counter
var button=document.getElementById('counter');

button.onclick=function()
{
    // create a request object
    
    var request= new XMLHttpRequest();
  //make a request to the counter end points
  
  //capture the store point
  request.onreadystatechange = function ()
  {
      if(request.readystate === XMLHttpRequest.DONE)
      {
    // take action
    
    if(request.status===200){
        var counter=request.responseText;
         var span=document.getElementById('count');
         span.innerHTML=counter.toString();
    }
      }
      //not done yet
}; 
 // make a request
 request.open('GET','http://http://sanaskruksana69.imad.hasura-app.io/counter',true);
 request.send(null);
};