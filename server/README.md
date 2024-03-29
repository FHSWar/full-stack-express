# package.json说明

## debug

- 按键：f5

## dependencied

- dayjs 日期库
- dotenv 使.env文件生效
- express 后端框架
- lodash 工具函数库
- mysql2 nodejs的mysql驱动
- reflect-metadata
- sequelize nodejs的ORM框架
- sequelize-typescript 使sequelize有更好的typescript支持
- winston 好用的日志插件

## devDependencies

- @types/cors 类型
- @types/express 类型
- @types/node 类型
- cors 允许跨域
- nodemon 开发热更新
- pm2 生产部署用
- ts-node 配合pm2使tsconfig的项目内路径简写生效
- tsconfig-paths 使tsconfig的项目内路径简写生效
- typescript 健壮代码的基本保障

- sequelize默认选项还是[慎重考虑过](https://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci)的
- 开源社区生态繁荣，开发进度才快，比如mysql单测就[可以借鉴](https://medium.com/nowports-tech/expressjs-and-sequelize-application-tested-with-mocha-chai-supertest-migrations-and-seeds-d306a8ee4add)
- [根据NODE_ENV来切换.env文件](https://stackoverflow.com/questions/55406055/toggle-between-multiple-env-files-like-env-development-with-node-js)
