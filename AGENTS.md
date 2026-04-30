# 概述
始终用中文和我对话

# 项目规范
使用pnpm管理包

## 基础信息

技术栈：react、typescript、less、vite、valtio、lodash-es、dayjs、classnames

## 代码规范

### react

- **尽量不使用react的hooks**，状态相关使用valtio
- react组件只作为UI展示，逻辑集中在状态层
- 组件按功能拆分，防止文件过长

### 样式

- 必须使用 Less 编写样式
- 样式文件与组件同目录，命名为 `index.less`
- 非公共组件，必须使用css module做样式隔离

### 状态管理

- 使用 Valtio 进行状态管理
- 必须使用 class 创建状态实例
