// use XMLHttpRequest but no success
// const xhr = new XMLHttpRequest();
// function loadly() {
//     xhr.open("GET", "https://myfriends1033.github.io/white-diamond/other/lyrics", true);
//     xhr.send();
//     //xhr.responseText;
//     document.getElementById("lyricspage").innerHTML = xhr.responseText;
// }

// use jQuery
// $('#lyricspage').load("https://myfriends1033.github.io/white-diamond/other/lyrics");

// use fetch
fetch('https://myfriends1033.github.io/white-diamond/other/lyrics').then(res => {
  res.text().then(result => {
      document.getElementById("lyricspage").innerHTML = result
  })
})


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

function lyup() {
    uu = document.querySelectorAll('.ly2up')
    dd = document.querySelectorAll('.ly2down')
    ll = document.querySelectorAll('.ly')
    for (i=0; i<uu.length; i++) {
        uu[i].style.color = null;
        uu[i].style.cssText += "color: rgba(128, 128, 128, 0)";
        dd[i].style.color = null;
        dd[i].style.cssText += "color: rgba(128, 128, 128, 1)";
        ll[i].style.top = null;
        ll[i].style.cssText += "top: -75%";
        ll[i].style.cssText += "z-index: 1";
    }
}

function lydown() {
    dd = document.querySelectorAll('.ly2down')
    uu = document.querySelectorAll('.ly2up')
    ll = document.querySelectorAll('.ly')
    for (i=0; i<uu.length; i++) {
        dd[i].style.color = null;
        dd[i].style.cssText += "color: rgba(128, 128, 128, 0);";
        uu[i].style.color = null;
        uu[i].style.cssText += "color: rgba(128, 128, 128, 1);";
        ll[i].style.top = null;
        ll[i].style.zIndex = null;
        ll[i].style.cssText += "top: 65%";
    }
}