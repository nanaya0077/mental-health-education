# 使用轻量级 Node.js 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 安装 serve 包
RUN npm install -g serve

# 复制所有文件到工作目录
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["sh", "-c", "serve -s . -l ${PORT:-3000}"]
