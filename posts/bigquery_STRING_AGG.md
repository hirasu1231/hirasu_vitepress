---
title: 'BigQueryで特定カラムの要素を結合する'
description: BigQueryで特定カラムの要素を結合します
date: 2023-3-20
category: 
  - Python
tags:
  - Python
  - BigQuery
  - GCP
  - GoogleBigQuery
---
BigQueryで特定カラムの要素を結合します
<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## データの用意

```SQL
WITH testData AS (
  SELECT 1 AS id, '赤身' as type,  'ブリ' AS name UNION ALL
  SELECT 2, '赤身', 'いわし' UNION ALL
  SELECT 3, '赤身', 'アジ' UNION ALL
  SELECT 4, '赤身', 'マグロ' UNION ALL
  SELECT 5, '赤身', 'カツオ' UNION ALL
  SELECT 6, '白身', 'タイ' UNION ALL
  SELECT 7, '赤身', 'サバ' UNION ALL
  SELECT 8, '白身', 'タラ' UNION ALL
  SELECT 9, '白身', 'フグ' UNION ALL
  SELECT 10, '白身', 'サケ' UNION ALL
  SELECT 11, '白身', 'サケ'
)
SELECT  * FROM testData;
```

| id | type | name |
| - | - | - |
| 1 | 赤身 | ブリ |
| 2 | 赤身 | いわし |
| 3 | 赤身 | アジ |
| 4 | 赤身 | マグロ |
| 5 | 赤身 | カツオ |
| 6 | 白身 | タイ |
| 7 | 赤身 | サバ |
| 8 | 白身 | タラ |
| 9 | 白身 | フグ |
| 10 | 白身 | サケ |
| 11 | 白身 | サケ |

## 単純結合

```SQL
SELECT  type, STRING_AGG(name) AS names  FROM testData GROUP BY type ;
```

| type | names |
| - | - |
| 赤身 | ブリ,いわし,アジ,マグロ,カツオ,サバ |
| 白身 | タイ,タラ,フグ,サケ,サケ |

## 重複なし結合

```SQL
SELECT  type, STRING_AGG((DISTINCT name)  FROM testData GROUP BY type ;
```

| type | names |
| - | - |
| 赤身 | ブリ,いわし,アジ,マグロ,カツオ,サバ |
| 白身 | タイ,タラ,フグ,サケ |

## 重複なし結合(ソート)

```SQL
SELECT  type, STRING_AGG((DISTINCT name ORDER BY name asc )  FROM testData GROUP BY type ;
```

| type | names |
| - | - |
| 赤身 | いわし,アジ,カツオ,サバ,ブリ,マグロ |
| 白身 | サケ,タイ,タラ,フグ |

## 区切り文字つきの結合

```SQL
SELECT  type, STRING_AGG(DISTINCT name ,  'と'  ORDER BY name asc)  FROM testData GROUP BY type；
```

| type | names |
| - | - |
| 赤身 | いわしとアジとカツオとサバとブリとマグロ |
| 白身 | サケとタイとタラとフグ |


## 参考サイト
[BigQueryの標準SQLでGROUP_CONCATしたいときはSTRING_AGG](https://uyamazak.hatenablog.com/entry/2020/12/24/120052)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


