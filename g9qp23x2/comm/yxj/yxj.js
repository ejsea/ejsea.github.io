var $w={
		ts      : 0,
		adUrl	: "http://",
		adw 	: 270,
		adh 	: 200,
		Ie :(navigator.appName == "Microsoft Internet Explorer"),
		u : function(){
			var i,imgs=new Array();;
			imgs[0]="./comm/yxj/1.jpg";
			imgs[1]="./comm/yxj/2.jpg";
			imgs[2]="./comm/yxj/3.jpg";
			i=Math.floor(imgs.length*Math.random());
			this.adUrl = "http://";
			this.imgurl = imgs[i];
		},
		g : function(){
			var d = document.body;e=document.documentElement;
			if(document.compatMode=="BackCompat"){
				this.w=d.clientWidth;
				this.h=d.clientHeight;
				this.l=d.scrollLeft;
				this.t=d.scrollTop;		
			}else {
				this.w=e.clientWidth;
				this.h=e.clientHeight;
				this.l=e.scrollLeft==0?d.scrollLeft:e.scrollLeft;
				this.t=e.scrollTop==0?d.scrollTop:e.scrollTop;			
			};
		},
		c : function (){
			var yW_fileext=this.imgurl.substr(this.imgurl.lastIndexOf(".")).toLowerCase();
			var doc=document;	
			this.popup = doc.createElement("div");
			s = this.popup.style;
			s.overflow = "hidden";
			s.position = "absolute";
			s.zIndex = 2147483647;
			s.width = this.adw+"px";
			s.height = this.adh+"px";
			s.border= 0;
			s.textAlign='left';
			if(yW_fileext!='.swf'){
				this.stra = "<a  target='_blank' href=" + this.adUrl + "><img src='" + this.imgurl + "' border='0' width='" + (this.adw) + "' height='" + (this.adh) + "'></a>";
				yW_C_zy_str=this.stra;
			}else {
				this.stra = "<a  target='_blank' href=" + this.adUrl + ">";
				dL_flash = this.F("pf_123",this.imgurl, this.adw, this.adh);
				yW_C_zy_str=this.stra+"<div style='cursor:pointer;z-index:100000;position:absolute;height:"+this.adh+"px;width:"+this.adw+"px;background-color:#fff;opacity:0.01;filter:alpha(opacity:1);'></div></a><div style=' z-index:9999;cursor:pointer;text-align:center' >"+dL_flash+"</div>";
			}
			this.popup.innerHTML='<img src="./comm/yxj/gb.gif" style="position:absolute;top:2px;right:2px;cursor:pointer;width;10px;height:10px;z-index:110000" onclick="$w.hi()">' + yW_C_zy_str;
			s.display="none";
			if(this.Ie) {document.body.insertBefore(this.popup);} else {document.body.appendChild(this.popup);}
		},
		hi : function(){
			 clearInterval($w.sI);
			 document.body.removeChild(this.popup);
		},
		s : function (){
			setTimeout(function(){$w.r();},50);
		},
		r: function (){
			$w.u();
			$w.c();			
			$w.sI=setInterval(function(){$w.m();},10);
		},
		m: function (){			
			if(!window.XMLHttpRequest || (document.compatMode=="BackCompat" && !!window.ActiveXObject)){
				$w.g();
				this.popup.style.left=(this.w-this.adw+this.l)+"px";
				this.popup.style.top=(this.h-this.ts+this.t-3)+"px";    
				
				if(this.ts<this.adh){
					this.ts+=7;
					if(this.ts>this.adh){
						this.ts=this.adh;
						if(this.ts-10>this.adh) clearInterval($w.sI);
					};
				};		
			}else{
				this.popup.style.bottom="0px";
    			this.popup.style.right="0px";
				this.popup.style.position="fixed";
				this.popup.style.display="";
				clearInterval($w.sI);
			}  
			
		},
		t: function (){
			if(window.attachEvent){
				window.attachEvent("onload",function (){$w.s();			
			});		
			}else {
				window.addEventListener("load",function (){
				$w.s();			
				},true);			
			}
		},
		F : function(idad, swfurl, ws, hs)
		{
			 
			var str = '<embed src="'+swfurl+'" type="application/x-shockwave-flash" height="'+hs+'" width="'+ws+'" id="'+idad+'" name="ZyadsFlashAd" quality="high" wmode="transparent" allownetworking="none" allowscriptaccess="always" >';
			return str;
		}
};	
$w.t();