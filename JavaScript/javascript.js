function whatsapp(){
  window.alert('Telefone para ligação ou whatsapp: +55 (16) 98848-1389')
}

$(".btn-menu").click(function(){
  $(".menu").fadeIn();
  $(".btn-menu").fadeOut();
});
$(".btn-close").click(function(){
  $(".menu").fadeOut();
  $(".btn-menu").fadeIn();
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});