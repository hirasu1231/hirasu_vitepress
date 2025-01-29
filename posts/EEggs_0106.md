---
title: 'foliumで特定座標の位置を把握する'
description: foliumで特定座標の位置を把握します
date: 2022-6-1
category: 
  - Python
tags:
  - memo
  - Python
  - pandas
---
foliumで特定座標の位置を把握します。

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ライブラリのインストール
```python
!pip install folium
```

## 架空データの作成
```python
import folium

# 東京タワー (lat, lon) = (35.658584, 139.7454316)
lat, lon = 35.658584, 139.7454316

# 地図オブジェクト作成
map = folium.Map(location=[lat, lon], zoom_start=18)
# 地図表示
map
```

!(/image/tokyo_tower_folium.png)


## まとめ
foliumで特定座標の位置を把握しました。

## 参考サイト
<!-- [pandasのdatetimeをdateに変換したい](https://teratail.com/questions/132333) -->


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




