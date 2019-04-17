webpackJsonp([6],{USCb:function(s,a,t){s.exports=t("Wqcp")},Wqcp:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("项目搭建")]),s._v(" "),t("p",[s._v("项目搭建参考 "),t("a",{attrs:{href:"http://www.cnblogs.com/tiedaweishao/p/7825997.html"}},[s._v("从零开始搭建 Vue 组件库 VV-UI")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://vv-ui.github.io/VV-UI/#/"}},[s._v("项目地址")])]),s._v(" "),t("p",[s._v("记录模仿 VV-UI 组件库造轮子中遇到的问题，以及解决方案")]),s._v(" "),t("h3",[s._v("新建项目")]),s._v(" "),t("p",[s._v("对于脚手架环境的问题，目前已经有非常成熟的 vue 官方的脚手架，我们拿来用就好了")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("npm install vue-cli -g\nvue init webpack origin-ui\ncd origin-ui\nnpm install\nnpm run dev\n")])]),s._v(" "),t("p",[s._v("项目可以正常启动，在此基础上进行改造")]),s._v(" "),t("h3",[s._v("更改目录")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("|-- examples            // 原 src 目录，改成 examples 用作示例展示\n  |-- assets            // api文档logo 样式文件\n  |-- docs              // api文档\n  |-- router            // api文档路由\n|-- packages            // 新增 packages 用于编写存放组件\n  |-- button            // 组件\n  |-- theme-default     // 组件样式 gulp 运行目录\n  |-- lib               // 编译后css\n  |-- src               // 编译前css\n  |-- gulpfile.js       // gulp 写打包css的task\n  |-- salad.config.json // BEM的配置文件\n  |-- index.js          // 导出组件\n\n")])]),s._v(" "),t("p",[s._v("原 src 目录，改成 examples 用作示例展示，需要对应修改 webpack 配置")]),s._v(" "),t("p",[s._v("把原先的编译指向 src 的目录改成 examples")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\.(js|vue)$/")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'eslint-loader'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("include")]),s._v(": [resolve("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'examples'")]),s._v("), resolve("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v("), resolve("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'packages'")]),s._v(")],"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 修改")]),s._v("\n}\nentry: {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("app")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./examples/main.js'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 程序入口修改")]),s._v("\n},\n"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resolve")]),s._v(": {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alias")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vue$")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue/dist/vue.esm.js'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@'")]),s._v(": resolve("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'examples'")]),s._v(") "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 根据实际情况修改")]),s._v("\n  }\n},\n")])]),s._v(" "),t("h3",[s._v("如何编写文档")]),s._v(" "),t("p",[s._v("使用"),t("a",{attrs:{href:"https://github.com/QingWei-Li/vue-markdown-loader"}},[s._v("vue-markdown-loader")]),s._v("在 vue 下可以去写 markdown 文档")]),s._v(" "),t("h4",[s._v("安装")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("# For Vue2\nnpm i vue-markdown-loader -D\nnpm i  vue-loader vue-template-compiler -D\n")])]),s._v(" "),t("h4",[s._v("使用")]),s._v(" "),t("p",[s._v("webpack.config.js file:")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\.md$/")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-markdown-loader'")]),s._v("\n      }\n    ]\n  }\n}\n")])]),s._v(" "),t("p",[s._v("在 example/docs 目录下新建 test.md")]),s._v(" "),t("p",[s._v("同时创建一个新的路由，指向我们的 md 文件：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/test'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("r")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v(".ensure([], () => r(requi("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'../docs/test.md'")]),s._v(")))\n}\n")])]),s._v(" "),t("p",[s._v("打开浏览器访问http://localhost:8080/#/test")]),s._v(" "),t("h4",[s._v("实现 demo/代码演示")]),s._v(" "),t("ul",[t("li",[s._v("需求 1 就是拦截 import,并且解析 markdowm 语法")]),s._v(" "),t("li",[s._v("需求 2 在析 markdown 中也可以写 Vue 的组件")])]),s._v(" "),t("p",[s._v("全部配置可参考"),t("a",{attrs:{href:"https://blog.csdn.net/m0_37972557/article/details/81089887"}},[s._v("Vue 加载 Markdown 格式组件")]),s._v("有详细注释")]),s._v(" "),t("p",[s._v("markdown-it，支持 options 选项。这样我们就可以为我们的 markdown 定义独特的标识符，这里我用 demo 标识需要显示代码块的地方，所以我需要配置 options 选项 ：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" vueMarkdown = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("preprocess")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("MarkdownIt, source")]),s._v(") =>")]),s._v(" {\n    MarkdownIt.renderer.rules.table_open = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<table class=\"table\">'")]),s._v("\n    }\n    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(\n      MarkdownIt.renderer.rules.fence\n    )\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" source\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("use")]),s._v(": [\n    [\n      MarkdownItContainer,\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'demo'")]),s._v(",\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 用于校验包含demo的代码块")]),s._v("\n        validate: "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("params")]),s._v(" =>")]),s._v(" params.trim().match("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/^demo\\s*(.*)$/")]),s._v("),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("tokens, idx")]),s._v(") ")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" m = tokens[idx].info.trim().match("),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/^demo\\s*(.*)$/")]),s._v(")\n\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (tokens[idx].nesting === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" desc = tokens[idx + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("].content\n            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 编译成html")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" html = utils.convertHtml(\n              striptags(tokens[idx + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("].content, "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'script'")]),s._v(")\n            )\n            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 移除描述，防止被添加到代码块")]),s._v("\n            tokens[idx + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("].children = []\n\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('`<demo-block>\n                        <div slot="desc">'),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${html}")]),s._v('</div>\n                        <div slot="highlight">`')]),s._v("\n          }\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'</div></demo-block>\\n'")]),s._v("\n        }\n      }\n    ]\n  ]\n}\n")])]),s._v(" "),t("p",[s._v("这里简单的描述一下这段代码是干什么的：首先把内容里面 vue 片段编译成 html，用于显示，另一方面用 highlight 来高亮代码块。demo-block 本身是我们定义好的组件：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"docs-demo-wrapper"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{maxHeight: isExpand ? '700px' : '0'}\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-container"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"14"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"docs-demo docs-demo--expand"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"highlight-wrapper"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"highlight"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"docs-trans docs-demo__triangle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"toggle"')]),s._v("\n      >")]),s._v("{{isExpand ? '隐藏代码' : '显示代码'}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v("\n    >")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("基本用法：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s._v("::: demo\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("o-button")]),s._v(">")]),s._v("默认按钮"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("o-button")]),s._v(">")]),s._v("\n:::\n")])]),s._v(" "),t("h3",[s._v("如何编写组件")]),s._v(" "),t("p",[s._v("环境准备完毕，紧接着要开始编写组件，考虑的是组件库，所以我们竟可能让我们的组件支持全局引入和按需引入，如果全局引入，那么所有的组件需要要注册到 Vue component 上，并导出：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" install = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue")]),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (install.installed) "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n  components.map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("component")]),s._v(" =>")]),s._v(" Vue.component(component.name, component))\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  install\n}\n")])]),s._v(" "),t("p",[s._v("着要实现按需加载，我们只需要单个导出组件即可：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./button/index.js'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Row "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./row/index'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Col "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./col/index'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" components = [Button, Row, Col]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" install = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue")]),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (install.installed) "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n  components.map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("component")]),s._v(" =>")]),s._v(" Vue.component(component.name, component))\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(" !== "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'undefined'")]),s._v(" && "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".Vue) {\n  install("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".Vue)\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" { install, Button, Row, Col }\n")])]),s._v(" "),t("p",[s._v("既然是单页面应用，必然要去解决样式冲突问题，如果组件内使用 soped，那么样式就无法从组件内抽离出来，达不到可定制化主题颜色的目的。我们需要一套可以分离处理的样式，可以自行编译，可以相互不污染。这时候 css 的 BEM 规范就显得尤为重要。如果你还不知道什么是 BEM 参考： http://www.w3cplus.com/css/css-architecture-1.html。\n说到这里，目前对 BEM 规范支持较好的插件就是 postcss 了，他允许我们配置 BEM 之间的连接符和缩写：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"browsers"')]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ie > 8"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"last 2 versions"')]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"features"')]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"bem"')]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"shortcuts"')]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"component"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"modifier"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"m"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"descendent"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"e"')]),s._v("\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"separators"')]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"descendent"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"__"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"modifier"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"--"')]),s._v("\n      }\n    }\n  }\n}\n")])]),s._v(" "),t("p",[s._v("这样我们就可以把样式单独的抽离出来，通过 gulp 进行打包编译：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("gulp.task("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'compile'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" gulp\n    .src("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./src/*.css'")]),s._v(")\n    .pipe(postcss([salad]))\n    .pipe(cssmin())\n    .pipe(gulp.dest("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./lib'")]),s._v("))\n})\n")])]),s._v(" "),t("p",[s._v("关于 gulp 的使用")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("npm install --global gulp\nnpm install --save-dev gulp\n")])]),s._v(" "),t("p",[s._v("进入 packages/theme-default 中，运行 gulp")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("gulp\n")])])])}]},n=t("VU/8")(null,r,!1,null,null,null);a.default=n.exports}});
//# sourceMappingURL=6.b94b6d7c8f8088c822c6.js.map