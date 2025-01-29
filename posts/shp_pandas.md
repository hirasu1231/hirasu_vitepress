---
title: 'shpファイルをPandas風に読み込む'
description: shpファイルをPandas風に読み込みます．
date: 2022-8-3
category: 
  - Python
tags:
  - memo
  - Python
  - GIS
  - Pandas
  - shp
  - kowaza0708
---
shpファイルをPandas風に読み込みます．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ライブラリのインストール

```python
!pip install geopandas
```

## shpの読み込み
下記のコードでshpファイルを読み込みます。

```python
import pandas as pd
import geopandas as gpd

# shpファイルの読込み
gdf = gpd.read_file("*******.shp")

gdf.head()
```


## まとめ
shpファイルをPandas風に読み込みました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




