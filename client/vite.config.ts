import { resolve } from 'path'

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

// @ts-ignore
import { sanitizeVHtml } from './utils/custom-transform'

export default defineConfig({
	base: './',
	resolve: {
		alias: {
			/* https://antfu.me/posts/isomorphic-dirname
            - dirname(fileURLToPath(import.meta.url))是esmodule下__dirname的替代品
            - 或者eslint开启node: true */
			'~api': resolve(__dirname, './api/'),
			'~assets': resolve(__dirname, './assets/'),
			'~components': resolve(__dirname, './components/'),
			'~layout': resolve(__dirname, './layout/'),
			'~public': resolve(__dirname, './public/'),
			'~styles': resolve(__dirname, './styles/'),
			'~types': resolve(__dirname, './types/'),
			'~utils': resolve(__dirname, './utils/'),
			'~views': resolve(__dirname, './views/')
		}
	},
	plugins: [
		// 兼容上古浏览器
		legacy({
			targets: ['Chrome 70'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		}),
		// 支持sfc
		vue({
			template: {
				compilerOptions: {
					// 自定义转换函数
					nodeTransforms: [sanitizeVHtml]
				}
			}
		}),
		// 支持jsx
		vueJsx()
	],
})
