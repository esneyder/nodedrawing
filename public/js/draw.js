$(function(){function t(){var t={};return o.width()>=1024?(r=o.width()-$(".side-nav").width(),t.width=$(".side-nav").width(),t.height=0):(h=o.height()-Math.round($(".nav-bar").height()),t.width=0,t.height=Math.round($(".nav-bar").height())),t}function e(t,e,i,o,n,r){a.beginPath(),a.strokeStyle=p,a.lineWidth=r,a.moveTo(t,e),a.lineTo(i,o),a.stroke(),a.closePath()}function i(){var t=n[0].toDataURL("image/png;base64;");return t=t.replace(/^data:image\/[^;]*/,"data:application/octet-stream"),name_img=prompt("Give a name to your image",""),name_img.length>0?(this.setAttribute("download",name_img+".jpeg"),void(this.href=t)):!1}var o=$(window),n=$("#canvas"),a=n[0].getContext("2d"),r=o.width(),h=o.height();n.attr("width",r),n.attr("height",h),a.fillStyle="#FFFFFF",a.fillRect(0,0,r,h);var s=prompt("What's your name?",""),c=io(),d=$("#block"),p="black",l=1,u=Math.round($.now()*Math.random()),w={},v=1e4,g={},m={click:!1,draw:!1,pos:{},pos_prev:{}},f=t();$("#color-ul li a").on("click",function(){p=$(this).attr("data-color")}),$("#demoDropdown li a").on("click",function(){$(this).sideNav("hide"),l=$(this).attr("data-thick")}),o.on("resize",function(e){r=$(this).width(),h=$(this).height(),f=t()}),n.on("mousedown",function(t){m.draw=!0,m.pos_prev.x=t.clientX-f.width,m.pos_prev.y=t.clientY-f.heigth,d.fadeOut()}),n.on("mouseup",function(t){m.draw=!1}),n.on("mousemove",function(t){m.pos.x=(t.clientX-f.width)/r,m.pos.y=(t.clientY-f.height)/h,c.emit("drawing",{pos:m.pos,draw:m.draw,id:u,color:p,thickness:l,username:s}),m.draw&&(e(m.pos_prev.x,m.pos_prev.y,t.clientX-f.width,t.clientY-f.height,p,l),m.pos_prev.x=t.clientX-f.width,m.pos_prev.y=t.clientY-f.height)}),n.on("touchstart",function(t){var e=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0];m.draw=!0,m.pos_prev.x=e.clientX-f.width,m.pos_prev.y=e.clientY-f.heght}),n.on("touchmove",function(t){var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0];m.pos.x=(i.clientX-f.width)/r,m.pos.y=(i.clientY-f.height)/h,c.emit("drawing",{pos:m.pos,draw:m.draw,id:u,color:p,thickness:l,username:s}),m.draw&&(e(m.pos_prev.x,m.pos_prev.y,i.clientX-f.width,i.clientY-f.height,p,l),m.pos_prev.x=i.clientX-f.width,m.pos_prev.y=i.clientY-f.height)}),n.on("touchend touchleave touchcancel",function(t){m.draw=!1}),setInterval(function(){for(afk in w)$.now()-w[afk].now>v&&(g[afk].remove(),delete w[afk],delete g[afk])},v),$("#dlCanvas").on("click",i),c.on("drawing",function(t){t.id in w||(g[t.id]=$('<div class="cursor">').appendTo("#cursors").append('<div class="username-cursor">'+t.username)),g[t.id].css({left:t.pos.x*r,top:t.pos.y*h}),t.draw&&w[t.id]&&e(w[t.id].pos.x*r,w[t.id].pos.y*h,t.pos.x*r,t.pos.y*h,t.color,t.thickness),w[t.id]=t,w[t.id].now=$.now()})});