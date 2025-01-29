---
title: 'PythonでPDFのOCRを実装する'
description: PythonでPDFのOCRを実装します．
date: 2023-3-30
category: 
  - Python
tags:
  - Python
  - Jupyter
  - OCR
---

<!-- https://www.hamlet-engineer.com -->
PythonでPDFのOCRを実装します．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## ライブラリのインストール
```python
! pip install fitz
! pip install PyMuPDF==1.16.14

! apt install tesseract-ocr
! apt install libtesseract-dev
! pip install pytesseract
! apt install ghostscript
! pip install ocrmypdf
```

## OCRの実行
下記のコードで日本語データをインストールします．
```python
# 日本語のインストール
! apt install tesseract-ocr-jpn*
! tesseract --list-langs
```

そして，下記のコードでOCRを実行します．
```python
!ocrmypdf -l jpn_vert Jisaku_x86.pdf Jisaku_x86_ocr.pdf
```

## まとめ
PythonでPDFのOCRを実装しました．

## 参考サイト
[ubuntuでocrmypdfを使ってPDFをOCRする](https://ambiesoft.com/blog/archives/5651)








<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

