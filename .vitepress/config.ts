import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    title: 'Vitepress blog',
    base: '/hirasu_vitepress/',
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
            { text: 'About', link: '/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local',
        },
        //outline:[2,3],
        outline:{
            label:'文章摘要'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/airene/vitepress-blog-pure' }]
    } as any,
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        // build: { minify: false }
        server: { port: 5173 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
