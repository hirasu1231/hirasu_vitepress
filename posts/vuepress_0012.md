---
title: 'Vuepressで音声ファイルを貼れるようにする'
description: Vuepressで音声ファイルを貼れるようにします．
date: 2022-03-09
category: 
  - Vuepress
tags:
  - Vuepress
  - CSS
---
Vuepressで音声ファイルを貼れるようにします．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>








## ファイル構成
```
.vuepress
└── public
    └── /audio/audio_example/
        └── drums.wav
```

## 動画の貼り付け
以下のコードを動画を貼りたい場所に記述します．
```md
<audio src="/audio/audio_example/drums.wav" controls></audio>
```

<audio src="/audio/audio_example/drums.wav" controls></audio>


## 参考サイト
[Displaying Videos | VuePress Examples 3.0.1](https://vuepress-examples.netlify.app/demos/video/)






<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>
