import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    head: [
        [
          'script',
          {
            async: '',
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2263820744635038',
            crossorigin: 'anonymous'
          }
        ],
        [
          'script',
          {
            async: '',
            src: 'https://www.googletagmanager.com/gtag/js?id=G-GR0QFK5G9'
          }
        ],
        [
          'script',
          {},
          "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GR0QFK5G9');"
        ] 
    ],
    title: 'ハムレットエンジニアのカンニングノート',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'vitepress,blog,blog-theme',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/airene/vitepress-blog-pure', //copyright link
        // 评论的仓库地址
        comment: {
            repo: 'airene/vitepress-blog-pure',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Category', link: '/pages/category' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            // { text: 'About', link: '/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local',
        },
        //outline:[2,3],
        outline:{
            label:'文章摘要'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/hirasu123' }]
        
    } as any,
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    markdown: {
        math: true
    },
    vite: {
        // build: { minify: false }
        server: { port: 5173 }
    },

    /*
      optimizeDeps: {
          keepNames: true
      }
      */
    
})
