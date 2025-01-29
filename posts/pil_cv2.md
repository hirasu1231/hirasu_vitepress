---
title: 'Pillow ↔ OpenCVの変換を実装する'
description: Pillow ↔ OpenCVの変換を実行します．
date: 2021-11-08
category: 
  - Python
tags:
  - Python
  - OpenCV
  - Pillow
---

<!-- https://www.hamlet-engineer.com -->
Pillow ↔ OpenCVの変換を実行します．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## Pillow → OpenCV

```python
import numpy as np
import cv2

# PIL型で読み込み
pil_image = Image.open('opencv.jpeg')

try:
    # 保存
    cv2.imwrite('save_cv2.png', pil_image)
except:
    print('Error')
    

# PIL型 -> OpenCV型
cv2_image = np.array(pil_image, dtype=np.uint8)
cv2_image = cv2.cvtColor(cv2_image, cv2.COLOR_RGB2BGR)

# 保存
cv2.imwrite('save_cv2.png', cv2_image)
print('OK')
# Error
# OK
```

## OpenCV → Pillow

```python
from PIL import Image
import cv2

# OpenCV型で読み込み
cv2_image = cv2.imread('opencv.jpeg')
cv2_image = cv2.cvtColor(cv2_image, cv2.COLOR_BGR2RGB)

try:
    # 保存
    cv2_image.save('save_pil.png')
except:
    print('Error')

# OpenCV型 -> PIL型
pil_image = Image.fromarray(cv2_image)

# 保存
pil_image.save('save_pil.png')
print('OK')
# Error
# OK
```

## まとめ
Pillow ↔ OpenCVの変換を実行しました．

## 参考サイト
[【Python】Pillow ↔ OpenCV 変換](https://qiita.com/derodero24/items/f22c22b22451609908ee)






<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

