---
title: 'pandasの重複削除する'
description: Pandasの重複削除します
date: 2022-5-18
category: 
  - Python
tags:
  - memo
  - Python
  - date
---
Pandasの重複削除します。

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## 架空データの作成
```python
import datetime
import pandas as pd

# 架空のリスト作成
def make_probe(_list, s, e):
    for _id in range(s, e):
        # 日付
        dt = datetime.datetime(2018, 2, 1, 9, 15, 30)
        _list.append([_id+1, d)
    return _list

# リスト作成
probe_list = 
probe_list = make_probe(probe_list, 0, 4)
probe_list = make_probe(probe_list, 0, 10)

# データフレーム化
df = pd.DataFrame(probe_list, columns=['id', 'datetime'])
df.head()
```

| id | datetime | 
| ---- | ---- |
| 1 | 2018-02-01 09:15:30 | 
| 2 | 2018-02-01 09:15:30 | 
| 3 | 2018-02-01 09:15:30 | 
| 4 | 2018-02-01 09:15:30 | 
| 1 | 2018-02-01 09:15:30 | 

## Pandasの重複削除
```python
# 重複削除
df_drop = df['id'].drop_duplicates()
display(df_drop.head())

# 重複削除
df_drop = df[['id', 'datetime']].drop_duplicates()
display(df_drop.head())
```
| index | id | 
| ---- | ---- |
| 0 | 1 | 
| 1 | 2 | 
| 2 | 3 | 
| 3 | 4 | 
| 8 | 5 | 

| index | id | date |
| ---- | ---- | ---- |
| 0 | 1 | 2018-02-01 09:15:30 |
| 1 | 2 | 2018-02-01 09:15:30 |
| 2 | 3 | 2018-02-01 09:15:30 |
| 3 | 4 | 2018-02-01 09:15:30 |
| 8 | 5 | 2018-02-01 09:15:30 |

## まとめ
Pandasの重複削除しました．

## 参考サイト
<!-- [pandasのdatetimeをdateに変換したい](https://teratail.com/questions/132333) -->


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




