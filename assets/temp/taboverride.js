jQuery.fn.tabOverride=function(a){function h(a){var d=a.keyCode,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(d!==9&&(d!==13||!g.autoIndent)||a.ctrlKey||a.altKey)return;c=!1,j=this.value,o=this.scrollTop;if(document.selection)k=document.selection.createRange(),r=k.text,l=k.duplicate(),l.moveToElementText(this),l.setEndPoint("EndToEnd",k),q=l.text.length,p=q-r.length,f>1?(m=j.slice(0,p).split(e).length-1,n=r.split(e).length-1):m=n=0;else if(typeof this.selectionStart!="undefined")p=this.selectionStart,q=this.selectionEnd,r=j.slice(p,q);else return;if(d===9)h=b,i=h.length,u=0,v=0,w=0,p!==q&&r.indexOf("\n")!==-1?(p===0||j.charAt(p-1)==="\n"?s=p:s=j.lastIndexOf("\n",p-1)+1,q===j.length||j.charAt(q)==="\n"?t=q:(t=j.indexOf("\n",q),t===-1&&(t=j.length)),a.shiftKey?(j.slice(s).indexOf(h)===0&&(s===p?r=r.slice(i):w=i,v=i),this.value=j.slice(0,s)+j.slice(s+w,p)+r.replace(new RegExp("\n"+h,"g"),function(){return u+=1,"\n"})+j.slice(q),k?(k.collapse(),k.moveEnd("character",q-v-u*i-n-m),k.moveStart("character",p-w-m),k.select()):(this.selectionStart=p-w,this.selectionEnd=q-v-u*i)):(u=1,this.value=j.slice(0,s)+h+j.slice(s,p)+r.replace(/\n/g,function(){return u+=1,"\n"+h})+j.slice(q),k?(k.collapse(),k.moveEnd("character",q+u*i-n-m),k.moveStart("character",p+i-m),k.select()):(this.selectionStart=p+i,this.selectionEnd=q+u*i,this.scrollTop=o))):a.shiftKey?j.slice(p-i).indexOf(h)===0&&(this.value=j.slice(0,p-i)+j.slice(p),k?(k.move("character",p-i-m),k.select()):(this.selectionEnd=this.selectionStart=p-i,this.scrollTop=o)):k?(k.text=h,k.select()):(this.value=j.slice(0,p)+h+j.slice(q),this.selectionEnd=this.selectionStart=p+i,this.scrollTop=o);else if(g.autoIndent){if(p===0||j.charAt(p-1)==="\n"){c=!0;return}s=j.lastIndexOf("\n",p-1)+1,t=j.indexOf("\n",p),t===-1&&(t=j.length),x=j.slice(s,t).match(/^[ \t]*/)[0],y=x.length;if(p<s+y){c=!0;return}k?(k.text="\n"+x,k.select()):(this.value=j.slice(0,p)+"\n"+x+j.slice(q),this.selectionEnd=this.selectionStart=p+f+y,this.scrollTop=o)}a.preventDefault()}function i(a){var b=a.keyCode;(b===9||b===13&&g.autoIndent&&!c)&&!a.ctrlKey&&!a.altKey&&a.preventDefault()}var b="\t",c=!1,d=document.createElement("textarea"),e,f,g;return g=function(b){return this.each(function(){a(this).unbind(".tabOverride")}),(!arguments.length||b)&&this.each(function(){this.nodeName&&this.nodeName.toLowerCase()==="textarea"&&a(this).bind("keydown.tabOverride",h).bind("keypress.tabOverride",i)}),this},g.getTabSize=function(){return g.tabSize()},g.setTabSize=function(a){g.tabSize(a)},g.tabSize=function(a){if(!arguments.length)return b==="\t"?0:b.length;var c;if(!a)b="\t";else if(typeof a=="number"&&a>0){b="";for(c=0;c<a;c+=1)b+=" "}},g.autoIndent=!1,d.value="\n",e=d.value,f=e.length,d=null,g}(jQuery);