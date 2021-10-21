import { createApp } from 'vue'
import MyPopup from "./MyPopup.vue"


// 创建挂载实例
function createMount(opts = {}) {
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);

    const app = createApp(MyPopup, {
        ...opts,
        isOpen: true,
        close() {
            app.unmount(mountNode)
            document.body.removeChild(mountNode)
        }
    });

    if(opts.popType === 'confirm'){
        console.log("这是从提示的地方进来的！", app);
        return app.mount(mountNode).confirm();
    }

    return app.mount(mountNode)
}

export default {
    install: (app) => {
        app.component('my-popup', MyPopup)
        // app.config.globalProperties.$v3popup = V3Popup
        app.provide('popup', createMount)
    }
}


