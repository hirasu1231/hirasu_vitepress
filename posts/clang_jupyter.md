---
title: 'C言語に対応したjupyter Labを実装する'
description: C言語に対応したjupyter Labを実装します．
date: 2021-09-09
category: 
  - Python
tags:
  - Python
  - jupyter
  - Docker
  - C
---
<!-- https://www.hamlet-engineer.com -->
C言語に対応したjupyter Labを実装します．

今回はDockerで実装します．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## ファイル構成
プロジェクトディレクトリはsegmentationとしています．度々，省略しています．
```
jupyter-c-kernel <- ここがDockerの/home/jovyan/workと同期します
└── docker-compose.yml
```


## C言語に対応したjupyter notebook

### docker-compose.ymlの作成
下記にC言語に対応したjupyter Labのdocker-compose.ymlを作成します．

下記のコードでは，JupyterLabで起動しています．
```js
version: "3"
services:
  jupyter_c_kernel:
    image: brendanrius/jupyter-c-kernel:latest
    stdin_open: true
    tty: true
    volumes:
      - ./:/home/jovyan/work
    ports:
      - 8050:8050 # for Dash
      - 75:8888 # for Jupyterlab
    command:
      sh -c 'pip install --upgrade pip && pip install jupyterlab && jupyter lab'
```

### dockerのコンテナの起動
下記のコードでdockerのコンテナの起動します．
```
docker-compose up
```

上記のコードでは，http://localhost:75/token=＊＊＊＊＊でjupyter notebookが起動します．


## 参考サイト
[brendan-rius/jupyter-c-kernel](https://github.com/brendan-rius/jupyter-c-kernel)






<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>