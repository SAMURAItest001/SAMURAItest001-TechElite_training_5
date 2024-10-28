<?php include(dirname(__FILE__).'/header.php'); ?>

<main>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./img/slide_1.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="./img/slide_2.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="./img/slide_3.jpg" alt=""/></div>
    </div>

    <!-- ページネーション -->
    <div class="swiper-pagination"></div>

    <!-- ｢前へ｣｢次へ｣の矢印 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
  

  <!-- キャッチコピー -->
  <div>
    <div class="catchphrase">
      <h1>今年も始まる<span class="summer">夏祭り</span></h1>
    </div>



    <!-- スケジュール -->
    <div id="schedule">
      <div class="service_menu section">
        <div>
          <h2 class="sercive_title">スケジュール</h2>
        </div>
        <div class="schedule">
          <div class="day active" id="one_day">
            <p>9月1日</p>
          </div>
          <div class="day" id="two_day">
            <p>9月2日</p>
          </div>
          <div class="day" id="three_day">
            <p>9月3日</p>
          </div>
        </div>
      </div>
        <div class="description">
          <p class="description_text active" id="one_day_menu">9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容</p>
          <p class="description_text" id="two_day_menu">9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容</p>
          <p class="description_text" id="three_day_menu">9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容</p>
        </div>
    </div>


    <!-- アクセス -->
    <div id="access">
      <div>
        <h2 class="sercive_title">アクセス</h2>
      </div>
      <div class="map">
        <p>〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6607.067702094382!2d134.51810744418356!3d34.1070802925454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553725a43298fb3%3A0x1bc47188f8f9226a!2z44CSNzcxLTExNTQg5b6z5bO255yM5b6z5bO25biC5b-c56We55S65p2x6LKe5pa55Y2X5bed5re1!5e0!3m2!1sja!2sjp!4v1728881052995!5m2!1sja!2sjp" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>


    <!-- 席予約 -->
    <div id="reservation">
      <div class="reservation_menu section">
        <h2 class="sercive_title">席予約</h2>
      </div>
      <div class="form_hinagata">
        <form class="form" method="post" action="./cofirm.php">
          <div class="form_item">
            <label>お名前<span class="placeholder">※必須</span></label><br>
            <input type="text" id="name" name="name" placeholder="例）田中　太郎" value="<?= $name = filter_input(INPUT_POST,'name') ?>" required><br>
          </div>
          <div class="form_item">
            <label for=seat>席の場所<span class="placeholder">※必須</span></label><br>
              <select name="seat" id="seat" required>
                  <option >---</option>
                  <option <?= $seat=filter_input(INPUT_POST,'seat') == "SS席" ? "selected":""?> value="SS席">SS席
                  <option <?= $seat=filter_input(INPUT_POST,'seat') == "S席" ? "selected":""?> value="S席">S席
                  <option <?= $seat=filter_input(INPUT_POST,'seat') == "A席" ? "selected":""?> value="A席">A席
                  <option <?= $seat=filter_input(INPUT_POST,'seat')== "B席" ? "selected":""?> value="B席">B席
                  <option <?= $seat=filter_input(INPUT_POST,'seat')== "C席" ? "selected":""?> value="C席">C席
              </select><br>
          </div>

          <div class="form_item">
            <label>メールアドレス<span class="placeholder">※必須</span></label><br>
            <input type="email" id="email" name="email" placeholder="例）abcd123@example.com" value="<?= $email=filter_input(INPUT_POST,'email') ?>" required><br>
          </div>

          <div class="form_item">
            <label>電話番号<span class="any">※任意</span></label><br>
            <input type="tel" name="tel" id="tel" placeholder="例）08012345678" value="<?= $tel=filter_input(INPUT_POST,'tel') ?>"><br>
            <p class="tel_validation" style="display:none">電話番号を正しく入力してください</p>
          </div>
          <div class="form_item">
            <input type="submit" class="button_submit" name="submit" value="送信" style="opacity:0.5" disabled><br>
          </div>
        </form>
      </div>
    </div> 
  </div>
</main>
<?php include(dirname(__FILE__).'/footer.php'); ?>