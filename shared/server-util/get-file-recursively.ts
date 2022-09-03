import { readdirSync, statSync } from 'fs'

export const getFileRecursively = (
	absoluteFolderPath: string,
	// 接收者独立于递归，收集所有递归返回的内容，这样写就省了一个handler
	receiver = [] as string[]
): string[] => {
	const files = readdirSync(absoluteFolderPath)

	// 用forEach有receiver可能为undefined的神奇ts报错
	for (const file of files) {
		const nestedPath = absoluteFolderPath + '/' + file

		if (statSync(nestedPath).isDirectory()) {
			getFileRecursively(nestedPath, receiver)
		} else {
			receiver.push(nestedPath)
		}
	}

	return receiver
}
