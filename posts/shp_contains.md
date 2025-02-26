---
title: 'Pythonで特定の地物と重なる地物を抽出する'
description: Pythonで特定の地物と重なる地物を抽出します．
date: 2022-8-2
category: 
  - Python
tags:
  - memo
  - Python
  - Shapely
  - Pandas
  - kowaza0708
---
Pythonで特定の地物と重なる地物を抽出します．

※ただし、時間がかかる

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
│   ├── /osm/tohoku/gis_osm_roads_free_1.shp
│   └── (省略)
└── merge_bound.ipynb <- 実行用ノートブック
```

## shpファイルを読み込み
shpファイルを読み込みます．

```python
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from shapely.ops import unary_union

# osmデータのshpファイル読込
osm_gdf = gpd.read_file("./data/osm/tohoku/gis_osm_roads_free_1.shp")
display(osm_gdf.head())

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
```


## 地物の抽出(within)
```python
import time
start = time.time()

# 一時データ
osm_gdf_0_10 = osm_gdf[0:10]

# 県の境界データに含まれるか
# LINESTRINGの重心で判定
geometry = osm_gdf_0_10["geometry"]
_bool = (geometry.centroid).within(bound.iloc[0])
tmp_gdf = osm_gdf_0_10[_bool]

elapsed_time = time.time() - start
print ("elapsed_time:{0}".format(elapsed_time) + "[se")
# elapsed_time:0.4750847816467285[se
```

## 地物の抽出(contains)
```python
import time
start = time.time()

# 一時データ
osm_gdf_0_10 = osm_gdf[0:10]

# 県の境界データに含まれるか
# LINESTRINGの重心で判定
geometry = osm_gdf_0_10["geometry"]
_bool = geometry.apply(lambda x: bound.contains(x.centroid))
tmp_gdf = osm_gdf_0_10[_bool]

elapsed_time = time.time() - start
print ("elapsed_time:{0}".format(elapsed_time) + "[se")
# elapsed_time:0.5308980941772461[se
```


## まとめ
Pythonで特定の地物と重なる地物を抽出しました．

## 参考サイト
[Geopandas - ValueError: Cannot transform naive geometries. Please set a crs on the object firs(https://stackoverflow.com/questions/64421284/geopandas-valueerror-cannot-transform-naive-geometries-please-set-a-crs-on-t)<br>
[【PythonでGIS】GeoPandasまとめ](https://qiita.com/c60evaporator/items/ac6a6d66a20520f129e6)<br>
[Geopandas contains working for one point but not many](https://stackoverflow.com/questions/59461445/geopandas-contains-working-for-one-point-but-not-many)<br>
[Get min/max lat and long values from geodataframe](https://gis.stackexchange.com/questions/257807/get-min-max-lat-and-long-values-from-geodataframe)<br>


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




