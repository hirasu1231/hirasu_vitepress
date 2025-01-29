---
title: 'CycleGANの概要'
description: CycleGANの概要を記述します．
date: 2021-12-19
category: 
  - Python
tags:
  - Python
  - Jupyter
  - CycleGAN
  - GAN
---
CycleGANの概要を記述します．<br>

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>







## GAN（敵対的生成ネットワーク）の概要
GAN（敵対的生成ネットワーク）は2014年に提案された画像生成モデルで、これをきっかけに画像生成モデルは大きな発展を遂げました。
GANでは、偽のデータを生成するGenerator (生成モデル)と、データが本物か偽物かを判別するDiscriminator (識別モデル)を敵対するように競わせることで互いの性能が向上するように学習します。

GANの仕組みは、贋作を作る犯罪者とそれを見破る警察官の関係に例えられます。
犯罪者は本物そっくりの贋作を作ることを目指して訓練し、警察官は必ず贋作を見破れるよう訓練します。
この敵対した競争により、犯罪者は本物そっくりの贋作を作れるようになります。

GANでは、上記の性質を利用して優秀な犯罪者(Generator)を育て上げ、贋作(新たな画像)を作成します。

## CycleGANについて
CycleGANは、画像生成・画像スタイル変換で用いられるGAN（敵対的生成ネットワーク）の1つで、画像の相互変換する事が可能なモデルです。
CycleGANの登場以前ではpix2pixというモデルが有名でしたが、学習データを変換前と変換後でペアになるようにする必要がありました。(下図参照)
!(https://api.axross-recipe.com/attachments/5255/url)

しかし、CycleGANでは変換前と変換後の画像間で「何らかの関係がある」と仮定して、「画像間で関係ある領域を特定した上で、その領域内での対応関係」を学習します。

!(https://api.axross-recipe.com/attachments/5288/url)

よって、学習データをペアとする必要がなくなり、学習データを準備する手間が一気に簡単になりました。

本レシピの学習データは、ペアとならない異なる白黒画像とカラー画像を準備します。
!(https://api.axross-recipe.com/attachments/5257/url)


## ペアを必要としない理由
ウマとシマウマのデータセットを例とすると、CycleGANは「ウマ→シマウマ」の変換モデルAと「シマウマ→ウマ」の変換モデルBの両方を作成しています。
CycleGANでは、この2つの変換モデルを使って、「ウマ→シマウマ→ウマ(or シマウマ→ウマ→シマウマ)」という変換後に元に戻す復元作業も実行しています。

ペアの画像では変換したピクセルの箇所に着目すれば簡単に復元できますが、CycleGANでは「ペアではないデータ」で変換モデルA・Bを作成しているため、「画像中で変換した領域」の特徴(ここでは馬の形)を掴まなければ復元できません。
この復元作業により「画像間で関係ある領域の特定」を学習できるため、学習画像データをペアとする必要がなくなります。

!(https://api.axross-recipe.com/attachments/5290/url)

この学習方法によりCycleGANではいくつかのloss(学習時の評価指標)のうち、変換後に復元具合を評価する「Cycle Consistency Loss」が最も重要となります。


## まとめ
Python + CycleGanでオリジナルデータでの学習について，追加情報を記述しました．

## 参考サイト
[GAN (Generative Adversarial Networks)：敵対的生成ネットワーク](https://blog.negativemind.com/2019/06/22/generative-adversarial-networks/)





<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>