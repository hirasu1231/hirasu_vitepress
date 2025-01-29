---
title: 'Pythonで地物のポリゴン(境界データ)を統合する'
description: Pythonで地物のポリゴン(境界データ)を統合します．
date: 2023-2-12
category: 
  - Python
tags:
  - memo
  - Python
  - NetworkX
  - Pandas
---
Pythonで地物のポリゴン(境界データ)を統合します．

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

## ポリゴン(境界データ)の統合
ポリゴン(境界データ)を統合します．

```python
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from shapely.ops import unary_union

# 境界データのshpファイル読込
pref_gdf = gpd.read_file("./data/R2_boundary/04_miyagi/04_miyagi.shp")

fig = plt.figure()
ax  = fig.add_subplot()
# 境界データをmerge
bound = gpd.GeoSeries(unary_union(pref_gdf.geometry))

# 描画
bound.plot(ax=ax, color='none', edgecolor='b', linewidth=1)
plt.show()

# 出力
bound["pref"] = "miyagi"
```

!(/image/union_miyagi.png)

## まとめ
Pythonで地物のポリゴン(境界データ)を統合しました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




