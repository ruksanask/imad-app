//counter
var button=document.getElementById('counter');
var counter=0;
button.onclick=function()

{
  var request=XMLHttprequest();
  
  
  
  
  
  request.onreadystatechange=function(){
      if(request.readystate===XMLHttprequest.Done){
          if(request.status===200){
            var counter=  request.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
                   }
      }
  };
  
  request.open('GET', "http://sanaskruksana69.imad.hasura-app.io/counter", true);
  request.send(null);
  
  
};
