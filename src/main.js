import { createApp } from 'vue'
import App from './App.vue'

import 'leaflet/dist/leaflet.css'
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from 'leaflet'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import '../src/utils/leaflet.ChineseTmsProviders.js'
import '../src/utils/src'
import 'proj4'
import 'proj4leaflet'
const app = createApp(App)
app.config.productionTip = false;
// app.L = app.prototype.$L = L
app.L = app.config.globalProperties.L = L
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
})


app.mount('#app')
