/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue'

	const component: DefineComponent<{}, {}, any>
	export default component
}

interface ImportMetaEnv {
	readonly VITE_API_BASE?: string
	readonly VITE_DOMAIN?: string
	readonly VITE_PORT?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
