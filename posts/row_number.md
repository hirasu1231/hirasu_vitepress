---
title: '時間が早い順に連続値を追加する'
description: 時間が早い順に連続値を追加する方法をPandasとBQで記述します．
date: 2023-4-4
category: 
  - Python
tags:
  - memo
  - Python
  - Pandas
---
時間が早い順に連続値を追加する方法をPandasとBQで記述します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## Pandasで作成

```python
# 連続値を追加
df = df.sort_values('dep_time', ascending=False)
df["order_number"] = df(["id"]).cumcount()
```

## BigQueryで作成

```sql
select 
  * ,
  ROW_NUMBER() OVER(PARTITION BY id ORDER BY dep_time) AS order_number
from 
  t1
```

## まとめ
時間が早い順に連続値を追加する方法をPandasとBQで記述しました．

## 参考サイト

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


