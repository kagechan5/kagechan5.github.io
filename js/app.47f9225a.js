(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],p=0,h=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"3d61":function(t,e,a){t.exports=a.p+"img/Result.1c3c130a.png"},4674:function(t,e,a){t.exports=a.p+"img/Network.9d9f39f6.png"},"50f5":function(t,e,a){t.exports=a.p+"img/top.7dd6d354.png"},"5c0b":function(t,e,a){"use strict";a("e332")},7584:function(t,e,a){var n={"./projects/ProDebNet/Result.png":"9448","./projects/ProDebNet/prodebnet.png":"911c","./projects/onlineProDebNet/Network.png":"4674","./projects/onlineProDebNet/Result.png":"3d61","./projects/onlineProDebNet/top.png":"50f5"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="7584"},8451:function(t){t.exports=JSON.parse('[{"photoPass":"projects/ProDebNet/prodebnet.png","title":"ProDebNet: Projector Deblurring using Convolutional Neural Network","publication":"(Optics Express, Vol. 28, No. 14, pp. 20391-20403, 2020)","abstract":"We propose ProDebNet, an end-to-end real-time projection deblurring network that synthesizes a projection image to minimize projection blur. The proposed method generates a projection image without explicitly estimating any geometry or scattering characteristics of the projection screen, which makes real-time processing possible.","href":"<ProDebNet>","more":"more.."},{"photoPass":"projects/onlineProDebNet/top.png","title":"Online Projector Deblurring Using a Convolutional Neural Network","publication":"(IEEE Transactions on Visualization and Computer Graphics (Proceedings of IEEE Conference on Virtual Reality and 3D User Interfaces), 2022)","abstract":"We propose online projector deblurring technique using convolutional neural networks. The proposed method compensates for the projector\'s defocus blur even if the projection plane moves.","href":"<onlineProDebNet>","more":"more.."}]')},"85cf":function(t,e,a){t.exports=a.p+"img/home_photo.8484f862.jpg"},"911c":function(t,e,a){t.exports=a.p+"img/prodebnet.4d10c396.png"},9448:function(t,e,a){t.exports=a.p+"img/Result.25b5ff51.png"},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["default"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{color:"#ffd700",app:""}},[a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"bars"}})],1),a("v-btn",{attrs:{flat:""}},[a("router-link",{staticClass:"router-txt",attrs:{to:"/Home"}},[t._v("\n          Yuta Kageyama\n          ")])],1),a("v-spacer"),a("v-toolbar-items",t._l(t.items,(function(e){return a("v-btn",{key:e.title,attrs:{flat:""}},[a("router-link",{staticClass:"router-txt",attrs:{to:"/"+e.title}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)})),1)],1),a("v-navigation-drawer",{attrs:{temporary:"",relative:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),a("v-list-tile",[a("v-list-tile-action",[a("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:"home"}})],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{staticClass:"router-txt",attrs:{to:"/Home"}},[t._v("Home")])],1)],1)],1),t._l(t.items,(function(e){return a("v-list-tile",{key:e.title},[a("v-list-tile-action",[a("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:e.icon}})],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{staticClass:"router-txt",attrs:{to:"/"+e.title}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)],1)],1)}))],2)],1),a("v-content",[a("router-view")],1),a("v-footer",{attrs:{color:"#ffffe0",height:"70",outlined:"True",absolute:"",app:""}},[a("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Copyright © Yuta Kageyama's Web All Rights Reserved.")])])],1)},o=[],i={data:function(){return{drawer:null,items:[{title:"Profile",icon:"address-card"},{title:"Publications",icon:"book"},{title:"Projects",icon:"search"}]}}},l=i,c=(a("5c0b"),a("2877")),u=a("6544"),p=a.n(u),h=a("7496"),v=a("8336"),d=a("549c"),b=a("ce7e6"),m=a("553a"),g=a("8860"),f=a("ba95"),_=a("40fe"),w=a("5d23"),y=a("f774"),C=a("9910"),j=a("71d9"),k=a("2a7f"),x=Object(c["a"])(l,s,o,!1,null,null,null),E=x.exports;p()(x,{VApp:h["a"],VBtn:v["a"],VContent:d["a"],VDivider:b["a"],VFooter:m["a"],VList:g["a"],VListTile:f["a"],VListTileAction:_["a"],VListTileContent:w["a"],VListTileTitle:w["b"],VNavigationDrawer:y["a"],VSpacer:C["a"],VToolbar:j["a"],VToolbarItems:k["a"]});var P=a("ecee"),I=a("c074"),D=a("ad3d"),N=a("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"","mb-3":""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("85cf"),contain:"",height:"300"}})],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Yuta's page!")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t影山雄太のホームページです\n\t\t\t")])]),n("v-layout",{attrs:{"text-xs-left":"",wrap:""}},[n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h1",{staticClass:"display-1 font-weight-bold mb-3"},[t._v("News")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2023.04.01\n\t\t\t\t\t\t日本学術振興会 特別研究員-DC2に採用されました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2023.03.29\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://ieeevr.org/2023/",target:"_new"}},[t._v("\n\t\t\t\t\t\tIEEE VR 2023\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tにてBest Journal Paper Nominnesを受賞しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2023.03.02\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.ieee-jp.org/section/kansai/activity/members/annual2023.html",target:"_new"}},[t._v("\n\t\t\t\t\t\tIEEE 関西支部総会\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tにて学生研究奨励賞を受賞しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2022.09.05 - 2023.07.31\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.sensetime.jp/",target:"_new"}},[t._v("\n\t\t\t\t\t\t株式会社センスタイムジャパン\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tにてリサーチインターンシップを開始しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2022.08.08 - 08.11\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://s2022.siggraph.org/",target:"_new"}},[t._v("\n\t\t\t\t\t\tACM SIGGRAPH2022\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tにて招待公演を行いました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2022.03.16\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://ieeevr.org/2022/",target:"_new"}},[t._v("\n\t\t\t\t\t\tIEEE VR 2022\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tにてBest Journal Paper Honorable Mentionを受賞しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2021.07.30\n\t\t\t\t\t\t"),n("a",{attrs:{href:"http://cvim.ipsj.or.jp/MIRU2021/",target:"_new"}},[t._v("\n\t\t\t\t\t\tMIRU2021\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tにて学生奨励賞を受賞しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2021.04.01\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.ist.osaka-u.ac.jp/japanese/campus-life/fellowship.html",target:"_new"}},[t._v("\n\t\t\t\t\t\t分野横断イノベーションを創造する情報⼈材育成フェローシップ\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tに採用されました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2021.04.01\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.es.osaka-u.ac.jp/ja/index.html",target:"_new"}},[t._v("\n\t\t\t\t\t\t大阪大学大学院基礎工学研究科\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\t博士後期課程に進学しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2020.08.01\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://sites.google.com/view/miru2020/%E8%8B%A5%E6%89%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%8B%A5%E6%89%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E7%99%BA%E8%A1%A8?authuser=0",target:"_new"}},[t._v("\n\t\t\t\t\t\tMIRU2020若手プログラム\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tプレゼンテーション賞を受賞しました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2019.04.01\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.humanware.osaka-u.ac.jp/",target:"_new"}},[t._v("\n\t\t\t\t\t\tヒューマンウェアイノベーション博士課程プログラム\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\tの7期生に選出されました．\n\t\t\t\t\t")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n\t\t\t\t\t\t2019.04.01\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.es.osaka-u.ac.jp/ja/index.html",target:"_new"}},[t._v("\n\t\t\t\t\t\t大阪大学大学院基礎工学研究科\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\t博士前期課程に進学しました．\n\t\t\t\t\t")])]),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"display-1 font-weight-bold mb-3"},[t._v("Links")]),n("p",{staticClass:"subheading font-weight-regular"},[n("a",{attrs:{href:"https://github.com/kagechan5",target:"_new"}},[t._v("\n\t\t\t\t\t\t\tgithub\n\t\t\t\t\t\t")])]),n("p",{staticClass:"subheading font-weight-regular"},[n("a",{attrs:{href:"https://www.sens.sys.es.osaka-u.ac.jp/",target:"_new"}},[t._v("\n\t\t\t\t\t\t研究室\n\t\t\t\t\t\t")])])])],1)],1)],1)},O=[],R=(a("2397"),a("b0b4")),S=a("d225"),M=a("4e2b"),T=a("308d"),K=a("6bb5"),U=a("9ab4"),A=a("60a3");function B(t){var e=H();return function(){var a,n=Object(K["a"])(t);if(e){var r=Object(K["a"])(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(T["a"])(this,a)}}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var Y=function(t){Object(M["a"])(a,t);var e=B(a);function a(){var t;return Object(S["a"])(this,a),t=e.apply(this,arguments),t.link=[{text:"github",href:"https://github.com/kagechan5"},{text:"研究室",href:"https://www.sens.sys.es.osaka-u.ac.jp/"}],t}return Object(R["a"])(a)}(A["b"]);Y=Object(U["a"])([A["a"]],Y);var F=Y,L=F,G=a("a523"),z=a("0e8f"),J=a("adda"),W=a("a722"),$=Object(c["a"])(L,V,O,!1,null,null,null),q=$.exports;p()($,{VContainer:G["a"],VFlex:z["a"],VImg:J["a"],VLayout:W["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"","mb-6":""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("85cf"),contain:"",height:"300"}}),n("p",{staticClass:"title mb-4"},[t._v("Photo @IEEE GCCE 2019にて")])],1)],1),n("v-layout",{attrs:{"text-xs-left":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v("氏名")]),n("v-divider",{staticClass:"mb-3"}),n("h2",{staticClass:"headline mb-2"},[t._v("影山 雄太 (かげやま ゆうた)")]),n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v("所属")]),n("v-divider",{staticClass:"mb-3"}),n("h1",{staticClass:"headline mb-2"},[t._v("大阪大学 大学院基礎工学研究科 システム創成学専攻 システム科学領域 "),n("a",{attrs:{href:"https://www.sens.sys.es.osaka-u.ac.jp/",target:"_blank"}},[t._v("佐藤研究室")])]),n("h1",{staticClass:"headline mb-2"},[t._v("ヒューマンウェアイノベーション博士課程プログラム")]),n("h1",{staticClass:"headline mb-2"},[t._v("日本学術振興会 特別研究員-DC2")]),n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v("研究興味")]),n("v-divider",{staticClass:"mb-3"}),n("h1",{staticClass:"headline mb-2"},[t._v("DL , HCI（ヒューマン-コンピュータインタラクション) , VR/AR/MR")]),n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v("学歴")]),n("v-divider",{staticClass:"mb-3"}),n("h1",{staticClass:"headline mb-2"},[t._v("2021年3月　大阪大学大学院基礎工学研究科システム創成専攻 修了")]),n("h1",{staticClass:"headline mb-2"},[t._v("2019年3月　大阪大学基礎工学部システム科学科 卒業")]),n("h1",{staticClass:"display-1 font-weight-bold mb-2"},[t._v("連絡先")]),n("v-divider",{staticClass:"mb-3"}),n("h1",{staticClass:"headline mb-2"},[t._v("Tel: 06-6850-6373")]),n("h1",{staticClass:"headline mb-2"},[t._v("E-mail: kageyama[at]sens.sys.es.osaka-u.ac.jp")])],1)],1)],1)},X=[],Z={},tt=Object(c["a"])(Z,Q,X,!1,null,null,null),et=tt.exports;p()(tt,{VContainer:G["a"],VDivider:b["a"],VFlex:z["a"],VImg:J["a"],VLayout:W["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-left":"",wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-6":""}},[a("h1",{staticClass:"display-1 font-weight-bold mb-5"},[t._v("Publications")])]),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h1",{staticClass:"display-0 mb-2"},[t._v("論文誌")]),a("v-divider",{staticClass:"mb-3"}),a("ol",[a("li",{staticClass:"headline mb-2"},[a("b",[t._v("Yuta Kageyama")]),t._v(', Mariko Isogawa, Daisuke Iwai, Kosuke Sato "ProDebNet: projector deblurring using a convolutional neural network", Optics Express, Vol. 28, No. 14, pp. 20391-20403, 2020\n        ')]),a("li",{staticClass:"headline mb-2"},[a("b",[t._v("Yuta Kageyama")]),t._v(', Daisuke Iwai, Kosuke Sato "Online Projector Deblurring Using a Convolutional Neural Network", IEEE Transactions on Visualization and Computer Graphics (Proceedings of IEEE Conference on Virtual Reality and 3D User Interfaces), 2022.\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          Kosuke Hiratani, Daisuke Iwai, "),a("b",[t._v("Yuta Kageyama")]),t._v(', Parinya Punpongsanon, Takefumi Hiraki, Kosuke Sato "Shadowless Projection Mapping using Retrotransmissive Optics", IEEE Transactions on Visualization and Computer Graphics (Proceedings of IEEE Conference on Virtual Reality and 3D User Interfaces), 2023.\n        ')])])],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h1",{staticClass:"display-0 mb-2"},[t._v("国際会議")]),a("v-divider",{staticClass:"mb-3"}),a("ol",[a("li",{staticClass:"headline mb-2"},[a("b",[t._v("Yuta Kageyama")]),t._v(', Mariko Isogawa, Daisuke Iwai, Kosuke Sato "Generative Adversarial Network Based Image Blur Compensation for Projection-Based Mixed Reality"，2019 IEEE 8th Global Conference on Consumer Electronics, POS1\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          Naoya Yoshimura, Yushi Sato, "),a("b",[t._v("Yuta Kageyama")]),t._v(', Jun Murao, Satoshi Yagi, and Parinya Pungpongsanon "Hugmon: Exploration of Affective Movements for Hug Interaction using Tensegrity Robot"，ACM/IEEE International Conference on Human-Robot Interaction 2022 Late Breaking Reports, pp. 1105-1109\n        ')]),a("li",{staticClass:"headline mb-2"},[a("b",[t._v("Yuta Kageyama")]),t._v(', Daisuke Iwai, and Kosuke Sato, "Online Projector Deblurring Using a Convolutional Neural Network," invited to TVCG Session on VR at SIGGRAPH 2022.\n        ')])])],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h1",{staticClass:"display-0 mb-2"},[t._v("国内会議")]),a("v-divider",{staticClass:"mb-3"}),a("ol",[a("li",{staticClass:"headline mb-2"},[a("b",[t._v("影山雄太")]),t._v('，五十川麻理子，岩井大輔，佐藤宏介，"敵対的生成ネットワークを用いた映像投影時に生じるブラー補償"，第63回システム制御情報学会研究発表講演会講演論文集 (SCI\'19)，pp. 1438-1445\n        ')]),a("li",{staticClass:"headline mb-2"},[a("b",[t._v("影山雄太")]),t._v('，五十川麻理子，岩井大輔，佐藤宏介，"敵対的生成ネットワークを用いた投影型複合現実感のための実時間ボケ補償"，第22回　画像の認識・理解シンポジウム (MIRU 2019)\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          岩井大輔，日浦慎作，宮崎大輔，米原枚子，伊藤勇太，松倉悠，Parinya Punpongsanon，"),a("b",[t._v("影山雄太")]),t._v('，"超多自由度照明による実物体の質感表現編集技術"，第8回多元質感知 領域班会議\n        ')]),a("li",{staticClass:"headline mb-2"},[a("b",[t._v("影山雄太")]),t._v('，五十川麻理子，岩井大輔，佐藤宏介，"ProDebNet: 畳み込みニューラルネットワークによる投影ボケ補償"，第23回　画像の認識・理解シンポジウム (MIRU 2020)\n        ')]),a("li",{staticClass:"headline mb-2"},[a("b",[t._v("影山雄太")]),t._v('，岩井大輔，佐藤宏介，"CNNを用いた動的環境下での投影ボケ補償"，第24回　画像の認識・理解シンポジウム (MIRU 2021)\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          佐藤優志，吉村直也，"),a("b",[t._v("影山雄太")]),t._v('，村尾淳，八木聡明，プンポンサノンパリンヤ，"テンセグリティ構造を有するハグ・インタラクション用ロボットの開発"，第29回　インタラクティブシステムとソフトウェアに関するワークショップ (WISS2021)\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          谷育歩，山本健太，"),a("b",[t._v("影山雄太")]),t._v('，岩井大輔，佐藤宏介，"高画素密度プロジェクションマッピングによる微細な質感編集"，第66回システム制御情報学会研究発表講演会講演論文集 (SCI\'22), pp. 241-243\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          上田史貴，山本健太，"),a("b",[t._v("影山雄太")]),t._v('，岩井大輔，佐藤宏介，"フォーカルサーフェス投影によるプロジェクタの被写界深度拡張"，第66回システム制御情報学会研究発表講演会講演論文集 (SCI\'22), pp. 244-246\n        ')])])],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h1",{staticClass:"display-0 mb-2"},[t._v("受賞")]),a("v-divider",{staticClass:"mb-3"}),a("ol",[a("li",{staticClass:"headline mb-2"},[t._v("\n          MIRU若手プログラム プレゼンテーション賞 (岩井 翔真，上野 友梨，"),a("b",[t._v("影山 雄太")]),t._v('，辻 茉佑香，吉田 道隆，"MIRU 2020") (2020.8).\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          MIRU学生奨励賞 ("),a("b",[t._v("影山 雄太")]),t._v('，"MIRU 2021") (2021.7).\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          Best Journal Paepr Honorable Mentions ("),a("b",[t._v("Yuta Kageyama")]),t._v(', Daisuke Iwai, Kosuke Sato, "IEEE VR 2022") (2022.3).\n        ')]),a("li",{staticClass:"headline mb-2"},[t._v("\n          IEEE 関西支部 学生研究奨励賞 (2023.3).\n        ")])])],1)],1)],1)},nt=[],rt={},st=Object(c["a"])(rt,at,nt,!1,null,null,null),ot=st.exports;p()(st,{VContainer:G["a"],VDivider:b["a"],VFlex:z["a"],VLayout:W["a"]});var it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{width:"100%"}},[n("v-layout",[n("v-flex",{attrs:{"mt-3":"","mb-5":""}},[n("h1",{staticClass:"display-1"},[t._v("PROJECTS")])])],1),t._l(t.items,(function(e){return n("v-flex",{key:e.title},[n("v-layout",{attrs:{"mb-5":"","ml-3":""}},[n("v-card",[n("v-layout",{attrs:{row:"","mt-3":"","mb-2":"","mr-2":"","ml-3":"",wrap:""}},[n("v-flex",{attrs:{xs11:"",sm11:"",md4:"",xl4:"","mr-5":""}},[n("v-img",{attrs:{src:a("7584")("./"+e.photoPass),contain:""}})],1),n("v-flex",{attrs:{xs11:"",sm11:"",md7:"",xl7:""}},[n("h2",{staticClass:"headline font-weight-bold mb-1"},[t._v(t._s(e.title))]),n("p",{staticClass:"subtitle-1 mb-3"},[t._v(t._s(e.publication))]),n("p",{staticClass:"body-1"},[t._v(t._s(e.abstract))]),n("p",[n("router-link",{staticClass:"subheading mx-3",attrs:{to:"/Projects"+e.href}},[t._v(">>"+t._s(e.more))])],1)])],1)],1)],1)],1)}))],2)},lt=[],ct=a("8451"),ut={name:"project",data:function(){return{items:ct}}},pt=ut,ht=a("b0af"),vt=Object(c["a"])(pt,it,lt,!1,null,null,null),dt=vt.exports;p()(vt,{VCard:ht["a"],VContainer:G["a"],VFlex:z["a"],VImg:J["a"],VLayout:W["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","mt-3":"","mb-3":""}},[n("h1",{staticClass:"display-0",staticStyle:{"background-color":"#808080",color:"#ffffff"}},[t._v("ProDebNet: Projector Deblurring using Convolutional Neural Network")])]),n("strong",[t._v("Introduction")]),n("p",[t._v("\n            Projection blur can occur in practical use cases that have non-planar and/or multi-projection display surfaces with various scattering characteristics because the surface often causes defocus and subsurface scattering. To address this issue, we propose ProDebNet, an end-to-end real-time projection deblurring network that synthesizes a projection image to minimize projection blur. The proposed method generates a projection image without explicitly estimating any geometry or scattering characteristics of the projection screen, which makes real-time processing possible. \n            "),n("br"),t._v("\n              The experimental result is shown in Fig.1 and Fig.2.\n            In this projection setup (Fig. 1), due to the defocus, the projected result without compensation becomes strongly blurry (Fig. 2(b)) when we project a target image (Fig. 2(a)).\n            Using the target image and the initial projected result, ProDebNet generates the compensation image (Fig.2(c)), and the projected result is deblurred (Fig2.(d)) when we project the compensation image.\n        \n        ")]),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a("9448"),alt:"prodebnet",width:"1000"}})]),n("br"),n("strong",[t._v("Publications")]),n("ul",[n("li",[t._v('Yuta Kageyama, Mariko Isogawa, Daisuke Iwai, Kosuke Sato "ProDebNet: projector deblurring using a convolutional neural network"，Optics Express, Vol. 28, No. 14, pp. 20391-20403, 2020 '),n("a",{attrs:{href:"https://www.osapublishing.org/oe/abstract.cfm?uri=oe-28-14-20391",target:"_blank"}},[t._v(" [PDF (2.9MB)]")])])]),n("br"),n("strong",[t._v("Bibtex")]),n("pre",[n("code",[t._v("\n        @article{kageyama2020prodebnet,\n        title={ProDebNet: projector deblurring using a convolutional neural network},\n        author={Kageyama, Yuta and Isogawa, Mariko and Iwai, Daisuke and Sato, Kosuke},\n        journal={Optics Express},\n        volume={28},\n        number={14},\n        pages={20391--20403},\n        year={2020},\n        publisher={Optical Society of America}\n        }\n        ")])])],1)},mt=[],gt={},ft=Object(c["a"])(gt,bt,mt,!1,null,null,null),_t=ft.exports;p()(ft,{VContainer:G["a"],VLayout:W["a"]});var wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","mt-3":"","mb-3":""}},[n("h1",{staticClass:"display-0",staticStyle:{"background-color":"#808080",color:"#ffffff"}},[t._v("Online Projector Deblurring Using a Convolutional Neural Network")])]),n("strong",[t._v("Introduction")]),n("p",[t._v("\n            Projector deblurring is an important technology for dynamic projection mapping (PM), where the distance between a projector and a projection surface changes in time. However, conventional projector deblurring techniques do not support dynamic PM because they need to project calibration patterns to estimate the amount of defocus blur each time the surface moves. We present a deep neural network that can compensate for defocus blur in dynamic PM. The primary contribution of this paper is a unique network structure that consists of an extractor and a generator. The extractor explicitly estimates a defocus blur map and a luminance attenuation map. These maps are then injected into the middle layers of the generator network that computes the compensation image. We also propose a pseudo-projection technique for synthesizing physically plausible training data, considering the geometric misregistration that potentially happens in actual PM systems. We conducted simulation and actual PM experiments and confirmed that: (1) the proposed network structure is more suitable than a simple, more general structure for projector deblurring; (2) the network trained with the proposed pseudo-projection technique can compensate projection images for defocus blur artifacts in dynamic PM; and (3) the network supports the translation speed of the surface movement within a certain range that covers normal human motions.\n            "),n("br"),t._v("Our networks are available at "),n("a",{attrs:{href:"https://github.com/kagechan5/Online-Projector-Deblurring-Using-a-Convolutional-Neural-Network",target:"_blank"}},[t._v("GitHub repository")]),t._v(".\n        ")]),n("br"),n("strong",[t._v("Network architecture")]),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a("4674"),alt:"Network",width:"1000"}})]),n("br"),n("strong",[t._v("Experimental results")]),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a("3d61"),alt:"Network",width:"1000"}})]),n("br"),n("strong",[t._v("Publications")]),n("ul",[n("li",[t._v('Yuta Kageyama, Daisuke Iwai, Kosuke Sato "Online Projector Deblurring Using a Convolutional Neural Network"，IEEE Transactions on Visualization and Computer Graphics (Proceedings of IEEE Conference on Virtual Reality and 3D User Interfaces), 2022 '),n("a",{attrs:{href:"https://ieeexplore.ieee.org/document/9714047",target:"_blank"}},[t._v(" [PDF (4.9MB)]")])])]),n("br"),n("strong",[t._v("Bibtex")]),n("pre",[n("code",[t._v("\n        @article{kageyama2022online,\n        title={Online Projector Deblurring Using a Convolutional Neural Network},\n        author={Kageyama, Yuta and Iwai, Daisuke and Sato, Kosuke},\n        journal={IEEE Transactions on Visualization and Computer Graphics},\n        year={2022},\n        publisher={IEEE}\n        }\n        ")])])],1)},yt=[],Ct={},jt=Object(c["a"])(Ct,wt,yt,!1,null,null,null),kt=jt.exports;p()(jt,{VContainer:G["a"],VLayout:W["a"]}),P["c"].add(I["a"]),n["default"].component("font-awesome-icon",D["a"]),n["default"].config.productionTip=!1;var xt=[{path:"/",name:"Home",component:q},{path:"/Home",name:"Home",component:q},{path:"/Profile",name:"Profile",component:et},{path:"/Publications",name:"Publications",component:ot},{path:"/Projects",name:"Projects",component:dt},{path:"/Projects<ProDebNet>",name:"ProDebNet",component:_t},{path:"/Projects<onlineProDebNet>",name:"onlineProDebNet",component:kt}],Et=new N["a"]({routes:xt,mode:"hash",linkActiveClass:"active"});n["default"].use(N["a"]),new n["default"]({router:Et,render:function(t){return t(E)}}).$mount("#app")},e332:function(t,e,a){}});
//# sourceMappingURL=app.47f9225a.js.map