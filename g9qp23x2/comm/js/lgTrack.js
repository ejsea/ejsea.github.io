function lgPara(strArg){
    var _url = location.href + "&";
    var regex = new RegExp("(\\?|\\&)" + strArg + "=([^\\&\\?]*)\\&", "gi");
    if (! regex.test(_url))
    return "";
    var arr = regex.exec(_url);
    return RegExp.$2.replace("#","");
}
if(lgPara("ext")!=""){
    var ext = lgPara("ext");
    document.write('<scr'+'ipt language="javascript"src="http://track.201071.com/adTrack.php?ext='+ext+'"></'+'script>');
}