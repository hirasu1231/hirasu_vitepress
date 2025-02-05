import{_ as s,c as n,ag as p,o as e}from"./chunks/framework.BDI6Vt0-.js";const g=JSON.parse('{"title":"DockerでQGISがインストールされたコンテナ(Ubuntu20.04)を作成し起動する","description":"DockerでQGISがインストールされたコンテナ(Ubuntu20.04)を作成し起動します．","frontmatter":{"title":"DockerでQGISがインストールされたコンテナ(Ubuntu20.04)を作成し起動する","description":"DockerでQGISがインストールされたコンテナ(Ubuntu20.04)を作成し起動します．","date":"2022-01-12T00:00:00.000Z","category":["QGIS"],"tags":["QGIS","Docker","GIS"]},"headers":[],"relativePath":"posts/QGIS_Docker.md","filePath":"posts/QGIS_Docker.md"}'),t={name:"posts/QGIS_Docker.md"};function o(l,a,c,i,r,u){return e(),n("div",null,a[0]||(a[0]=[p(`<p>DockerでQGISがインストールされたコンテナ(Ubuntu20.04)を作成し起動します．</p><h2 id="ファイル構成" tabindex="-1">ファイル構成 <a class="header-anchor" href="#ファイル構成" aria-label="Permalink to &quot;ファイル構成&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>qgis_docker</span></span>
<span class="line"><span>├── /workspace</span></span>
<span class="line"><span>├── docker-compose.yml</span></span>
<span class="line"><span>└── DockerFile</span></span></code></pre></div><h2 id="dockerfileの作成" tabindex="-1">Dockerfileの作成 <a class="header-anchor" href="#dockerfileの作成" aria-label="Permalink to &quot;Dockerfileの作成&quot;">​</a></h2><p>下記のサイトのDockerfileから一部を書き換えます．</p><p><a href="http://serverarekore.blogspot.com/2020/12/dockerqgisxfcetigervncubuntu2004.html" target="_blank" rel="noreferrer">DockerでQGISとXfce、TigerVNCがインストールされたコンテナ(Ubuntu20.04)を作成する</a></p><p>書き換えは，下記の通りです． <strong>QGISのキーを入力</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &amp;&amp; apt-key adv --keyserver keyserver.ubuntu.com --recv-key 46B5721DBBD2996A \\&lt;br&gt;</span></span></code></pre></div><p><strong>gnome-screensaver前にアップデート</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &amp;&amp; apt-get update \\</span></span>
<span class="line"><span>  &amp;&amp; apt-get -y install gnome-screensaver \\</span></span></code></pre></div><p><strong>DockerFile</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from ubuntu:20.04</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENV DEBIAN_FRONTEND=noninteractive</span></span>
<span class="line"><span>run apt-get update \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get -y -o Dpkg::Options::=&quot;--force-confdef&quot; -o Dpkg::Options::=&quot;--force-confold&quot; upgrade \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get install -y language-pack-ja-base language-pack-ja \\</span></span>
<span class="line"><span>    &amp;&amp; ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;Asia/Tokyo&#39; &gt; /etc/timezone \\</span></span>
<span class="line"><span>    &amp;&amp; locale-gen ja_JP.UTF-8 \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;LC_ALL=ja_JP.UTF-8&#39; &gt; /etc/default/locale \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;LANG=ja_JP.UTF-8&#39; &gt;&gt; /etc/default/locale</span></span>
<span class="line"><span>env LANG=ja_JP.UTF-8 \\</span></span>
<span class="line"><span>    LANGUAGE=ja_JP.UTF-8 \\</span></span>
<span class="line"><span>    LC_ALL=ja_JP.UTF-8</span></span>
<span class="line"><span>run apt-get -y install \\</span></span>
<span class="line"><span>        xubuntu-desktop \\</span></span>
<span class="line"><span>        xfce4-terminal \\</span></span>
<span class="line"><span>        tigervnc-standalone-server \\</span></span>
<span class="line"><span>        expect \\</span></span>
<span class="line"><span>        fcitx-mozc \\</span></span>
<span class="line"><span>        fonts-ipafont-gothic \\</span></span>
<span class="line"><span>        fonts-ipafont-mincho \\</span></span>
<span class="line"><span>        vim \\</span></span>
<span class="line"><span>        gvfs-bin \\</span></span>
<span class="line"><span>        xdg-utils \\</span></span>
<span class="line"><span>    &amp;&amp; wget -qO - https://qgis.org/downloads/qgis-2020.gpg.key | sudo gpg --no-default-keyring --keyring gnupg-ring:/etc/apt/trusted.gpg.d/qgis-archive.gpg --import \\</span></span>
<span class="line"><span>    &amp;&amp; chmod a+r /etc/apt/trusted.gpg.d/qgis-archive.gpg \\</span></span>
<span class="line"><span>    &amp;&amp; echo &quot;deb http://qgis.org/debian focal main&quot; &gt;&gt; /etc/apt/sources.list \\</span></span>
<span class="line"><span>    &amp;&amp; apt-key adv --keyserver keyserver.ubuntu.com --recv-key 46B5721DBBD2996A \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get update \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get -y install qgis python-qgis qgis-plugin-grass \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get -y install unzip \\</span></span>
<span class="line"><span>    &amp;&amp; wget http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/ne_110m_admin_0_countries.zip \\</span></span>
<span class="line"><span>    &amp;&amp; unzip ne_110m_admin_0_countries.zip \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get -y remove --purge light-locker \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get update \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get -y install gnome-screensaver \\</span></span>
<span class="line"><span>    &amp;&amp; im-config -n fcitx \\</span></span>
<span class="line"><span>    &amp;&amp; apt-get clean \\</span></span>
<span class="line"><span>    &amp;&amp; rm -rf /var/cache/apt/archives/* \\</span></span>
<span class="line"><span>    &amp;&amp; rm -rf /var/lib/apt/lists/* \\</span></span>
<span class="line"><span>    &amp;&amp; groupadd -g 1000 ubuntu \\</span></span>
<span class="line"><span>    &amp;&amp; useradd -d /home/ubuntu -m -s /bin/bash -u 1000 -g 1000 ubuntu \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;ubuntu:ubuntu&#39; | chpasswd \\</span></span>
<span class="line"><span>    &amp;&amp; echo &quot;ubuntu ALL=NOPASSWD: ALL&quot; &gt;&gt; /etc/sudoers \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;spawn &quot;tigervncpasswd&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;expect &quot;Password:&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;send &quot;ubuntur&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;expect &quot;Verify:&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;send &quot;ubuntur&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;expect &quot;Would you like to enter a view-only password (y/n)?&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;send &quot;nr&quot;&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;expect eof&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;exit&#39; &gt;&gt; /tmp/initpass \\</span></span>
<span class="line"><span>    &amp;&amp; sudo -u ubuntu -H /bin/bash -c &#39;/usr/bin/expect /tmp/initpass&#39; \\</span></span>
<span class="line"><span>    &amp;&amp; mkdir -p /home/ubuntu/.vnc \\</span></span>
<span class="line"><span>    &amp;&amp; chown ubuntu:ubuntu /home/ubuntu/.vnc \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;#!/bin/sh&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;export LANG=ja_JP.UTF-8&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;export LC_ALL=ja_JP.UTF-8&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;export XMODIFIERS=@im=fcitx&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;export GTK_IM_MODULE=fcitx&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;fcitx -r -d &amp;&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; echo &#39;exec startxfce4&#39; &gt;&gt; /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; chmod +x /home/ubuntu/.vnc/xstartup \\</span></span>
<span class="line"><span>    &amp;&amp; mkdir -p /home/ubuntu/data \\</span></span>
<span class="line"><span>    &amp;&amp; chown -R ubuntu:ubuntu /home/ubuntu/data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>expose 5901</span></span>
<span class="line"><span>volume [&quot;/home/ubuntu/data&quot;]</span></span></code></pre></div><h2 id="docker-compose" tabindex="-1">docker-compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;docker-compose&quot;">​</a></h2><p>docker-compose.ymlを作成します．</p><p><strong>docker-compose.yml</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &quot;3&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  qgis_vnc:</span></span>
<span class="line"><span>    build:</span></span>
<span class="line"><span>      context: .</span></span>
<span class="line"><span>      dockerfile: Dockerfile</span></span>
<span class="line"><span>    user: 1000:1000</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 5901:5901</span></span>
<span class="line"><span>    tty: true</span></span>
<span class="line"><span>    privileged: true</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./workspace:/home/ubuntu/data </span></span>
<span class="line"><span>    working_dir: /home/ubuntu/data </span></span>
<span class="line"><span>    command: /usr/bin/vncserver :1 -localhost no -geometry 1152x864 -alwaysshared -fg</span></span></code></pre></div><h2 id="コンテナの起動" tabindex="-1">コンテナの起動 <a class="header-anchor" href="#コンテナの起動" aria-label="Permalink to &quot;コンテナの起動&quot;">​</a></h2><p>下記のコードでimage構築，コンテナ起動，コンテナ停止を実行します．</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># image構築</span></span>
<span class="line"><span>docker-compose build --no-cache</span></span>
<span class="line"><span></span></span>
<span class="line"><span># コンテナ起動</span></span>
<span class="line"><span>docker-compose up -d</span></span>
<span class="line"><span></span></span>
<span class="line"><span># コンテナ停止</span></span>
<span class="line"><span>docker-compose stop</span></span></code></pre></div><h2 id="サーバーに接続" tabindex="-1">サーバーに接続 <a class="header-anchor" href="#サーバーに接続" aria-label="Permalink to &quot;サーバーに接続&quot;">​</a></h2><p>Finderのメニューバーの「移動→サーバへ接続→vnc://localhost:5901」へ接続します．</p><p>パスワードはubuntuです．</p><p>(/image/qgis_sever.png)</p><h2 id="まとめ" tabindex="-1">まとめ <a class="header-anchor" href="#まとめ" aria-label="Permalink to &quot;まとめ&quot;">​</a></h2><p>ここまでで，DockerでQGISがインストールされたコンテナ(Ubuntu20.04)を作成し起動までしました．</p><h2 id="参考サイト" tabindex="-1">参考サイト <a class="header-anchor" href="#参考サイト" aria-label="Permalink to &quot;参考サイト&quot;">​</a></h2><p><a href="http://serverarekore.blogspot.com/2020/12/dockerqgisxfcetigervncubuntu2004.html" target="_blank" rel="noreferrer">DockerでQGISとXfce、TigerVNCがインストールされたコンテナ(Ubuntu20.04)を作成する</a></p><p><a href="https://docs.qgis.org/3.10/ja/docs/user_manual/working_with_ogc/server/containerized_deployment.html" target="_blank" rel="noreferrer">QGIS Documentation 18.2.5. コンテナ化された配備</a></p><p><a href="https://gis.stackexchange.com/questions/332245/error-adding-qgis-org-repository-public-key-to-apt-keyring" target="_blank" rel="noreferrer">Error adding qgis.org repository public key to apt keyring</a></p><p><a href="https://www.fixes.pub/ubuntu/713313.html" target="_blank" rel="noreferrer">apt : Ubuntu 20.04にgnome-control-centerをインストールする方法</a></p><p><a href="https://qiita.com/tegnike/items/bcdcee0320e11a928d46" target="_blank" rel="noreferrer">docker-compose <code>up</code> とか <code>build</code> とか <code>start</code> とかの違いを理解できていなかったのでまとめてみた</a></p><p><a href="https://qiita.com/acro5piano/items/8cd987253cb205cefbb5" target="_blank" rel="noreferrer">Dockerで実行ユーザーとグループを指定する</a></p><p><a href="https://qiita.com/syoyo/items/6fa6597b7a6625000e33" target="_blank" rel="noreferrer">Docker でユーザ名を指定してコンテナを起動する</a></p><p><a href="https://qiita.com/tksugimoto/items/23fcce1b067661e8aa46" target="_blank" rel="noreferrer">docker-compose の ports 指定まとめ</a></p><p><a href="https://qiita.com/seigot/items/eef9da58c74eb080617b" target="_blank" rel="noreferrer">Dockerへvnc接続する</a></p><p><a href="https://qiita.com/ponsuke0531/items/7e8e5081993a30afdc4a" target="_blank" rel="noreferrer">Dockerコンテナの内部IPアドレスを確認する方法</a></p><p><a href="https://github.com/kartoza/docker-qgis-desktop" target="_blank" rel="noreferrer">kartoza/docker-qgis-desktop</a></p><p><a href="https://github.com/rafdouglas/qgis_desktop_docker" target="_blank" rel="noreferrer">rafdouglas/qgis_desktop_docker</a></p>`,38)]))}const d=s(t,[["render",o]]);export{g as __pageData,d as default};
