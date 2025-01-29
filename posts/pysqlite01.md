---
title: 'PythonにおけるSQLiteの操作をまとめてみた'
description: PythonにおけるSQLiteの操作をまとめてます．
date: 2021-11-26
category: 
  - Python
tags:
  - Python
  - jupyter
  - SQLite
  - SQL
---

PythonにおけるSQLiteの操作をまとめてます．．<br>

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>







## テーブル作成とデータ格納

```python
import sqlite3

# dbの読み込み(sample.dbは自動で作成される)
con = sqlite3.connect('sample.db')
# カーソルの設定
# https://www.postgresql.jp/document/9.2/html/plpgsql-cursors.html
cur = con.cursor()

# テーブル作成
# テーブル名 　データ型 unique　: 重複禁止のカラム作成
cur.execute('''CREATE TABLE sample_table
               (ID text unique, date text, title text)''')

# 格納データ
ID = 'mqRgDodGSEo'
date = '20210626'
title = 'もしギルガルドが弱体化されてなかったら'

# データの格納
cur.execute("INSERT INTO sample_table \
            VALUES ('{0}','{1}','{2}')".format(ID,
                                               date,
                                               title))
# テーブル変更を保存
con.commit()

# dbとカーソルを閉じる
cur.close()
con.close()
```

## テーブル情報の抽出

```python
import sqlite3

# dbの読み込み
con = sqlite3.connect('sample.db')
# カーソルの設定
# https://www.postgresql.jp/document/9.2/html/plpgsql-cursors.html
cur = con.cursor()

# テーブル情報の抽出
cur.execute('SELECT * FROM sample_table;')
data = cur.fetchall()
print(data)

# カラム名取得
names = list(map(lambda x: x[0], cur.description))
print(names)

# dbとカーソルを閉じる
cur.close()
con.close()
```

## テーブル自体を削除

```python
import sqlite3

# dbの読み込み
con = sqlite3.connect('sample.db')
# カーソルの設定
# https://www.postgresql.jp/document/9.2/html/plpgsql-cursors.html
cur = con.cursor()

# テーブルの削除
cur.execute('DROP TABLE sample_table;')

# テーブル変更を保存
con.commit()

# dbとカーソルを閉じる
cur.close()
con.close()
```

## テーブルの中身を削除

```python
import sqlite3

# dbの読み込み
con = sqlite3.connect('sample.db')
# カーソルの設定
# https://www.postgresql.jp/document/9.2/html/plpgsql-cursors.html
cur = con.cursor()

# テーブルの中身を削除
cur.execute('DELETE FROM output_video;')

# テーブル変更を保存
con.commit()

# dbとカーソルを閉じる
cur.close()
con.close()
```

## 参考サイト
[sqlite3 --- SQLite データベース](https://docs.python.org/ja/3/library/sqlite3.html)

[第39章PL/pgSQL - SQL手続き言語](https://www.postgresql.jp/document/9.2/html/plpgsql-cursors.html)





<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>
