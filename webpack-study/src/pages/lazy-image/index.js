import './index.scss';
import {debounce} from "@/utils";

const imageList = Array.from(document.querySelectorAll('img'));

function isIn(el) {
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    return bound.top <= clientHeight;
}

function check() {
    imageList.forEach(el => {
        if (isIn(el)) {
            el.src = el.dataset.src;
        }
    })
}

window.onload = check;
window.onscroll = debounce(check, 100);
