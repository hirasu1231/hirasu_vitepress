---
title: 'Jupyter Notebookでコマンドラインを実行する'
description: Jupyter Notebookでコマンドラインを実行します．
date: 2023-02-05
category: 
  - Python
tags:
  - memo
  - Python
  - command
  - JupyterNotebook
---
Jupyter Notebookでコマンドラインを実行します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## zipファイルを解凍
zipファイルを解凍します．

```python
!unzip [zipファイル名] -d [出力先] > /dev/null
```

## 文字列の出力
文字列を出力します．

```python
region = "chugoku"

# 文字列の出力
!echo $region # chugoku

# 文字列の結合
!echo "aaa_"$region # aaa_chugoku
!echo ./boundary/$region # ./boundary/chugoku
!echo ./boundary/$region.zip # ./boundary/.zip
!echo ./boundary/$region".zip" # ./boundary/chugoku.zip
```

## bashの実行
bashの実行します．

```python
%%bash
# 移動
cd /usr/lib/python3/dist-packages/PyQt5
mv QtCore.cpython-38-x86_64-linux-gnu.so QtCore.so


# 名前変更　: "${file%置換前}置換後"
# for file in ./*.so ; do mv "$file" "${file%.cpython-38-x86_64-linux-gnu.so}.so" ; done
```

## for文の実行
for文の実行します．

```python
%%bash
# 移動
cd /usr/lib/python3/dist-packages/PyQt5
# 名前変更　: "${file%置換前}置換後"
for file in ./*.so ; do mv "$file" "${file%.cpython-38-x86_64-linux-gnu.so}.so" ; done
```


## ファイルのダウンロード
OSMからファイルをダウンロードします．

```python
region = "chugoku"

# zipファイルのダウンロード
!wget -P ./osm/ http://download.geofabrik.de/asia/japan/$region-latest-free.shp.zip
# ディレクトリの作成
!mkdir -p ./osm/$region
# zipファイルの解凍
!unzip ./osm/$region-latest-free.shp.zip -d ./osm/$region > /dev/null
# zipファイルの削除
!rm ./osm/$region-latest-free.shp.zip
```

## まとめ
Jupyter Notebookでコマンドラインを実行しました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




