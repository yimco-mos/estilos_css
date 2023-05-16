$('#active1').show();
$('#active2,#active3,#active4,#active5' ).hide()

/* primer contenido  */

var btn = document.getElementById('btn-ini')

btn.addEventListener('click',function(){

 $('#active1').slideDown()
 $('#active2,#active3,#active4,#active5' ).hide()
 
$('a[btn-abme,btn-know,btn-work,btn-know]' ).addClass('active')




}

)




/* segundo contenido */

var btn2 = document.getElementById('btn-abme')
btn2.addEventListener('click',function(){ 
 $('#active2').slideDown()
 $('#active1,#active3,#active4,#active5' ).hide()

}
)





/* tercer cotenido */


var btn3 = document.getElementById('btn-know')
btn3.addEventListener('click',function(){
 $('#active3').slideDown()
 $('#active2,#active1,#active4,#active5' ).hide()
 
  }
)

/* cuarto contenido */
var btn4 = document.getElementById('btn-work')
btn4.addEventListener('click',function(){
 $('#active4').slideDown()
 $('#active2,#active3,#active1,#active5' ).hide()

  }
)

/* contenido contacto */
var btn5 = document.getElementById('btn-con')
btn5.addEventListener('click',function(){
 $('#active5').slideDown()
 $('#active2,#active3,#active4,#active1').hide()
 
})
  




