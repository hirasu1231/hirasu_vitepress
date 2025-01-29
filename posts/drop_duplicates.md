---
title: 'Pandasにおける複数条件での重複削除'
description: Pandasにおける複数条件での重複削除を実施します．
date: 2023-3-23
category: 
  - Python
tags:
  - memo
  - Python
  - Pandas
  - kowaza0708
---
Pandasにおける複数条件での重複削除を実施します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## データフレームの作成
データフレームの作成します．

```python
import pandas as pd
import numpy as np

df = pd.DataFrame([['A','a',110], ['C','c',130], ['C','c',130], ['D', 'a',140],['A','a',110]],
                  columns=['col01', 'col02', 'col03'])
df.head()
```
| col01 | col02 | col03 |
| - | - | - |
| A | a | 110 |
| C | c | 130 |
| C | c | 130 |
| D | a | 140 |
| A | a | 110 |

## 重複削除

```python
# 全カラム対象
display(df.drop_duplicates())

# col02のみ対象
display(df.drop_duplicates(subset=['col02']))

# col02とcol03を対象
display(df.drop_duplicates(subset=['col02', 'col03']))
```

**全カラム対象**

| col01 | col02 | col03 |
| - | - | - |
| A | a | 110 |
| C | c | 130 |
| D | a | 140 |


**col02のみ対象**

| col01 | col02 | col03 |
| - | - | - |
| A | a | 110 |
| C | c | 130 |


**col02とcol03を対象**

| col01 | col02 | col03 |
| - | - | - |
| A | a | 110 |
| C | c | 130 |
| D | a | 140 |


## まとめ
Pandasにおける複数条件での重複削除を実施しました．

## 参考サイト
[Pandasのデータフレームの重複する行を削除する方法｜drop_duplicates](https://kino-code.com/python-pandas-drop_duplicates/)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




