<script setup lang="ts">
import {
	login as loginApi,
	logout as logoutApi,
	register as registerApi,
	test as testApi
} from '~api/authentication'

const login = async () => {
	const a = await loginApi()
	console.log('a', a)
}
const logout = async () => {
	await logoutApi()
}
const register = async () => {
	await registerApi()
}
const test = async () => {
	await testApi()
}
</script>

<template>
	<div>
		<h1 class="text-blue-300 text-3xl font-bold underline">测试CSS框架</h1>
		<el-button type="primary" @click="register">注册</el-button>
		<el-button type="primary" @click="login">登陆</el-button>
		<el-button type="info" @click="logout">退出</el-button>
		<el-button @click="test">测嵌套</el-button>
	</div>
</template>
