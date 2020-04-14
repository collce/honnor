/*
* @Author: admin
* @Date:   2019-11-29 14:32:29
* @Last Modified by:   admin
* @Last Modified time: 2019-11-29 20:41:11
*/$(function(){

	
	
	var a=$(window).width()/1920;
	$('.honor-wrp').css('zoom',a);
	
	$('.index-btn').children().click(function(){
		var b=$(this).index();
		$('.honor-tap').css('display','block').addClass('honor-scale');
		// $('.honor-tap ul li').eq(b).css('display','block').siblings().css('display','none');
		$('.li-box').css('margin-top',-b*1080+'px');
		$('.tap-nav a').eq(b+1).addClass('active').siblings().removeClass('active');
	})

	$('.tap-nav a').click(function(event) {
		var nav=$(this).index();
		if(nav!=4&&nav!=0)
		{
			$('.li-box').stop().animate({'margin-top':(nav-1)*-1080+'px'}, 300);
			$('.tap-nav a').eq(nav).addClass('active').siblings().removeClass('active');
		}
		else if(nav==4)
		{

			alert('敬请期待')
			
		}
		else
		{
			$('.honor-tap').addClass('honor-scale2');
			setTimeout(function(){
				$('.honor-tap').css('display','none')
				$('.honor-tap').removeClass('honor-scale2');
			},300);
			
			
		}
		
		
	
	});





})