(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-modify_face-modify_face"],{"1bf7":function(t,i,e){"use strict";e.r(i);var a=e("abf8"),s=e("b3e0");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("8001");var o,h=e("f0c5"),r=Object(h["a"])(s["default"],a["b"],a["c"],!1,null,"771484c0",null,!1,a["a"],o);i["default"]=r.exports},"37e87":function(t,i,e){"use strict";var a=e("6dc6"),s=e.n(a);s.a},"3b71":function(t,i,e){"use strict";e.r(i);var a=e("9b67"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"5d58":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-page-body[data-v-771484c0]{overflow:hidden}.modify[data-v-771484c0]{position:relative;padding-top:%?50?%}.modify uni-view[data-v-771484c0]{width:%?500?%;height:%?500?%;margin:0 auto;overflow:hidden;background-color:#fff;border:%?4?% solid #fff;border-radius:100%}.modify uni-view uni-image[data-v-771484c0]{width:100%;height:100%}.opection-box[data-v-771484c0]{margin-top:%?50?%}.opec[data-v-771484c0]{width:100%;padding:0 10%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=i},"6dc6":function(t,i,e){var a=e("c3a4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("2a3a20ae",a,!0,{sourceMap:!1,shadowMode:!1})},8001:function(t,i,e){"use strict";var a=e("cbc8"),s=e.n(a);s.a},"9b67":function(t,i,e){"use strict";var a=e("4ea4");e("c975"),e("a15b"),e("ace4"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("25f0"),e("3ca3"),e("466d"),e("1276"),e("498a"),e("5cc6"),e("8a59"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("ddb0"),e("2b3d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("1da1")),n=a(e("b85c")),o=50,h={name:"yq-avatar",data:function(){return{csH:"0px",sD:"none",sT:"-10000px",pT:"-10000px",iS:{},sS:{},sO:!0,bW:"19%",bD:"flex",tp:0,imgSrc:{imgSrc:""}}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",fileType:"",noTab:"",inner:"",quality:"",index:"",bgImage:""},created:function(){var t=this;this.cc=uni.createCanvasContext("avatar-canvas",this),this.cco=uni.createCanvasContext("oper-canvas",this),this.ccp=uni.createCanvasContext("prv-canvas",this),this.qlty=parseFloat(this.quality)||1,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate=!1===this.canRotate||!0===this.inner||"true"===this.inner||"false"===this.canRotate?0:1,this.letScale=!1===this.canScale||"false"===this.canScale?0:1,this.isin=!0===this.inner||"true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=parseFloat(this.minScale)||.3,this.mxScale=parseFloat(this.maxScale)||4,this.noBar=!0===this.noTab||"true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.fType="jpg"===this.fileType?"jpg":"png",this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),this.noBar?this.fWindowResize():uni.showTabBar({fail:function(){t.noBar=1},success:function(){t.noBar=0},complete:function(i){t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.wW=t.windowWidth,this.drawTop=t.windowTop,this.wH=t.windowHeight,this.noBar||(this.wH+=o),this.csH=this.wH-o+"px",this.tp=this.csH,this.tp=t.windowTop+parseInt(this.csH)+"px",this.pxRatio=this.wW/750;var i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");var e,a={},s=(0,n.default)(i);try{for(s.s();!(e=s.n()).done;){var h=e.value;if(h){if(h=h.trim().split(":"),h[1].toString().indexOf("upx")>=0){var r=h[1].trim().split(" ");for(var c in r)r[c]&&r[c].toString().indexOf("upx")>=0&&(r[c]=parseFloat(r[c])*this.pxRatio+"px");h[1]=r.join(" ")}a[h[0].trim()]=h[1].trim()}}}catch(l){s.e(l)}finally{s.f()}this.iS=a}this.expWidth&&(this.eW=this.expWidth.toString().indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.eH=this.expHeight.toString().indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.sD&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中...",mask:!0});var e=t.imgPath=i.tempFilePaths[0];uni.getImageInfo({src:e,success:function(i){if(t.imgWidth=i.width,t.imgHeight=i.height,t.path=e,!t.hasSel){var a=t.sS||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var s=t.selWidth.toString().indexOf("upx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),n=t.selHeight.toString().indexOf("upx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);a.width=s+"px",a.height=n+"px",a.top=(t.wH-n-o|0)/2+"px",a.left=(t.wW-s|0)/2+"px",t.sS=a}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){t.$util.showToast({title:"请选择正确图片"})},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var i=this.sS,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height),o=this.eW||s*this.pixelRatio,h=this.eH||n*this.pixelRatio;uni.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:o,destHeight:h,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn,base64:t.base64||null})}))},fail:function(t){uni.showToast({title:"error1",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar(),t.$emit("end")}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var i=this.sS,e=(parseInt(i.width),parseInt(i.height),this.prvX),a=this.prvY,s=this.prvWidth,n=this.prvHeight,o=this.eW||parseInt(i.width)*this.pixelRatio,h=this.eH||parseInt(i.height)*this.pixelRatio;uni.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:o,destHeight:h,canvasId:"prv-canvas",fileType:this.fType,quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn,base64:t.base64||null})}))},fail:function(){uni.showToast({title:"error_prv",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar(),t.$emit("end")}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.wW,a=this.wH,s=this.imgWidth,n=this.imgHeight,h=s/n,r=e-40,c=a-o-80,l=r/c,d=parseInt(this.sS.width),f=parseInt(this.sS.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":h>1?this.fixWidth=1:this.fixHeight=1;break;case"short":h>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":d>f?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":d>f?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":h>1?this.lckWidth=1:this.lckHeight=1;break;case"short":h>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":d>f?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":d>f?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(r=d,c=r/h):this.fixHeight?(c=f,r=c*h):h<l?n<c?(r=s,c=n):r=c*h:s<r?(r=s,c=n):c=r/h,this.isin&&(r<d&&(r=d,c=r/h,this.lckHeight=0),c<f&&(c=f,r=c*h,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-r)/2|0,this.posHeight=(a-c-o)/2|0,this.useWidth=0|r,this.useHeight=0|c,this.centerX=this.posWidth+r/2,this.centerY=this.posHeight+c/2,this.focusX=0,this.focusY=0;var p=this.sS,u=parseInt(p.left),g=parseInt(p.top),v=parseInt(p.width),b=parseInt(p.height),m=(this.canvas,this.canvasOper,this.cc,this.cco);m.beginPath(),m.setLineWidth(3),m.setGlobalAlpha(1),m.setStrokeStyle("white"),m.strokeRect(u,g,v,b),m.setFillStyle("black"),m.setGlobalAlpha(.5),m.fillRect(0,0,this.wW,g),m.fillRect(0,g,u,b),m.fillRect(0,g+b,this.wW,this.wH-b-g-o),m.fillRect(u+v,g,this.wW-v-u,b),m.setGlobalAlpha(1),m.setStrokeStyle("red"),m.moveTo(u+15,g),m.lineTo(u,g),m.lineTo(u,g+15),m.moveTo(u+v-15,g),m.lineTo(u+v,g),m.lineTo(u+v,g+15),m.moveTo(u+15,g+b),m.lineTo(u,g+b),m.lineTo(u,g+b-15),m.moveTo(u+v-15,g+b),m.lineTo(u+v,g+b),m.lineTo(u+v,g+b-15),m.stroke(),m.draw(!1,(function(){i&&(t.sD="flex",t.sT=t.drawTop+"px",t.fDrawImage(!0))})),this.$emit("init")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.cc,e=this.useWidth*this.scaleSize,a=this.useHeight*this.scaleSize;if(this.bgImage?i.drawImage(this.bgImage,0,0,this.wW,this.wH-o):i.fillRect(0,0,this.wW,this.wH-o),this.isin){var s=this.focusX*(this.scaleSize-1),n=this.focusY*(this.scaleSize-1);i.translate(this.centerX,this.centerY),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,this.posWidth-this.centerX-s,this.posHeight-this.centerY-n,e,a)}else i.translate(this.posWidth+e/2,this.posHeight+a/2),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-e/2,-a/2,e,a);i.draw(!1)}},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var i=this.sS,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height);uni.showLoading({title:"加载中...",mask:!0}),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,expWidth:s*this.pixelRatio,expHeight:n*this.pixelRatio,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(i){t.prvImgTmp=i=i.tempFilePath;var e=t.ccp,a=t.wW,s=parseInt(t.csH),n=parseInt(t.sS.width),o=parseInt(t.sS.height),h=a-40,r=s-80,c=h/n,l=o*c;l<r?(n=h,o=l):(c=r/o,n*=c,o=r),e.fillRect(0,0,a,s),t.prvX=a=(a-n)/2|0,t.prvY=s=(s-o)/2|0,t.prvWidth=n|=0,t.prvHeight=o|=0,e.drawImage(i,a,s,n,o),e.draw(!1),t.btop(i).then((function(i){t.sO=!1,t.pT=t.drawTop+"px"})),t.sO=!1,t.pT=t.drawTop+"px"},fail:function(){uni.showToast({title:"error2",duration:2e3})},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var a=i.selWidth,s=i.selHeight,n=i.expWidth,h=i.expHeight,r=i.quality,c=i.canRotate,l=i.canScale,d=i.minScale,f=i.maxScale,p=i.stretch,u=i.fileType,g=i.inner,v=i.lock;n&&(this.eW=n.toString().indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),h&&(this.eH=h.toString().indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h)),this.letRotate=!1===c||!0===g||"true"===g||"false"===c?0:1,this.letScale=!1===l||"false"===l?0:1,this.qlty=parseFloat(r)||1,this.mnScale=parseFloat(d)||.3,this.mxScale=parseFloat(f)||4,this.stc=p,this.isin=!0===g||"true"===g?1:0,this.fType="jpg"===u?"jpg":"png",this.lck=v,this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),a&&s&&(a=a.toString().indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),s=s.toString().indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),this.sS.width=a+"px",this.sS.height=s+"px",this.sS.top=(this.wH-s-o|0)/2+"px",this.sS.left=(this.wW-a|0)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],a=i[1];if(this.touch0=e,this.touch1=a,a){var s=a.x-e.x,n=a.y-e.y;this.fgDistance=Math.sqrt(s*s+n*n)}},fMove:function(t){var i=t.touches,e=i[0],a=i[1];if(a){var s=a.x-e.x,n=a.y-e.y,o=Math.sqrt(s*s+n*n),h=.005*(o-this.fgDistance),r=this.scaleSize+h;do{if(!this.letScale)break;if(r<this.mnScale)break;if(r>this.mxScale)break;var c=this.useWidth*h/2,l=this.useHeight*h/2;if(this.isin){var d=this.useWidth*r,f=this.useHeight*r,p=(this.posWidth,this.posHeight,parseInt(this.sS.left)),u=parseInt(this.sS.top),g=parseInt(this.sS.width),v=parseInt(this.sS.height),b=p+g,m=u+v,w=void 0,x=void 0;if(d<=g||f<=v)break;this.cx=w=this.focusX*r-this.focusX,this.cy=x=this.focusY*r-this.focusY,this.posWidth-=c,this.posHeight-=l,this.posWidth-w>p&&(this.posWidth=p+w),this.posWidth+d-w<b&&(this.posWidth=b-d+w),this.posHeight-x>u&&(this.posHeight=u+x),this.posHeight+f-x<m&&(this.posHeight=m-f+x)}else this.posWidth-=c,this.posHeight-=l;this.scaleSize=r}while(0);this.fgDistance=o,a.x!==e.x&&this.letRotate&&(s=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),n=(a.y-e.y)/(a.x-e.x),this.rotateDeg+=180*Math.atan((n-s)/(1+s*n))/Math.PI,this.touch0=e,this.touch1=a),this.fDrawImage()}else if(this.touch0){var y=e.x-this.touch0.x,k=e.y-this.touch0.y,S=this.posWidth+y,I=this.posHeight+k;if(this.isin){var H,W,T=this.useWidth*this.scaleSize,$=this.useHeight*this.scaleSize,C=S,D=I,R=C+T,_=D+$,z=parseInt(this.sS.left),P=parseInt(this.sS.top),M=z+parseInt(this.sS.width),j=P+parseInt(this.sS.height);this.cx=H=this.focusX*this.scaleSize-this.focusX,this.cy=W=this.focusY*this.scaleSize-this.focusY,!this.lckWidth&&Math.abs(y)<100&&(z<C-H?this.posWidth=z+H:M>R-H?this.posWidth=M-T+H:(this.posWidth=S,this.focusX-=y)),!this.lckHeight&&Math.abs(k)<100&&(P<D-W?(this.focusY-=P+W-this.posHeight,this.posHeight=P+W):j>_-W?(this.focusY-=j+W-(this.posHeight+$),this.posHeight=j-$+W):(this.posHeight=I,this.focusY-=k))}else Math.abs(y)<100&&!this.lckWidth&&(this.posWidth=S),Math.abs(k)<100&&!this.lckHeight&&(this.posHeight=I),this.focusX-=y,this.focusY-=k;this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fHideImg:function(){this.prvImg="",this.pT="-10000px",this.sO=!0,this.prvImgData=null,this.target=null},fClose:function(){this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar(),this.$emit("end")},fGetImgData:function(){var t=this;return new Promise((function(i,e){var a=t.prvX,s=t.prvY,n=t.prvWidth,o=t.prvHeight;uni.canvasGetImageData({canvasId:"prv-canvas",x:a,y:s,width:n,height:o,success:function(t){i(t.data)},fail:function(t){e(t)}},t)}))},fColorChange:function(t){var i=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var a,s,n,o,h,r,c,l,d,f,p,u,g,v,b,m,w,x,y,k,S,I,H,W,T,$,C;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Date.now(),!(a-i.prvTm<100)){e.next=3;break}return e.abrupt("return");case 3:if(i.prvTm=a,uni.showLoading({title:"加载中...",mask:!0}),i.prvImgData){e.next=11;break}return e.next=8,i.fGetImgData().catch((function(){uni.showToast({title:"error_read",duration:2e3})}));case 8:if(i.prvImgData=e.sent){e.next=10;break}return e.abrupt("return");case 10:i.target=new Uint8ClampedArray(i.prvImgData.length);case 11:if(s=i.prvImgData,n=i.target,o=t.detail.value,0===o)n=s;else for(o=(o+100)/200,o<.005&&(o=0),o>.995&&(o=1),S=s.length-1;S>=0;S-=4)h=s[S-3]/255,r=s[S-2]/255,c=s[S-1]/255,m=Math.max(h,r,c),b=Math.min(h,r,c),u=m-b,m===b?d=0:m===h&&r>=c?d=(r-c)/u*60:m===h&&r<c?d=(r-c)/u*60+360:m===r?d=(c-h)/u*60+120:m===c&&(d=(h-r)/u*60+240),p=(m+b)/2,0===p||m===b?f=0:0<p&&p<=.5?f=u/(2*p):p>.5&&(f=u/(2-2*p)),s[S]&&(l=s[S]),o<.5?f=f*o/.5:o>.5&&(f=2*f+2*o-f*o/.5-1),0===f?h=r=c=Math.round(255*p):(p<.5?v=p*(1+f):p>=.5&&(v=p+f-p*f),g=2*p-v,w=d/360,x=w+1/3,y=w,k=w-1/3,I=function(t){return t<0?t+1:t>1?t-1:t},H=function(t){return t<1/6?g+6*(v-g)*t:t>=1/6&&t<.5?v:t>=.5&&t<2/3?g+6*(v-g)*(2/3-t):g},h=x=Math.round(255*H(I(x))),r=y=Math.round(255*H(I(y))),c=k=Math.round(255*H(I(k)))),l&&(n[S]=l),n[S-3]=h,n[S-2]=r,n[S-1]=c;W=i.prvX,T=i.prvY,$=i.prvWidth,C=i.prvHeight,uni.canvasPutImageData({canvasId:"prv-canvas",x:W,y:T,width:$,height:C,data:n,fail:function(){uni.showToast({title:"error_put",duration:2e3})},complete:function(){uni.hideLoading()}},i);case 15:case"end":return e.stop()}}),e)})))()},btop:function(t){return this.base64=t,new Promise((function(i,e){var a=t.split(","),s=a[0].match(/:(.*?);/)[1],n=atob(a[1]),o=n.length,h=new Uint8Array(o);while(o--)h[o]=n.charCodeAt(o);return i((window.URL||window.webkitURL).createObjectURL(new Blob([h],{type:s})))}))},blob:function(t,i){uni.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(t){var e="data:image/jpeg;base64,"+t.data;"function"==typeof i&&i(e)}})}}};i.default=h},a147:function(t,i,e){"use strict";e.r(i);var a=e("db70"),s=e("3b71");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("37e87");var o,h=e("f0c5"),r=Object(h["a"])(s["default"],a["b"],a["c"],!1,null,"0a74ba0a",null,!1,a["a"],o);i["default"]=r.exports},abf8:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={loadingCover:e("4c1d").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"nc-modify-content",attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"modify"},[e("v-uni-view",[""==t.newImg?e("v-uni-image",{attrs:{src:t.memberImg?t.$util.img(t.memberImg):t.$util.getDefaultImage().default_headimg,mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.memberImg=t.$util.getDefaultImage().default_headimg}}}):e("v-uni-image",{attrs:{src:t.$util.img(t.newImg),mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.newImg=t.$util.getDefaultImage().default_headimg}}})],1)],1),e("v-uni-view",{staticClass:"opection-box"},[""==t.newImg?[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseImage()}}},[t._v("点击上传")])]:[e("v-uni-view",{staticClass:"opec"},[e("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save()}}},[t._v("确认保存")]),e("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseImage()}}},[t._v("重新上传")])],1)]],2),e("img-cropping",{ref:"imgCropping",attrs:{selWidth:"300",selHeight:"300"},on:{upload:function(i){arguments[0]=i=t.$handleEvent(i),t.myUpload.apply(void 0,arguments)}}}),e("loading-cover",{ref:"loadingCover"})],1)},n=[]},b3e0:function(t,i,e){"use strict";e.r(i);var a=e("c50c"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},b85c:function(t,i,e){"use strict";e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=n;var a=s(e("06c5"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,i){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=(0,a.default)(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,r=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return h=t.done,t},e:function(t){r=!0,o=t},f:function(){try{h||null==e["return"]||e["return"]()}finally{if(r)throw o}}}}},c3a4:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".my-canvas[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%}.my-avatar[data-v-0a74ba0a]{width:%?150?%;height:%?150?%;border-radius:100%}.oper-canvas[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-0a74ba0a]{height:50px;position:fixed!important;box-sizing:border-box;background:#000;width:100%;left:0;bottom:0;z-index:100009;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.oper[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;\r\n\t/* padding: 10upx 20upx 80upx 20upx; */width:100%;height:100%;box-sizing:border-box;-webkit-align-self:center;align-self:center}.btn-wrapper[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n\r\n\r\nheight:50px;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn-wrapper uni-view[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.btn-wrapper .cancel[data-v-0a74ba0a]{color:#fff;font-weight:700;text-align:center}.btn-wrapper .upload[data-v-0a74ba0a]{background:#31bb6d;color:#fff;font-weight:700;height:%?60?%;line-height:%?60?%;padding:0 %?30?%;border-radius:%?8?%}.btn-wrapper .iconfont[data-v-0a74ba0a]{color:#fff;font-size:18px}.hover[data-v-0a74ba0a]{background:#f1f1f1;border-radius:6%}.clr-wrapper[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.clr-wrapper uni-view[data-v-0a74ba0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.my-slider[data-v-0a74ba0a]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}",""]),t.exports=i},c50c:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("b6ac")),n=a(e("a147")),o={data:function(){return{memberImg:"",newImg:"",imgurl:""}},components:{imgCropping:n.default},mixins:[s.default],onShow:function(){uni.getStorageSync("token")||this.$util.redirectTo("/otherpages/login/login/login",{back:"/otherpages/member/modify_face/modify_face"},"redirectTo"),this.$langConfig.refresh(),this.initGetHeading()},methods:{initGetHeading:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(i){0==i.code?(t.memberImg=i.data.headimg,t.imgurl=i.data.headimg):t.$util.showToast({title:i.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(i){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},chooseImage:function(){this.$refs.imgCropping.fSelect()},myUpload:function(t){var i=this,e="h5",a="H5";uni.request({url:this.$config.baseUrl+"/api/upload/headimgBase64",method:"POST",data:{app_type:e,app_type_name:a,images:t.base64},header:{"content-type":"application/x-www-form-urlencoded;application/json"},dataType:"json",responseType:"text",success:function(t){0==t.data.code&&(i.newImg=t.data.data.pic_path,i.imgurl=t.data.data.pic_path)},fail:function(){i.$util.showToast({title:"头像上传失败"})}})},previewImage:function(){uni.previewImage({current:0,urls:this.images})},save:function(){var t=this;this.$api.sendRequest({url:"/api/member/modifyheadimg",data:{headimg:this.imgurl},success:function(i){0==i.code?(t.$util.showToast({title:"头像修改成功"}),setTimeout((function(){t.$util.redirectTo("/otherpages/member/info/info",{},"redirectTo")}),2e3)):t.$util.showToast({title:i.message})}})}}};i.default=o},cbc8:function(t,i,e){var a=e("5d58");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("29deb470",a,!0,{sourceMap:!1,shadowMode:!1})},db70:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-image",{staticClass:"my-avatar",style:[t.iS],attrs:{src:t.imgSrc.imgSrc},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.sT,height:t.csH},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),e("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.sT,height:t.csH},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.fMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.fEnd.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.csH,top:t.pT},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fHideImg.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.sD,top:t.tp}},[e("v-uni-view",{staticClass:"oper"},[t.sO?e("v-uni-view",{staticClass:"btn-wrapper"},[e("v-uni-view",{staticClass:"cancel",style:{width:t.bW},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fClose.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("取消")])],1),e("v-uni-view",{style:{width:t.bW},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont iconshangchuan"})],1),e("v-uni-view",{style:{width:t.bW,display:t.bD},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fRotate.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont iconxuanzhuan"})],1),e("v-uni-view",{style:{width:t.bW},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fUpload.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"upload"},[t._v("上传")])],1)],1):e("v-uni-view",{staticClass:"clr-wrapper"},[e("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.fColorChange.apply(void 0,arguments)}}}),e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPrvUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},n=[]}}]);