(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{287:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Excel 的导入导出都是依赖于"),a("a",{attrs:{href:"https://github.com/SheetJS/js-xlsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-xlsx"),a("OutboundLink")],1),t._v("来实现的。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("js-xlsx")]),t._v("的基础上又封装了"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/vendor/Export2Excel.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Export2Excel.js"),a("OutboundLink")],1),t._v("来方便导出数据。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("所以你先需要安装如下命令：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意 "),a("Badge",{attrs:{text:"v3.9.1+"}})],1),t._v(" "),a("p",[t._v("在"),a("code",[t._v("v3.9.1+")]),t._v("以后的版本中移除了对 Bolb 的兼容性代码，如果你还需要兼容很低版本的浏览器可以手动引入"),a("a",{attrs:{href:"https://www.npmjs.com/package/blob-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("blob-polyfill"),a("OutboundLink")],1),t._v("进行兼容。")])]),t._v(" "),t._m(7),t._v(" "),a("table",[t._m(8),t._v(" "),a("tbody",[t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("tr",[a("td",[t._v("bookType")]),t._v(" "),a("td",[t._v("导出文件类型")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("xlsx, csv, txt, "),a("a",{attrs:{href:"https://github.com/SheetJS/js-xlsx#supported-output-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("xlsx")])])])]),t._v(" "),t._m(13),t._v(" "),t._m(14),a("ul",[a("li",[a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin/#/excel/export-excel",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 DEMO"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/excel/exportExcel.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 代码"),a("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("封装了"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/UploadExcel/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("UploadExcel"),a("OutboundLink")],1),t._v("Excel 导入组件，支持点击和拖拽上传，同样它也是依赖"),a("code",[t._v("js-xlsx")]),t._v("的。")]),t._v(" "),a("p",[t._v("它提供了两个回调函数：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),a("ul",[a("li",[a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin/#/excel/upload-excel",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 DEMO"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/excel/uploadExcel.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 代码"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"excel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excel","aria-hidden":"true"}},[this._v("#")]),this._v(" Excel")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"excel-导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excel-导出","aria-hidden":"true"}},[this._v("#")]),this._v(" Excel 导出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("由于 "),a("code",[t._v("Export2Excel")]),t._v("不仅依赖"),a("code",[t._v("js-xlsx")]),t._v("还依赖"),a("code",[t._v("file-saver")]),t._v("和"),a("code",[t._v("script-loader")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xlsx file-saver -S\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" script-loader -S -D\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于"),s("code",[this._v("js-xlsx")]),this._v("体积还是很大的，导出功能也不是一个非常常用的功能，所以使用的时候建议使用懒加载。使用方法如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/vendor/Export2Excel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  excel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export_json_to_excel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tHeader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表头 必填")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体数据 必填")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel-list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    autoWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    bookType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xlsx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",[t._v("header")]),t._v(" "),a("td",[t._v("导出数据的表头")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("/")]),t._v(" "),a("td",[t._v("[]")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("导出的具体数据")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("/")]),t._v(" "),a("td",[t._v("[]]")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",[t._v("filename")]),t._v(" "),a("td",[t._v("导出文件名")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("/")]),t._v(" "),a("td",[t._v("excel-list")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",[t._v("autoWidth")]),t._v(" "),a("td",[t._v("单元格是否要自适应宽度")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true / false")]),t._v(" "),a("td",[t._v("true")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/vendor/Export2Excel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tHeader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Author'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Readings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list\n  excel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export_json_to_excel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tHeader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表头 必填")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体数据 必填")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel-list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    autoWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    bookType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xlsx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"excel-导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excel-导入","aria-hidden":"true"}},[this._v("#")]),this._v(" Excel 导入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("beforeUpload")]),t._v(" "),a("p",[t._v("你可以在上传之前做一些自己的特殊判断，如判断文件的大小是否大于 1 兆？若大于 1 兆则停止解析并提示错误信息。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeUpload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isLt1M "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isLt1M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please do not upload files larger than 1m in size.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("onSuccess\n解析成功时候会触发的回调函数，它会返回表格的表头和内容。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleSuccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableHeader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" header\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);