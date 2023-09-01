import { createApp } from 'vue'
import DOMPurify from 'dompurify'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '~styles/index.scss' // 所有样式引入在@/styles/index.scss中处理
import App from './app.vue' // 文件大小写错误不会崩，但是会失去热更新

window.DOMPurify = DOMPurify
createApp(App)
	.use(ElementPlus, {
		locale: zhCn
	})
	.mount('#app')
