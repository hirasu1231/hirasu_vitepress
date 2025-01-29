---
title: '重複なしのランダム生成を実行する'
description: 重複なしのランダム生成を実行します。
date: 2022-4-19
category: 
  - Python
tags:
  - Python
  - random
  - memo
---
重複なしのランダム生成を実行します。

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## 任意の範囲の整数
```python
import random

# 任意の範囲の整数
print(random.randint(10, 20))
```

## 重複ありランダム発生
```python
import random

# 重複ありランダム発生
print([random.randint(0, 10) for i in range(5)])
```

## 重複なしランダム発生
```python
import random

# 重複なしランダム発生
def rand_ints_nodup(a, b, k):
    ns = 
    while len(ns) < k:
        n = random.randint(a, b)
        if not n in ns:
            ns.append(n)
    return ns

# 1~5で3つ重複なしで出力
rand_ints_nodup(1, 5, 3)
```

## まとめ
重複なしのランダム生成を実行しました．

## 参考サイト
[Pythonでランダムな小数・整数を生成するrandom, randrange, randintなど](https://note.nkmk.me/python-random-randrange-randint/)

[Pythonで重複のない乱数を生成する方法を現役エンジニアが解説【初心者向け】](https://techacademy.jp/magazine/21160)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




