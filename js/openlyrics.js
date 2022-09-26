// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://myfriends1033.github.io/white-diamond/other/lyrics", true);
// xhr.send();
// //xhr.responseText;
// document.getElementById("lyricspage").innerHTML = xhr.responseText;

$('#lyricspage').load("https://myfriends1033.github.io/white-diamond/other/lyrics");


function infor1open() {
  document.getElementById("infor1").style.cssText += 'display:block';
}

function infor2open() {
    document.getElementById("infor2").style.cssText += 'display:block';
}

function ly10open() {
    document.getElementById("ly10").style.cssText += 'display:block';
}

function ly9open() {
    document.getElementById("ly9").style.cssText += 'display:block';
}

function ly8open() {
    document.getElementById("ly8").style.cssText += 'display:block';
}

function ly7open() {
    document.getElementById("ly7").style.cssText += 'display:block';
}

function ly6open() {
    document.getElementById("ly6").style.cssText += 'display:block';
}

function ly5open() {
    document.getElementById("ly5").style.cssText += 'display:block';
}

function ly4open() {
    document.getElementById("ly4").style.cssText += 'display:block';
}

function ly3open() {
    document.getElementById("ly3").style.cssText += 'display:block';
}

function ly2open() {
    document.getElementById("ly2").style.cssText += 'display:block';
}

function ly1open() {
    document.getElementById("ly1").style.cssText += 'display:block';
}

function lyclose() {
    for ( let i = 0 ; i < document.querySelectorAll(".ly").length; i++) {
        document.querySelectorAll(".ly")[i].style.cssText += 'display:none';
    }
}
