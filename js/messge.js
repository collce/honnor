/*
* @Author: admin
* @Date:   2019-12-04 10:57:33
* @Last Modified by:   admin
* @Last Modified time: 2019-12-04 15:32:12
*/
$(function(){
	$('.hero-box ul li').mouseover(function(event) {
		$(this).css('width','224px').siblings().css('width','69px');
		$(this).find('.hero-first').stop().fadeOut(300).parent().parent().siblings().find('.hero-first').stop().fadeIn(300);;
	});

/*-------------------*/
$('.hot-cont-title ul li').click(function(event) {
	var hot_n=$(this).index();
	$(this).addClass('hot-active').siblings().removeClass('hot-active');
	$('.hot-cont-text ul').eq(hot_n).css('display','block').siblings().css('display','none');
});
})
