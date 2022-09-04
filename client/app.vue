<script setup lang="ts">
import { login as loginApi, test as testApi } from '~api/authentication'

const login = async () => {
	await loginApi({ a: 1, b: 2, c: 3 })
}
const test = async () => {
	await testApi()
}
</script>

<template>
	<div>
		<h1 class="text-red-300 text-3xl font-bold underline">测试CSS框架</h1>
		<el-button type="primary" @click="login">Primary</el-button>
		<el-button @click="test">Primary</el-button>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
	</div>
</template>
