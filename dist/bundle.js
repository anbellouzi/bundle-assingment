(()=>{const t=document.getElementById("myCanvas"),e=t.getContext("2d"),l=[];let i=t.width/2,n=t.height-30,o=2,r=-2,h=(t.width-75)/2,a=!1,f=!1,c=0,d=3;function s(){const t=["red","green","blue","purple","grey","white","black"];return t[Math.floor(Math.random()*t.length)]}function u(){(i+o>t.width-10||i+o<10)&&(o=-o),n+r<10?r=-r:n+r>t.height-10&&(i>h&&i<h+75?r=-r:(d-=1,d?(i=t.width/2,n=t.height-30,o=3,r=-3,h=(t.width-75)/2):(alert("GAME OVER"),document.location.reload()))),a&&h<t.width-75?h+=7:f&&h>0&&(h-=7),i+=o,n+=r,requestAnimationFrame(y)}function y(){e.clearRect(0,0,t.width,t.height),function(){for(let t=0;t<3;t+=1)for(let i=0;i<5;i+=1)1===l[t][i].status&&(e.beginPath(),e.rect(l[t][i].x,l[t][i].y,75,20),e.fillStyle=s(),e.fill(),e.closePath())}(),e.beginPath(),e.arc(i,n,10,0,2*Math.PI),e.fillStyle="#8b2115",e.fill(),e.closePath(),e.beginPath(),e.rect(h,t.height-10,75,10),e.fillStyle="#FFD34E",e.fill(),e.closePath(),e.font="16px Arial",e.fillStyle="green",e.fillText(`Score: ${c}`,8,20),e.font="16px Arial",e.fillStyle="red",e.fillText(`Lives: ${d}`,t.width-65,20),function(){for(let t=0;t<3;t+=1)for(let e=0;e<5;e+=1){const o=l[t][e];1===o.status&&i>o.x&&i<o.x+75&&n>o.y&&n<o.y+20&&(r=-r,o.status=0,c+=1,15===c&&(alert("YOU WIN, CONGRATS!"),document.location.reload()))}}(),u()}document.addEventListener("keydown",(t=>{"Right"===t.key||"ArrowRight"===t.key?a=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(f=!0)}),!1),document.addEventListener("keyup",(t=>{"Right"===t.key||"ArrowRight"===t.key?a=!1:"Left"!==t.key&&"ArrowLeft"!==t.key||(f=!1)}),!1),document.addEventListener("mousemove",(e=>{const l=e.clientX-t.offsetLeft;l>0&&l<t.width&&(h=l-37.5)}),!1),function(){for(let t=0;t<3;t+=1){l[t]=[];for(let e=0;e<5;e+=1){const i=85*e+30,n=30*t+30;l[t][e]={x:i,y:n,status:1}}}y()}()})();