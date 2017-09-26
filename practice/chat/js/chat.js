/*
  Created by 42143 on 2017/5/6.
 */
var Odiv=document.getElementById("Div");
var OText=document.getElementById("Text");
var OBun=document.getElementById("Bun");
var OImg=document.getElementById("Img");
var arrimg=['img/1.jpg','img/2.jpeg'];
var flag=0;
OImg.onclick=function () {
    if(flag==0){
        OImg.src="img/2.jpeg";
        flag=1;
    }
    else{
        OImg.src="img/1.jpg";
        flag=0;
    }
};

OBun.onclick=function () {

    if(OText.value==''){
        alert("您还没有输入东西呢！")
    }
    else {
        Odiv.innerHTML +='<img src="'+arrimg[flag]+'">'+ OText.value + '</br>';
        OText.value = '';
    }
};