$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});


// 9/1,9/2,9/3をそれぞれ押したら内容が変わる部分
$(function() {
  $(".day").click(function() {
    let id = $(this).attr("id");
    $(".day").removeClass("active");
    $(this).addClass("active");
    $(".description_text").removeClass("active");
    $("#"+id+"_menu").addClass("active");
  });
});

$(document).ready(function() {
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});

$('form').submit(function() {
  let tel = $('input[type="tel"]').val(); // 【09月26日　課題四で追加】半角スペースを消しました。
    if(tel){
      const regex = /^0\d{9,10}$/
       if(!regex.test(tel)) {
         $(".tel_validation").css("display","block");
         validation_flg = true
    }else
    {
//エラーじゃないのにメッセージがあったら
$(".tel_validation").remove();
    }
    }
    if(validation_flg) {
      return false;
   }
})

// const form = document.getElementById(".form");
// const button = document.getElementById(".button_submit");

// form.addEventListener("input", update);
// form.addEventListener("iselect", update);

// function update() {
//   const isRequired = form.checkValidity();

//   if (isRequired) {
//     button.disabled = false;
//     button.style.opacity = 1;
//     return;
//   }
// }

// 名前、席の場所、メールアドレスの必須項目（送信できないようにする）
$(document).ready(function() {
  validation();
  $('form input,select').on('change',function(){
    validation();
  });

function validation(){
  let select = $("serect").val();
  let tel = $('input[name="tel"]').val();
  let tel_validation = true;
  if(tel){
    const regex = /^0\d{9,10}$/
       if(!regex.test(tel)) {
         $(".tel_validation").css("display","block");
         validation_flg = false;
  }
}

  if(
    $('input[name="name"]').val() !== ""&&
    $('input[name="email"]').val() !== ""&&
    select  !== ""&&
    tel_validation
  ){
    $('input[name="submit"]').prop("disabled",false);
    $(".button_submit").css("opacity","1");
  }else{
  }
}
});
