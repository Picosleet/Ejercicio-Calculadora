document.getElementById("sumDataBtn").addEventListener("click",function(e){
    e.preventDefault()
  

    var numberA = document.getElementById("numberA").value
    var numberB = document.getElementById("numberB").value
    var result = document.getElementById("result")

    result.innerHTML=suma()
    
    
})
document.getElementById("restDataBtn").addEventListener("click",function(e){
  e.preventDefault()
  var numberA = document.getElementById("numberA").value
    var numberB = document.getElementById("numberB").value
    var result = document.getElementById("result")

  result.innerHTML=resta()
})
document.getElementById("divDataBtn").addEventListener("click",function(e){
  e.preventDefault()
  var numberA = document.getElementById("numberA").value
    var numberB = document.getElementById("numberB").value
    var result = document.getElementById("result")

  result.innerHTML=division()
})

document.getElementById("multDataBtn").addEventListener("click",function(e){
  e.preventDefault()
  var numberA = document.getElementById("numberA").value
    var numberB = document.getElementById("numberB").value
    var result = document.getElementById("result")

  result.innerHTML=multiplicacion()
})


function suma() {  
    var x,y,result,text;  
    x = document.getElementById("numberA").value;  
    y = document.getElementById("numberB").value;  
      
    
    if (isNaN(x) || isNaN(y) ) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      result = (parseFloat(x)+parseFloat(y)) 

      return result
          } }
  function resta() {  
        var x,y,result,text;  
        x = document.getElementById("numberA").value;  
        y = document.getElementById("numberB").value;  
          
        
        if (isNaN(x) || isNaN(y) ) {  
          text = "Es necesarios introducir dos números válidos";  
        } else {  
          //si no ponemos parseFloat concatenaría x con y  
          result = (parseFloat(x)-parseFloat(y)) 
    
          return result
        }}

      function division() {  
        var x,y,result,text;  
        x = document.getElementById("numberA").value;  
        y = document.getElementById("numberB").value;  
          
        
        if (isNaN(x) || isNaN(y) ) {  
          text = "Es necesarios introducir dos números válidos";  
        } else {  
          //si no ponemos parseFloat concatenaría x con y  
          result = (parseFloat(x)/parseFloat(y)) 
    
          return result
              } }
       function multiplicacion() {  
        var x,y,result,text;  
         x = document.getElementById("numberA").value;  
        y = document.getElementById("numberB").value;  
                  
                
        if (isNaN(x) || isNaN(y) ) {  
        text = "Es necesarios introducir dos números válidos";  
        } else {  
          //si no ponemos parseFloat concatenaría x con y  
        result = (parseFloat(x)*parseFloat(y)) 
            
                  return result
                      } }