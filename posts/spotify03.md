---
title: 'PythonでSpotify APIを使って邦楽情報を抽出する'
description: PythonでSpotify APIを使って邦楽情報を抽出します．
date: 2022-03-03
category: 
  - Python
tags:
  - Python
  - jupyter
  - Spotify
  - Spotify_API
  - API
---

<!-- https://www.hamlet-engineer.com -->
PythonでSpotify APIを使って邦楽情報を抽出します．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## Spotify APIの導入
Spotify APIの導入は下記のサイトを参考にしてください．

()

## 楽曲情報の抽出
楽曲情報の抽出は下記のサイトを参考にしてください．

()

## 邦楽の指定
邦楽かどうかは，楽曲情報の中の`external_ids`を見たらわかります．

`external_ids`中にJAとあれば邦楽です．

## 邦楽情報の抽出
下記のコードで邦楽情報の抽出を実行します．

工程は下記の通りです．
1. SpotifyAPIの起動
2. 2000年の楽曲で検索
3. 楽曲IDを取得
4. `meta`に楽曲情報を格納
5. `external_ids`より邦楽か判定する
6. `spotify.audio_features()`で楽曲特徴を抽出
7. `getTrackFeatures`で楽曲情報と特徴をリスト化
8. リストからデータフレームへ変換

```python
import time
import spotipy
import pprint
import pandas as pd
from spotipy.oauth2 import SpotifyClientCredentials

# APIのIDとキー
MyID = "****************" #client ID
MySecret= "****************"  #client secret

# 工程1_spotifyAPI起動
ccm = SpotifyClientCredentials(client_id = MyID, client_secret = MySecret)
spotify = spotipy.Spotify(client_credentials_manager = ccm)

# 工程2_検索実行
year = 2000
result = spotify.search(q=f'year:{year}', limit=50, offset=0, type='track', market='JP')

tracks = 
for track in result['tracks']['items']:
    # 工程3_楽曲IDを取得
    track_id = track['id']
    time.sleep(0.5)
    # 工程4_楽曲情報の抽出
    meta = spotify.track(track_id)
    # 工程5_邦楽判定
    if not meta['external_ids']['isrc'][0:2] == 'JP':
        continue
    # 工程6_楽曲特徴の抽出
    features = spotify.audio_features(track_id)
    # 工程7_楽曲情報と特徴をリスト化
    track_info = getTrackFeatures(track_id, meta, features)
    tracks.append(track_info)

# 工程8_リスト→データフレーム&csv出力
# データフレームに格納
df = pd.DataFrame(tracks, columns = ['track_id', 'name', 'album', 'artist', 'release_date', 'country', 'length', 'popularity', 'key', 'mode', 'danceability', 'acousticness', 'energy', 'instrumentalness', 'liveness', 'loudness', 'speechiness', 'tempo', 'time_signature', 'valence'])
# お気に入り降順にソート
df.sort_values('popularity', ascending=False, inplace=True)
display(df.head())
```

## まとめ
ここまでで，PythonでSpotify APIを使って邦楽情報を抽出しました．

次回から，無料枠で縛られている50曲以上の抽出を実行します．

## 参考サイト
[PythonでSpotify APIを使ってみる ~全ての音楽愛好家のためのSpotify API ep 1~](https://python-muda.com/python/spotify-api-ep-1/)

[PythonでSpotify API [情報の文字列検索]](https://qiita.com/EkatoPgm/items/289b2efcdb5af49843c1)

[Spotify 検索](https://support.spotify.com/jp/article/search/)

[Spotify API Search for Item](https://developer.spotify.com/documentation/web-api/reference/#/operations/search)

[ISO 3166-1 alpha-2 wiki](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

[Spotify Web APIから分析用データセットをつくる](https://zenn.dev/yuriponx/articles/ccb87e276dc361)

[Billboard×Spotifyで「〇〇年代を代表する曲」を決めよう！](https://qiita.com/shionhonda/items/a44b563e8035fe9db259)

[Spotify.Tracks](https://hexdocs.pm/spotify_web_api/Spotify.Tracks.html)

[Pythonで2次元配列の重複行を一発で削除する](https://qiita.com/uuuno/items/b714d84ca2edbf16ea19)





<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

