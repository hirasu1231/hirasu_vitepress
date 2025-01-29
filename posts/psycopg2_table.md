---
title: 'Python(psycopg2) + PostgreSQLで作成テーブル一覧を作成する'
description: Python(psycopg2) + PostgreSQLで作成テーブル一覧を出力します。
date: 2023-4-1
category: 
  - Python
tags:
  - Python
  - psycopg2
  - PostgreSQL
  - SQL
---
Python(psycopg2) + PostgreSQLで作成テーブル一覧を出力します。

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## テーブル一覧を出力
テーブル一覧を出力します．

```python
import os
import psycopg2

# DATABASE_URL
DATABASE_URL='postgresql://postgre:postgre@workspace-postgres-1:5432/postgres'

def main():
    # postgresの接続
    conn = psycopg2.connect(DATABASE_URL)
    conn.autocommit = True # 操作の重複を防ぐ(databaseの操作)呪文
    cur = conn.cursor()
    
    # データベース一覧の確認
    cur.execute("select schemaname, tablename from pg_tables WHERE schemaname='public';")
    
    
    data = cur.fetchall() # 出力結果
    print(data)
    
    # dbとカーソルを閉じる
    cur.close()
    conn.close()
    
if __name__ == '__main__':
    main()
# [('public', 'spatial_ref_sys'), ('public', 'osm')]
```

## まとめ
Python(psycopg2) + PostgreSQLで作成テーブル一覧を出力しました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




