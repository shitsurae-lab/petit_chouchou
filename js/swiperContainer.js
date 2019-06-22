
var mySwiper = new Swiper('.swiper-container', {
  // オプションパラメータ(一部のみ抜粋)
  loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
  speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。

  slidesPerView: 2, // 何枚のスライドを表示するか
  spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
  direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
  effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
});
