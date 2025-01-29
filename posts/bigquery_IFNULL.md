---
title: 'BigQueryで欠損値補完を実施する'
description: BigQueryで欠損値補完を実施します
date: 2023-1-21
category: 
  - Python
tags:
  - Python
  - BigQuery
  - GCP
  - GoogleBigQuery
---
BigQueryで欠損値補完を実施します
<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## データの作成

```SQL
SELECT 
  col1,
  col2,
  col3,
  IFNULL(col1,col2) as f
FROM test.null_sample
```

| Row | col1 | col2 | col3 | f |
| - | - | - | - | - |
| 1 | null | b | c | b |
| 2 | null | null | c | null |
| 3 | a | b | c | a |
| 4 | a | b | null | a |
| 5 | a | null | null | a |


## 参考サイト
[BigQueryで値がNULLだったら別のカラム値を使う方法](https://itips.krsw.biz/bigquery-how-to-use-alternative-column-value-in-case-of-null/#st-toc-h-2)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


