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

// ページ内のスムーススクロール
jQuery(function () {
  jQuery('a[href*="#"]').click(function (e) {
    const target = jQuery(this.hash === "" ? "html" : this.hash);
    if (target.length) {
      e.preventDefault();
      const headerHeight = jQuery("header").outerHeight();
      const position = target.offset().top - headerHeight - 20;
      jQuery("html, body").animate({ scrollTop: position }, 500, "swing");

      if (!target.is("html")) {
        // URLにハッシュを含める
        history.pushState(null, '', this.hash);
      }
    }
  });
});

// 別ページ遷移後のスムーススクロール
const urlHash = location.hash;
if (urlHash) {
  const target = jQuery(urlHash);
  if (target.length) {
    // ページトップから開始（ブラウザ差異を考慮して併用）
    history.replaceState(null, '', window.location.pathname);
    jQuery("html,body").stop().scrollTop(0);

    jQuery(window).on("load", function () {
      const headerHeight = jQuery("header").outerHeight();
      const position = target.offset().top - headerHeight - 20;
      jQuery("html, body").animate({ scrollTop: position }, 500, "swing");

      // ハッシュを再設定
      history.replaceState(null, '', window.location.pathname + urlHash);
    });
  }
}


// $('form').submit(function() {
//   let tel = $('input[type="tel"]').val(); // 【09月26日　課題四で追加】半角スペースを消しました。
//     if(tel){
//       const regex = /^0\d{9,10}$/
//        if(!regex.test(tel)) {
//          $(".tel_validation").css("display","block");
//          validation_flg = true
//     }else
//     {
// //エラーじゃないのにメッセージがあったら
// $(".tel_validation").remove();
//     }
//     }
//     if(validation_flg) {
//       // return false;
//    }
// })

// 名前、席の場所、メールアドレスの必須項目（送信できないようにする）
$(document).ready(function() {
  validation();
  $('form input, form select').on('input change',function(){
    validation();
  });

function validation(){
  let select = $("select").val();
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
    $('select[name="seat"]').val() !== ""&&
    tel_validation
  ){
    $('input[name="submit"]').prop("disabled",false);
    $(".button_submit").css("opacity","1");
  }
}
});