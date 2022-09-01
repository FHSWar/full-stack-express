import { resolve } from 'path'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    resolve: {
        alias: {
            /* https://antfu.me/posts/isomorphic-dirname
            - dirname(fileURLToPath(import.meta.url))是esmodule下__dirname的替代品
            - 或者eslint开启node: true */
            '@': resolve(__dirname, './src/')
        }
    },
    plugins: [
        // 兼容上古浏览器
        legacy({
            targets: ['Chrome 70'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        }),
        // 支持sfc
        vue(),
        // 支持jsx
        vueJsx()
    ]
})
