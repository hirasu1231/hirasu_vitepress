---
title: 'Colabratryでkeplerを実装する'
description: Colabratryでkeplerを実装します
date: 2023-02-11
categories:
  - Python
tags:
  - Python
  - GIS
  - kepler
  - Colabratry
---

Colabratryでkeplerを実装します。

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ライブラリのインポート
下記のコードでライブラリをインポートします。

```python
# Keplerにプロット
try:
  import leafmap.kepler as leafmap
  from keplergl import KeplerGl
except ImportError:
  !pip install keplergl
  !pip install git+https://github.com/giswqs/leafmap.git
  import leafmap.kepler as leafmap
  from keplergl import KeplerGl
  
import pandas as pd
import base64
```

## データの作成
下記のコードでデータを作成します。

```python
dict1 = {
        "lon" :[139.7951, 139.7944, 139.7941, 139.7940, 139.7944],
        "lat":[35.6583, 35.6588, 35.6570, 35.6580, 35.6574]
}
df1 = pd.DataFrame(dict1)
df1
```

|lon|lat|
|:----|:----|
|139.7951|35.6583|
|139.7944|35.6588|
|139.7941|35.657|
|139.794|35.658|
|139.7944|35.6574|


```python
dict2 = {
        "lon" :[139.7851, 139.7844, 139.7841, 139.7840, 139.7844],
        "lat":[35.5583, 35.5588, 35.5570, 35.5580, 35.5574]
}
df2 = pd.DataFrame(dict2)
df2
```

|lon|lat|
|:----|:----|
|139.7851|35.5583|
|139.7844|35.5588|
|139.7841|35.557|
|139.784|35.558|
|139.7844|35.5574|

## keplerの実行
下記のコードでkeplerを実行します。

```python
# データを描画
map1 = KeplerGl(height=600)
map1.add_data(data=df1, name='df1')
map1.add_data(data=df2, name='df2')
map1
```

!(/image/colab_kepler.png)

## まとめ
Colabratryでkeplerを実装しました。

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


