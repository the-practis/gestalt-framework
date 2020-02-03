var lastScroll = 0, hundert;
$(window).scroll(function(){
// 	//NAVIGATION FADEIN/OUT
	var st = $(document).scrollTop();
	if (st > 48 && st > lastScroll){
		$('#topBarContainerHide').addClass('hidden');
		hundert = st;
	}
	else if(st < (hundert - 33)){
		$('#topBarContainerHide').removeClass('hidden');
	}
  lastScroll = st;
  });
