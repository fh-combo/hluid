const path = require("path");
const fs = require('fs')
const ENV = process.env.npm_lifecycle_event; //获取当前运行的脚本指令,例如 npm run build 则当前变量为'build'
function getDocPath(basePath) {
    // 根据路径获取markdown文件
    let fileArr = [basePath]
    fs.readdirSync(path.resolve(`docs${basePath}`)).map((t) => {
        // console.log("file----t:",t)
        if (t !== 'README.md') {
            // REALMD.md 放到数组中会导致文档解析出错
            fileArr.push(`${basePath}${t}`)
            // fileArr.push({ title: t.split('.')[0] , path:`${basePath}${t}` })
        }
    })

    // console.log("fileArr:",fileArr)
    return fileArr
}



module.exports = {
    ENV,
    getDocPath
}