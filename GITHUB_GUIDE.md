# GitHub 仓库推送指南

## 📦 项目准备完成

你的大学生心理健康测试项目已经创建完成！以下是项目文件结构：

```
mental-health-tests/
├── README.md                 # 项目说明文档
├── GITHUB_GUIDE.md          # 本推送指南
├── index.html               # 主页 - 测试导航
├── holland-test/            # 霍兰德测试目录
│   ├── index.html          # 测试问卷页面
│   ├── result.html         # 结果分析页面
│   ├── css/
│   │   └── style.css       # 样式文件
│   └── js/
│       └── test.js         # 测试逻辑
└── assets/                  # 静态资源目录
    └── images/             # 图片资源
```

## 🚀 推送到 GitHub 的步骤

### 方法一：使用 GitHub Desktop（推荐新手）

1. **下载安装 GitHub Desktop**
   - 访问 https://desktop.github.com/
   - 下载并安装

2. **登录 GitHub 账号**
   - 打开 GitHub Desktop
   - 使用你的 GitHub 账号登录

3. **创建新仓库**
   - 点击 `File` → `New Repository`
   - 或按 `Ctrl + N`

4. **配置仓库信息**
   - **Name**: `mental-health-tests`（或你喜欢的名字）
   - **Description**: `大学生心理健康课程 - 心理测试平台`
   - **Local path**: 选择项目所在文件夹的父目录
   - 勾选 `Initialize this repository with a README`（可选）

5. **添加项目文件**
   - 将你的项目文件复制到新创建的仓库文件夹中
   - 在 GitHub Desktop 中查看变更

6. **提交并推送**
   - 填写提交信息：如 "Initial commit: 添加霍兰德职业兴趣测试"
   - 点击 `Commit to main`
   - 点击 `Publish repository`
   - 选择公开或私有仓库

### 方法二：使用命令行

1. **打开终端/命令行**
   - Windows: 在项目文件夹中右键 → Git Bash Here
   - Mac/Linux: 打开 Terminal，cd 到项目目录

2. **初始化 Git 仓库**
   ```bash
   git init
   ```

3. **添加所有文件**
   ```bash
   git add .
   ```

4. **提交文件**
   ```bash
   git commit -m "Initial commit: 添加霍兰德职业兴趣测试"
   ```

5. **创建 GitHub 仓库**
   - 登录 GitHub 网站
   - 点击右上角 `+` → `New repository`
   - 填写仓库名称和描述
   - 点击 `Create repository`

6. **关联远程仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   ```

7. **推送到 GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

## 🌐 启用 GitHub Pages（在线访问）

推送完成后，你可以启用 GitHub Pages 让测试可以在线访问：

1. **进入仓库设置**
   - 打开你的 GitHub 仓库页面
   - 点击 `Settings` 标签

2. **配置 Pages**
   - 左侧菜单点击 `Pages`
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `main`，文件夹选择 `/(root)`
   - 点击 `Save`

3. **等待部署**
   - 几分钟后，你的页面会部署完成
   - 访问地址：`https://你的用户名.github.io/仓库名/`

## 📝 后续更新代码

当你修改代码后，需要推送到 GitHub：

### 使用 GitHub Desktop
1. 查看变更
2. 填写提交信息
3. 点击 `Commit to main`
4. 点击 `Push origin`

### 使用命令行
```bash
git add .
git commit -m "描述你的修改"
git push
```

## 🔧 常见问题

### Q: 提示 "git" 不是内部或外部命令？
A: 你需要安装 Git。访问 https://git-scm.com/downloads 下载安装。

### Q: 推送时提示权限错误？
A: 确保你已配置 GitHub 凭据：
```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub邮箱"
```

### Q: 如何更新已推送的内容？
A: 修改文件后，重复 "添加-提交-推送" 的步骤即可。

### Q: GitHub Pages 没有显示最新内容？
A: GitHub Pages 部署可能需要几分钟，请耐心等待。可以在仓库的 Actions 标签中查看部署状态。

## 📚 学习资源

- [GitHub 官方文档](https://docs.github.com/cn)
- [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [GitHub Pages 文档](https://docs.github.com/cn/pages)

---

**祝你推送顺利！** 🎉
