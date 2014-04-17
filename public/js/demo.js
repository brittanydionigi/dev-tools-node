$(function(){
  $('#practice-sections > li').click(function(e) {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active').siblings().removeClass('active');
      };
  });
});
