---
title: 'BigQueryで最初の5行を出力する'
description: BigQueryで最初の5行を出力します
date: 2023-1-21
category: 
  - Python
tags:
  - Python
  - BigQuery
  - GCP
  - GoogleBigQuery
---
BigQueryで最初の5行を出力します
<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## 最初の4行

```SQL
SELECT 
  *
FROM 
  user 
LIMIT 4;
```

## 最初の4行から3行分

```SQL
SELECT 
  *
FROM 
  user 
LIMIT 3
OFFSET 4;
```

select * from user limit 3 offset 4;



## 参考サイト
[取得するデータの数と開始位置を指定(LIMIT句, OFFSET句)](https://www.dbonline.jp/sqlite/select/index10.html)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


