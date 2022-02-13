const nodeUtils = require('../topAssets/js/node_utils')
const ENV = nodeUtils.ENV
// 具体配置文档: https://vuepress.vuejs.org/zh/guide/
const path = require("path");

const BaseSortSrc = ENV == 'dev' ? '/' :'/public/'; // 开发环境跟部署时的基础路径不同


module.exports = {
    title: 'HL-UI',
    description: '这是简短描述...',
    // dest: './dist',
    dest: './public',
    // base: './',
    base: BaseSortSrc,

    // LOGO大图配置
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],

    markdown: {
        lineNumbers: true
    },

    themeConfig: {
        // logo: "/images/logo_img.png",
        logo: ENV == 'dev' ? '/images/logo_img.png' : `./images/logo_img.png`,
        // 右上角导航菜单
        nav: require('./nav'),

        // 文档侧边栏
        sidebar: require('./sidebar'),

        // 侧边栏展开下潜深度
        sidebarDepth: 2,

        // 记录编辑/更新修改时间
        // 需要传到git仓库(vuepress才能获取并显示)
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },

    plugins: [
        'demo-container-v2',
        [
            'vuepress-plugin-comment',
            // {
            //     choosen: 'gitalk',
            //     options: {
            //         clientID: 'GitHub Application Client ID',
            //         clientSecret: 'GitHub Application Client Secret',
            //         repo: 'GitHub repo',
            //         owner: 'GitHub repo owner',
            //         admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
            //         distractionFreeMode: false
            //     }
            // }
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'cb1324ba398628563cac', // 第三方登录 clientID
                    clientSecret: 'aead3a62912aa9d31110905a37a8a6b30ddf9a16', // 第三方登录 clientSecret
                    repo: 'vuepressCyBizCompBook_talk', // 你的存储库
                    owner: 'fh-combo', // 存储库拥有者，填你的 Github 账户
                    admin: ['fh-combo'], // 对仓库有写权限的人，填你的 Github 账户
                    pagerDirection: 'last',
                    id:
                        '<%- (frontmatter.permalink || frontmatter.to.path || "123456789012345").slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname || "123456789012345") %>', // GitHub issue 的内容
                },
            },
        ]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './'), // 设置路径别名
                '@vps': path.resolve(__dirname, './assets'),
            }
        }
    }

}
