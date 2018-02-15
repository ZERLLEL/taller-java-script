$(document).ready(function() {

$('.btnNewTweet').on('click', function(){
    event.preventDefault()
  var textcontent = $('.textarea').val()
$('.post').append('<div class="col-12"><div class="row bgBlanco mt-2 boxremov"><a href="#" class="remov"><i class="fas fa-times"></i></a><div class="col-12 col-md-1"><div class="imgperfil pr-1"><img src="http://greatzerllel-diseñador.com/wp-content/gallery/impresos/edicion-fotografica-2.jpg" alt="yo" class="imgsize"></div></div><div class="col-12 col-md-11"><div class="tweetbox"><p>' + textcontent + '</p></div><div class="contBtntweet pr-5"><div class="pr-5 pt-2"><a href="#" class=" likeable"><i class="fas fa-thumbs-up"></i></a><span class="likezone"></span></div></div></div>')

textcontent = $('.textarea').val('')
})

$('.post').on('click', '.likeable', function(){
  event.preventDefault()
  var like = $('.likezone').text()
   if (like == '') {like = 0;}
   like = parseInt(like) + 1;
  $('.likezone').text(like)

})

$('.post').on('click', '.remov', function(){
  event.preventDefault()
  $(this).parent().parent().remove()
})





});
