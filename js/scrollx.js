const scrollelem = document.querySelector('.videobox')

function scrollplus() {
    scrollelem.scrollTo({
        left: scrollelem.scrollLeft + scrollelem.clientWidth,
        behavior: 'smooth'
    });
}

function scrollminus() {
    scrollelem.scrollTo({
        left: scrollelem.scrollLeft - scrollelem.clientWidth,
        behavior: 'smooth'
    });
}