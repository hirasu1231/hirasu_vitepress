---
title: 'PandasでPostgreSQLを操作する'
description: PandasでPostgreSQLを操作します．
date: 2023-4-1
category: 
  - Python
tags:
  - Python
  - SQL
  - PostgreSQL
---

PandasでPostgreSQLを操作します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## PandasでPostgreSQLを操作する

### テーブル作成とデータ格納
```python
import os
import psycopg2
from sqlalchemy import create_engine

# DBのURL
DATABASE_URL='postgresql://postgre:postgre@workspace-postgres-1:5432/postgres'

# テーブル作成のDB起動
engine = create_engine(DATABASE_URL)
# テーブル作成 if_exists='replace' or 'append'
df.to_sql('probe',con=engine,if_exists='replace',index=None)

# dbとカーソルを閉じる
engine.close()
```

### データの出力(DF)
```python
import os
import psycopg2
from sqlalchemy import create_engine

# DBのURL
DATABASE_URL='postgresql://postgre:postgre@workspace-postgres-1:5432/postgres'
    
# postgresの接続
conn = psycopg2.connect(DATABASE_URL)
print(conn.autocommit)

# テーブル情報の抽出
df1=pd.read_sql(sql='SELECT * FROM probe;', con=conn)
display(df1.head())
print(len(df1))

# dbとカーソルを閉じる
conn.close()
```

## まとめ
PandasでPostgreSQLを操作しました．

## 参考サイト
[pandas で sqlite3 の読み書き](https://qiita.com/ekzemplaro/items/8dbf65cad62511854053)

[【 コピペでOK】９割の機能を網羅！PytonからPostgreSQLを扱うクラスを作ってみました。](https://resanaplaza.com/2021/09/15/%E3%80%90-%E3%82%B3%E3%83%94%E3%83%9A%E3%81%A7ok%E3%80%91%EF%BC%99%E5%89%B2%E3%81%AE%E6%A9%9F%E8%83%BD%E3%82%92%E7%B6%B2%E7%BE%85%EF%BC%81pyton%E3%81%8B%E3%82%89postgresql%E3%82%92%E6%89%B1%E3%81%86/)

[PandasのDataFrameでPostgreSQLに読み書きする方法](https://tanuhack.com/pandas-postgres-readto/#PostgreSQL-3)

[BigQuery ScriptingでPythonっぽいループ処理をしてみた](https://qiita.com/CraveOwl/items/5ffcf5edac238b165bbb)



<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




