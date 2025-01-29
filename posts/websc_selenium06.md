---
title: 'Python＋Selenium＋Chromeのウェブスクレイピングで，ボタンクリックを実装する'
description: Python＋Selenium＋Chromeのウェブスクレイピングで，ボタンクリックの操作を容易にするために，コードを実装します
date: 2021-04-19
category: 
  - Python
tags:
  - Python
  - Jupyter
  - Selenium
  - Web_Scraping
---
Python＋Selenium＋Chromeのウェブスクレイピングで，ボタンクリックの操作を容易にするために，コードを実装します．<br>

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>







## ボタンクリック
class名で取得しても，複数のボタンで同じクラス名が使用されているサイトもあるので，ボタンの文字列を指定してクリックするようなコードを実装しました．

```python
def button_click(button_text):
  buttons = driver.find_elements_by_tag_name("button")

  for button in buttons:
      if button.text == button_text:
          button.click()
          break
```


## まとめ
Python＋Selenium＋Chromeのウェブスクレイピングで，ボタンクリックの操作を容易にするために，コードを実装しました．

<br>

## 参考サイト
[Seleniumでボタンをクリックするときは、ボタンの文字列を取得するのがいい](https://nonenull.hatenablog.com/entry/2018/07/25/015453)<br>




<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>