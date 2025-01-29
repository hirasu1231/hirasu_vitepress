---
title: 'エラーメッセージ「TypeError： Object of type int64 is not JSON serializable」'
description: エラーメッセージ「TypeError： Object of type int64 is not JSON serializable」に対応します
date: 2023-1-20
category: 
  - Python
tags:
  - Python
  - error
  - GCP
  - GoogleBigQuery
---
エラーメッセージ「TypeError： Object of type int64 is not JSON serializable」に対応します。
<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




## エラー：TypeError: Object of type int64 is not JSON serializable

**エラーメッセージ**
```python
# DataFrameを投入
bq_client.insert_rows_from_dataframe(insert_table_info, insert_df)

# TypeError: Object of type int64 is not JSON serializable
```

**insert_dfのtype**
columns	type
0	date	object
1	id	Int64

Int64は欠損値を含む整数型で、int64は欠損値を含めない整数型です。

BQに入力する際は、Int64をint64に変更すると上手くいく。

```python
insert_df["id"] = insert_df["id"].astype('int')

# columns	type
# 0	date	object
# 1	id	int64
```

[Pandas で欠損値を含む整数型を扱う](https://qiita.com/hoto17296/items/b6c90db4b9bcdb7b6d78)


```python
table = dataset.table("merge_ble_table")

bq_client.delete_table(table)
```

## 参考サイト
[Pandas で欠損値を含む整数型を扱う](https://qiita.com/hoto17296/items/b6c90db4b9bcdb7b6d78)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


