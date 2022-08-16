$(document).ready(function () {
    $('#nav-icon3').click(function () {
      $(this).toggleClass('open');
    });
  });

  $(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".menu").css({"background-color":"#010101"});   
        }
        else{
            $(".menu").css({"background-color":"transparent"});
        }

    })
})

 