---
title: 'Seleniumのversion変更について'
description: Seleniumのversion変更により，過去のコードが使えなくなったので，それについて記述します．
date: 2022-7-19
category: 
  - Python
tags:
  - Python
  - Selenium
---

Seleniumのversion変更により，過去のコードが使えなくなったので，それについて記述します．

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## Seleniumのversion
2022年7月4日において,Seleniumのversionが4.3.0となっています．

それにより，過去の記事で使った下記のようなコードが使えなくなっています．

本記事では，その対策を記述します．

```python
from selenium import webdriver

# Macの場合 (Chromedriveがこのプログラムを実行している同じ場所にある前提)
driver = webdriver.Chrome(executable_path="./chromedriver")

### 1.Webサイトにアクセスする
driver.get("https://aiacademy.jp/")

# 要素を取得する
driver.find_element_by_class_name("classname") # classでの指定
driver.find_element_by_xpath("xpath") # xpathでの指定
```

## 今まで通りに使いたい
過去のコードを今まで通りに使いたい場合は，下記のコードを走らせて古いversionに上書きします．

```python
!pip install -U selenium==4.1.5
```


```python
from selenium import webdriver

# Macの場合 (Chromedriveがこのプログラムを実行している同じ場所にある前提)
driver = webdriver.Chrome(executable_path="./chromedriver")

### 1.Webサイトにアクセスする
driver.get("https://aiacademy.jp/")

# 要素を取得する
driver.find_element_by_class_name("classname") # classでの指定
driver.find_element_by_xpath("xpath") # xpathでの指定
```

## 新versionに対応
新version(4.3.0)では，下記のように書きます．

```python
from selenium import webdriver

# Macの場合 (Chromedriveがこのプログラムを実行している同じ場所にある前提)
driver = webdriver.Chrome(executable_path="./chromedriver")

### 1.Webサイトにアクセスする
driver.get("https://aiacademy.jp/")

# 要素を取得する(旧)
# driver.find_element_by_class_name("classname") # classでの指定
# driver.find_element_by_xpath("xpath") # xpathでの指定

# 要素を取得する(新)
driver.find_element(By.CLASS, "classname") # classでの指定
driver.find_element(By.XPATH, "xpath") # xpathでの指定

```

## まとめ
Seleniumのversion変更により，過去のコードが使えなくなったので，それについて記述しました．

## 参考サイト


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>


