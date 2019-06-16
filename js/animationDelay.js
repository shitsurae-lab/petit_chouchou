$(window).scroll(function() {
  //.animation直下の.anm_mod対象とします。
  $(".animation .anm_mod").each(function() {
    //スクロール中、書くUIパーツ .anm_modがグラウザに確認できたら、active Classプラス
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("active");
    }
    //スクロール、トップ中画面付近まで戻ったらactiveクラスを解除 = 何度でもスクロールアニメが表現できる
    if (scroll < 100) {
      $(this).removeClass("active");
    }
  });
});
