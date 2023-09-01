export const evilStr = `
	<img src='xxx' onerror="alert(/xss/)" />
	<div style="color: red;">vite真的也能对v-html进行覆写</div>
`
