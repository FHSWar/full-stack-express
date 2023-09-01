import { createSimpleExpression } from '@vue/compiler-core'

import type { NodeTransform } from '@vue/compiler-core'

// 定义自定义的 AST 转换函数
export const sanitizeVHtml: NodeTransform = (node) => {
	if (node.type === 1 /* NodeTypes.ELEMENT */) {
		for (let i = 0; i < node.props.length; i++) {
			const prop = node.props[i]
			if (prop.type === 7 /* NodeTypes.DIRECTIVE */ && prop.name === 'html') {

				debugger
				// @ts-ignore
				prop.exp = createSimpleExpression(`DOMPurify.sanitize(${prop?.exp?.content})`, false)
			}
		}
	}
}
