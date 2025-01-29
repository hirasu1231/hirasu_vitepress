---
title: 'geometry(ポイント型)で座標抽出'
description: geometry(ポイント型)で座標抽出します
date: 2023-4-7
category: 
  - Python
tags:
  - Python
  - GIS
  - kepler
  - Colabratry
---
geometry(ポイント型)で座標抽出します

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## latlonを抽出
```python
# latlonを抽出
lat = gdf["geometry"].apply(lambda row: row.y)
lon = gdf["geometry"].apply(lambda row: row.x)
```

## まとめ
geometry(ポイント型)で座標抽出しました。

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


