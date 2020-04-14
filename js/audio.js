/*
* @Author: admin
* @Date:   2019-12-05 11:11:37
* @Last Modified by:   admin
* @Last Modified time: 2019-12-06 11:44:49
*/
$(function(){

	//歌曲链接容器
	var music_next=['music/third.mp3',
				   'music/second.mp3',
				   'music/first.mp3'];
	//歌曲名称容器
	var music_name=['第三首','第二首','第一首'];
	var audio=document.getElementById('audio');
	audio.loop = false;
	audio.preload = true;

	audio.oncanplay = function () {
		var long=parseInt(audio.duration);
        plan(long);
    }

    function plan(ss){

    	$('.music-plan').css('animation-duration',ss+'s').addClass('music-plan-start');

    }
	//歌曲名字
	var music_txt;
	//歌曲链接
	var music_src;

	//连续自动播放
	function goOn() {

			// console.log(music_src);
			//存储当前播放曲目，用于上一曲
			music_next.unshift(music_src);
			music_name.unshift(music_txt);
			$('.music-pre').removeClass('btn-false');
			//自动播放下一曲
			music_src=music_next.pop();
			music_txt=music_name.pop();
			$('.music-control').attr('title', music_txt);

			music_style();

			timer=setTimeout(shit,300)



			// if(music_next.length==0)
			// {
			// 	$('.music-next').addClass('btn-false');
			// }	
    }

    //点击上、下一曲时的样式
    function music_style(){
    	$('.music-control').attr('title', music_txt);
		audio.src=music_src;

		audio.play();

		$('.Player-btn').removeClass('playing musicRoll');
		$('.Player-animate').removeClass('player-start animateUp');
		$('.music-play').children('img').attr('src', 'image/play.png');

		$('.music-plan').css('animation-duration',0+'s').removeClass('music-plan-start music-plan-animate');
    }


    //用于判断是否是第一次播放
    var switch_n=0
    //播放
	$('.music-play').click(function(event) 
	{
		if(audio.paused)
		{

			//判断是否是第一次播放
			if(switch_n==0)
			{
				music_src=music_next.pop();
				music_txt=music_name.pop();

				$('.music-control').attr('title', music_txt);
				audio.src=music_src;

				//音频可以开始播放时，返回音频总时长
				

				//移除上一曲、下一曲按钮锁定状态
				$('.music-control span').removeClass('btn-false');

				$('.music-plan').addClass('music-plan-animate music-plan-start');
				switch_n=1
			}
			
			audio.play();

			$('.music-plan').addClass('music-plan-start');

			$('.music-play').children('img').attr('src', 'image/pause.png');
			$('.Player-btn').addClass('playing musicRoll');
			$('.Player-animate').addClass('player-start animateUp');
			$('.Player-animate p').css('display','none');

			
		}
		else
		{
			audio.pause();
			$('.music-plan').removeClass('music-plan-start');
			$('.music-play').children('img').attr('src', 'image/play.png');
			$('.Player-btn').removeClass('playing');
			$('.Player-animate').removeClass('player-start');
		}
		
		//监听音乐是否播放完成
    	audio.addEventListener('ended',goOn, false);
		
	});
	
	

	//用于控制播放按钮短暂切换
	var timer;
	function shit()
	{
		$('.music-play').children('img').attr('src', 'image/pause.png');
		$('.Player-btn').addClass('playing musicRoll');
		$('.Player-animate').addClass('player-start animateUp');

		$('.music-plan').addClass('music-plan-start music-plan-animate');
	}
	//下一曲
	$('.music-next').click(function(){

					if(switch_n==1)
					{
						clearInterval(timer);

						// 移除上一曲按钮锁定状态
						// $('.music-pre').removeClass('btn-false');
						// //把当前播放曲目存储起来，用于上一曲
						music_next.unshift(music_src);
						music_name.unshift(music_txt);

						audio.pause();
						music_src=music_next.pop();
						music_txt=music_name.pop();

						music_style();
						//控制播放按钮短暂性切换
						timer=setTimeout(shit,500);
					}

					//当前如果是最后一首，添加按钮锁定状态
					// if(music_next.length==0)
					// {
					// 	$(this).addClass('btn-false');
					// }
	})

	//上一曲
	$('.music-pre').click(function(){
			
					if(switch_n==1)
					{
						clearInterval(timer);

						//移除下一曲按钮锁定状态
						$('.music-next').removeClass('btn-false');
						//把当前播放曲目存储起来，用于下一曲
						music_next.push(music_src);
						music_name.push(music_txt);

						audio.pause();
						music_src=music_next.shift();
						music_txt=music_name.shift();

						//调用样式控制
						music_style()

						
						//控制播放按钮短暂性切换
						timer=setTimeout(shit,300)

					}
					//当前如果是最后一首，添加按钮锁定状态
					// if(music_pre.length==0)
					// {
					// 	$(this).addClass('btn-false');
					// }		
	})

	$('#music').hover(function() {
		$('#music-box').stop().animate({'top':'-38px'}, 300);
	}, function() {
		$('#music-box').stop().animate({'top':'0px'}, 300);
	});

	
})