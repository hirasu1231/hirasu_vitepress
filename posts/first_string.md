---
title: 'Pandasで接頭文字の検索をする'
description: Pandasで接頭文字の検索をします
date: 2023-4-9
category: 
  - Python
tags:
  - memo
  - Python
  - Pandas
---
Pandasで接頭文字の検索をします

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## 接頭文字で検索
下記のコードで接頭文字の検索をします。
```python
A = ["abc", "abcd", "abcde", "abdedf"]
# Aに含まれる文字列の共通接頭辞は"ab"です。

prefix = 
for x in zip(*A):  # リストAをUnpackingしてzip()に渡します。
    if len(set(x)) == 1:
        prefix.append(x[0])
    else:
        break
print("".join(prefix))
# ab
```

## まとめ
Pandasで接頭文字の検索をしました。

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


