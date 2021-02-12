export const debounce = (fn, wait = 100) => {
    let timeout = null;
    return function () {
        const context = this;
        const args = arguments;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.call(context, ...args);
        }, wait)
    }
}


export const throttle = (fn, wait = 100) => {
    let timeout = null;
    return function () {
        const context = this;
        const args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                fn.call(context, ...args);
            }, wait);
        }
    }
}
