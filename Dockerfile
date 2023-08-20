#Dockerfile
#制定node镜像的版本，alpine问题多多
# FROM node:18
FROM debian:bookworm

# 换清华源
RUN echo "deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware" > /etc/apt/sources.list && \
    echo "deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware" >> /etc/apt/sources.list && \
    echo "deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware" >> /etc/apt/sources.list && \
    echo "deb https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware" >> /etc/apt/sources.list
RUN echo "Acquire::http::Pipeline-Depth \"0\";" > /etc/apt/apt.conf.d/99nopipelining
RUN apt-get update
RUN apt-get install sudo

# 按照清华源文档和其他软件需要，安装工具
RUN sudo apt-get install -y apt-transport-https ca-certificates curl git

# 安装node18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs
# 设置镜像
RUN npm config set registry https://registry.npmmirror.com/
# 安装 n
RUN npm install -g n && n 8 && n 10 && n 12 && n 14 && n 16 && n 18


#移动当前目录下面的文件到app目录下
ADD . /app/

#进入到app目录下面，类似cd
WORKDIR /app/server

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
