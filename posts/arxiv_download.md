---
title: 'Google Colab + seleniumでarxivの論文をアブストも含めてダウンロードする'
description: Python＋Selenium＋ChromeでDeepLの翻訳を実行します．
date: 2021-10-08
category: 
  - Python
tags:
  - Python
  - jupyter
  - Google_Colaboratory
  - machine_translate
---
<!-- https://www.hamlet-engineer.com -->
Google Colab上でseleniumを使ってarxivの論文をアブストも含めダウンロードします．

Google Colab上で実行する理由は，ダウンロード後にGPUを使った翻訳を実行するためです．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

今回はGoogle ColabとGoogle Driveを連携させて，notebook形式で実行してます．<br>

> Google Colaboratory（以下Google Colab）は、Google社が無料で提供している機械学習の教育や研究用の開発環境です。開発環境はJupyter Notebookに似たインターフェースを持ち、Pythonの主要なライブラリがプリインストールされています。<br>
引用元：[Google Colabの使い方](https://interface.cqpub.co.jp/ail01/)






## Google Colabのファイル構成
プロジェクトディレクトリはarxiv_downloadとしています．度々，省略しています．
```
pdf_translate
├── /arxiv_download
│   └── /arxiv/2107_03377/2107_03377.pdf <- ダウンロードしたpdf
│   └── /arxiv/2107_03377/abstract.txt
└── arxiv_download.ipynb <- 実行用ノートブック
```

## Google Driveと連携
Google ColabとGoogle Driveを連携させて，作業ディレクトリを作成します．<br>

```python
# Google ColabとGoogle Driveを連携
from google.colab import drive
drive.mount('/content/drive')
```

```python
%%bash
# ディレクトリの移動
cd /content/drive/My\ Drive/PDF_transrate
# 作業ディレクトリを作成
mkdir arxiv_download
```

```python
# 作業ディレクトリへ移動
%cd /content/drive/My\ Drive/PDF_transrate/arxiv_download
!ls
```

## Google Colab上でseleniumを使う準備
下記のコードでGoogle Colab上でseleniumを使うことができます．

```python
!apt-get update
!apt install chromium-chromedriver
!cp /usr/lib/chromium-browser/chromedriver /usr/bin

!pip install selenium
```

## ダウンロードの実行
下記のコードでarXivのダウンロードを実行します．

```python
from selenium import webdriver

# Google Colab上でselenium.webdriverの起動
def webdriver_colab_start():
  options = webdriver.ChromeOptions()
  options.add_argument('--headless')
  options.add_argument('--no-sandbox')
  options.add_argument('--disable-dev-shm-usage')
  driver = webdriver.Chrome('chromedriver',options=options)
  
  return driver
```

```python
import os
import urllib.request

# selenium.webdriverの起動(Google Colab)
driver = webdriver_colab_start()

# Selenium 経由でブラウザを操作する
url = 'https://arxiv.org/abs/2107.03377'
driver.get(url)
print(driver.current_url)

# タイトル・アブストの書き込み
title = driver.find_element_by_css_selector('.title.mathjax').text # タイトル
abstract = driver.find_element_by_css_selector('.abstract.mathjax').text # アブスト
f = open("./arxiv/{0}/abstract.txt".format(dir_name), 'w', encoding='utf-8') # txt生成
# 書き込み
f.write('【タイトル_英語】\n')
f.write('{}\n\n'.format(title))
f.write('【アブスト_英語】\n')
f.write('{}\n'.format(abstract))
f.close() # 閉じる

# 論文pdfダウンロード
pdf_url = driver.find_element_by_css_selector('.abs-button.download-pdf').get_attribute("href")
dir_name = pdf_url.split('/')[-1].replace('.', '_')
os.makedirs("./arxiv/{0}/".format(dir_name), exist_ok=True)
urllib.request.urlretrieve(pdf_url, "./arxiv/{0}/{0}.pdf".format(dir_name))
```

## まとめ
Google Colab上でseleniumを使ってarxivの論文をアブストも含めダウンロードしました．

次に，ダウンロードとGPUを使った翻訳を同時に実行します．

## 参考サイト
[google ColaboratoryでSeleniumを使う](https://enjoy-a-lot.com/google-colaboratory-selenium/)




<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>