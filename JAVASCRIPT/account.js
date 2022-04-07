function back(){
    window.location.href="../HTML/login1.html";
}
function go(address){
    window.location.href = address;
}

var ans = document.getElementsByClassName("container");

function blocke(s){
    
    ans[0].style.cssText ='display:none;';
    ans[1].style.cssText ='display:none;';
    ans[2].style.cssText ='display:none;';
    ans[3].style.cssText ='display:none;';
    ans[4].style.cssText ='display:none;';
    ans[s].style.cssText ='display:block;';
}
let sharecontent = document.getElementById("textarea-content");
let shareTitle = document.getElementById("title");
let content_box = document.getElementById("content-box");
let x = true;
let vl = "<div class=\"comment-box comment1\">"+"<textarea class=\"comment\"></textarea>"+"<button class=\"replay\" onclick=\"showcomment()\">replay</button>"+ "</div>";
function share(){
    if(sharecontent.value=="" || shareTitle.value==""){
        if(!shareTitle.classList.contains('error'))
            shareTitle.classList.add('error');
        return;
    }
    if(shareTitle.classList.contains('error'))
        shareTitle.classList.remove('error');
    var content = "<div class=\"post post-1\">" + "<h2>" + shareTitle.value + "</h2>" +"<div class=\"line\"></div>" +"<div class=\"content\">" + sharecontent.value.replaceAll("\n","<br/>").replaceAll(" ", "&nbsp") + "</div>" + "<div class=\"comment-box comment1\">"+"<textarea class=\"comment\"></textarea>"+"<button class=\"replay\" onclick=\"showcomment()\">replay</button>"+ "</div>"+"</div>";
    // content += val;
    sharecontent.value="";
    shareTitle.value="";
    content_box.innerHTML = content + content_box.innerHTML;
}


function showcomment(){
    
}
let kom = document.getElementsByClassName("lvl");
function dis(s){
    kom[0].style.cssText ='display:none;';
    kom[1].style.cssText ='display:none;';
    kom[2].style.cssText ='display:none;';
    kom[s].style.cssText = 'display:block;';
}

let koma = document.getElementsByClassName("ex");
function disk(s){
    koma[0].style.cssText ='visibility: hidden;';
    koma[1].style.cssText ='visibility: hidden;';
    koma[2].style.cssText ='visibility: hidden;';
    koma[s].style.cssText = 'visibility: visible;';
}