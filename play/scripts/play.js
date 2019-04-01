function showPic(whichpic){
    console.log(whichpic);   //<a>元素
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    console.log(description.firstChild.nodeValue);
    description.firstChild.nodeValue = text;
}

function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for(var i = 0;i<links.length;i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
}

window.onload = function(){
    prepareGallery();
}