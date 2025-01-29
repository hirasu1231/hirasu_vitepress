---
title: 'date型の加算を実行する'
description: date型の加算を実行します。
date: 2022-5-4
category: 
  - Python
tags:
  - Python
  - date
  - memo
---
date型の加算を実行します。

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## date型の加算
```python
import datetime

# datetimeの生成
dt = datetime.datetime(2018, 2, 1, 9, 15, 30)

# 日にち加算
dt = dt + datetime.timedelta(days=1)

# 時刻加算
hp = random.randint(1, 10)
dt = dt + datetime.timedelta(hours=1)

# 分加算
dt = dt + datetime.timedelta(minutes=1)
```

## まとめ
date型の加算を実行しました．

## 参考サイト
[日付の加算 減算 timedelta](https://python.civic-apps.com/timedelta/)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




