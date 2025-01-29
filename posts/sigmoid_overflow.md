---
title: 'シグモイド関数のオーバーフローに対策する'
description: シグモイド関数のオーバーフロー(コンピュータが表現できる数値の桁を超えたこと)という現象が起きます。本稿では，シグモイド関数のオーバーフローの対策を記述します．
date: 2022-02-24
category: 
  - Python
tags:
  - Python
  - sigmoid
  - machine_learning
---

<!-- https://www.hamlet-engineer.com -->
シグモイド関数のオーバーフロー(コンピュータが表現できる数値の桁を超えたこと)という現象が起きます。

本稿では，シグモイド関数のオーバーフローの対策を記述します．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## シグモイド関数のオーバーフロー
シグモイド関数のコードでは、xに負の数で大きい値が入るとオーバーフロー(コンピュータが表現できる数値の桁を超えたこと)という現象が起きます。


$$
 y=\dfrac {1}{1+e^{-x}}
$$

例えば，上記の式に，x=-800を代入すると，2.718の800乗というとても大きい数値の算出が発生することになります．

$$
 y=\dfrac {1}{1+e^{-(-800)}}=\dfrac {1}{1+(2.718)^{-(-800)}}
$$

そして，pythonで実行すると下記の通りになります．

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

print(sigmoid(1))
print(sigmoid(-1))
print(sigmoid(-800))

# 出力結果：
# 0.7310585786300049
# 0.2689414213699951
# 0.0
# /usr/local/lib/python3.7/dist-packages/ipykernel_launcher.py:4: RuntimeWarning: overflow encountered in exp
```

## オーバーフロー対策
そこで、xが負の数になった場合に備えて、シグモイド関数を下記のように書き換えます。

$$
 y=\dfrac {1}{1+e^{-x}}\left( a >0\right)
$$

$$
 y=\dfrac {e^{x}}{e^{x}+1}\left( a <0\right)
$$

pythonで記述すると，下記の通りです．

```python
def sigmoid2(x):
    if x >= 0:
        s = 1 / (1 + np.exp(-x))
    else:
        e=np.exp(x)
        s = e / (e + 1)
    return s

print(sigmoid2(1))
print(sigmoid2(-1))
print(sigmoid2(-800))

# 出力結果：
# 0.7310585786300049
# 0.2689414213699951
# 0.0
```

## まとめ
シグモイド関数のオーバーフローの対策を記述しました．

## 参考サイト
[pythonでシグモイド関数を実装する](https://ryamashina.com/itml/20210730/)





<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

