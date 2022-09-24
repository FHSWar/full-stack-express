import dotenv from 'dotenv'

// 从.env.**文件中加载环境变量们
export const useDotenv = (): void => {
	if (process.env.NODE_ENV !== undefined) {
		dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
	} else throw new Error('必须指定已定义的运行环境❗️❗️❗️') // 三元运算里用不了throw
}
