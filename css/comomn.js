// JavaScript Document
$(function () {
    
    /*** 上に戻るボタン ***/
    let topBtn = $('#scroll-top');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    topBtn.on("click", function (event) {
        event.preventDefault(); // ページ内リンクの挙動をキャンセル
        $('body,html').animate({ // スムーズにスクロールする設定
            scrollTop: 0
        }, 500);
    });
		/*** ナビゲーションメニュー ***/
    //閉じボタン
    $('.close-button').on("click", function () {
				$('.header nav').slideUp();
		});
		$('.open-button').on("click", function () {
				$('.header nav').slideDown();
		});
	
	

     $('.header-img').slick({
        autoplay: true,
        autoplaySpeed: 2500,
		fade: true,
        dots: true,
        arrows: false,
    });
	
	$('.section-menu__example-picture2').slick({
        autoplay: true,
        autoplaySpeed: 2000,
		fade: true,
        dots: true,
        arrows: false,
    });
	
 $(window).scroll(function (){
    $('.section-first__image,.section-first__content,.section-second__image,.section-second__content,.section-third__image,.section-third__content,.section-menu h0,.section-menu__picture,.section-menu__picture-pc,.section-menu__description,.section-menu__example,.section-fruits__picture,.section-fruits__description,.section-fruits__box,.section-fruits__example-picture,.section-fruits__example-box').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

	
	
	
});