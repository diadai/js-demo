/**
 * Created by xuemei on 2017/3/30.
 */
var sdiv2=document.getElementById("sdiv2");
var obut=document.getElementById("obut");
var tdiv=document.getElementById("tdiv");
var tdivt=document.getElementById("tdiv2");
var sure=document.getElementById("sure");
var red=document.getElementById("red");
var green=document.getElementById("green");
var blue=document.getElementById("blue");
var width1=document.getElementById("width1");
var width2=document.getElementById("width2");
var height1=document.getElementById("height1");
var height2=document.getElementById("height2");
var back=document.getElementById("back");

obut.onclick=function () {
    tdiv.style.display='block';
    tdivt.style.display='block';
};
sure.onclick=function () {
    tdiv.style.display='none';
    tdivt.style.display='none';
};
red.onclick=function () {
    sdiv2.style.backgroundColor='red';
};
green.onclick=function () {
    sdiv2.style.backgroundColor='green';
};
blue.onclick=function () {
    sdiv2.style.backgroundColor='blue';
};
width1.onclick=function () {
    sdiv2.style.width='200px';
};
width2.onclick=function () {
    sdiv2.style.width='250px';
};
height1.onclick=function () {
    sdiv2.style.height='200px';
};
height2.onclick=function () {
    sdiv2.style.height='250px';
};
back.onclick=function () {
    sdiv2.style.height='150px';
    sdiv2.style.width='150px';
    sdiv2.style.backgroundColor='#fffdb2';
    tdiv.style.display='none';
    tdivt.style.display='none';
};