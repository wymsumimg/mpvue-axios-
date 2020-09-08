import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


export default {
    config: {
      pages: [],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#000',
        navigationBarTitleText: '美美小程序',
        navigationBarTextStyle: 'black'
      }
    }
  }