(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)o=s[u],i[o]&&m.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},i={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-b5845c76":"b2581e25"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-b5845c76":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-b5845c76":"41dfaaa1"}[t]+".css",i=c.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[t],d.parentNode.removeChild(d),r(a)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,r){n=i[t]=[e,r]});e.push(n[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(m);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");a.type=n,a.request=o,r[1](a)}i[t]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-element-form-editor/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0154":function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a4bb"),_home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__["a"]={props:{store:Object},data:function(){return{formJson:void 0}},methods:{gen:function gen(){try{var formData=eval("(".concat(this.formJson,")")),formItems=_home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(formData).map(function(t){return{type:"EInputTrim",title:"JSON生成",props:{label:"".concat(formData[t]||t),value:t,required:""}}});this.store.commit("setFormItems",formItems)}catch(error){this.$message.error("请填入正确的Object")}}}}},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"04b5":function(t,e,r){"use strict";var n=r("04d1"),o=r.n(n);o.a},"04d1":function(t,e,r){},"0890":function(t,e,r){},"0b6a":function(t,e,r){t.exports=r.p+"img/github.1ec9f695.svg"},"177c":function(t,e,r){},"1c4d":function(t,e,r){"use strict";var n=r("479f"),o=r.n(n);o.a},"271f":function(t,e,r){"use strict";var n=r("0890"),o=r.n(n);o.a},"339a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-select",t._b({attrs:{placeholder:"请选择"},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}},"el-select",t.$attrs,!1),[r("el-option",{attrs:{label:"选项一",value:"first"}}),r("el-option",{attrs:{label:"选项二",value:"second"}})],1)},o=[],i={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("change",t),this.$emit("input",t)}}}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},"3c63":function(t,e,r){},"479f":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("28a5"),r("a481"),r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],a=(r("034f"),r("2877")),s={},c=Object(a["a"])(s,o,i,!1,null,null,null),l=c.exports,u=r("cebc"),m=r("a925"),d=r("b2d6"),f=r.n(d),p=r("f0d9"),h=r.n(p),b={header:{editor:"edit online"},form:{itemsAsset:"Form Item Asset",attribute:"Form Attribute",itemAttribute:"FormItem Attribute",JSON:"JSON to Form"},code:{copy:"copy code"}},v={header:{editor:"在线编辑"},form:{itemsAsset:"表单元素资源",attribute:"表单属性",itemAttribute:"表单元素属性编辑",JSON:"JSON 生成表单"},code:{copy:"复制代码"}};n["default"].use(m["a"]);var _={en:Object(u["a"])({},b,f.a),zh:Object(u["a"])({},v,h.a,{lk:"asdasd {msg}"})},g=new m["a"]({locale:"en",messages:_,fallbackLocale:"en",numberFormats:{en:{currency:{style:"currency",currency:"USD"}},zh:{currency:{style:"currency",currency:"JPY",currencyDisplay:"symbol"}}},dateTimeFormats:{en:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},zh:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}}}}),y=g,w=r("5c96"),x=r.n(w),I=(r("0fae"),r("8c4f")),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-header",{staticStyle:{padding:"0",height:"50px"}},[r("Header")],1),r("el-container",[r("el-aside",{attrs:{width:"300px"}},[r("FormItemAsset"),r("JsonForm",{attrs:{store:t.store}})],1),r("el-main",[r("FormAttribute",{staticStyle:{"margin-bottom":"10px"},attrs:{store:t.store}}),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:16}},[r("FormItems",{attrs:{store:t.store,formItems:t.formItems}})],1),r("el-col",{attrs:{span:8}},[r("FormItemAttribute",{attrs:{store:t.store,formItemToHandle:t.formItemToHandle}})],1)],1)],1)],1),r("FormCode",{attrs:{form:t.form,formItems:t.formItems}})],1)],1)},E=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"logo"},[r("img",{staticStyle:{position:"absolute",top:"-80px",left:"20px"},attrs:{width:"200px",src:t.logo,alt:"logo"}})]),r("div",{staticStyle:{"padding-top":"10px",float:"right","padding-right":"10px"}},[r("router-link",{attrs:{to:"code-editor",target:"_blank"}},[r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",icon:"el-icon-edit",type:"success"}},[t._v(t._s(t.$t("header.editor")))])],1),r("el-select",{staticStyle:{width:"100px","margin-left":"10px"},attrs:{size:"mini",clearable:"",placeholder:"中文/En"},on:{change:t.handleSetLanguage},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[r("el-option",{attrs:{label:"中文",value:"zh"}}),r("el-option",{attrs:{label:"English",value:"en"}})],1)],1)])},C=[],O=r("72d8"),j=r.n(O),$={data:function(){return{logo:j.a,lang:this.$i18n.locale}},methods:{handleSetLanguage:function(t){this.$i18n.locale=t}}},A=$,F=(r("1c4d"),Object(a["a"])(A,S,C,!1,null,"d03f1e8e",null)),T=F.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.$t("form.attribute")))])]),r("div",[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[r("el-form-item",{attrs:{label:"表单对象"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"表单对象"},model:{value:t.form.formObj,callback:function(e){t.$set(t.form,"formObj","string"===typeof e?e.trim():e)},expression:"form.formObj"}})],1),r("el-form-item",{attrs:{label:"更新方法"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"更新方法"},model:{value:t.form.method,callback:function(e){t.$set(t.form,"method","string"===typeof e?e.trim():e)},expression:"form.method"}})],1),r("el-form-item",[r("el-checkbox",{staticStyle:{width:"150px"},attrs:{label:"true"},model:{value:t.form.validated,callback:function(e){t.$set(t.form,"validated",e)},expression:"form.validated"}},[t._v("需要验证")])],1),r("el-form-item",{attrs:{label:"表单Ref"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"表单的Ref值"},model:{value:t.form.ref,callback:function(e){t.$set(t.form,"ref","string"===typeof e?e.trim():e)},expression:"form.ref"}})],1),r("el-form-item",[r("el-checkbox",{staticStyle:{width:"150px",margin:"0 1px"},attrs:{label:"true"},model:{value:t.form.confirmed,callback:function(e){t.$set(t.form,"confirmed",e)},expression:"form.confirmed"}},[t._v("双重确认")])],1)],1)],1)])},V=[],N={props:{store:Object},data:function(){return{form:{formObj:"defaultFormObj",ref:"defaultRef",validated:!0,confirmed:!1,method:"defaultMethod"}}},watch:{form:{handler:function(t){this.store.commit("setFormAttribute",Object(u["a"])({},t,{ref:t.validated&&t.ref}))},deep:!0,immediate:!0}}},L=N,B=(r("04b5"),Object(a["a"])(L,D,V,!1,null,null,null)),z=B.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{width:"100%"}},[r("el-form",{attrs:{model:t.form,"label-width":"100px"}},[r("draggable",{staticClass:"dragArea list-group",class:{bigDragArea:0===t.formItems.length},attrs:{options:{group:"formItems"},list:t.formItems},on:{change:t.genFormItem}},t._l(t.formItems,function(e,n){return r("div",{key:n,staticClass:"list-group-item"},[r("div",{class:{selected:n===t.clickedIndex},on:{click:function(r){return t.genFormItemByClick(n,e)}}},[r("el-form-item",{attrs:{label:e&&e.props.label||"表单label"}},[e?r(e.type,{tag:"component"}):t._e()],1)],1)])}),0)],1)],1)])},R=[],q=r("1980"),H=r.n(q),M={components:{draggable:H.a},props:{store:{type:Object},formItems:{type:Array,default:function(){return[]}}},data:function(){return{form:{}}},computed:{clickedIndex:function(){return this.store.states.clickedIndex}},methods:{genFormItem:function(t){this.store.commit("setFormItems",this.formItems),t.added&&(this.store.commit("setClickedIndex",t.added.newIndex),this.store.commit("setFormItemToHandle",t))},genFormItemByClick:function(t,e){this.store.commit("setClickedIndex",t),this.store.commit("setFormItemToHandle",{type:"click",idx:t,element:e})}}},J=M,U=(r("dcbb"),Object(a["a"])(J,P,R,!1,null,"3e7e60cc",null)),K=U.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.$t("form.itemAttribute")))])]),r("el-form",{attrs:{model:t.formItemAttribute}},[r("el-form-item",[r("el-select",{attrs:{placeholder:"请选择表单元素类型"},on:{change:t.setFormItemAttribute},model:{value:t.formItemElement.type,callback:function(e){t.$set(t.formItemElement,"type",e)},expression:"formItemElement.type"}},t._l(t.input_type_opts,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入label"},on:{change:t.setFormItemAttribute},model:{value:t.formItemAttribute.label,callback:function(e){t.$set(t.formItemAttribute,"label","string"===typeof e?e.trim():e)},expression:"formItemAttribute.label"}})],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入value"},on:{change:t.setFormItemAttribute},model:{value:t.formItemAttribute.value,callback:function(e){t.$set(t.formItemAttribute,"value","string"===typeof e?e.trim():e)},expression:"formItemAttribute.value"}})],1),r("el-form-item",[r("el-checkbox",{attrs:{label:"true"},on:{change:t.setFormItemAttribute},model:{value:t.formItemAttribute.required,callback:function(e){t.$set(t.formItemAttribute,"required",e)},expression:"formItemAttribute.required"}},[t._v("是否必填")]),r("el-select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"数据类型"},on:{change:t.setFormItemAttribute},model:{value:t.formItemAttribute.type,callback:function(e){t.$set(t.formItemAttribute,"type",e)},expression:"formItemAttribute.type"}},t._l(t.value_type_opts,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1)},Y=[],G=[{value:"EInputTrim",label:"输入框 Trim Input"},{value:"EInputNum",label:"输入框 Num Input"},{value:"ECheckbox",label:"复选框 Checkbox"},{value:"ERadio",label:"单选框 Radio"},{value:"ESelect",label:"选择器 Select"},{value:"ESwitch",label:"开关 Switch"}],Q=[{value:"url",label:"链接"},{value:"date",label:"时间"},{value:"array",label:"数组"}],X={props:{store:{type:Object},formItemToHandle:{type:null}},data:function(){return{input_type_opts:G,value_type_opts:Q,idx:0,opt:"",formItemAttribute:{},formItemElement:{}}},watch:{formItemToHandle:function(t){t.added?(this.opt="add",this.idx=t.added.newIndex,this.formItemElement=t.added.element,this.formItemAttribute=Object(u["a"])({},t.added.element.props)):(this.opt="others",this.idx=0,this.formItemAttribute={}),"click"===t.type&&(this.opt="click",this.idx=t.idx,this.formItemElement=t.element,this.formItemAttribute=Object(u["a"])({},t.element.props))}},methods:{setFormItemAttribute:function(){"add"!==this.opt&&"click"!==this.opt||this.store.commit("setItemInFormItems",this.idx,Object(u["a"])({},this.formItemElement,{props:Object(u["a"])({},this.formItemAttribute)}))}}},Z=X,tt=Object(a["a"])(Z,W,Y,!1,null,null,null),et=tt.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.$t("form.itemsAsset")))])]),r("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.forms,function(e,n){return r("el-collapse-item",{key:n,attrs:{title:e.title,name:e.type}},[r("draggable",{staticClass:"dragArea list-group",attrs:{list:e.specs,group:{name:"formItems",pull:"clone",put:!1},clone:t.cloneFormItem}},t._l(e.specs,function(t,e){return r("div",{key:e,staticClass:"list-group-item"},[r("el-button",{staticStyle:{margin:"10px",padding:"10px"},attrs:{size:"small",plain:""}},[r(t.type,{tag:"component",attrs:{size:"mini"}})],1)],1)}),0)],1)}),1)],1)},nt=[],ot={label:"",value:"",required:"",type:""},it={components:{draggable:H.a},data:function(){return{forms:[{type:"EInput",title:"Input输入框",specs:[{type:"EInputTrim",title:"Input Trim输入框",props:Object(u["a"])({},ot)},{type:"EInputNum",title:"Input Number输入框",props:Object(u["a"])({},ot)}]},{type:"ERadio",title:"Radio 单选框",specs:[{type:"ERadio",title:"基础用法",props:Object(u["a"])({},ot)}]},{type:"ECheckbox",title:"Checkbox 多选框",specs:[{type:"ECheckbox",title:"Checkbox 单选框组",props:Object(u["a"])({},ot)}]},{type:"ESelect",title:"Select 选择器",specs:[{type:"ESelect",title:"Select 单选框组",props:Object(u["a"])({},ot)}]},{type:"ESwitch",title:"Switch开关",specs:[{type:"ESwitch",title:"Switch 单选框组",props:Object(u["a"])({},ot)}]}],activeName:["EInput"]}},methods:{cloneFormItem:function(t){return Object(u["a"])({},t)}}},at=it,st=Object(a["a"])(at,rt,nt,!1,null,null,null),ct=st.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"code-container"},[r("Drawer",{attrs:{openDrawer:t.openDrawer,triggerEvent:"mouseover",controlOffset:"20vh",contentSize:"600px",controls:t.controls},scopedSlots:t._u([{key:"control",fn:function(e){var n=e.drawer;return["copy"===n.control.key?r("el-button",{attrs:{size:"mini"},on:{click:t.copy}},[r("span",{staticStyle:{"writing-mode":"vertical-rl"}},[r("i",{staticClass:"el-icon-copy-document",staticStyle:{"margin-bottom":"4px"}}),t._v("\n          "+t._s(t.$t("code.copy"))+"\n        ")])]):t._e(),"look"===n.control.key?r("el-button",{staticStyle:{"margin-left":"-0px"},attrs:{size:"mini"}},[r("span",{staticStyle:{"writing-mode":"vertical-rl"}},[r("i",{staticClass:"el-icon-arrow-left",class:n.show?"el-icon-arrow-right":"el-icon-arrow-left",staticStyle:{"margin-bottom":"4px"}}),t._v("\n          "+t._s(n.show?"隐藏":"显示")+"代码\n        ")])]):t._e(),"github"===n.control.key?r("el-button",{attrs:{size:"mini"}},[r("a",{attrs:{href:"https://github.com/Liugq5713/vue-element-form-editor",target:"_blank"}},[r("img",{attrs:{src:t.github,width:"13px",alt:"",srcset:""}})])]):t._e()]}}])},[r("code",{staticClass:"code"},[r("div",{staticStyle:{overflow:"auto"}},[r("pre",[t._v("  "+t._s(t.srcCode)+"\n  ")])])])]),r("code",{staticClass:"code",staticStyle:{position:"absolute",top:"-999999px"}},[r("div",{staticStyle:{overflow:"auto"}},[r("pre",{ref:"srcCode"},[t._v("  "+t._s(t.srcCode)+"\n  ")])])])],1)},ut=[],mt=function(t,e){return t?"prop='".concat(e,"'"):" "},dt=function(t){return function(e,r,n,o){return'\n  <el-form-item label="'.concat(n,'" ').concat(mt(r,o),">\n    ").concat(t(e,o,n),"\n  </el-form-item>\n      ")}},ft=function(t,e,r){return'<el-input v-model.trim="'.concat(t,".").concat(e,"\" placeholder='请输入").concat(r,"'></el-input>")},pt=function(t,e,r){return'<el-input v-model.number="'.concat(t,".").concat(e,"\" type='number' placeholder='请输入").concat(r,"></el-input>")},ht=function(t,e,r){return'\n    <el-select v-model="'.concat(t,".").concat(e,'" placeholder="请选择').concat(r,'">\n      <el-option label="区域二" value="beijing"></el-option>\n    </el-select>')},bt=function(t,e){return'\n  <el-checkbox-group v-model="'.concat(t,".").concat(e,'">\n      <el-checkbox label="第一个复选框" name="type"></el-checkbox>\n      <el-checkbox label="第二个复选框" name="type"></el-checkbox>\n  </el-checkbox-group>')},vt=function(t,e){return'\n    <el-radio-group v-model="'.concat(t,".").concat(e,'">\n      <el-radio label="第一个选项"></el-radio>\n      <el-radio label="第二个选项"></el-radio>\n    </el-radio-group>')},_t=function(t,e){return'<el-switch v-model="'.concat(t,".").concat(e,'"></el-switch>')},gt=function(t){var e={EInputTrim:dt(ft),EInputNum:dt(pt),ESelect:dt(ht),ECheckbox:dt(bt),ERadio:dt(vt),ESwitch:dt(_t)};return e[t]},yt=function(t){return t?":rules='rules'":""},wt=function(t,e){return t?"ref='".concat(e,"'"):" "},xt=function(t,e,r){return r.map(function(r){var n=gt(r.type);return n(t,e,r.props.label,r.props.value)}).join("\n")},It=function(t,e,r){return t?" \n    <el-form-item>\n      <el-button size='mini' type='primary' @click=\"".concat(r,"('").concat(e,"')\">创建</el-button>\n    </el-form-item>").trim():"<el-form-item>\n<el-button size='mini' type='primary' @click='".concat(r,"'>创建</el-button>\n</el-form-item>")},kt=function(t,e){var r=e.map(function(t){return"".concat(t.props.value,":''")}).join(",\n          ");return"\n      ".concat(t,":{\n          ").concat(r,"\n      }").trim()},Et=function(t,e){if(t){var r=e.filter(function(t){return t.props.required||t.props.type}).map(function(t){var e="ESelect"===t.type?"change":"bulr",r="",n="";return t.props.required&&(r="{ required: true, message: '".concat(t.props.label,"必填', trigger: '").concat(e,"' }")),t.props.type&&(n="{ type: '".concat(t.props.type,"', message: '").concat(t.props.label,"格式为").concat(t.props.type,"', trigger: '").concat(e,"' }")),"\n        ".concat(t.props.value,": [\n          ").concat(r,"\n          ").concat(n,"\n        ]").trim()}).join(",\n          ");return"\n      rules:{\n          ".concat(r,"\n      }").trim()}},St=function(t,e,r,n){return e&&t?"\n    ".concat(n,"(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            this.$confirm('此操作将永久删除此项, 是否继续?', '提示',\n              {\n                confirmButtonText: '确定',\n                cancelButtonText: '取消',\n                type: 'warning'\n                }).then(await () => {\n                    await ").concat(n,"(this.").concat(r,")\n                    this.$message.success('创建成功')\n                }).catch(() => {\n                  this.$message({\n                    type: 'info',\n                    message: '已取消删除'\n                  });\n              });\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n      });\n    }").trim():e?"\n    ".concat(n,"(formName) {\n        this.$confirm('此操作将永久删除此项, 是否继续?', '提示',\n        {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning'\n          }).then(await () => {\n              await ").concat(n,"(this.").concat(r,")\n              this.$message.success('创建成功')\n          }).catch(() => {\n            this.$message({\n              type: 'info',\n              message: '已取消删除'\n            });\n        });\n      }\n    ").trim():t?"\n    ".concat(n,"(formName) {\n        this.$refs[formName].validate(async (valid) => {\n          if (valid) {\n            await ").concat(n,"(this.").concat(r,")\n            this.$message.success('创建成功')\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n    }").trim():"\n    async ".concat(n,"(){\n        await ").concat(n,"(this.").concat(r,")\n        this.$message.success('创建成功')\n    }").trim()},Ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.formObj,r=t.validated,n=t.ref,o=t.method,i=t.confirmed,a=t.formItems;return'\n<template>\n<el-form :model="'.concat(e,'" ').concat(wt(r,n),"  ").concat(yt(r),' label-width="80px">\n  ').concat(xt(e,r,a),"\n  ").concat(It(r,n,o),"\n</el-form>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ").concat(kt(e,a),",\n        ").concat(Et(r,a),"\n      }\n    },\n    methods: {\n      ").concat(St(r,i,e,o),"\n    }\n  }\n<\/script>\n")},Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"drawer__container",class:[t.positionClass,{"drawer__container--show":t.show}]},[r("div",{staticClass:"drawer__container-bg"}),r("div",{ref:"drawer",staticClass:"drawer"},[r("div",{ref:"controls__container",staticClass:"controls__container"},[r("ul",{staticClass:"controls",on:{click:t.toggleDrawerShowByClick,mouseover:t.toggleDrawerShowByMouseover}},t._l(t.controlItems,function(e,n){return r("li",{key:n,staticClass:"control",class:"control-"+n},[t.show?[t._t("control",[t._v(t._s(e.hidden))],{drawer:{show:t.show,control:e}})]:[t._t("control",[t._v(t._s(e.show))],{drawer:{show:t.show,control:e}})]],2)}),0)]),t.show?r("div",{staticClass:"content"},[t._t("default")],2):t._e()])])},jt=[],$t=(r("6762"),r("2fdb"),r("a745")),At=r.n($t),Ft=(r("c5f6"),r("5118")),Tt={props:{triggerEvent:{type:String,default:"click"},controls:{type:[Object,Array],default:function(){return{show:"显示",hidden:"隐藏"}}},position:{type:String,default:"right",validator:function(t){return-1!==["top","right","bottom","left"].indexOf(t)}},controlOffset:{type:[String,Number],default:400},contentSize:{type:[String,Number],default:300},openDrawer:{type:Function}},data:function(){return{show:!1,lock:void 0,positionClass:this.position}},watch:{show:function(t){var e=this;t&&!this.clickNotClose&&this.addCloseSidebarListener(),t?document.body.classList.add("hidden_scoll_bar"):document.body.classList.remove("hidden_scoll_bar"),this.$nextTick(function(){e.updateControlLayout()})}},computed:{controlItems:function(){return At()(this.controls)?this.controls:[this.controls]},lockedShow:{get:function(){return this.show},set:function(t){var e=this;this.lock||(this.lock=Object(Ft["setTimeout"])(function(){e.lock=void 0},200),this.show=t)}},isHorizontal:function(){return["left","right"].includes(this.position)},isVertical:function(){return["bottom","top"].includes(this.position)}},mounted:function(){var t=this.controlOffset,e=this.contentSize;"number"===typeof t&&(t="".concat(t,"px")),"number"===typeof e&&(e="".concat(e,"px")),this.isVertical&&(this.$refs["controls__container"].style["left"]=t,this.$refs["drawer"].style.maxHeight=e),this.isHorizontal&&(this.$refs["controls__container"].style["top"]=t,this.$refs["drawer"].style.maxWidth=e),this.updateControlLayout()},destroyed:function(){this.removeCloseSidebarListener()},methods:{toggleDrawerShowByClick:function(t){"click"===this.triggerEvent&&(this.show?this.closeDrawerByControl():this.openDrawerByControl(t))},toggleDrawerShowByMouseover:function(t){"mouseover"===this.triggerEvent&&(this.show?this.closeDrawerByControl():this.openDrawerByControl(t))},openDrawerByControl:function(t){var e=this.openDrawer;if(e){var r=t.target,n=t.currentTarget;this.lockedShow=e(r,n)}else this.lockedShow=!0},closeDrawerByControl:function(){this.lockedShow=!1},closeSidebar:function(t){var e=t.target.closest(".drawer");e||(this.show=!1,this.removeCloseSidebarListener())},addCloseSidebarListener:function(){"click"===this.triggerEvent&&window.addEventListener("click",this.closeSidebar),"mouseover"===this.triggerEvent&&window.addEventListener("mouseover",this.closeSidebar)},removeCloseSidebarListener:function(){"click"===this.triggerEvent&&window.removeEventListener("click",this.closeSidebar),"mouseover"===this.triggerEvent&&window.removeEventListener("mouseover",this.closeSidebar)},updateControlLayout:function(){var t=this.$refs["controls__container"],e=t.getBoundingClientRect();"top"===this.position&&(t.style["bottom"]="-".concat(e.height,"px")),"bottom"===this.position&&(t.style["top"]="-".concat(e.height,"px")),"right"===this.position&&(t.style["left"]="-".concat(e.width,"px")),"left"===this.position&&(t.style["right"]="-".concat(e.width,"px"))}}},Dt=Tt,Vt=(r("271f"),r("a247"),Object(a["a"])(Dt,Ot,jt,!1,null,"36b58f74",null)),Nt=Vt.exports,Lt=Nt,Bt=r("0b6a"),zt=r.n(Bt),Pt={components:{Drawer:Lt},props:{form:{type:Object},formItems:{type:Array,default:function(){return[]}}},data:function(){return{github:zt.a,srcCode:"",fromItemsCode:"",refCode:"",formObj:"",dataFormData:{},dataFormRules:{},submitMethods:"",validated:!1,controls:[{key:"copy",show:"复制",hidden:"复制"},{key:"look",show:"查看",hidden:"隐藏"},{key:"github",show:"查看",hidden:"隐藏"}]}},watch:{form:{handler:function(t){this.genVueFile(t,this.formItems)},deep:!0},formItems:{handler:function(t){this.genVueFile(this.form,t)},deep:!0}},created:function(){this.genVueFile(this.form,this.formItems)},methods:{genVueFile:function(t,e){var r={ref:t.ref,formObj:t.formObj,method:t.method,validated:t.validated,confirmed:t.confirmed,formItems:e};this.srcCode=Ct(r),window.localStorage.removeItem("vue-element-form-gen-code"),window.localStorage.setItem("vue-element-form-gen-code",this.srcCode)},skipToEdit:function(){window.open("./code-editor","_blank")},openDrawer:function(t){var e=!0;while(!t.matches(".controls")){if(t.matches(".control-0")||t.matches(".control-2")){e=!1;break}t=t.parentNode}return e},copy:function(){var t=this.$refs["srcCode"];t.focus(),window.getSelection().removeAllRanges();var e=document.createRange();e.setStartBefore(t.firstChild),e.setEndAfter(t.lastChild),window.getSelection().addRange(e);try{document.execCommand("copy")?this.$message.success("已复制到剪贴板"):this.$message.error("未能复制到剪贴板，请全选后右键复制")}catch(r){this.$message.error("未能复制到剪贴板，请全选后右键复制")}}}},Rt=Pt,qt=(r("c4ed"),Object(a["a"])(Rt,lt,ut,!1,null,"5ce40b01",null)),Ht=qt.exports,Mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.$t("form.JSON")))]),r("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:t.gen}},[t._v("生成表单")])],1),r("el-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"请输入内容,用了eval，请不要自嗨"},model:{value:t.formJson,callback:function(e){t.formJson=e},expression:"formJson"}})],1)],1)},Jt=[],Ut=r("0154"),Kt=Ut["a"],Wt=Object(a["a"])(Kt,Mt,Jt,!1,null,null,null),Yt=Wt.exports,Gt=(r("7f7f"),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw new Error("Form is required.");for(var r in this.form=t,this.states={clickedIndex:-1,formAttribute:{},formItems:[],formItemToHandle:[],formItem:{},formItemAttribute:{}},e)e.hasOwnProperty(r)&&this.states.hasOwnProperty(r)&&(this.states[r]=e[r])});Gt.prototype.commit=function(t){console.log("name",t);var e=this.mutations;if(!e[t])throw new Error("Action not found: ".concat(t));for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e[t].apply(this,[this.states].concat(n))},Gt.prototype.mutations={setFormAttribute:function(t,e){this.states=Object(u["a"])({},t,{formAttribute:e})},setFormItems:function(t,e){this.states=Object(u["a"])({},t,{formItems:e})},setClickedIndex:function(t,e){this.states=Object(u["a"])({},t,{clickedIndex:e})},setFormItemToHandle:function(t,e){this.states=Object(u["a"])({},t,{formItemToHandle:e})},setItemInFormItems:function(t,e,r){t.formItems.splice(e,1,r)}};var Qt=Gt,Xt={components:{Header:T,FormItems:K,FormItemAsset:ct,FormAttribute:z,FormItemAttribute:et,FormCode:Ht,JsonForm:Yt},data:function(){var t=new Qt(this);return{store:t}},computed:{form:function(){return this.store.states.formAttribute},formItems:function(){return this.store.states.formItems},formItem:function(){return this.store.states.formItem},formItemToHandle:function(){return this.store.states.formItemToHandle},formItemAttribute:function(){return this.store.states.formItemAttribute}}},Zt=Xt,te=Object(a["a"])(Zt,k,E,!1,null,null,null),ee=te.exports;n["default"].use(I["a"]);var re=new I["a"]({mode:"hash",routes:[{path:"/",name:"form-editor",component:ee},{path:"/code-editor",name:"code-editor",component:function(){return r.e("chunk-b5845c76").then(r.bind(null,"d4bf"))}}]});n["default"].config.productionTip=!1,n["default"].use(x.a,{i18n:function(t,e){return y.t(t,e)}});var ne=r("dcb2");ne.keys().forEach(function(t){var e=ne(t),r=t.split("/").pop().replace(/\.\w+$/,"");n["default"].component(r,e.default||e)}),new n["default"]({router:re,i18n:y,render:function(t){return t(l)}}).$mount("#app")},"5f71":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-input",t._b({attrs:{placeholder:"字符串去空格"},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}},"el-input",t.$attrs,!1))},o=[],i={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("change",t),this.$emit("input",t)}}}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},"64a9":function(t,e,r){},"72d8":function(t,e,r){t.exports=r.p+"img/just-font-monochrome-white.28becabb.png"},"77a0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-input",t._b({attrs:{placeholder:"数字",type:"number"},model:{value:t.inputVal,callback:function(e){t.inputVal=t._n(e)},expression:"inputVal"}},"el-input",t.$attrs,!1))},o=[],i={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("change",t),this.$emit("input",t)}}}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},"88bb":function(t,e,r){},a247:function(t,e,r){"use strict";var n=r("3c63"),o=r.n(n);o.a},aacd:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-checkbox",t._b({model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}},"el-checkbox",t.$attrs,!1),[t._v("备选项")])},o=[],i={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("change",t),this.$emit("input",t)}}}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},c4ed:function(t,e,r){"use strict";var n=r("177c"),o=r.n(n);o.a},c52b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-radio",{attrs:{label:"1"},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}},[t._v("备选项")]),r("el-radio",{attrs:{label:"2"},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}},[t._v("备选项")])],1)},o=[],i={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("change",t),this.$emit("input",t)}}}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},d504:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-switch",t._b({attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}},"el-switch",t.$attrs,!1))},o=[],i={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("change",t),this.$emit("input",t)}}}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},dcb2:function(t,e,r){var n={"./ECheckbox.vue":"aacd","./EInputNum.vue":"77a0","./EInputTrim.vue":"5f71","./ERadio.vue":"c52b","./ESelect.vue":"339a","./ESwitch.vue":"d504"};function o(t){var e=i(t);return r(e)}function i(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id="dcb2"},dcbb:function(t,e,r){"use strict";var n=r("88bb"),o=r.n(n);o.a}});
//# sourceMappingURL=app.cb174fdd.js.map