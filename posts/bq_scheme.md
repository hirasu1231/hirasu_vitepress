---
title: 'BigQueryのカラム設定を簡単に'
description: BigQueryのカラム設定を簡単にします
date: 2023-4-8
category: 
  - Python
tags:
  - Python
  - GIS
  - kepler
  - Colabratry
---
BigQueryのカラム設定を簡単にします

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## latlonを抽出
```python
import pandas as pd

df = pd.read_csv("./data.csv")
for c in df.columns:
  print(f"{c}:STRING,")
```
aa:STRING,
bb:STRING,
cc:STRING,
dd:STRING,

上記をコピーして，JSON形式に切り替えて貼り付ける

## まとめ
BigQueryのカラム設定を簡単にしました。

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


