---
title: 'PythonでPDFの切り取りを実装する'
description: PythonでPDFの切り取りを実装します．
date: 2021-11-18
category: 
  - Python
tags:
  - Python
  - Jupyter
  - PDF
---

<!-- https://www.hamlet-engineer.com -->
PythonでPDFの切り取りを実装します．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## ライブラリのインストール
```python
!pip install fitz
!pip install PyMuPDF==1.16.14
```

<!-- ## PDFの範囲確認
下記のコードでPDFの切り取り範囲を確認します．

```python
import fitz
import csv
import json
from tqdm import tqdm

input_path = './Jisaku_x86.pdf'
doc = fitz.open(input_path)

for page in tqdm(doc):
    for f in range(3):
        crop_length = 120 * (f + 1)
        # rect = fitz.Rect(page.rect[0]+crop_length,page.rect[1]+crop_length,page.rect[2]-crop_length,page.rect[3]-crop_length)
        rect = fitz.Rect(page.rect[0],page.rect[1]-crop_length,page.rect[2],page.rect[3]+crop_length)
        # 図形挿入
        page.drawRect(rect,color=(0.25 * (f + 1), 0.25 * (f + 1), 0.25 * (f + 1)))

doc.save('./sample.pdf', garbage=1, clean=1, deflate=1)
``` -->

## PDFの切り取り
下記のコードでPDFの切り取りを実行します．

```python
import fitz
import csv
import json
from tqdm import tqdm

input_path = './Jisaku_x86.pdf'
doc = fitz.open(input_path)

for page in tqdm(doc):
    # 範囲指定
    crop_length = 40
    rect = fitz.Rect(page.rect[0]+crop_length,
                     page.rect[1]+crop_length,
                     page.rect[2]-crop_length,
                     page.rect[3]-crop_length)
    # トリミング
    page.setCropBox(rect)
    

doc.save(input_path.replace('.pdf', '_crop.pdf'), garbage=1, clean=1, deflate=1)
```

## まとめ
PythonでPDFの切り取りを実装しました．







<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

