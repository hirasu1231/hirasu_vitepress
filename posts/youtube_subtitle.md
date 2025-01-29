---
title: 'Pythonによ，youtubeから字幕情報を抽出する'
description: Pythonにより，youtubeから字幕情報を抽出を実施します．
date: 2021-11-10
category: 
  - Python
tags:
  - Python
  - jupyter
  - YouTube
---

Pythonにより，youtubeから字幕情報を抽出を実施します．<br>

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

> Google Colaboratory（以下Google Colab）は、Google社が無料で提供している機械学習の教育や研究用の開発環境です。開発環境はJupyter Notebookに似たインターフェースを持ち、Pythonの主要なライブラリがプリインストールされています。<br>
引用元：[Google Colabの使い方](https://interface.cqpub.co.jp/ail01/)







## Google Driveと連携
Google ColabとGoogle Driveを連携させて，gitから[ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl)をダウンロードします．

```python
# Google ColabとGoogle Driveを連携
from google.colab import drive
drive.mount('/content/drive')
```

```python
%%bash
# ディレクトリの移動
cd /content/drive/My\ Drive/Videogrep
# gitのダウンロード
git clone https://github.com/ytdl-org/youtube-dl
ls
```

## ffmpegのインストール
下記のコードでffmpegのインストールを実施します．

```python
!apt-get install ffmpeg
```

## 字幕データと動画データの抽出実行
下記のコードで字幕データと動画データの抽出を実施します．

```python
# 作業ディレクトリへの移動
%cd /content/drive/My\ Drive/Videogrep/youtube-dl
!ls
```

```python
# 字幕データと動画データを抽出
!python -m youtube_dl --sub-lang ja --write-auto-sub --sub-format vtt -o '%(id)s' https://youtu.be/g3dl32LaOls
# OagYLOhxf6A.mkv, OagYLOhxf6A.ja.vtt
```

## 字幕付き動画の生成
下記のコードで字幕付き動画の生成を実施します．

```python
# language=[英語ならeng/ 日本語ならjpn]
!ffmpeg -i g3dl32LaOls.mkv -i g3dl32LaOls.en.vtt -map 0:v -map 0:a -map 1 -metadata:s:s:0 language=eng -c:v copy -c:a copy -c:s srt -y g3dl32LaOls_subtitle_ja.mkv
```

## まとめ
そもそも，youtubeの字幕データはひどいもんですが，字幕付き動画の生成は1度してみたかったので，本稿で実装しました．

## 参考サイト
[字幕情報を利用した Python による動画自動編集 (Videogrep)](https://dsng.hatenablog.com/entry/2014/06/21/210000_1)

[YouTubeのURLを投げたら字幕だけ取り出してくれるオレオレAPIをつくる](https://zenn.dev/ukkz/articles/74330ba50757d9)

[ffmpegを使ってmp4とvttファイルから字幕付き動画を作成する](https://ytmt-stag.com/ja/post/00002_ffmpeg/)




<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>
