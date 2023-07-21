#Dockerfile
#制定node镜像的版本
FROM node:18-alpine

#移动当前目录下面的文件到app目录下
ADD . /app/

#进入到app目录下面，类似cd
WORKDIR /app/server

#设置镜像
RUN npm config set registry https://registry.npmmirror.com/

#安装依赖
RUN npm install -g pnpm
RUN npm install -g pm2
RUN pnpm i

#编译
RUN npm run build



#对外暴露的端口
EXPOSE 7878

#程序启动脚本
CMD ["pm2-runtime", "start", "pm2.yaml"]
