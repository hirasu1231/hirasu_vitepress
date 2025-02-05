import{_ as l,c as t,j as r,G as a,w as e,ag as h,B as i,o}from"./chunks/framework.BDI6Vt0-.js";const m=JSON.parse('{"title":"Vuepressで吹き出しを実装する","description":"Vuepressで吹き出しを実装します．主にcssの設定をVuepressでどうのように実装するかの流れになります．","frontmatter":{"title":"Vuepressで吹き出しを実装する","description":"Vuepressで吹き出しを実装します．主にcssの設定をVuepressでどうのように実装するかの流れになります．","date":"2021-04-13T00:00:00.000Z","category":["Vuepress"],"tags":["Vuepress","CSS"]},"headers":[],"relativePath":"posts/vuepress_0005.md","filePath":"posts/vuepress_0005.md"}'),c={name:"posts/vuepress_0005.md"};function d(u,s,k,g,b,E){const n=i("CallInArticleAdsense"),p=i("ClientOnly");return o(),t("div",null,[s[0]||(s[0]=r("p",null,"Vuepressで吹き出しを実装します．主にcssの設定をVuepressでどうのように実装するかの流れになります．",-1)),a(p,null,{default:e(()=>[a(n)]),_:1}),s[1]||(s[1]=h(`<h2 id="ファイル構成" tabindex="-1">ファイル構成 <a class="header-anchor" href="#ファイル構成" aria-label="Permalink to &quot;ファイル構成&quot;">​</a></h2><p>ファイル構成は以下通りです．</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hamlet_engineer</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── public</span></span>
<span class="line"><span>    │   └── hirasu1231.jpg</span></span>
<span class="line"><span>    └── .vuepress</span></span>
<span class="line"><span>        ├── (省略)</span></span>
<span class="line"><span>        ├── styles</span></span>
<span class="line"><span>        │    └── index.styl</span></span>
<span class="line"><span>        └── config.js</span></span></code></pre></div><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>Custom Containerという，文字に対する装飾ではなく，ブロックに対してデザインを付与する仕組みを利用します．</p><p>公式の説明ページは<a href="https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers" target="_blank" rel="noreferrer">こちら</a>です．</p><p>これを利用してMarkdownに以下のコードを記述すると、吹き出しも出すことができるようになります．</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::: bubble9</span></span>
<span class="line"><span>このような吹き出しを追加します．</span></span>
<span class="line"><span>:::</span></span></code></pre></div><p>::: bubble9 このような吹き出しを追加します． :::</p><h2 id="vuepressでの吹き出し" tabindex="-1">Vuepressでの吹き出し <a class="header-anchor" href="#vuepressでの吹き出し" aria-label="Permalink to &quot;Vuepressでの吹き出し&quot;">​</a></h2><h3 id="プラグインのインストール" tabindex="-1">プラグインのインストール <a class="header-anchor" href="#プラグインのインストール" aria-label="Permalink to &quot;プラグインのインストール&quot;">​</a></h3><p>Custom Containerはvuepress-plugin-containerというプラグインで導入されています</p><p>以下のコマンドで<a href="https://github.com/vuepress/vuepress-plugin-container" target="_blank" rel="noreferrer">vuepress-plugin-container</a>というプラグインをインストールします．</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add vuepress-plugin-container</span></span></code></pre></div><h3 id="vuepress-plugin-containerの設定" tabindex="-1">vuepress-plugin-containerの設定 <a class="header-anchor" href="#vuepress-plugin-containerの設定" aria-label="Permalink to &quot;vuepress-plugin-containerの設定&quot;">​</a></h3><p>.vuepress/config.jsに以下のコードを追記します．</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 吹き出し</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;vuepress-plugin-container&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bubble9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        defaultTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">info</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`&lt;div class=&quot;bubble9&quot;&gt;&lt;div class=&quot;imgs&quot;&gt;&lt;img src=&quot;/hirasu1231.jpg&quot; alt=&quot;&quot;&gt;&lt;/div&gt;&lt;div class=&quot;chat&quot;&gt;&lt;div class=&quot;ss&quot;&gt;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        after: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h3 id="吹き出しのデザイン" tabindex="-1">吹き出しのデザイン <a class="header-anchor" href="#吹き出しのデザイン" aria-label="Permalink to &quot;吹き出しのデザイン&quot;">​</a></h3><p>.vuepress/styles/index.stylに以下のコードを追記して，吹き出しのデザインを調整します．</p><p>ベースはcssですが，tab区切りとスペース区切りになっています．</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 吹き出し*/</span></span>
<span class="line"><span>/*以下、②左側のコメント*/</span></span>
<span class="line"><span>.bubble9 </span></span>
<span class="line"><span>  width 100%</span></span>
<span class="line"><span>  margin 1.5em 0</span></span>
<span class="line"><span>  overflow hidden</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.bubble9</span></span>
<span class="line"><span>  .imgs </span></span>
<span class="line"><span>    float left</span></span>
<span class="line"><span>    margin-right -90px</span></span>
<span class="line"><span>    width 75px</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.bubble9 </span></span>
<span class="line"><span>  .imgs img</span></span>
<span class="line"><span>    position relative</span></span>
<span class="line"><span>    top 10px</span></span>
<span class="line"><span>    width 95%</span></span>
<span class="line"><span>    height auto</span></span>
<span class="line"><span>    border solid 3px #1976D2</span></span>
<span class="line"><span>    border-radius 50%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.bubble9</span></span>
<span class="line"><span>  .chat </span></span>
<span class="line"><span>    width 95%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ss </span></span>
<span class="line"><span>  margin 16px</span></span>
<span class="line"><span>  position relative</span></span>
<span class="line"><span>  padding 10px</span></span>
<span class="line"><span>  border-radius 10px</span></span>
<span class="line"><span>  color #000000</span></span>
<span class="line"><span>  background-color #BBDEFB</span></span>
<span class="line"><span>  margin-left 90px</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ss</span></span>
<span class="line"><span>  :after </span></span>
<span class="line"><span>    content &quot;&quot;</span></span>
<span class="line"><span>    display inline-block</span></span>
<span class="line"><span>    position absolute</span></span>
<span class="line"><span>    top 20px </span></span>
<span class="line"><span>    left -24px</span></span>
<span class="line"><span>    border 12px solid transparent</span></span>
<span class="line"><span>    border-right 12px solid #BBDEFB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ss p </span></span>
<span class="line"><span>  margin 16</span></span>
<span class="line"><span>  padding 10</span></span></code></pre></div><h2 id="まとめ" tabindex="-1">まとめ <a class="header-anchor" href="#まとめ" aria-label="Permalink to &quot;まとめ&quot;">​</a></h2><p>::: bubble9 Vuepressで吹き出しを実装しました．吹き出し以外にも追加できそうです． :::</p><h2 id="参考サイト" tabindex="-1">参考サイト <a class="header-anchor" href="#参考サイト" aria-label="Permalink to &quot;参考サイト&quot;">​</a></h2><p><a href="https://web-and-investment.info/posts/2020/07/12/vuepress-custom-container.html" target="_blank" rel="noreferrer">VuePressで独自のCustom Containerの追加方法（吹き出し）</a><br><a href="https://lpeg.info/html/css_bubble.html" target="_blank" rel="noreferrer">CSSのみで吹き出しを作る方法【デザインサンプル10種】</a><br><a href="https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers" target="_blank" rel="noreferrer">Vuepress Custom Containers</a></p>`,25)),a(p,null,{default:e(()=>[a(n)]),_:1})])}const y=l(c,[["render",d]]);export{m as __pageData,y as default};
