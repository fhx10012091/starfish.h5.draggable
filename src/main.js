import * as Vue from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import ConfigObj from './config'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/styles/base.scss'
import '@/assets/styles/icon.scss'
let app = Vue.createApp(App)
let UIComponents = ConfigObj.UIComponents
let UIname = ConfigObj.UIname
app.use(ElementPlus)

for(let key in UIComponents){
    app.component(key, UIComponents[key])
}
if(!window.librarys){
    window.librarys = {}
}
window.librarys.uiconponent = {
    UIComponents,
    UIname
}

app.mount('#app')