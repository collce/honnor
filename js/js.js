/*
* @Author: admin
* @Date:   2019-11-25 11:23:59
* @Last Modified by:   admin
* @Last Modified time: 2019-11-27 14:05:16
*/
/*顶部列表*/
$(function(){
	$('.top-ri-rank').hover(function() {
		$('.top-rank-form').fadeIn(200);
	}, function() {
		$('.top-rank-form').fadeOut(1);
	});
	$('#top-rank  li').mouseover(function(event) {
		$(this).addClass('hover').siblings().removeClass('hover');
	});

/*---------------------------------------------------*/
/*首页定时轮播*/
	var s=$('.banner li').eq(0).width();
	$('.banner-button li').mouseover(function(event) {
		clearInterval(timer);
		timer=setInterval(go,2000);
		var n=$(this).index();
		num=n;
		$(this).addClass('banner-active').siblings().removeClass('banner-active');
		$('.banner').stop().animate({'margin-left': -n*s},200);
	});

	var num=0;
	var timer=setInterval(go,3000);

	function go(){
		num++;
		if(num==$('.banner li').length){num=0;}
		$('.banner-button li').eq(num).addClass('banner-active').siblings().removeClass('banner-active');
		$('.banner').stop().animate({'margin-left': -num*s},200);
	}

/*------------------------------------------------------*/
/*新闻选项卡*/
$('.info-list').mouseover(function(event) {

		var info_n=$(this).index();
		$(this).addClass('info-active').siblings().removeClass('info-active');
		$('.info-text').stop().animate({'margin-left': -info_n*342},200);
	});
/*---------------------------------------------------*/
/*内容中心*/
$('.content-focus-tip').eq(0).find('li').mouseover(function(event) {

		var tip_n=$(this).index();
		$(this).addClass('tip-active').siblings().removeClass('tip-active');
		$('.content-focus-list').eq(0).find('li').eq(tip_n).stop().fadeIn(300).siblings().css('display','none');
		
	});
$('.content-focus-tip').eq(1).find('li').mouseover(function(event) {

		var tip_n=$(this).index();
		$(this).addClass('tip-active').siblings().removeClass('tip-active');
		$('.content-focus-list').eq(1).find('li').eq(tip_n).stop().fadeIn(300).siblings().css('display','none');
		
	});

$('.content-focus-tip').eq(2).find('li').mouseover(function(event) {

		var tip_n=$(this).index();
		$(this).addClass('tip-active').siblings().removeClass('tip-active');
		$('.content-focus-list').eq(2).find('li').eq(tip_n).stop().fadeIn(300).siblings().css('display','none');
		
	});
/*------------------------------------------------------------------------------*/
/*内容中心*/
$('.content-tap-button>ul li').mouseover(function(event) {

		var tap_n=$(this).index();
		$(this).addClass('button-active').siblings().removeClass('button-active');
		if(tap_n==0)
		{
			$('.content-list-box').eq(0).fadeIn(300).siblings().css('display','none');
		}
		else if(tap_n==2)
		{
			$('.content-list-box').eq(1).fadeIn(300).siblings().css('display','none');
		}
		else
		{
			$('.content-list-box').eq(2).fadeIn(300).siblings().css('display','none');
		}
		
		
	});
/*------------------------------------------*/
/*英雄与皮肤*/
$('.hero-button ul li').mouseover(function(event) {

		var hero_n=$(this).index();
		$(this).addClass('button-active').siblings().removeClass('button-active');
		if(hero_n==0)
		{
			$('.hero-content-wrap').stop().animate({'margin-left': 0*295},200);
		}
		else if(hero_n==2)
		{
			$('.hero-content-wrap').stop().animate({'margin-left': -1*295},200);
		}
		else
		{
			$('.hero-content-wrap').stop().animate({'margin-left': -2*295},200);
		}	
	});
/*-----------------------------------------------*/
/*比赛中心*/
$('.match-button ul li').mouseover(function(event) {

		var match_n=$(this).index();
		$(this).addClass('button-active').siblings().removeClass('button-active');
		$('.match-list').eq(match_n/2).fadeIn(300).siblings().css('display','none');
	});
/*--------------------------------------------------*/
$('.strategy-left ul li').mouseover(function(event) {
	var str_n=$(this).index();
	$(this).addClass('str-active').siblings().removeClass('str-active');
	$('.strategy-right ul li').eq(str_n).css('display','block').siblings().css('display','none')
});
})	
