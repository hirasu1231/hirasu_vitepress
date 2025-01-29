---
title: 'SQLで地物に重なるデータを操作'
description: SQLで地物に重なるデータを操作します
date: 2023-4-6
category: 
  - Python
tags:
  - Python
  - GIS
  - kepler
  - Colabratry
---
SQLで地物に重なるデータを操作します

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## latlonを抽出
```SQL
-- ST_INTERSECTS():地物の重なりで抽出
-- ST_GEOGPOINT():pointデータを作成
-- ST_GEOGFROMTEX():テキストをgeometry型に変換
SELECT 
  t1.*, 
  t2.*
FROM 
  move as t1
LEFT JOIN
  zone as t2
ON 
  ST_INTERSECTS(
    ST_GEOGPOINT(
      CAST(t1.lon as FLOAT64), 
      CAST(t1.lat as FLOAT64)
    ),
    ST_GEOGFROMTEXT(t2.geometry, make_valid => TRUE)
```

## まとめ
SQLで地物に重なるデータを操作しました。

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


