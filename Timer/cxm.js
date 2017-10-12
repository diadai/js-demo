
//  获取ID 对象

function $( v ){
    if(typeof v==="function"){
        window.onload = v;
    }
    else if(typeof v==="string"){
        return document.getElementById(v);
    }
    else if(typeof v==="object"){
        return v;
    }
}

// 获取元素的样式 只能是单一样式，不能是复合样式；

function getStyle(obj,attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}