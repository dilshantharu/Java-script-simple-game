let start = new Date().getTime();



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}




function shapeApear(){
  
  let top = Math.random() * 550 ;
  let left = Math.random() * 550 ;
  let width = Math.random() * 150 ;
  
  if(Math.random()>0.5){
  document.getElementById('shapes').style.borderRadius = "50%"
  }
  else{
    document.getElementById('shapes').style.borderRadius = "0%"
  }
  
  document.getElementById('shapes').style.height = width + "px";
  document.getElementById('shapes').style.width = width + "px";
  
  
  
  document.getElementById('shapes').style.top = top + "px";
  document.getElementById('shapes').style.left = top + "px";
 document.getElementById('shapes').style.display = "block" ;
 
 document.getElementById('shapes').style.backgroundColor = getRandomColor();
   start = new Date().getTime();
  
}



function shapeApeardelay(){

setTimeout(shapeApear , Math.random()* 250 );

}



shapeApeardelay();
      
      document.getElementById('shapes').onclick= function(){
        
        document.getElementById('shapes').style.display="none";
        

        
     let end = new Date().getTime(); 
     let time = (end-start) / 1000 ;
     document.getElementById('new').innerHTML ="You Get : " + time + "s";
     
     shapeApeardelay();
     
      
      }

      
    
    
      
