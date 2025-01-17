
 <!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="第5回　ダミーサイト　花火大会のLP制作">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <title>第5回　ダミーサイト</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
  <link rel="stylesheet" href="./style/style.css">
  
</head>
<body>
  <!-- ヘッダー -->
  <header>
    <div class="header_content">
      <div>
        <a href="./index.php" id="logo"><img src="./img/logo.png" alt="トップページに戻る"></a> <!--  href="/index.php"を追記  -->
      </div>
      <div class="header_menu">
        <nav>
          <ul class="navigation__list-item-ul">
          <?php $baseUrl = '/index.php'; // ベースURLを設定 ?>
          <ul class="navigation__list-item-ul">
            <li><a href="<?= $baseUrl ?>#schedule">スケジュール</a></li>
            <li><a href="<?= $baseUrl ?>#access">アクセス</a></li>
            <li><a href="<?= $baseUrl ?>#reservation">席予約</a></li>
          </ul>
        </nav>
    </div> 
<!-- ここからハンバーガーメニュー -->
    <button class="hamburger-menu hamburger" id="js-hamburger-menu">
      <span class="hamburger-menu__bar"></span>
      <span class="hamburger-menu__bar"></span>
      <span class="hamburger-menu__bar"></span>
    </button>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item"><a href="#schedule" class="navigation__link">スケジュール</a></li>
        <li class="navigation__list-item"><a href="#access" class="navigation__link">アクセス</a></li>
        <li class="navigation__list-item"><a href="#reservation" class="navigation__link">席予約</a></li>
      </ul>
    </nav> 
<!-- ここまでハンバーガーメニュー -->
  </div>
  </header>
  