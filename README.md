- https://zenn.dev/c6tower/scraps/2827a3c585f599
```
# vitepressがインストールされる
$ npm add -D vitepress

# 対話形式でvitepressの初期設定が始まる, 練習用なので設定は雑に下記の通り
$ npx vitepress init
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  Practice Vitepress
│
◇  Site description:
│  temp site for practicing vitepress
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.

Tips:
- Make sure to add  docs/.vitepress/dist and  docs/.vitepress/cache to your .gitignore file.
```

# gitignoreに追記しておく。
```
$ echo -e ".vitepress/cache\n.vitepress/dist" > .gitignore
```
