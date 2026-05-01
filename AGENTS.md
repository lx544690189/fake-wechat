# 概述
始终用中文和我对话

# 项目规范
使用pnpm管理包

## 基础信息

技术栈：react、typescript、less、vite、valtio、lodash-es、dayjs、classnames

## 项目目录

- `src`
  - `App`：应用入口组件，负责挂载页面
  - `assets`：静态资源
  - `components`：公共组件
  - `pages`：页面级模块
  - `stores`：全局或页面共享状态
  - `main.tsx`：React 应用启动入口
  - `index.less`：全局样式

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

### git提交

提交信息使用中文，参考以下格式：

```txt
<feat(xxx): 一句话概括>

- <详细变更点 xxx>
- <详细变更点 xxx>
...
```

*注意：改动比较多时，需要按功能模块、类型（feat、chore等）拆分多个提交*