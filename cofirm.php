<?php include(dirname(__FILE__).'/header.php'); ?>

<div id="contents_confirm">
  <div class="section_confirm">
    <h2 class="sercive_title">お問合せ内容</h2>
    <table clss="table_comfirm">
        <tr>
          <td class="comfirm_content_label">お名前</td>
          <td class="comfirm_content_label"><?php echo $_POST["name"] ?></td>
        </tr>
        <tr>
          <td class="comfirm_content_label">希望席</td>
          <td class="comfirm_content_label"><?php echo $_POST["seat"] ?></td>
        </tr>
        <tr>
          <td class="comfirm_content_label">メールアドレス</td>
          <td class="comfirm_content_label"><?php echo $_POST["email"] ?></td>
        </tr>
        <tr>
          <td class="comfirm_content_label">電話番号</td>
          <td class="comfirm_content_label"><?php echo $_POST["tel"] ?></td>
        </tr>
    </table>
  </div>
<form class="comfirm_form" method="post" action="/send.php">
    <input type="hidden" name="name" value="<?php echo $_POST["name"] ?>">
    <input type="hidden" name="seat" value="<?php echo $_POST["seat"] ?>">
    <input type="hidden" name="email" value="<?php echo $_POST["email"] ?>">
    <input type="hidden" name="tel" value="<?php echo $_POST["tel"] ?>">
    <button class="button_back" type="submit back" formaction="./index.php#contact">戻る</button>
    <button class="button_send" type="submit" formaction="./send.php">送信</button>
</form>
</div>
</body>
<?php include(dirname(__FILE__).'/footer.php'); ?>
</html>