---
title: '[小ネタ001]PandasとBig Queryを連携させる'
description: PandasとBig Queryを連携させます．
date: 2022-2-17
category: 
  - BigQuery
tags:
  - memo
  - Python
  - BigQuery
  - GCP
  - GoogleBigQuery
---
PandasとBig Queryを連携させます.

<!-- https://www.hamlet-engineer.com -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ライブラリのインストール
下記のコードでライブラリをインストールします．
```python
!pip install pandas-gbq
```

## PandasとBig Queryの連携
下記のコードでPandasとBig Queryを連携させます.

```python
import pandas as pd

project_id = '**＊＊＊'
dataset_id = '**＊＊＊'
table_id = '**＊＊＊'

query = f'''SELECT * 
            FROM {project_id}.{dataset_id}.{table_id}'''

# strベースのクエリと、project_idが必要
df_gbq = pd.read_gbq(query, project_id)
```


## まとめ
PandasとBig Queryを連携させました．

## 参考サイト
[BigQueryとPython(pandas)を連携させてみた](https://qiita.com/i_am_miko/items/68cb516ad2be61d59554)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




