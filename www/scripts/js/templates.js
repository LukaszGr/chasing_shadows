function load_sign_up_page(callback){
  $("#content").html($("#form_page").html());
  callback();
}

function load_welcome_page(){
  $("#content").html($("#welcome_page").html());

  $(".slick-carousel").slick({
    dots: true,
    autoplay: true,
    mobileFirst: true,
    swipe: true,
    touchMove: true,
    arrows: false,
    appendDots: $('.dots')
  });
}

function load_game_page(){
  clearContentPage();
  $("#character").html($("#gameplay_page").html());
  $("#navigation").html($("#nav_page").html());
  addListenerForNav();
}

function match_height_maps(){
  $("#google_map").css("height", $(document).height());
}

function load_sign_in_page(callback) {
  $("#content").html($("#sign_in_form_page").html());
  callback();
}

function load_attack_page(monsterId){

  $("#content").html($("#attack_page").html());
  $("#navigation").html($("#nav_page").html());
  attack_page_height();
  addListenerForNav();
  initAttackPage(monsterId);
}

function clearContentPage(){
  $("#content").empty();
}
