---
title: 'Pythonで地物の最大最小座標を算出する'
description: Pythonで地物の最大最小座標を算出します．
date: 2023-4-3
category: 
  - Python
tags:
  - memo
  - Python
  - Shapely
  - Pandas
  - kowaza0708
---
Pythonで地物の最大最小座標を算出します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ファイル構成

```
project_dir
├── /data
│   ├── /R2_boundary/04_miyagi/04_miyagi.shp
│   └── (省略)
└── merge_bound.ipynb <- 実行用ノートブック
```

## 地物の最大最小座標
地物の最大最小座標を算出します．

```python
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from shapely.ops import unary_union

# 境界データのshpファイル読込
pref_gdf = gpd.read_file("./data/R2_boundary/04_miyagi/04_miyagi.shp")
# display(pref_gdf.head(2))

# fig = plt.figure()
# ax  = fig.add_subplot()
# 境界データをmerge
bound = gpd.GeoSeries(unary_union(pref_gdf.geometry))
bound.crs = "epsg:4326"
# # 描画
# bound.plot(ax=ax, color='none', edgecolor='b', linewidth=1)
# plt.show()

# 境界データの最大最小座標
# minx, miny, maxx, maxy
bminx, bminy, bmaxx, bmaxy = bound.bounds.values[0]
print(bminx, bminy, bmaxx, bmaxy)
# 140.2746431532175 37.77306121838073 141.6757955950007 39.002877576010704
```


## まとめ
Pythonで地物の最大最小座標を算出しました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




