---
title: 'matplotlibで日本語表示を実施する'
description: matplotlibで日本語表示を実施する．
date: 2021-09-27
category: 
  - Python
tags:
  - Python
  - jupyter
  - Google_Colaboratory
  - matplotlib
  - Visualization
---
<!-- https://www.hamlet-engineer.com -->
matplotlibでキャッシュの削除を行わずに日本語表示を実施します．

<!-- more -->
<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## Google ColabとGoogle Driveを連携
```python
# Google ColabとGoogle Driveを連携
from google.colab import drive
drive.mount('/content/drive')
```

gitから参考コードをダウンロードします．
```python
%cd /content/drive/MyDrive/
!git clone https://github.com/hirasu1231/matplotlib_japanese.git
!ls
```
```python
%cd /content/drive/MyDrive/matplotlib_japanese
!ls
```

## matplotlibの日本語表示
ここでは，あらかじめ整形済みの「ボードゲーム」で検索したyoutube動画の再生回数順でTOP50のcsvファイルを使用します．
```python
import pandas as pd

# csvファイルの読み込み
df = pd.read_csv('BoardGame_scape.csv')
```

### 日本語フォントの設定
以下のコードで日本語フォントの設定を実施します．
```python
import matplotlib
import matplotlib.pyplot as plt
from matplotlib import font_manager

# 日本語のフォント設定
f = "ipag.ttf"
font_manager.fontManager.addfont(f) # フォントの追加
font_name = plt.matplotlib.font_manager.FontProperties(fname = f).get_name() # 追加フォント名
matplotlib.rc('font', family=font_name) # 追加フォントの設定
```

### 棒グラフの描画
以下のコードで棒グラフの描画を実施します．
```python
# 再生回数をfloatに変更
df['viewCount'] = df['viewCount'].astype(float)
# pandasの描画_棒グラフ
df.groupby('title').sum().sort_values(by = 'viewCount', ascending = False)[0:50].plot(kind='bar', y = 'viewCount', figsize = (25,10), fontsize = 20)
```

!(/image/viewcount_youtube.png)

## 参考サイト
[hirasu1231/matplotlib_japanese](https://github.com/hirasu1231/matplotlib_japanese.git)

[【Python】matplotlib3.2の日本語フォント設定方法【公式遵守】](https://qiita.com/mikan3rd/items/791e3cd7f75e010c8f9f)

[matplotlibの日本語化(フォント変更)](https://ricrowl.hatenablog.com/entry/2020/09/14/032424#%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%82%92matplotlib%E3%81%AB%E8%BF%BD%E5%8A%A0)




<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>