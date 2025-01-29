---
title: 'Vuepressで動画を貼れるようにする'
description: Vuepressで動画を貼れるようにします．
date: 2021-08-11
category: 
  - Vuepress
tags:
  - Vuepress
  - CSS
---
Vuepressで動画を貼れるようにします．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>








## ファイル構成
```
.vuepress
└── public
    └── video
        └── sample.mp4
```

## 動画の貼り付け
以下のコードを動画を貼りたい場所に記述します．
```md
<video width="560" height="240" controls>
  <source src="/video/sample.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
```

<video width="560" height="240" controls>
  <source src="/video/sample.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 


## 参考サイト
[Displaying Videos | VuePress Examples 3.0.1](https://vuepress-examples.netlify.app/demos/video/)






<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>
