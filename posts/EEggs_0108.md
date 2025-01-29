---
title: 'pandasでテキストファイルを読み込む'
description: pandasでテキストファイルを読み込みを実装します．
date: 2022-6-23
category: 
  - Python
tags:
  - memo
  - Python
  - Pandas
  - text_file
---
pandasでテキストファイルを読み込みを実装します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ファイル構成
```
project_dir
├── ./data/tblT000848C04.txt
└── pandas_txt.ipynb <- 実行用ノートブック
```

## データのダウンロード
下記のサイトから宮城県　国勢調査(txtファイル)をダウンロードします。

[e-stat 宮城県　国勢調査(txt)](https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=A&serveyId=A002005212015&statsId=T000848)

## pandasでテキストファイルを読み込む
```python
import pandas as pd

# データの読み込み
# T000848001	T000848002	T000848003	T000848004
# 人口総数	男	女	世帯総数
df_gender = pd.read_table("./data/tblT000848C04.txt", encoding='SJIS', sep=',')
df_gender = df_gender[1:].reset_index(drop=True) # 最初の数行は削除
df_gender.head()
```


!(/image/pandas_txt.png)

## まとめ
pandasでdbfを読み込みを実装しました．

## 参考サイト
[e-stat 宮城県　国勢調査(txt)](https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=A&serveyId=A002005212015&statsId=T000848)

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




