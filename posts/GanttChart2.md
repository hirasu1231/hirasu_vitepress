---
title: 'Pythonでガントチャートを作成する方法'
description: この記事では、Pythonを使ってガントチャートを作成する方法について解説します。
date: 2025-02-06
category: 
  - 可視化
tags:
  - Python
  - matplotlib
---

この記事では、Pythonを使ってガントチャートを作成する方法について解説します。ガントチャートはプロジェクト管理やスケジュール管理に非常に便利なツールです。

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


## コードの概要

以下のコードは、サンプルデータを使用してガントチャートを作成する方法を示しています。

```python
import matplotlib.pyplot as plt
import pandas as pd
import matplotlib.dates as mdates

# サンプルデータの作成
data = {
    'Task': ['Task 1', 'Task 2', 'Task 3'],
    'Start': ['2023-10-01 08:00:00', '2023-10-01 09:00:00', '2023-10-01 10:00:00'],
    'End': ['2023-10-01 12:00:00', '2023-10-01 17:00:00', '2023-10-01 15:00:00']
}

# データフレームの作成
df = pd.DataFrame(data)
df['Start'] = pd.to_datetime(df['Start'])
df['End'] = pd.to_datetime(df['End'])

# プロットの設定
fig, ax = plt.subplots(figsize=(10, 5))

# ガントチャートの作成
for i, task in enumerate(df['Task']):
    start = df['Start'][i]
    end = df['End'][i]
    ax.barh(task, (end - start).total_seconds() / 24 / 3600, left=start, color='skyblue')

# 軸のフォーマット設定
ax.xaxis.set_major_locator(mdates.HourLocator(interval=1))
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d %H:%M'))
plt.xticks(rotation=45)
plt.xlabel('Date and Time')
plt.ylabel('Task')
plt.title('Gantt Chart with Time')

# グリッドの追加
plt.grid(True)

# プロットの表示
plt.tight_layout()
plt.show()
```

## 詳細な解説

### サンプルデータの作成

まず、ガントチャートに表示するタスクのサンプルデータを作成します。

```python
data = {
    'Task': ['Task 1', 'Task 2', 'Task 3'],
    'Start': ['2023-10-01 08:00:00', '2023-10-01 09:00:00', '2023-10-01 10:00:00'],
    'End': ['2023-10-01 12:00:00', '2023-10-01 17:00:00', '2023-10-01 15:00:00']
}
```

### データフレームの作成

次に、Pandasを使ってデータフレームを作成し、開始時間と終了時間を日時型に変換します。

```python
df = pd.DataFrame(data)
df['Start'] = pd.to_datetime(df['Start'])
df['End'] = pd.to_datetime(df['End'])
```

### プロットの設定

プロットの設定を行い、図と軸を作成します。

```python
fig, ax = plt.subplots(figsize=(10, 5))
```

### ガントチャートの作成

各タスクの開始時間と終了時間を使って、ガントチャートを作成します。

```python
for i, task in enumerate(df['Task']):
    start = df['Start'][i]
    end = df['End'][i]
    ax.barh(task, (end - start).total_seconds() / 24 / 3600, left=start, color='skyblue')
```

### 軸のフォーマット設定

軸のフォーマットを設定し、時間の表示を見やすくします。

```python
ax.xaxis.set_major_locator(mdates.HourLocator(interval=1))
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d %H:%M'))
plt.xticks(rotation=45)
plt.xlabel('Date and Time')
plt.ylabel('Task')
plt.title('Gantt Chart with Time')
```

### グリッドの追加

グリッドを追加して、チャートを見やすくします。

```python
plt.grid(True)
```

### プロットの表示

最後に、プロットを表示します。

```python
plt.tight_layout()
plt.show()
```

## まとめ

このコードは、Pythonを使ってガントチャートを作成する方法を示しています。プロジェクト管理やスケジュール管理に非常に便利なツールとなるでしょう。ぜひ試してみてください。


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>
