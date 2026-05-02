# BusAPI · 企业 API 中转站前端

基于 Claude Design 设计稿实现的 BusAPI 前端站点。技术栈：Vite + React 18 + React Router v6。

营销主页采用设计稿中的 **B 方案（Dashboard 前置）**。

## 快速开始

```bash
npm install
npm run dev
```

开发服务器默认运行于 http://localhost:5173。

## 构建

```bash
npm run build
npm run preview
```

## 页面路由

| 路径 | 页面 |
|------|------|
| `/` | 营销主页（Variant B · Dashboard 前置） |
| `/pricing` | 定价 |
| `/models` | 模型市场 |
| `/compare` | 模型对比 |
| `/docs` | 文档 · 快速开始 |
| `/docs/errors` | 文档 · 错误码 |
| `/enterprise` | 企业方案 |
| `/status` | 状态页 |
| `/login` · `/signup` | 登录 / 注册 |
| `/app/dashboard` | 控制台 · 总览 |
| `/app/keys` | API 密钥 |
| `/app/usage` | 用量统计 |
| `/app/team` | 团队成员 |
| `/app/billing` | 账单与发票 |
| `/app/audit` | 审计日志 |
| `/app/settings` | 工作区设置 |
| `/app/playground` | Playground |

## 目录结构

```
src/
├── components/       共享组件（Logo、TopNav、Footer、AppShell 等）
├── pages/            所有页面组件
├── styles/           tokens.css 设计令牌与全局样式
├── App.jsx           路由配置
└── main.jsx          入口
```
