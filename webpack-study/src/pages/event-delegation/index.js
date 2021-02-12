import EventUtil from '@/utils/event-util'

let list = document.getElementById("links");
EventUtil.addHandler(list, 'click', (e) => {
    console.log(e)
    const {target} = e;
    switch (target.id) {
        case "1":
            document.title="111111"
            break;
        case "2":
            location.href="http://www.baidu.com";
            break;
        case "3":
            alert('hi');
            break;
    }
})
