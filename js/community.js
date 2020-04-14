/*
* @Author: admin
* @Date:   2019-11-28 14:04:19
* @Last Modified by:   admin
* @Last Modified time: 2019-11-29 10:33:28
*/
$(function(){
	var a=$(window).width();
	var c=$(window).height();
	var b=$('.com-box').width();
	$('.com-box').css('zoom',a/b);
	$('.com-wrap').css('height',c-40);

	var num=1080/1920;
	
	if($('.com-box').height()<1080)
	{
		
		$('.com-box').css('zoom',a/b);
		// $('.com-box').css('height',1070);
	}
	else
	{
		$('.com-box').css('zoom',num);
	}

	// alert($('.com-box').css('height'));



	// if($('.com-box').height()>1080)
	// {
	// 	$('.com-box').css('zoom',a/);
	// }

	$(window).resize(function(){

	var a=$(window).width();
	var b=$('.com-box').width();
	var c=$(window).height();

	// $('.com-box').css('height',$('.com-box').height()+1);
	
	if($('.com-box').height()<1080)
	{
		if($('.com-box').width()<1920)
		{
			$('.com-box').css('zoom',num);
		}
		else
		{
			$('.com-box').css('zoom',a/b);
			alert($('.com-box').width())
		}

	}
	else
	{
		$('.com-box').css('zoom',num);

	}

	// alert($('.com-box').height());

	
	// alert($('.com-box').css('height'))
// $('.com-box').height()>1080||$('.com-box').height()==1080
  	
  	$('.com-wrap').css('height',c-40);

})
})