const { exec } = require('child_process')
const { loopWhile } = require('deasync')
const { readdirSync, statSync } = require('fs')

const GREEN = '\x1b[32m%s\x1b[0m'
const RED = '\x1b[31m%s\x1b[0m'

const imgFileSuffixArr = ['.gif', '.jpg', '.jpeg', '.png', '.svg', '.webp']
const noNeedCheckDirArr = [
	'.DS_Store',
	'.git',
	'.husky',
	'.vscode',
	'dist',
	'node_modules',
	'public'
]
const noNeedCheckFileArr = [
	'.editorconfig',
	'.eslintrc.yaml',
	'.gitignore',
	'.prettierrc.yaml',
	'.stylelintrc.yaml',
	'README.md'
]
const rootDir = process.cwd()

// 检查目录格式
const checkNameFormat = (nameArr, hint, pathArr) => {
	let haveWrongNameFormat = false
	const regex = /^[a-z][a-z-.]*[a-z]$/
	nameArr.forEach((name) => {
		if (!regex.test(name)) {
			if (pathArr) {
				const filePath = pathArr.find((item) => item.endsWith(name))
				try {
					// 这里失败说明是被删除的文件
					statSync(`${rootDir}/${filePath}`)
					console.error(RED, `文件命名不符合规范：${name}`)
					haveWrongNameFormat = true
				} catch (e) {
					console.log('checkNameFormat silent error', e.toString())
				}
			} else {
				console.error(RED, `文件命名不符合规范：${name}`)
				haveWrongNameFormat = true
			}
		}
	})
	if (haveWrongNameFormat) {
		console.error(RED, '请改为 kebab case 格式！')
		process.exit(1)
	} else {
		console.log(GREEN, hint)
	}
}

// 通过文件后缀判断是否是图片
const imgPathArr = []
const checkIsImg = (path) => {
	let isImg = false
	imgFileSuffixArr.forEach((suffix) => {
		if (path.endsWith(suffix)) {
			isImg = true
			imgPathArr.push(path)
		}
	})
	return isImg
}

// 获取所有目录
const dirArr = []
const getAllDirectories = (dir) => {
	const arr = readdirSync(dir).filter(
		(item) => !noNeedCheckDirArr.includes(item)
	)
	arr.forEach((item) => {
		const path = `${dir}/${item}`
		if (statSync(path).isDirectory()) {
			dirArr.push(item)
			getAllDirectories(path)
		}
	})
}

// 由于文件夹不会在 git staged 中体现，考虑到文件夹为空的情况，这里应该全局扫描
getAllDirectories(rootDir)
checkNameFormat(dirArr, '文件夹命名规范校验已完成。✨')

let done = false
const gitStatus = exec('git diff --name-only --staged')
gitStatus.stdout.on('data', (paths) => {
	const pathArr = paths.split('\n') // 处于 staged 的文件列表拆为数组
	checkNameFormat(
		pathArr
			.filter((path) => path !== '')
			.map((path) => path.split('/').at(-1))
			.filter((filename) => !noNeedCheckFileArr.includes(filename)),
		'文件命名规范校验已完成。✨',
		pathArr
	) // 校验文件名格式

	// 校验是图片的文件们
	let sizeTooLarge = false
	pathArr.forEach((path) => checkIsImg(path)) // 维护出 imgPathArr
	imgPathArr.forEach((path) => {
		try {
			const stagedImgSize = statSync(path).size
			if (stagedImgSize > 150 * 1024) {
				console.error(RED, '单个图片文件超过150kb：', path)
				sizeTooLarge = true
			}
		} catch (e) {
			// staged 可能为删除文件，此时 statSync 会报错，捕获后不执行操作。
		}
	})
	if (sizeTooLarge) {
		console.error(RED, '请调整图片体积！')
		process.exit(1)
	} else {
		console.log(GREEN, '图片体积校验已完成。✨')
	}

	done = true
})
loopWhile(() => !done)
