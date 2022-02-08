(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"travis-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[t._v("#")]),t._v(" Travis CI")]),t._v(" "),a("h2",{attrs:{id:"github-pages-and-travis-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-and-travis-ci"}},[t._v("#")]),t._v(" GitHub Pages and Travis CI")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中设置正确的 "),a("code",[t._v("base")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME or GROUP>.github.io/")]),t._v("，则可以省略这一步，因为 "),a("code",[t._v("base")]),t._v("默认即是 "),a("code",[t._v('"/"')]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME or GROUP>.github.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),a("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("），则将 "),a("code",[t._v("base")]),t._v("设置为 "),a("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在项目的根目录创建一个名为 "),a("code",[t._v(".travis.yml")]),t._v("的文件；")])]),t._v(" "),a("li",[a("p",[t._v("在本地执行 "),a("code",[t._v("yarn")]),t._v(" 或 "),a("code",[t._v("npm install")]),t._v(" 并且提交生成的 lock 文件（即 "),a("code",[t._v("yarn.lock")]),t._v(" 或 "),a("code",[t._v("package-lock.json")]),t._v("）；")])]),t._v(" "),a("li",[a("p",[t._v("使用 GitHub Pages 部署提供程序模板并遵循 "),a("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis 文档"),a("OutboundLink")],1),t._v("。")])])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm ci")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run build")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GH_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep_history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"生成-gh-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-gh-token"}},[t._v("#")]),t._v(" 生成 GH_TOKEN")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/1.png"),alt:"1"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/2.png"),alt:"2"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/3.png"),alt:"3"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/4.png"),alt:"4"}}),t._v(" "),a("h2",{attrs:{id:"在-travis-ci-中配置-gh-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-travis-ci-中配置-gh-token"}},[t._v("#")]),t._v(" 在 Travis-ci 中配置 GH_TOKEN")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.com/signin",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis-ci官网"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/5.png"),alt:"5"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/6.png"),alt:"6"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/7.png"),alt:"7"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/8.png"),alt:"8"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/travis-ci/9.png"),alt:"9"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);