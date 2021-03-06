# Travis CI

## GitHub Pages and Travis CI

1. 在` docs/.vuepress/config.js` 中设置正确的 `base`。

   如果你打算发布到 `https://<USERNAME or GROUP>.github.io/`，则可以省略这一步，因为 `base `默认即是 `"/"`。

   如果你打算发布到 `https://<USERNAME or GROUP>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base`设置为 `"/<REPO>/"`。

2. 在项目的根目录创建一个名为 `.travis.yml`的文件；

3. 在本地执行 `yarn` 或 `npm install` 并且提交生成的 lock 文件（即 `yarn.lock` 或 `package-lock.json`）；

4. 使用 GitHub Pages 部署提供程序模板并遵循 [Travis 文档](https://docs.travis-ci.com/user/deployment/pages/)。

```yaml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn build # npm run build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GH_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: main
```

## 生成 GH_TOKEN

<img :src="$withBase('/travis-ci/1.png')" alt="1">
<img :src="$withBase('/travis-ci/2.png')" alt="2">
<img :src="$withBase('/travis-ci/3.png')" alt="3">
<img :src="$withBase('/travis-ci/4.png')" alt="4">

## 在 Travis-ci 中配置 GH_TOKEN

[travis-ci官网](https://travis-ci.com/signin)
<img :src="$withBase('/travis-ci/5.png')" alt="5">
<img :src="$withBase('/travis-ci/6.png')" alt="6">
<img :src="$withBase('/travis-ci/7.png')" alt="7">
<img :src="$withBase('/travis-ci/8.png')" alt="8">
<img :src="$withBase('/travis-ci/9.png')" alt="9">