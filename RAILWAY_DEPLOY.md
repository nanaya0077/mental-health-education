# Railway 部署指南

## 📦 项目已准备就绪

项目已添加 Railway 部署所需的配置文件：

- `package.json` - Node.js 项目配置
- `railway.json` - Railway 部署配置
- `nixpacks.toml` - Nixpacks 构建配置
- `Dockerfile` - Docker 容器配置（备选方案）
- `.dockerignore` - Docker 忽略文件

## 🚀 部署到 Railway 的步骤

### 步骤 1：登录 Railway

1. 访问 https://railway.app/
2. 使用 GitHub 账号登录（推荐）
3. 完成账号注册/登录流程

### 步骤 2：创建新项目

1. 点击 **New Project**
2. 选择 **Deploy from GitHub repo**
3. 选择你的仓库：`nanaya0077/mental-health-education`
4. 点击 **Add Variables**（可选，本项目不需要环境变量）
5. 点击 **Deploy**

### 步骤 3：等待部署完成

Railway 会自动：
- 检测项目类型（Node.js 静态网站）
- 安装依赖
- 构建并部署

部署完成后，你会看到一个绿色的 ✅ 标记。

### 步骤 4：获取域名

1. 点击部署的服务
2. 在 **Settings** 标签下找到 **Domains**
3. 点击 **Generate Domain**
4. Railway 会为你生成一个免费域名，如：`mental-health-education-production.up.railway.app`

### 步骤 5：自定义域名（可选）

如果你想使用自己的域名：
1. 在 **Domains** 部分点击 **Custom Domain**
2. 输入你的域名
3. 按照提示配置 DNS 记录

## 🔄 自动部署

Railway 会自动监听 GitHub 仓库的变更：
- 每次推送到 `main` 分支，Railway 会自动重新部署
- 你可以在 Railway 控制台查看部署日志

## 📊 监控和管理

在 Railway 控制台你可以：
- 查看实时日志
- 监控资源使用情况
- 查看部署历史
- 配置环境变量
- 设置自定义域名

## 🛠 故障排除

### 部署失败
1. 检查 Railway 的部署日志
2. 确认 `package.json` 和 `railway.json` 格式正确
3. 尝试重新部署

### 网站无法访问
1. 确认部署状态为 **Healthy**
2. 检查生成的域名是否正确
3. 查看应用日志排查错误

### 静态资源加载失败
确保所有资源路径使用相对路径：
- ✅ `./holland-test/index.html`
- ❌ `/holland-test/index.html`

## 💡 提示

- Railway 免费套餐包含每月 $5 的额度，足够个人项目使用
- 如果超出免费额度，可以考虑使用 GitHub Pages（完全免费）
- Railway 支持自动 HTTPS，无需额外配置

## 📚 相关链接

- [Railway 文档](https://docs.railway.app/)
- [Railway GitHub 部署指南](https://docs.railway.app/deploy/deployments)
- [项目 GitHub 仓库](https://github.com/nanaya0077/mental-health-education)

---

**部署完成后，你的网站就可以通过 Railway 提供的域名在线访问了！** 🎉
