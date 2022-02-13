---
title: Blogging 导读
lang: zh-CN
---


```
│  .gitignore												-- git忽略文件				
│  package.json										 --  依赖包文件
│  README.md										 --  开发文档
│  vue.config.js										 -- webpack运行打包配置文件
│  webstorm_config.js							 -- webstorm配置文件,可配置文件别名路径
│  
├─public												    -- 公用文件,该文件夹下的文件不会被webpack打包时进行编译
│      index.html
│      logo.png
│      robots.txt
│      
└─src														 -- 开发资源文件夹
│  App.vue											-- vue主入口文件
│  main.js											 -- webpack主入口文件
│  permission.js								  -- vue路由拦截配置文件
│  
├─assets											 -- 静态资源文件夹

​    │  ├─css											  -- css文件文件夹 		
​    │  │      base.css								  -- 全局css文件,重置浏览器默认样式  
​    │  │      iconfont.css						   -- 字体图标引入css
​    │  │      override-ant.less					-- 覆盖Ant-UI框架原始样式less文件,因UI调整,需要覆盖原始UI,添加到这个文件中
​    │  │      xdeas-ui.less                  		-- 全局的css
​    │  │      
​    │  ├─fonts											-- 阿里图标库文件,有新的图标使用时,重新下载替换即可

​    │  ├─images										-- 图片文件夹,根据页面命名新的文件夹存放对应的图片资源

​    │  └─js												  -- js文件文件夹,所有的公用的js文件都放在这里
​    │          busEvent.js							  -- vue的事件巴士配置文件,便于vue的组件通信
​    │          filters.js									-- vue全局的过滤器文件
​    │          global.js									-- 全局常用方法文件,该文件不会挂载到vue的原型对象上
​    │          sessionStore.js						-- 基于store插件配置的session存储,便于session存取值
​    │          themeColor.js   					  -- Ant的主题修改配置文件
​    │          upload.js								 -- 阿里云上传配置js
​    │          validate.js								-- 全局的表单js
​    │          
​    ├─axios												
​    │      axiosConfig.js						    -- axios请求配置文件
​    │      requestList.js							 -- api列表,
​    │      serverApi.js								-- api服务器配置文件
​    │      
​    ├─common										-- 通用组件文件夹

​    ├─components								  -- 通用业务组件文件夹,与通用组件的区别在于,业务组件有业务属性,比如大多数用到的选择人员的弹窗等...

​    │      
​    ├─core												
​    │  ├─directives								  -- vue自定义指令文件夹

​    │  │      
​    │  └─permission							  -- 业务全局权限文件夹

​    ├─layouts										 -- 全局公用页面文件夹
​    │      BasicLayout.vue					  -- 主界面
​    │      
​    ├─mixins										  -- vue全局mixins文件夹

​    ├─router										  -- vue路由配置文件
​    │      generator-routers.js			  -- 根据权限生成路由文件
​    │      index.js								    -- vue路由主入口文件
​    │      README.md

​    │      router.config.js						  -- 基础路由列表    
​    ├─store										 -- vuex文件夹
​    │  │  index.js
​    │  │  
​    │  └─modules							 -- vuex不同的modules存放处
​    │          operation.js
​    │          permission.js
​    │          user.js
​    │          
​    └─views           							-- 业务组件文件夹,根据路由名称新增文件夹

```