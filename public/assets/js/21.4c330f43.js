(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{646:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("│  .gitignore\t\t\t\t\t\t\t\t\t\t\t\t-- git忽略文件\t\t\t\t\n│  package.json\t\t\t\t\t\t\t\t\t\t --  依赖包文件\n│  README.md\t\t\t\t\t\t\t\t\t\t --  开发文档\n│  vue.config.js\t\t\t\t\t\t\t\t\t\t -- webpack运行打包配置文件\n│  webstorm_config.js\t\t\t\t\t\t\t -- webstorm配置文件,可配置文件别名路径\n│  \n├─public\t\t\t\t\t\t\t\t\t\t\t\t    -- 公用文件,该文件夹下的文件不会被webpack打包时进行编译\n│      index.html\n│      logo.png\n│      robots.txt\n│      \n└─src\t\t\t\t\t\t\t\t\t\t\t\t\t\t -- 开发资源文件夹\n│  App.vue\t\t\t\t\t\t\t\t\t\t\t-- vue主入口文件\n│  main.js\t\t\t\t\t\t\t\t\t\t\t -- webpack主入口文件\n│  permission.js\t\t\t\t\t\t\t\t  -- vue路由拦截配置文件\n│  \n├─assets\t\t\t\t\t\t\t\t\t\t\t -- 静态资源文件夹\n\n​    │  ├─css\t\t\t\t\t\t\t\t\t\t\t  -- css文件文件夹 \t\t\n​    │  │      base.css\t\t\t\t\t\t\t\t  -- 全局css文件,重置浏览器默认样式  \n​    │  │      iconfont.css\t\t\t\t\t\t   -- 字体图标引入css\n​    │  │      override-ant.less\t\t\t\t\t-- 覆盖Ant-UI框架原始样式less文件,因UI调整,需要覆盖原始UI,添加到这个文件中\n​    │  │      xdeas-ui.less                  \t\t-- 全局的css\n​    │  │      \n​    │  ├─fonts\t\t\t\t\t\t\t\t\t\t\t-- 阿里图标库文件,有新的图标使用时,重新下载替换即可\n\n​    │  ├─images\t\t\t\t\t\t\t\t\t\t-- 图片文件夹,根据页面命名新的文件夹存放对应的图片资源\n\n​    │  └─js\t\t\t\t\t\t\t\t\t\t\t\t  -- js文件文件夹,所有的公用的js文件都放在这里\n​    │          busEvent.js\t\t\t\t\t\t\t  -- vue的事件巴士配置文件,便于vue的组件通信\n​    │          filters.js\t\t\t\t\t\t\t\t\t-- vue全局的过滤器文件\n​    │          global.js\t\t\t\t\t\t\t\t\t-- 全局常用方法文件,该文件不会挂载到vue的原型对象上\n​    │          sessionStore.js\t\t\t\t\t\t-- 基于store插件配置的session存储,便于session存取值\n​    │          themeColor.js   \t\t\t\t\t  -- Ant的主题修改配置文件\n​    │          upload.js\t\t\t\t\t\t\t\t -- 阿里云上传配置js\n​    │          validate.js\t\t\t\t\t\t\t\t-- 全局的表单js\n​    │          \n​    ├─axios\t\t\t\t\t\t\t\t\t\t\t\t\n​    │      axiosConfig.js\t\t\t\t\t\t    -- axios请求配置文件\n​    │      requestList.js\t\t\t\t\t\t\t -- api列表,\n​    │      serverApi.js\t\t\t\t\t\t\t\t-- api服务器配置文件\n​    │      \n​    ├─common\t\t\t\t\t\t\t\t\t\t-- 通用组件文件夹\n\n​    ├─components\t\t\t\t\t\t\t\t  -- 通用业务组件文件夹,与通用组件的区别在于,业务组件有业务属性,比如大多数用到的选择人员的弹窗等...\n\n​    │      \n​    ├─core\t\t\t\t\t\t\t\t\t\t\t\t\n​    │  ├─directives\t\t\t\t\t\t\t\t  -- vue自定义指令文件夹\n\n​    │  │      \n​    │  └─permission\t\t\t\t\t\t\t  -- 业务全局权限文件夹\n\n​    ├─layouts\t\t\t\t\t\t\t\t\t\t -- 全局公用页面文件夹\n​    │      BasicLayout.vue\t\t\t\t\t  -- 主界面\n​    │      \n​    ├─mixins\t\t\t\t\t\t\t\t\t\t  -- vue全局mixins文件夹\n\n​    ├─router\t\t\t\t\t\t\t\t\t\t  -- vue路由配置文件\n​    │      generator-routers.js\t\t\t  -- 根据权限生成路由文件\n​    │      index.js\t\t\t\t\t\t\t\t    -- vue路由主入口文件\n​    │      README.md\n\n​    │      router.config.js\t\t\t\t\t\t  -- 基础路由列表    \n​    ├─store\t\t\t\t\t\t\t\t\t\t -- vuex文件夹\n​    │  │  index.js\n​    │  │  \n​    │  └─modules\t\t\t\t\t\t\t -- vuex不同的modules存放处\n​    │          operation.js\n​    │          permission.js\n​    │          user.js\n​    │          \n​    └─views           \t\t\t\t\t\t\t-- 业务组件文件夹,根据路由名称新增文件夹\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);