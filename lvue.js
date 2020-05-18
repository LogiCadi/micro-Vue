const LVue = function (options) {
    this.data = options.data

    this.el = options.el
    // 模板
    this.tpl = document.querySelector(this.el)

    this.render()
}
const compiler = function (dom, data) {
    for (const node of dom.childNodes) {
        if (node.nodeType === 3) {
            // 文本节点 // 替换成data值
            node.nodeValue = node.nodeValue.replace(/\{\{([^\}]+)\}\}/g, (match, key) => {
                return eval(`data.${key.trim()}`)
            })
        } else {
            // 其他节点
            compiler(node, data)
        }
    }
}
LVue.prototype.render = function () {
    // 拷贝模板
    let dom = this.tpl.cloneNode(true)
    // 替换模板中的data
    compiler(dom, this.data)
    // 将已有data数据的dom替换页面
    document.body.replaceChild(dom, document.querySelector(this.el))
}

LVue.prototype.setData = function(data) {
   this.data = Object.assign(this.data, data)
   this.render()
}


// export default LVue