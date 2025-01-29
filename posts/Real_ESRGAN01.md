---
title: 'Real-ESRGANを用いて画像を高画質化する'
description: Python + Opencvでアニメをラフ画のような線画への変換を実施します．
date: 2021-10-31
category: 
  - Python
tags:
  - Python
  - jupyter
  - OpneCV
  - ESRGAN
  - Image_Super_Resolution
---
<!-- https://www.hamlet-engineer.com -->
Real-ESRGANを用いた画像の高画質化を実施します．<br>

<!-- more -->

今回はGoogle ColabとGoogle Driveを連携させて，notebook形式で実行してます．<br>

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

> Google Colaboratory（以下Google Colab）は、Google社が無料で提供している機械学習の教育や研究用の開発環境です。開発環境はJupyter Notebookに似たインターフェースを持ち、Pythonの主要なライブラリがプリインストールされています。<br>
引用元：[Google Colabの使い方](https://interface.cqpub.co.jp/ail01/)







## Google Colabのファイル構成
プロジェクトディレクトリはBetterPictureとしています．度々，省略しています．
```
BetterPicture
├── /Real-ESRGAN
│   ├── /inputs <- 入力
│   ├── /results <- 出力
│   ├── /experiments/pretrained_models <- 学習済みモデル
│   └── (　省略)
└── BetterPicture.ipynb <- 実行用ノートブック
```

## Google Driveと連携
Google ColabとGoogle Driveを連携させて，gitから[xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN.git)をダウンロードします．<br>

```python
# Google Driveと連携
from google.colab import drive
drive.mount('/content/drive')
```

```python
# ディレクトリの移動
%cd /content/drive/My\ Drive/BetterPicture
# gitのダウンロード
!git clone https://github.com/xinntao/Real-ESRGAN.git
%cd Real-ESRGAN
!ls
```

## モジュールのインストール
下記のコマンドでモジュールをインストールします．
```python
# ffmpeg
!apt-get install ffmpeg
!pip install pydub

!pip install basicsr

!pip install facexlib
!pip install gfpgan
!pip install -r requirements.txt
!python setup.py develop
```

## 学習済みモデルのダウンロード
下記のコードで学習済みモデルをダウンロードします．
```python
!wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth -P experiments/pretrained_models
!wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth -P experiments/pretrained_models
```

## 高画質化の実行
下記のコードで高画質化を実行します．結果はresultに格納されます．

### pre-trained model1: RealESRGAN_x4plus.pth
デフォルト用のモデルです．

```python
!python inference_realesrgan.py --model_path experiments/pretrained_models/RealESRGAN_x4plus.pth --input inputs
```

```python
# from PIL import Image
from IPython.display import Image,display_jpeg,display_png

display_jpeg(Image('./inputs/0014.jpg'))
display_jpeg(Image('./results/0014_out.jpg'))
```

![jpg](/image/sample_01.jpeg)

![jpg](/image/sample_02.jpeg)

### pre-trained model2: RealESRGAN_x4plus_anime_6B
モデルサイズが小さいアニメ画像用に最適化されたモデルです．

```python
!python inference_realesrgan.py --model_path experiments/pretrained_models/RealESRGAN_x4plus_anime_6B.pth --input inputs
```

```python
# from PIL import Image
from IPython.display import Image,display_jpeg,display_png

display_jpeg(Image('./inputs/0014.jpg'))
display_jpeg(Image('./results/0014_out.jpg'))
```

![jpg](/image/sample_01.jpeg)

![jpg](/image/sample_03.jpeg)

## まとめ
本稿では，上記のコードでアニメの高画質化を実装しました．

次からは，動画の高画質を実装します．


## 参考サイト
[xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN.git)





<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>
