(function($) {
	$('.ser span').click(function(){
		$(this).siblings('.down').fadeToggle();
	})
	$('.down li').click(function(){
		var _val = $(this).html();
		$(this).parent().siblings('span').find('em').html(_val);
		$(this).parent().fadeToggle();
	})
	$('#header .nav li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
	// 悬浮
	 function susStyle() {
		if($('.suspend').length){
			var windowpos = $(window).scrollTop(),
				_offtop = $('#content').offset().top + 50;
			if (windowpos >= _offtop) {
				$('.suspend').stop(true).delay(300).animate({top:  windowpos - _offtop + 100  + "px" },  { duration: 500, easing: "linear" });
			} else {
				$('.suspend').stop(true).delay(300).animate({top: 50 + "px" },  { duration: 500, easing: "linear" });		
			};
		}
	}
	susStyle();
	$(window).on('scroll', function() {
		susStyle();
	});
	$('.posbox').hover(function(){
		$(this).siblings('.hide_box').show();
	})
	$('.hide_box').mouseover(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
		 _hide();
		 $('.list_nav li').removeClass('on');
	})
	
	$('.list_nav li').click(function(){
		var _n = $(this).index();
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$(this).parent().siblings('.dropdown').show();
		$('.dropdown').find('.dropinbox').hide();
		$(this).parent().siblings('.dropdown').find('.dropinbox').eq(_n).show();
	})
	function _hide(){
		if($('.hide_box').css('display')=='none'){
			$('.hide_box .dropdown').css('display','none');
		}
	}
	 var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false
      });
      wow.init();
})(window.jQuery);