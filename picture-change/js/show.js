/**
 * Created by xuemei on 2017/3/17.
 */
function show(whichpic) {
    var attribute=whichpic.getAttribute("href");
    var showplace=document.getElementById("fimg");
    showplace.setAttribute("src",attribute);
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}
