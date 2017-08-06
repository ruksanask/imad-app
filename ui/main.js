//counter
var button=document.getElementById('counter');
button.onlick=function()
{
  //make a request to the counter end points
  
  //capture the store point
  
  //render the counter variable span
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
  
  
};