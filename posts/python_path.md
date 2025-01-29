---
title: 'Pythonでファイル・ディレクトリを確認する'
description: Pythonでファイル・ディレクトリを確認します．
date: 2023-1-27
category: 
  - Python
tags:
  - memo
  - Python
  - kowaza0708
---
Pythonでファイル・ディレクトリを確認します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ファイルがあるディレクトリ名を取得する
ファイルがあるディレクトリ名を取得します。

```python
import os

#フォルダパス取得
os.path.dirname(ファイルのフルパス)
#ファイル名取得
os.path.basename(ファイルのフルパス)
```

## ファイル・ディレクトリが存在するかの確認
ファイル・ディレクトリが存在するかの確認します。

```python
import os

# ファイルまたはディレクトリ（フォルダ）の存在確認
os.path.exists("ファイルのパス")

# ファイルの存在確認
os.path.isfile("パス")

# ディレクトリ（フォルダ）の存在確認
os.path.isdir("パス")
```

## まとめ
Pythonでファイル・ディレクトリを確認しました．

## 参考サイト
[os.path](https://note.nkmk.me/python-os-exists-isfile-isdir/)

[【Python】dirname・basenameでフォルダ名・ファイル名を取得](https://pg-chain.com/python-dirname-basename)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




