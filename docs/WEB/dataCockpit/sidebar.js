const nodeUtils = require('../../topAssets/js/node_utils');

const urls = [
    {
        title: '开发前必读',   // 必要的
        collapsable: true,
        path: '/WEB/dataCockpit/develop/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: nodeUtils.getDocPath('/WEB/dataCockpit/develop/')
    },
    {
        title: '公用组件',   // 必要的
        collapsable: true,
        path: '/WEB/dataCockpit/common/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: nodeUtils.getDocPath('/WEB/dataCockpit/common/')
    },
    {
        title: '业务组件',   // 必要的
        collapsable: true,
        path: '/WEB/dataCockpit/business/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,
        children: nodeUtils.getDocPath('/WEB/dataCockpit/business/')
    },
]
module.exports = urls