---
title: 'Pythonでのshpファイルの地物における重心と重複をみる'
description: Pythonでのshpファイルの地物における重心と重複をみます．
date: 2023-3-20
category: 
  - Python
tags:
  - memo
  - Python
  - GIS
  - shp
  - shaply
  - kowaza0708
---
Pythonでのshpファイルの地物における重心と重複をみます．

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
└── centroid_contains.ipynb <- 実行用ノートブック
```

## 地物における重心と重複
地物における重心と重複を確認します．

```python
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from shapely.ops import cascaded_union

# 境界データのshpファイル読込
pref_gdf = gpd.read_file("./data/R2_boundary/04_miyagi/04_miyagi.shp")
display(pref_gdf.head(2))

# 重心
centroid = pref_gdf["geometry"][0].centroid
print(centroid) # POINT (141.10179746042058 38.32099068502019)

poly0 =pref_gdf["geometry"][0]
print(poly0.contains(centroid)) # > True
```

## まとめ
Pythonでのshpファイルの地物における重心と重複をみました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




