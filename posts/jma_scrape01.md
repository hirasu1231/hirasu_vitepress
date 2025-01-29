---
title: 'Pythonを使って気象庁でウェブスクレイピングを実施する(都心部編)'
description: Pythonを使って気象庁でウェブスクレイピングを実施します．(都心部編)
date: 2022-3-08
category: 
  - Python
tags:
  - Python
  - WebScraping
---
Pythonを使って気象庁でウェブスクレイピングを実施します．(都心部編)

<!-- https://www.hamlet-engineer.com -->
<!-- !(/image/ChordDiagram.png) -->

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>



## ウェブスクレイピングの実行

### ウェブスクレイピング
```python
# -*- coding: utf-8 -*-
import os
import datetime
import csv
import urllib.request
from bs4 import BeautifulSoup

def str2float(weather_data):
    try:
        return float(weather_data)
    except:
        return 0

# tds[9]：風速, tds[15]：雲量
def str_fillna(weather_data):
    try:
        if len(weather_data)==0:
            return '-'
        return str(weather_data)
    except:
        return '-'

def scraping(url, date):

    # 気象データのページを取得
    html = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(html)
    trs = soup.find("table", { "class" : "data2_s" })

    data_list = 
    data_list_per_hour = 

    # table の中身を取得
    for tr in trs.findAll('tr')[2:]:
        tds = tr.findAll('td')

        if tds[1].string == None:
            break;
        
        # 時刻
        hour = tds[0].string
        # 1/1 24:00 -> 1/2 0:00
        if hour == "24":
            date = date + datetime.timedelta(1)
            hour = "0"

        data_list.append(date)
        data_list.append(hour)
        data_list.append(str2float(tds[1].string))
        data_list.append(str2float(tds[2].string))
        data_list.append(str2float(tds[3].string))
        data_list.append(str2float(tds[4].string))
        data_list.append(str2float(tds[5].string))
        data_list.append(str2float(tds[6].string))
        data_list.append(str2float(tds[7].string))
        data_list.append(str2float(tds[8].string))
        data_list.append(str_fillna(tds[9].string))
        data_list.append(str2float(tds[10].string))
        data_list.append(str2float(tds[11].string))
        data_list.append(str2float(tds[12].string))
        data_list.append(str2float(tds[13].string))
        # data_list.append(str2float(tds[14].string))
        data_list.append(str_fillna(tds[15].string))
        data_list.append(str2float(tds[16].string))

        data_list_per_hour.append(data_list)

        data_list = 

    return data_list_per_hour
```

### ウェブスクレイピングの実行
```python
def create_csv():
    # CSV 出力先ディレクトリ
    output_dir = "./"

    # 出力ファイル名
    output_file = "tokyo_jma.csv"

    # データ取得開始・終了日
    # 満空データ ：　2020/11/26/12:00 ~ 2021-10-25/03:00
    # 気象庁で補完：2019/7/01/00:00 〜 2020/11/26/12:00
    start_date = datetime.date(2019, 6, 30)
    end_date   = datetime.date(2021, 10, 25)

    # CSV の列
    # fields = ["年月日", "時間", "気圧（現地）", "気圧（海面）",
    #           "降水量", "気温", "露点湿度", "蒸気圧", "湿度",
    #           "風速", "風向", "日照時間", "全天日射量", "降雪", "積雪", 雲量、視程] # 天気は今回は対象外とする
    fields = ["date", "hour", "pressure_land", "pressure_sea",
              "precipitation", "temperature", "dew_temperature", "vapor_pressure", 
              "humidity", "wind_speed", "wind_direction", "daylight_hours", 
              "solar_radiation", "snowfall", "snow_cover", 
              "cloudage", "visibility"]

    with open(os.path.join(output_dir, output_file), 'w') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(fields)

        date = start_date
        while date != end_date + datetime.timedelta(1):

            # 対象url（今回は東京）
            url = "http://www.data.jma.go.jp/obd/stats/etrn/view/hourly_s1.php?" \
                  "prec_no=44&block_no=47662&year=%d&month=%d&day=%d&view="%(date.year, date.month, date.day)

            data_per_day = scraping(url, date)

            for dpd in data_per_day:
                writer.writerow(dpd)

            date += datetime.timedelta(1)

if __name__ == '__main__':
    create_csv()
```


## まとめ
Pythonを使って気象庁でウェブスクレイピングを実施しました．(都心部編)

## 参考サイト
[気象データを Python でスクレイピングする方法](https://www.gis-py.com/entry/scraping-weather-data)

[東京　2021年3月19日 過去の気象データ](https://www.data.jma.go.jp/obd/stats/etrn/view/hourly_s1.php?prec_no=44&block_no=47662&year=2021&month=3&day=19&view=)


<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>




