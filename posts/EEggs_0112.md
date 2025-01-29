---
title: 'Pythonでndjsonの読み込みを実施する'
description: Pythonでndjsonの読み込みを実施します
date: 2022-7-23
category: 
  - Python
tags:
  - memo
  - Python
  - Pandas
  - ndjson
---
Pythonでndjsonの読み込みを実施します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ファイル構成
```
project_dir
├── ./data/prefecture.ndjson
└── plot_2bar.ipynb <- 実行用ノートブック
```

## データのダウンロード
下記のサイトからデータをダウンロードします。

[ワクチン接種状況オープンデータ](https://info.vrs.digital.go.jp/dashboard/)

## ndjsonの読み込み

```python
import json
import pandas as pd

df_pref = pd.read_json('./data/prefecture.ndjson', lines=True)
df_pref.head()
# df_pref.to_csv("covid19_vaccine_pref.csv")
```

!(/image/df_vaccine.png)


## まとめ
Pythonでndjsonの読み込みを実施しました．

## 参考サイト
[pandasでndjsonを読み込む（ワクチン接種状況オープンデータ）](https://qiita.com/yasubei/items/6725cbbd4071a48c0605)

[ワクチン接種状況オープンデータ](https://info.vrs.digital.go.jp/dashboard/)

[ワクチン接種状況オープンデータ 定義書](https://cio.go.jp/c19vaccine_opendata)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




