import{_ as p,c as e,j as h,G as i,w as l,ag as k,B as t,o as r}from"./chunks/framework.BDI6Vt0-.js";const m=JSON.parse('{"title":"Google Colaboratory+Nimで変数宣言について勉強する","description":"Google Colaboratory+Nimで変数宣言について勉強します．","frontmatter":{"title":"Google Colaboratory+Nimで変数宣言について勉強する","description":"Google Colaboratory+Nimで変数宣言について勉強します．","date":"2022-06-13T00:00:00.000Z","category":["Nim"],"tags":["Nim","Google_Colaboratory"]},"headers":[],"relativePath":"posts/nimnim_04.md","filePath":"posts/nimnim_04.md"}'),o={name:"posts/nimnim_04.md"};function d(g,s,c,E,y,A){const a=t("CallInArticleAdsense"),n=t("ClientOnly");return r(),e("div",null,[s[0]||(s[0]=h("p",null,"Google Colaboratory+Nimで変数宣言について勉強します．",-1)),i(n,null,{default:l(()=>[i(a)]),_:1}),s[1]||(s[1]=k(`<blockquote><p>Google Colaboratory（以下Google Colab）は、Google社が無料で提供している機械学習の教育や研究用の開発環境です。開発環境はJupyter Notebookに似たインターフェースを持ち、Pythonの主要なライブラリがプリインストールされています。<br> 引用元：<a href="https://interface.cqpub.co.jp/ail01/" target="_blank" rel="noreferrer">Google Colabの使い方</a></p></blockquote><h2 id="nim4colabのインストール" tabindex="-1">nim4colabのインストール <a class="header-anchor" href="#nim4colabのインストール" aria-label="Permalink to &quot;nim4colabのインストール&quot;">​</a></h2><p>Google Colab で nimコマンドを使用するためのライブラリであるnim4colabをインストールします．</p><p>%load_ext nim4colab により%を付けてNimのコマンドを使えます．</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pip install git</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">github.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">demotomohiro</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nim4colab.git</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">load_ext nim4colab</span></span></code></pre></div><h2 id="nimpyのインストール" tabindex="-1">nimpyのインストール <a class="header-anchor" href="#nimpyのインストール" aria-label="Permalink to &quot;nimpyのインストール&quot;">​</a></h2><p>PythonからNimを呼び出すためのNimのライブラリ、nimpyをインストールします．</p><p><a href="https://qiita.com/k4saNova/items/5bb67d1cb40ba90431af" target="_blank" rel="noreferrer">Nim初心者が始めるNimとnimpy</a></p><p>nimpyをインストールすることで、後述の fib.nim内で使っているnimpyをコンパイル、ライブラリとして使用することができます．</p><p>nimbleはNimのライブラリをインストールするためのコマンドです．</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimble install nimpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span></span></code></pre></div><h2 id="nimのコメントアウト" tabindex="-1">Nimのコメントアウト <a class="header-anchor" href="#nimのコメントアウト" aria-label="Permalink to &quot;Nimのコメントアウト&quot;">​</a></h2><p>プログラミングでは、コード中にコメントを書くことができます。</p><p>Nimでは文頭に「#」を書くことで、コメントとして扱われます。</p><p>コメント扱いされた文は実行されることはありません。</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Google Colabでnimを使用するためのおまじない</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># この行はコメントです.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># print(&quot;コメントです&quot;) </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Not, Comment&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 実行結果</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello, World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Not, Comment</span></span></code></pre></div><h2 id="nimの変数宣言" tabindex="-1">Nimの変数宣言 <a class="header-anchor" href="#nimの変数宣言" aria-label="Permalink to &quot;Nimの変数宣言&quot;">​</a></h2><p>Nimでは，Pythonと同様に変数をつける時は、左に変数名・右に数値や文字列を置き、間に「=」を挟みます。変数は大文字と小文字でも区別されます。</p><p>変数名が長い時に、Pythonのように「_」で区切るとエラーが発生しますので，区切る箇所を大文字にします。</p><h3 id="変数宣言" tabindex="-1">変数宣言 <a class="header-anchor" href="#変数宣言" aria-label="Permalink to &quot;変数宣言&quot;">​</a></h3><p>また，Nimでは変数宣言の前に「var, let, const」をつける必要があります．</p><p>上記の3つのタグについては，下記の通りです．</p><ul><li>var：書き換え可能な変数の定義はvarで行います</li><li>let：変数を束縛したい場合はletを使用します</li><li>const：constで宣言した値は、コンパイル時に確定します。 letの場合は実行時に確定する変数で、変更ができないという扱いのようです。</li></ul><p><a href="https://symfoware.blog.fc2.com/blog-entry-2239.html" target="_blank" rel="noreferrer">Nim 変数、定数の宣言方法(var, let, const)</a></p><p><a href="https://zenn.dev/dumblepy/articles/b475b3b4f7d0da" target="_blank" rel="noreferrer">Nimを知ってほしい2022</a></p><h4 id="nim-var" tabindex="-1">nim(var) <a class="header-anchor" href="#nim-var" aria-label="Permalink to &quot;nim(var)&quot;">​</a></h4><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Google Colabでnimを使用するためのおまじない</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># データ型→初期値</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var text:string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># データ型と初期値を同時</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var Text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Text&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 出力</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo Text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 変数名が長い時</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同時に宣言</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># varの後で改行は必須</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x, y:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    helloworldmessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    HelloWorldMessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># varなので書き換え可能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 出力</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo x, helloworldmessage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo y, HelloWorldMessage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 実行結果</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1Hello, World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2Hello, World</span></span></code></pre></div><h4 id="nim-let" tabindex="-1">nim(let) <a class="header-anchor" href="#nim-let" aria-label="Permalink to &quot;nim(let)&quot;">​</a></h4><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Google Colabでnimを使用するためのおまじない</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># データ型→初期値</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># letでは初期値なしではエラー発生</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># let text:string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># text = &quot;text&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># データ型と初期値を同時</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let Text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Text&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 出力</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo Text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 変数名が長い時</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同時に宣言</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># varの後で改行は必須</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x, y:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    helloworldmessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    HelloWorldMessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># letなので書き換え不可能</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># エラー発生</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># y = 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 出力</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo x, helloworldmessage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo y, HelloWorldMessage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 実行結果</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1Hello, World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1Hello, World</span></span></code></pre></div><h4 id="nim-const" tabindex="-1">nim(const) <a class="header-anchor" href="#nim-const" aria-label="Permalink to &quot;nim(const)&quot;">​</a></h4><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Google Colabでnimを使用するためのおまじない</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># データ型→初期値</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># constでも初期値なしではエラー発生</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># const text:string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># text = &quot;text&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># データ型と初期値を同時</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const Text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Text&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 出力</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo Text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 変数名が長い時</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同時に宣言</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># constの後で改行は必須</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # x, y:int = 1 #constではエラー発生</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    helloworldmessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    HelloWorldMessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># constなので書き換え不可能</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># エラー発生</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># y = 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 出力</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo x, helloworldmessage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo y, HelloWorldMessage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 実行結果</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1Hello, World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2Hello, World</span></span></code></pre></div><h3 id="関数を作成-def-→-proc" tabindex="-1">関数を作成(def → proc) <a class="header-anchor" href="#関数を作成-def-→-proc" aria-label="Permalink to &quot;関数を作成(def → proc)&quot;">​</a></h3><p>Nimではprocで関数を作成する．</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Google Colabでnimを使用するためのおまじない</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proc integer00() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    var </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Text&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    echo text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    echo Text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 変数名が長い時</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    var </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        helloworldmessage  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HelloWorldMessage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    echo helloworldmessage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    echo HelloWorldMessage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">integer00()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello, World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello, World</span></span></code></pre></div><p>また，返り値は下記の3つで設定できる．</p><ul><li>result</li><li>return</li><li>関数名</li></ul><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Google Colabでnimを使用するためのおまじない</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nimc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proc HelloWorld(str1: string): string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    var text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &amp;は文字列連結演算子</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello World&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proc HelloWorld2(str1: string): string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    var text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello World&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &amp;は文字列連結演算子</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:関数名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proc HelloWorld3(str1: string): string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    var text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello World</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &amp;は文字列連結演算子</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初期設定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var echo_str:string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo_str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HelloWorld(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo echo_str</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo_str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HelloWorld2(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo echo_str</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返り値:関数名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo_str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HelloWorld3(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo echo_str</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello Worldmass</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hello World</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mass</span></span></code></pre></div><h2 id="まとめ" tabindex="-1">まとめ <a class="header-anchor" href="#まとめ" aria-label="Permalink to &quot;まとめ&quot;">​</a></h2><p>Google Colaboratory+Nimで変数宣言について勉強しました．</p><h2 id="参考サイト" tabindex="-1">参考サイト <a class="header-anchor" href="#参考サイト" aria-label="Permalink to &quot;参考サイト&quot;">​</a></h2><p><a href="https://agency-star.co.jp/column/nim/" target="_blank" rel="noreferrer">Nimの特徴や使い方をわかりやすく解説！</a></p><p><a href="https://qiita.com/k4saNova/items/5bb67d1cb40ba90431af" target="_blank" rel="noreferrer">Nim初心者が始めるNimとnimpy</a></p><p><a href="https://medium.com/statch/speeding-up-python-code-with-nim-ec205a8a5d9c" target="_blank" rel="noreferrer">Speeding up Python code with Nim</a></p><p><a href="https://zenn.dev/megane_otoko/articles/029_nim_for_python" target="_blank" rel="noreferrer">Nimを組み込んでPythonを高速化してみた</a></p><p><a href="https://qiita.com/rigani/items/6e87c7cee6903ed65ed2" target="_blank" rel="noreferrer">至高の言語、Nimを始めるエンジニアへ</a></p><p><a href="https://nim-lang.org/docs/nimc.html" target="_blank" rel="noreferrer">Nim Compiler User Guide</a></p><p><a href="https://cpprefjp.github.io/lang/cpp11/thread_local_storage.html" target="_blank" rel="noreferrer">スレッドローカルストレージ</a></p><p><a href="https://2vg.github.io/Nim-World/proc/" target="_blank" rel="noreferrer">Nim 関数</a></p><p><a href="https://zenn.dev/dumblepy/articles/3f4f1c288ada66#%E6%AF%94%E8%BC%83" target="_blank" rel="noreferrer">PythonistaのためのNim入門</a></p><p><a href="https://qiita.com/6in/items/809f4eb788d00503a825" target="_blank" rel="noreferrer">nim内包表記</a></p><p><a href="https://qiita.com/meganeo/items/051fd0aa59d89b3a7049" target="_blank" rel="noreferrer">Nimの便利な標準ライブラリ sugar</a></p><p><a href="https://qiita.com/k4saNova/items/5bb67d1cb40ba90431af" target="_blank" rel="noreferrer">Nim初心者が始めるNimとnimpy</a></p><p><a href="https://qiita.com/mkanenobu/items/0e100625ea7d719c6d96" target="_blank" rel="noreferrer">Nimでゼロ埋め</a></p><p><a href="https://symfoware.blog.fc2.com/blog-entry-2239.html" target="_blank" rel="noreferrer">Nim 変数、定数の宣言方法(var, let, const)</a></p><p><a href="https://zenn.dev/dumblepy/articles/b475b3b4f7d0da" target="_blank" rel="noreferrer">Nimを知ってほしい2022</a></p><p><a href="https://symfoware.blog.fc2.com/blog-entry-2236.html" target="_blank" rel="noreferrer">nim いろいろなコメントの方法</a></p><p><a href="https://flat-leon.hatenablog.com/entry/nim_howto" target="_blank" rel="noreferrer">【Nim】個人的逆引きリファレンス</a></p>`,57)),i(n,null,{default:l(()=>[i(a)]),_:1})])}const u=p(o,[["render",d]]);export{m as __pageData,u as default};
