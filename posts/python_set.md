---
title: ' Pythonで集合を使ってみる'
description: Pythonで集合を使ってみます．
date: 2023-4-2
category: 
  - Python
tags:
  - memo
  - Python
  - set
  - kowaza0708
---
Pythonで集合を使ってみます．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## 集合の生成

```python
s = {1, 2, 2, 3, 1, 4}

print(s)
print(type(s))
# {1, 2, 3, 4}
# <class 'set'>
```

```python
# 順序は受け継がれない
s = {1.23, 'abc', (0, 1, 2), 'abc'}

print(s)
# {(0, 1, 2), 1.23, 'abc'}
```

```python
# リストから集合に変換
l = [1, 2, 2, 3, 1, 4]
s = set(_list)
# 重複削除にも使える
l_unique = list(set(l))

print(s)
print(type(s))
print(l_unique)
# {1, 2, 3, 4}
# <class 'set'>
# [1, 2, 3, 4]
```

## 集合内包表記

```python
# リスト
l = [i**2 for i in range(5)]
# 集合
s = {i**2 for i in range(5)}

print(l, len(l))
# [0, 1, 4, 9, 16] 5
print(s, len(s))
# {0, 1, 4, 9, 16} 5
```

```python
# リスト
l = [i**2 for i in range(5)]
# 集合
s = {i**2 for i in range(5)}

# リストの追加
l.append(3)
print(l, len(l))
# [0, 1, 4, 9, 16, 3] 6

# 集合の追加
s.add(3)
print(s, len(s))
# {0, 1, 3, 4, 9, 16} 6
```

## 和集合(統合)

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}

# 和集合
s_union = s1 | s2
print(s_union)
# {0, 1, 2, 3}

s_union = s1.union(s2)
print(s_union)
# {0, 1, 2, 3}
```

## 積集合(共通)

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}

# 積集合(共通)
s_union = s1 & s2
print(s_union)
# {1, 2}

s_union = s1.intersection(s2)
print(s_union)
# {1, 2}
```

## 差集合(片側差分)

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}

# 差集合(片側差分)
s_union = s1 - s2
print(s_union)
# {0}

s_union = s1.difference(s2)
print(s_union)
# {0}
```

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}

# 差集合(片側差分)
s_union = s2 - s1
print(s_union)
# {3}

s_union = s2.difference(s1)
print(s_union)
# {3}
```

## 対称差集合(両側差分)

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}

# 対称差集合(両側差分)
s_union = s1 ^ s2
print(s_union)
# {0, 3}

s_union = s1.symmetric_difference(s2)
print(s_union)
# {0, 3}
```

## 部分集合か判定

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}
s3 = {1, 2}

# 部分集合
s_union = s1 <= s2
print(s_union)
# False
s_union = s1.issubset(s2)
print(s_union)
# False

# 部分集合
s_union = s1 <= s3
print(s_union)
# False
s_union = s1.issubset(s3)
print(s_union)
# False

# 部分集合
s_union = s3 <= s1
print(s_union)
# True
s_union = s3.issubset(s1)
print(s_union)
# True
```

## 部分集合(上位)か判定

```python
s1 = {0, 1, 2}
s2 = {1, 2, 3}
s3 = {1, 2}

# 部分集合(上位)
s_union = s1 >= s2
print(s_union)
# False
s_union = s1.issuperset(s2)
print(s_union)
# False

# 部分集合(上位)
s_union = s1 >= s3
print(s_union)
# True
s_union = s1.issuperset(s3)
print(s_union)
# True

# 部分集合(上位)
s_union = s3 >= s1
print(s_union)
# False
s_union = s3.issuperset(s1)
print(s_union)
# False
```

## 互いに素か判定(独立)

```python
s1 = {0, 1}
s2 = {1, 2}
s3 = {2, 3}

print(s1.isdisjoint(s2))
# False
print(s1.isdisjoint(s3))
# True
```


## まとめ
Pythonで集合を使ってみました．

## 参考サイト
[Python, set型で集合演算（和集合、積集合や部分集合の判定など）](https://note.nkmk.me/python-set/)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




