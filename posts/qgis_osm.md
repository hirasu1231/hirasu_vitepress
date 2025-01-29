---
title: 'P OSMをダウンロードし、QGISで可視化する'
description:  OSMをダウンロードし、QGISで可視化します
date: 2023-4-3
category: 
  - QGIS
tags:
  - QGIS
  - GIS
  - OpenStreetMap
---
OSMをダウンロードし、QGISで可視化します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ファイル構成
```
project_dir
├── ./data/tohoku-latest-free.shp/gis_osm_roads_free_1.shp
└── plot_2bar.ipynb <- 実行用ノートブック
```

## データのダウンロード
下記のサイトの`Sub Regions`からデータをダウンロードします。

[OSM Japan ChūgokuRegion shp](http://download.geofabrik.de/asia/japan.html)

## データの仕様書
下記のサイトから道路リンクの種別を取得します。
[OSM fclass](https://wiki.openstreetmap.org/wiki/JA:Key:highway)

| fclass | 解説 | 
| ------ | ---- | 
| footway | 歩道 |
| living_street | 生活道路 |
| motorway | 自専道 |
| motorway_link | 自専道(ランプ) |
| pedestrian | 歩道 |
| primary | 主要地方道 |
| residential | 居住地域内道路 |
| secondary | 都道府県道 |
| service | 私道 |
| steps | 階段 |
| tertiary | 市町村道 |
| tertiary_link | 市町村道(ランプ) |
| track | 農道・林道 |
| track_grade1 | 1級_農道・林道 |
| track_grade4 | 4級_農道・林道 |
| track_grade5 | 5級_農道・林道 |
| trunk | 国道 |
| trunk_link | 国道(ランプ) |

## QGISで可視化
gis_osm_roads_free_1.shpを読み込んで、道路を可視化する。

!(/image/gis_osm_roads.png)


## まとめ
OSMをダウンロードし、QGISで可視化しました．

## 参考サイト
[OSM Japan ChūgokuRegion shp](http://download.geofabrik.de/asia/japan.html)

[OSM fclass](https://wiki.openstreetmap.org/wiki/JA:Key:highway)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




