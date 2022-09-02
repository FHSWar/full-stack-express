<script setup lang="ts">
import { login as loginApi } from '@/api/authentication'

const login = async () => {
	console.log('login', login)
	const res = await loginApi()
	console.log('res', res)
}
</script>

<template>
	<div>
		<h1 class="text-red-300 text-3xl font-bold underline">测试CSS框架</h1>
		<el-button type="primary" @click="login">Primary</el-button>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
	</div>
</template>
