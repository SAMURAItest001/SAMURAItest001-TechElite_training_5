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
  $('.header_menu a[href^="/#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    href = href.replace("/#", "#");                 // スラッシュを消す！
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust; 
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});
  
// 名前、席の場所、メールアドレスの必須項目（送信できないようにする）
$(document).ready(function() {
  // 初期状態でのバリデーション実行
  validation();

  // 入力または変更イベントが発生した際にバリデーションを再実行
  $('form input, form select').on('input change', function() {
    validation();
  });

  function validation() {
    let name = $('input[name="name"]').val();
    let email = $('input[name="email"]').val();
    let seat = $('select[name="seat"]').val();
    let tel = $('input[name="tel"]').val();
    let tel_validation = true; // 電話番号のバリデーション用フラグ

    // 電話番号のバリデーション
    if (tel) {
      const tel_regexp = /^0\d{9,10}$/; // 日本の電話番号形式 (0から始まり、10~11桁)
      if (!tel_regexp.test(tel)) {
        $(".tel_validation").text("電話番号を正しく入力してください").css("display", "block");
        tel_validation = false;
      } else {
        $(".tel_validation").css("display", "none"); // 正しい場合は非表示
      }
    } else {
      $(".tel_validation").css("display", "none"); // 未入力の場合も非表示
    }

    // メールアドレスのバリデーション
    const email_regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 一般的なメール形式
    let email_validation = email_regexp.test(email);

    // 全体のバリデーション判定
    if (
      name !== "" && // 名前が入力されているか
      email !== "" && // メールアドレスが入力されているか
      email_validation && // メールアドレスが正しい形式か
      seat !== "" && // 席が選択されているか
      tel_validation // 電話番号が正しい形式か（または未入力か）
    ) {
      // 全ての条件を満たす場合、送信ボタンを有効化
      $('input[name="submit"]').prop("disabled", false);
      $(".button_submit").css("opacity", "1");
    } else {
      // いずれかの条件を満たさない場合、送信ボタンを無効化
      $('input[name="submit"]').prop("disabled", true);
      $(".button_submit").css("opacity", "0.5");
    }
  }
});
