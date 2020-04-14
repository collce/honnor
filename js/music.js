/*
* @Author: admin
* @Date:   2019-12-02 16:32:49
* @Last Modified by:   admin
* @Last Modified time: 2019-12-04 09:02:33
*/
$(function(){
	// function contentTop(top){  
 //       $('body,html').animate({  
 //               scrollTop: top  
 //           }, 500  
 //       );  
 //   } 
 //   contentTop($(".newest").offset().top);  
 //   $(document).mousewheel(function(e,d){
 //   
	// })
	$('.hero-pic ul li').click(function(){
		if($(this).index()!=8)
		{

		$(this).animate({'width':'400px'}, 350).siblings().animate({'width':'140px'},350);
		$(this).children('.hero-index').css({'display':'none','width':'400px'}).parent().siblings().children('.hero-index').css('display','block').animate({'width':'140px'}, 350);
		$(this).children('.hero-index').children('img').css('top','-20%').parent().parent().siblings().children('.hero-index').children('img').animate({'top':'0'},350);;
		}
		else
		{
			alert('敬请期待');
		}
	})
/*--------------------------------------------------------------------*/
	var n=0
	$('.hero-box1 .hero-btn1').click(function(){
		
		if(n!=0)
		{
			n=n+2;
			$('.hero-pic ul').animate({'margin-left':140*n}, 300)
			
		}
		
	})
	$('.hero-box1 .hero-btn2').click(function(){

		if(n>-4)
		{
			n=n-2;
			$('.hero-pic ul').animate({'margin-left':140*n}, 300)
		}
		
	})
/*---------------------------------------------*/
	var game_index=3
	$('.game-dc-li ul li').click(function(){
		var game_n=$(this).index();
		$('.game-music ul li').eq(game_n).addClass('music-active').css('z-index',game_index).siblings().css('z-index',0).removeClass('music-active');

	})
/*-----------------------------------------*/
var game_n=0;
	$('.game-box .hero-btn1').click(function(){
		
		if(game_n!=0)
		{
			game_n=game_n+1;
			$('.game-dc-li ul').animate({'margin-left':164*game_n}, 300)
			
		}
		
	})
	$('.game-box .hero-btn2').click(function(){

		if(game_n>-4)
		{
			game_n=game_n-1;
			$('.game-dc-li ul').animate({'margin-left':164*game_n}, 300)
		}
		
	})

/*----------------------------*/
     //绑定事件
 	var sor=0;
 	var s= $(".float-nav").offset().top;
 	var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
 	if(scrollt > s-100)
 	{
 		$(".float-nav").addClass('float-nav2');
 	}
 	
 	
	if(scrollt>$(".hero").offset().top-500)
 	{
 		if(scrollt>$(".game").offset().top-500)
		{
			$('#nav-btn').removeClass('nav-active nav-active2')
			$('.right-list1').addClass('nav-active2');
		}
		else
		{
			$('#nav-btn').removeClass('nav-active nav-active2')
	 		$('.left-list2').addClass('nav-active2');
		}
 		
 		
 	}

 	$(document).mousewheel(function(e,d){
   		if(d==-1)
   		{
   			var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
   			if(scrollt > s-100)

		   {
				
				$(".float-nav").addClass('float-nav2');
				if(scrollt>$(".hero").offset().top-500)
				{
					$('.left-list2').addClass('nav-active2');
					$('.left-list1').removeClass('nav-active');
					if(scrollt>$(".game").offset().top-500)
					{
						$('.left-list2').removeClass('nav-active2');
						$('.right-list1').addClass('nav-active2');
					}

				}
		   }
   		}
   		else if(d==1)
   		{
   			var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
   			if(scrollt<$(".game").offset().top-500)
					{
						
						$('.left-list2').addClass('nav-active2');
						$('.right-list1').removeClass('nav-active2');
						if(scrollt<$(".hero").offset().top-500)
						{
							$('.left-list2').removeClass('nav-active2');
							$('.left-list1').addClass('nav-active');
							$(".float-nav").removeClass('float-nav2');
						}
					}
   		}
	})

	$('.left-list1').click(function(){

		$(".float-nav").addClass('float-nav2');
		$('html,body').animate({scrollTop: s-20}, 300);
		$('.left-list2').removeClass('nav-active2');
		$('.right-list1').removeClass('nav-active2');
		$('.left-list1').addClass('nav-active');
	})
	$('.left-list2').click(function(){
		$(".float-nav").addClass('float-nav2');
		$('html,body').animate({scrollTop: $(".hero").offset().top}, 300);
		$('.left-list2').addClass('nav-active2');
		$('.right-list1').removeClass('nav-active2');
		$('.left-list1').removeClass('nav-active');
	})
	$('.right-list1').click(function(){
		$(".float-nav").addClass('float-nav2');
		$('html,body').animate({scrollTop: $(".game").offset().top}, 300);
		$('.left-list2').removeClass('nav-active2');
		$('.right-list1').addClass('nav-active2');
		$('.left-list1').removeClass('nav-active');
	})
//    $(window).bind('scroll',function(){

//     //算出鼠标移动到顶部的高度。

//   


//    else{

//               $(".float-nav").removeClass('float-nav2');

//    }

// })
})