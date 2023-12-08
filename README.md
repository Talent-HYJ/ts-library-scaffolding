#### ts-library-scaffolding

### Information
```bash
  快速开发纯js库的脚手架，支持TS
```
### Install
```bash
  git clone https://github.com/Talent-HYJ/ts-library-scaffolding
  or
  git clone https://gitee.com/Talent-HYJ/ts-library-scaffolding.git
```
 ### Quick Start
  ```bash
  pnpm run server
  ```
 ### Build
 ```bash
  pnpm run build
  ```
  ### configure

   release-it.json配置

 ```bash
  "github": {
    "release": true, // github 是否发行release
    "assets": ["dist"] // 发行release 需要上传的文件
  }
  "git": {
    "requireBranch": "dev", // 自动发布所需的分支
    "commitMessage": "release: v${version}" // 设置commit提交内容
  }，
  "npm": {
    "publish": false, // 是否发布到npm
    "ignoreVersion": false
  }
  ```
  更多详细相关配置：https://github.com/release-it/release-it
 ### Publish
 ```bash
  如果需要发布到npm，需要确保当前镜像是npm仓库，且已登录npm，
  自动发布根据release-it相关配置进行发布，
  pnpm run release
  ```



