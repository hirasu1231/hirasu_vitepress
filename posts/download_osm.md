---
title: '日本のOpenStreetMapをダウンロードする'
description: 日本のOpenStreetMapをダウンロードします。
date: 2023-3-22
category: 
  - GIS
tags:
  - Python
  - GIS
  - OpenStreetMap
  - JupyterNotebook
---
日本のOpenStreetMapをダウンロードします。


<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ファイル構成
```
project_dir
├── /osm
│   ├── /tohoku/gis_osm_roads_free_1.shp
│   └── (省略)
└── ＊＊＊.ipynb <- 実行用ノートブック
```

## OpenStreetMapのダウンロード

```python
# 地方リスト
regions = ["chubu", "chugoku", "hokkaido", "kansai", 
           "kanto", "kyushu", "shikoku", "tohoku"]

# OpenStreetMapのディレクトリ作成
!mkdir -p osm
# osmのダウンロード
for region in regions:
    # ディレクトリが存在するか
    if not os.path.exists(f"./osm/{region}"):
        # zipファイルのダウンロード
        !wget -P ./osm/ http://download.geofabrik.de/asia/japan/$region-latest-free.shp.zip
        # 地方別ディレクトリの作成
        !mkdir -p ./osm/$region
        # zipファイルの解凍
        !unzip ./osm/$region-latest-free.shp.zip -d ./osm/$region > /dev/null
        # zipファイルの削除
        !rm ./osm/$region-latest-free.shp.zip
```


## まとめ
日本のOpenStreetMapをダウンロードしました。

## 参考サイト
[OSM Japan ChūgokuRegion shp](http://download.geofabrik.de/asia/japan.html)<br>
[OpenStreetMapの道路酒別](https://wiki.openstreetmap.org/wiki/JA:Key:highway)<br>
[OpenStreetMap Data in Layered GIS Forma(http://www.geofabrik.de/data/geofabrik-osm-gis-standard-0.3.pdf)<br>
[Chūbu region shp](http://download.geofabrik.de/asia/japan/chubu-latest-free.shp.zip)<br>
[Chūgoku region shp](http://download.geofabrik.de/asia/japan/chugoku-latest-free.shp.zip)<br>
[Hokkaidō shp](http://download.geofabrik.de/asia/japan/hokkaido-latest-free.shp.zip)<br>
[Kinki region shp](http://download.geofabrik.de/asia/japan/kansai-latest-free.shp.zip)<br>
[Kantō region shp](http://download.geofabrik.de/asia/japan/kanto-latest-free.shp.zip)<br>
[Kyūshū shp](http://download.geofabrik.de/asia/japan/kyushu-latest-free.shp.zip)<br>
[Shikoku shp](http://download.geofabrik.de/asia/japan/shikoku-latest-free.shp.zip)<br>
[Tōhoku region shp](http://download.geofabrik.de/asia/japan/tohoku-latest-free.shp.zip)<br>


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




