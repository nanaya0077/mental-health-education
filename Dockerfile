# 使用轻量级 Node.js 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package.json ./

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
