function infor1open() {
    document.getElementById("infor1").style.cssText += 'display:block';
}

function infor2open() {
    document.getElementById("infor2").style.cssText += 'display:block';
}

function lyclose() {
    for ( let i = 0 ; i < document.querySelectorAll(".ly").length; i++) {
        document.querySelectorAll(".ly")[i].style.cssText += 'display:none';
    }
}
