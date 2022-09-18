import { Optional } from 'sequelize'
import {
	AllowNull,
	Column,
	DataType,
	Is,
	Model,
	Table
} from 'sequelize-typescript'

// 接口定义
interface IRole {
	name: string
	description: string
	readonly id: number
	readonly createdAt: Date
	readonly updatedAt: Date
	readonly deleteAt?: Date
}

// 表格自动生成的字段在这里Optional掉
interface IRoleCreationAttributes
	extends Optional<IRole, 'id' | 'createdAt' | 'updatedAt' | 'deleteAt'> {}

@Table({
	freezeTableName: true,
	tableName: 'role',
	// paranoid: true, // 自动生成'deleteAt'
	underscored: true
})
class Role extends Model<IRole, IRoleCreationAttributes> {
	@AllowNull(false)
	@Is(async function isNotDeleteUnique(this: any, value: string) {
		if (this.isNewRecord !== undefined) {
			// 结合paranoid，间接实现部分索引
			const res = await Role.findAll({ where: { name: value } })
			if (res.length !== 0) throw new Error('同名角色只能有一个!')
		}
	})
	@Column({
		comment: '角色名称',
		type: DataType.STRING(50)
	})
	declare name: string // 没有declare关键字会报错

	@AllowNull(false)
	@Column({
		comment: '角色描述',
		type: DataType.STRING(80)
	})
	declare description: string
}

export default Role
