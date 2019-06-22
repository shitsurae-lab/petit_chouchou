$(function() {
  //slideShowクラスをもつ要素ごとに処理を実行
  $('.slideshow').each(function() {

    var $slides = $(this).find('picture');
    var slideCount = $slides.length;
    var currentIndex = 0;

    //1番目のスライドをフェードインで表示
    $slides.eq(currentIndex).fadeIn();

    //7500ミリ秒ごとにshowNextSlide関数を実行
    setInterval(showNextSlide, 7500);

    //次のスライドを表示する関数
    function showNextSlide() {
      //次に表示するスライドのインデックス
      //(もし最後のスライドなら最初に戻る)
      var nextIndex = (currentIndex + 1) % slideCount;

      //現在のスライドをフェードアウト
      $slides.eq(currentIndex).fadeOut();

      //次のスライドをフェードイン
      $slides.eq(nextIndex).fadeIn();

      //現在のスライドのインデックスを更新
      currentIndex = nextIndex;
    }
  })
})
