
function calValue() {
  // Wall size 
  let l=document.getElementById('l').value;
  let h=document.getElementById('h').value;
  let b=document.getElementById('b').value;

  // Door size
  let ld=document.getElementById('ld').value;
  let hd=document.getElementById('hd').value;

  //Window size
  let lw=document.getElementById('lw').value;
  let hw=document.getElementById('hw').value;

  let bl=0.19;
    let bh=0.09;
    let bb=0.09;
    let t=0.25;
     var l1=l*2;//length of long wall

    let vlw= l1*h*t;//volume long of wall
    let wd=vlw-(lw*hw*t);//window deduction
  

    l=(b-(t*2))*2;

  let vsw=l*h*t;//volume of short wall
  let dd=vsw-(ld*hd*t);//door deduction
  let tv=wd+dd;//total volume
  let mt=document.getElementById('cm').value;//mortor value
   bl=bl+mt;
   bh=bh+mt;
   bb=bb+mt;

   let vb=bl*bh*bb;//volume of bricks
        
   let nb=tv/vb;//number of bricks
 let bw=document.getElementById('bw').value
   let wob=(bw/100)*(nb);//brick waste deduction
 let tot=Math.round(nb+wob,-3);//total volume of bricks

 var cq = (nb/330) * 50; //cement quantity
 document.querySelector("#text-6454").innerHTML=cq;

 var sq = cq * 5; //sand quantity
 document.querySelector("#text-0f3a").innerHTML=sq;

 document.getElementById("result1").innerHTML= tot;
document.getElementById("result2").innerHTML=tot*10;

}
