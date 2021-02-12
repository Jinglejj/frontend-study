/**
 * 跨浏览器事件对象
 */
class EventUtil {
    addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent(`on${type}`, handler);
        } else {
            element[`on${type}`] = handler;
        }
    }

    getEvent(event) {
        return event ? event : window.event;
    }


    getTarget(event) {
        return event.target || event.currentTarget;
    }

    preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    removeHandler(element, type, handler) {
        if (element.addEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.detachEvent(`on${type}`, handler);
        } else {
            element[`on${type}`] = null;
        }
    }

    stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}

export default new EventUtil();
