//Popover
function popover() {
  var browserMinWidth = parseInt($('.page-wrapper').css('min-width'), 10);

  if (browserMinWidth == 320) {
    $('.telephone-popover').webuiPopover({
      content:'Номер телефона является ключевым параметром. Он показывается только Вашим друзьям и тем кто ищет его, а соответственно - знает и так.',
      placement:'bottom',
      trigger:'hover'
    });
  }

  else {
    $('.telephone-popover').webuiPopover({
      content:'Номер телефона является ключевым параметром. Он показывается только Вашим друзьям и тем кто ищет его, а соответственно - знает и так.',
      placement:'right',
      trigger:'hover'
    });
  }
  
  $('.telephone-popover').click(function(){
    return false;
  })

}
popover(); 