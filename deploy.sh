#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# npm install  # 第一次运行的时候要先跑这一句install
npm run build  # 生成静态文件

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io

# git push -f git@github.com:yiyuan1991/yiyuan1991.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:FuxiCV/fuxicv.git master

cd -