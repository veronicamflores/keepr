(function(e){function t(t){for(var a,o,l=t[0],n=t[1],c=t[2],p=0,d=[];p<l.length;p++)o=l[p],i[o]&&d.push(i[o][0]),i[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,l=1;l<s.length;l++){var n=s[l];0!==i[n]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=n;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("c21b"),i=s.n(a);i.a},"09e2":function(e,t,s){},"2a37":function(e,t,s){"use strict";var a=s("ff29"),i=s.n(a);i.a},3738:function(e,t,s){},"3f29":function(e,t,s){"use strict";var a=s("a327"),i=s.n(a);i.a},"405d":function(e,t,s){"use strict";var a=s("3738"),i=s.n(a);i.a},4434:function(e,t,s){},5173:function(e,t,s){"use strict";var a=s("4434"),i=s.n(a);i.a},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o=(s("034f"),s("2877")),l={},n=Object(o["a"])(l,i,r,!1,null,null,null);n.options.__file="App.vue";var c=n.exports,u=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home container-fluid"},[s("nav",{staticClass:"navbar row yellow-bg"},[s("div",{staticClass:"col-2 mt-2 mb-2"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("a",[e._v("PNTRST")])])],1),e._m(0),null==e.user.id?s("div",{staticClass:"col-2 mt-2 mb-2"},[s("router-link",{attrs:{to:"/login"}},[s("a",[e._v("Login/Register")])])],1):s("div",{staticClass:"col-2 mt-2 mb-2"},[s("router-link",{attrs:{to:"/profile"}},[s("a",[e._v("Profile")])]),e._v(" |\n        "),s("router-link",{attrs:{to:"/profile/keeps"}},[s("a",[e._v("My Keeps")])]),e._v(" | \n        "),s("router-link",{attrs:{to:"/profile/vaults"}},[s("a",[e._v("My Vaults")])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("AllKeeps",{attrs:{userId:e.user.id}})],1)])])},d=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-8 mt-2 mb-2"},[s("form",{staticClass:"form-inline md-form form-sm"},[s("input",{staticClass:"form-control form-control-md w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}})])])}],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"keep row"},e._l(e.keeps,function(t){return 0==t.isPrivate?s("div",{key:t.id,staticClass:"col-3 mt-4"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:t.img,alt:t.name}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(t.name))]),s("p",{staticClass:"card-text"},[e._v(e._s(t.description))]),s("p",[s("i",{staticClass:"fas fa-thumbtack"}),e._v(": "+e._s(t.keeps)+"  "),s("i",{staticClass:"far fa-eye"}),e._v(": "+e._s(t.views)+"  ")]),s("p",[s("span",{on:{click:function(s){e.makeAddVisible(t.id)}}},[s("i",{staticClass:"fas fa-folder-plus"})]),e._v(" \n                    "),s("span",{on:{click:e.showModal}},[s("i",{staticClass:"far fa-eye"})]),s("modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{keep:t},on:{close:e.closeModal}})],1),e._l(e.vaults,function(a){return e.addVisible==t.id?s("span",{key:a.id,staticClass:"d-flex justify-content-around"},[s("button",{staticClass:"btn btn-success mt-1 mb-1",on:{click:function(s){e.addToVault({vaultKeep:{keepId:t.id,vaultId:a.id},keepData:{id:t.id,userId:t.userId,keeps:t.keeps,views:t.views,img:t.img,description:t.description,isPrivate:t.isPrivate,name:t.name}})}}},[e._v(e._s(a.name))])]):e._e()})],2)])]):e._e()}))},v=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal"},[s("header",{staticClass:"modal-header"},[e._t("default",[e._v("\r\n            "+e._s(e.keep.name)+"\r\n        ")])],2),s("div",{staticClass:"modal-body"},[e._t("default",[s("button",{staticClass:"btn btn-secondary mt-1 mb-1 btn-sm",attrs:{type:"submit"},on:{click:e.close}},[e._v("X")])])],2)])])])},h=[],b={name:"modal",props:["keep"],data(){return{}},methods:{close(){this.$emit("close")}}},g=b,_=(s("3f29"),Object(o["a"])(g,f,h,!1,null,"6735cc2e",null));_.options.__file="Keep.vue";var k=_.exports,C={name:"allkeeps",data(){return{addVisible:"",isModalVisible:!1}},computed:{vaults(){return this.$store.state.vaults},keeps(){return this.$store.state.keeps}},methods:{makeAddVisible(e){e!=this.addVisible?this.addVisible=e:this.addVisible=""},addToVault(e){let t={keepId:e.vaultKeep.keepId,vaultId:e.vaultKeep.vaultId,userId:this.userId};this.$store.dispatch("makeVaultKeeps",t),e.keepData.keeps+=1,this.updateKeeps(e.keepData)},updateKeeps(e){this.$store.dispatch("updateUserKeep",e)},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}},components:{modal:k},props:["userId"]},K=C,w=Object(o["a"])(K,m,v,!1,null,null,null);w.options.__file="AllKeeps.vue";var V=w.exports,y={name:"home",computed:{user(){return this.$store.state.user}},created(){this.$store.dispatch("getAllKeeps")},mounted(){this.$store.dispatch("authenticate"),this.$store.dispatch("getUserKeeps",this.$store.state.user.id),this.$store.dispatch("getUserVaults",this.$store.state.user.id),this.$store.dispatch("getAllKeeps")},components:{AllKeeps:V}},$=y,I=(s("cccb"),Object(o["a"])($,p,d,!1,null,null,null));I.options.__file="Home.vue";var x=I.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login row"},[s("div",{staticClass:"col-12 d-flex justify-content-center"},[e.loginForm?s("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.email,expression:"creds.email"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"email",placeholder:"email"},domProps:{value:e.creds.email},on:{input:function(t){t.target.composing||e.$set(e.creds,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Login")])]):s("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"email",placeholder:"email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Create Account")])])]),s("div",{staticClass:"col-12 d-flex justify-content-center mt-1",on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?s("p",[e._v("No account Click to Register")]):s("p",[e._v("Already have an account click to Login")])])])},P=[],D={name:"login",mounted(){this.$store.dispatch("authenticate")},data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},U=D,j=Object(o["a"])(U,N,P,!1,null,null,null);j.options.__file="Login.vue";var M=j.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile container-fluid"},[s("nav",{staticClass:"navbar row yellow-bg"},[s("div",{staticClass:"col-2 mt-2 mb-2"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("a",[e._v("PNTRST")])])],1),s("div",{staticClass:"col-6 mt-2 mb-2"},[s("router-link",{attrs:{to:"/profile"}},[s("a",[e._v("Profile")])]),e._v(" |\n        "),s("router-link",{attrs:{to:"/profile/keeps"}},[s("a",[e._v("My Keeps")])]),e._v(" | \n        "),s("router-link",{attrs:{to:"/profile/vaults"}},[s("a",[e._v("My Vaults")])])],1),s("div",{staticClass:"col-2 mt-2 mb-2"},[s("button",{staticClass:"btn btn-danger",on:{click:e.logout}},[e._v("Logout")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row mt-2 mb-2"},[e._m(0),s("div",{staticClass:"col-9"},[s("form",{staticClass:"form-inline row d-flex justify-content-around",on:{submit:function(t){return t.preventDefault(),e.createKeep(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keepName,expression:"keepName"}],staticClass:"form-control p-2 col-3",attrs:{type:"text",placeholder:"Title"},domProps:{value:e.keepName},on:{input:function(t){t.target.composing||(e.keepName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.keepDescription,expression:"keepDescription"}],staticClass:"form-control p-2 col-4",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.keepDescription},on:{input:function(t){t.target.composing||(e.keepDescription=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.keepImg,expression:"keepImg"}],staticClass:"form-control p-2 col-3",attrs:{type:"text",placeholder:"Img"},domProps:{value:e.keepImg},on:{input:function(t){t.target.composing||(e.keepImg=t.target.value)}}}),s("label",{attrs:{for:"private"}},[e._v("Private?")]),s("input",{staticClass:"form-control",attrs:{type:"checkbox",name:"private",unchecked:""}}),s("button",{staticClass:"btn btn-warning col-1",attrs:{type:"submit"}},[e._v("Create")])])])])]),s("div",{staticClass:"col-12"},[s("MyKeeps")],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row mt-2 mb-2"},[e._m(1),s("div",{staticClass:"col-9"},[s("form",{staticClass:"form-inline row d-flex justify-content-around",on:{submit:function(t){return t.preventDefault(),e.createVault(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.vaultName,expression:"vaultName"}],staticClass:"form-control p-2 col-5",attrs:{type:"text",placeholder:"Title"},domProps:{value:e.vaultName},on:{input:function(t){t.target.composing||(e.vaultName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.vaultDescription,expression:"vaultDescription"}],staticClass:"form-control p-2 col-5",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.vaultDescription},on:{input:function(t){t.target.composing||(e.vaultDescription=t.target.value)}}}),s("button",{staticClass:"btn btn-warning col-1",attrs:{type:"submit"}},[e._v("Create")])])])])]),s("div",{staticClass:"col-12"},[s("MyVaults")],1)])])},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-3"},[s("h2",[e._v("My Keeps")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-3"},[s("h2",[e._v("My Vaults")])])}],O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mykeeps row"},e._l(e.userKeeps,function(t){return s("div",{key:t.id,staticClass:"col-3 mb-2 mt-2"},[s("img",{staticClass:"img-fluid round-border bd-round ",attrs:{src:t.img,alt:t.name}}),s("p",[s("span",{on:{click:function(s){e.deleteKeeps({id:t.id,userId:t.userId})}}},[s("i",{staticClass:"fas fa-trash-alt"}),e._v(" ")]),e._m(0,!0),s("span")])])}))},A=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("i",{staticClass:"fas fa-folder-plus"})])}],S={name:"mykeeps",mounted(){this.$store.dispatch("getUserKeeps",this.$store.state.user.id),this.$store.dispatch("getUserVaults",this.$store.state.user.id)},computed:{userKeeps(){return this.$store.state.userKeeps}}},L=S,F=(s("405d"),Object(o["a"])(L,O,A,!1,null,null,null));F.options.__file="MyKeeps.vue";var R=F.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row myvaults mb-2 mt-2  d-flex justify-content-around"},e._l(e.userVaults,function(t){return s("div",{key:t.id,staticClass:"col-5 bd-round mt-2 mb-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 bg-black d-flex justify-content-between"},[s("p",[s("strong",[e._v(e._s(t.name))])]),s("span",{on:{click:function(s){e.deleteVaults({id:t.id,userId:t.userId})}}},[e._m(0,!0)])]),s("div",{staticClass:"col-12"},[s("VaultKeeps",{staticClass:"d-flex justify-content-center",attrs:{vaultId:t.id}})],1)])])}))},J=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("i",{staticClass:"fas fa-trash-alt"}),e._v(" ")])}],B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row vaultkeeps"},e._l(e.vaultKeep,function(t){return s("div",{key:t.id,staticClass:"col-6 mt-3 mb-3"},[s("img",{staticClass:"img-fluid bd-round",attrs:{src:t.img,alt:t.name}}),s("p",[s("span",{on:{click:function(s){e.removeFromVault(t.id)}}},[s("i",{staticClass:"fas fa-times-circle"})]),e._v("  \r\n          "),e.user.id==t.userId?s("span",[s("i",{staticClass:"fas fa-trash-alt"})]):e._e()])])}))},X=[],q={name:"vaultkeeps",mounted(){this.$store.dispatch("getVaultKeeps",this.vaultId)},computed:{user(){return this.$store.state.user},vaultKeep(){return this.$store.state.vaultKeeps[this.vaultId]}},methods:{removeFromVault(e){let t={keepId:e,vaultId:this.vaultId};this.$store.dispatch("deleteVaultKeeps",t)}},props:["vaultId"]},z=q,G=Object(o["a"])(z,B,X,!1,null,null,null);G.options.__file="VaultKeeps.vue";var Q=G.exports,W={name:"myvaults",computed:{userVaults(){return this.$store.state.vaults}},mounted(){this.$store.dispatch("getUserKeeps",this.$store.state.user.id),this.$store.dispatch("getUserVaults",this.$store.state.user.id)},methods:{deleteVaults(e){this.$store.dispatch("deleteVaults",e)}},components:{VaultKeeps:Q}},Y=W,Z=(s("df18"),Object(o["a"])(Y,H,J,!1,null,null,null));Z.options.__file="MyVaults.vue";var ee=Z.exports,te={name:"profile",data(){return{keepName:"",keepDescription:"",keepImg:"",vaultName:"",vaultDescription:"",isPrivate:0}},computed:{user(){return this.$store.state.user}},created(){this.$store.state.user.id||this.$router.push({name:"home"})},mounted(){this.$store.dispatch("getUserKeeps",this.$store.state.user.id),this.$store.dispatch("getUserVaults",this.$store.state.user.id),this.$store.dispatch("getAllKeeps"),this.$store.state.user.id||this.$router.push({name:"home"})},methods:{logout(){this.$store.dispatch("logout")},createKeep(){document.getElementsByName("private")[0].checked&&(this.isPrivate=1);let e={name:this.keepName,description:this.keepDescription,userId:this.user.id,img:this.keepImg,isPrivate:this.isPrivate};this.$store.dispatch("createKeeps",e),this.keepName="",this.keepDescription="",this.keepImg=""},createVault(){let e={name:this.vaultName,description:this.vaultDescription,userId:this.user.id};this.$store.dispatch("createVaults",e),this.vaultName="",this.vaultDescription="",this.vaultImg=""}},components:{MyKeeps:R,MyVaults:ee}},se=te,ae=(s("2a37"),Object(o["a"])(se,E,T,!1,null,null,null));ae.options.__file="Profile.vue";var ie=ae.exports,re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"keeps container-fluid"},[s("nav",{staticClass:"navbar row yellow-bg"},[s("div",{staticClass:"col-2 mt-2 mb-2"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("a",[e._v("PNTRST")])])],1),s("div",{staticClass:"col-2 mt-2 mb-2"},[s("p",[e._v("Hello "+e._s(e.user.username))])]),s("div",{staticClass:"col-6 mt-2 mb-2"},[s("router-link",{attrs:{to:"/profile"}},[s("a",[e._v("Profile")])]),e._v(" |\r\n            "),s("router-link",{attrs:{to:"/profile/keeps"}},[s("a",[e._v("My Keeps")])]),e._v(" | \r\n            "),s("router-link",{attrs:{to:"/profile/vaults"}},[s("a",[e._v("My Vaults")])])],1),e._m(0)]),s("div",{staticClass:"row mt-2 mb-2"},[e._m(1),s("div",{staticClass:"col-12"},[s("form",{staticClass:"form-inline row d-flex justify-content-around",on:{submit:function(t){return t.preventDefault(),e.createKeep(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keepName,expression:"keepName"}],staticClass:"form-control p-2 col-3",attrs:{type:"text",placeholder:"Keep Title"},domProps:{value:e.keepName},on:{input:function(t){t.target.composing||(e.keepName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.keepDescription,expression:"keepDescription"}],staticClass:"form-control p-2 col-4",attrs:{type:"text",placeholder:"Keep Description"},domProps:{value:e.keepDescription},on:{input:function(t){t.target.composing||(e.keepDescription=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.keepImg,expression:"keepImg"}],staticClass:"form-control p-2 col-3",attrs:{type:"text",placeholder:"Keep Img"},domProps:{value:e.keepImg},on:{input:function(t){t.target.composing||(e.keepImg=t.target.value)}}}),s("label",{attrs:{for:"private"}},[e._v("Private?")]),s("input",{staticClass:"form-control",attrs:{type:"checkbox",name:"private",unchecked:""}}),s("button",{staticClass:"btn btn-warning col-1",attrs:{type:"submit"}},[e._v("Create Keep")])])])]),s("div",{staticClass:"row"},e._l(e.userKeeps,function(t){return s("div",{key:t.id,staticClass:"col-3  mb-2 mt-2"},[s("div",{staticClass:"card round-border bd-round"},[s("img",{staticClass:"card-img-top",attrs:{src:t.img,alt:t.name}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(t.name))]),s("p",{staticClass:"card-text"},[e._v(e._s(t.description))]),s("p",[s("i",{staticClass:"fas fa-thumbtack"}),e._v(": "+e._s(t.keeps)+"   "),s("i",{staticClass:"far fa-eye"}),e._v(": "+e._s(t.views)+" ")]),s("p",[s("span",{on:{click:function(s){e.deleteKeeps({id:t.id,userId:t.userId})}}},[s("i",{staticClass:"fas fa-trash-alt"}),e._v(" ")]),s("span",{on:{click:function(s){e.makeEditVisible(t.id)}}},[s("i",{staticClass:"fas fa-edit"}),e._v("  ")]),s("span",{on:{click:function(s){e.makeAddVisible(t.id)}}},[s("i",{staticClass:"fas fa-folder-plus"})])]),e._l(e.vaults,function(a){return e.addVisible==t.id?s("span",{key:a.id,staticClass:"d-flex justify-content-around"},[s("button",{staticClass:"btn btn-success mt-1 mb-1",on:{click:function(s){e.addToVault({vaultKeep:{keepId:t.id,vaultId:a.id},keepData:{id:t.id,userId:t.userId,keeps:t.keeps,views:t.views,img:t.img,description:t.description,isPrivate:t.isPrivate,name:t.name}})}}},[e._v(e._s(a.name))])]):e._e()}),e.editVisible==t.id?s("span",{},[s("form",{staticClass:"form-inline row d-flex justify-content-around mt-1 mb-1",on:{submit:function(s){s.preventDefault(),e.editNameKeep({id:t.id,userId:t.userId,keeps:t.keeps,views:t.views,img:t.img,description:t.description,isPrivate:t.isPrivate,name:e.nameKeep})}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.nameKeep,expression:"nameKeep"}],staticClass:"col-8 form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:e.nameKeep},on:{input:function(t){t.target.composing||(e.nameKeep=t.target.value)}}}),s("button",{staticClass:"btn btn-success col-2 form-control",attrs:{type:"submit"}},[e._v("+")])]),s("form",{staticClass:"form-inline row d-flex justify-content-around mt-1 mb-1",on:{submit:function(s){s.preventDefault(),e.editDescriptionKeep({id:t.id,userId:t.userId,keeps:t.keeps,views:t.views,img:t.img,description:e.descripKeep,isPrivate:t.isPrivate,name:t.name})}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.descripKeep,expression:"descripKeep"}],staticClass:"col-8 form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.descripKeep},on:{input:function(t){t.target.composing||(e.descripKeep=t.target.value)}}}),s("button",{staticClass:"btn btn-success col-2 form-control"},[e._v("+")])]),s("form",{staticClass:"form-inline row d-flex justify-content-around mt-1 mb-1",on:{submit:function(s){s.preventDefault(),e.editViewKeep({id:t.id,userId:t.userId,keeps:t.keeps,views:t.views,img:t.img,description:t.description,isPrivate:e.privateKeep,name:t.name})}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.privateKeep,expression:"privateKeep"}],staticClass:"col-8 form-control",attrs:{type:"text",placeholder:"Private/Public"},domProps:{value:e.privateKeep},on:{input:function(t){t.target.composing||(e.privateKeep=t.target.value)}}}),s("button",{staticClass:"btn btn-success col-2 form-control"},[e._v("+")])])]):e._e()],2)])])}))])},oe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-2 mt-2 mb-2"},[s("a",{attrs:{href:"#"}},[e._v("Logout")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12"},[s("h2",[e._v("My Keeps")])])}],le={name:"keeps",data(){return{keepName:"",keepDescription:"",keepImg:"",addVisible:!1,editVisible:!1,isPrivate:0,nameKeep:"",descripKeep:"",privateKeep:""}},created(){this.$store.state.user.id||this.$router.push({name:"home"})},methods:{makeEditVisible(e){e!=this.editVisible?this.editVisible=e:this.editVisible=""},makeAddVisible(e){e!=this.addVisible?this.addVisible=e:this.addVisible=""},deleteKeeps(e){this.$store.dispatch("deleteKeeps",e)},createKeep(){let e={name:this.keepName,description:this.keepDescription,userId:this.user.id,img:this.keepImg,isPrivate:this.isPrivate};this.$store.dispatch("createKeeps",e),this.keepName="",this.keepDescription="",this.keepImg=""},addToVault(e){let t={keepId:e.valtKeep.keepId,vaultId:e.vaultKeep.vaultId,userId:this.user.id};this.$store.dispatch("makeVaultKeeps",t),e.keepData.keeps+=1,this.updateKeeps(e.keepData)},updateKeeps(e){this.$store.dispatch("updateUserKeep",e)},editNameKeep(e){this.$store.dispatch("updateUserKeep",e),this.nameKeep=""},editDescriptionKeep(e){this.$store.dispatch("updateUserKeep",e),this.descripKeep=""},editPrivateKeep(e){this.$store.dispatch("updateUserKeep",e),this.privateKeep=""}},computed:{user(){return this.$store.state.user},userKeeps(){return this.$store.state.userKeeps},vaults(){return this.$store.state.vaults}}},ne=le,ce=(s("b868"),Object(o["a"])(ne,re,oe,!1,null,null,null));ce.options.__file="Keeps.vue";var ue=ce.exports,pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid vaults"},[s("nav",{staticClass:"navbar row yellow-bg"},[s("div",{staticClass:"col-2 mt-2 mb-2"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("a",[e._v("PNTRST")])])],1),s("div",{staticClass:"col-8 mt-2 mb-2"},[s("router-link",{attrs:{to:"/profile"}},[s("a",[e._v("Profile")])]),e._v(" |\r\n            "),s("router-link",{attrs:{to:"/profile/keeps"}},[s("a",[e._v("My Keeps")])]),e._v(" | \r\n            "),s("router-link",{attrs:{to:"/profile/vaults"}},[s("a",[e._v("My Vaults")])])],1),e._m(0)]),s("div",{staticClass:"row mt-2 mb-2"},[e._m(1),s("div",{staticClass:"col-12"},[s("form",{staticClass:"form-inline row d-flex justify-content-around",on:{submit:function(t){return t.preventDefault(),e.createVault(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.vaultName,expression:"vaultName"}],staticClass:"form-control p-2 col-5",attrs:{type:"text",placeholder:"Vault Title"},domProps:{value:e.vaultName},on:{input:function(t){t.target.composing||(e.vaultName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.vaultDescription,expression:"vaultDescription"}],staticClass:"form-control p-2 col-5",attrs:{type:"text",placeholder:"Vault Description"},domProps:{value:e.vaultDescription},on:{input:function(t){t.target.composing||(e.vaultDescription=t.target.value)}}}),s("button",{staticClass:"btn btn-warning col-1",attrs:{type:"submit"}},[e._v("Create Vault")])])])]),s("div",{staticClass:"row d-flex justify-content-around "},e._l(e.userVaults,function(t){return s("div",{key:t.id,staticClass:"col-5 bd-round mt-2 mb-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 bg-black d-flex justify-content-between"},[s("p",[e._v(e._s(t.name))]),s("span",{on:{click:function(s){e.makeEditVisible(t.id)}}},[e._m(2,!0),e._v("  ")]),s("span",{on:{click:function(s){e.deleteVaults({id:t.id,userId:t.userId})}}},[e._m(3,!0)])]),e.editVisible==t.id?s("div",{staticClass:"col-12"},[s("form",{staticClass:"form-inline row d-flex justify-content-around mt-1 mb-1",on:{submit:function(s){s.preventDefault(),e.editNameVault({id:t.id,userId:t.userId,description:t.description,name:e.nameVault})}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.nameVault,expression:"nameVault"}],staticClass:"col-8 form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:e.nameVault},on:{input:function(t){t.target.composing||(e.nameVault=t.target.value)}}}),s("button",{staticClass:"btn btn-success col-2 form-control",attrs:{type:"submit"}},[e._v("+")])]),s("form",{staticClass:"form-inline row d-flex justify-content-around mt-1 mb-1",on:{submit:function(s){s.preventDefault(),e.editDescriptionVault({id:t.id,userId:t.userId,description:e.descripvault,name:t.name})}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.descripVault,expression:"descripVault"}],staticClass:"col-8 form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.descripVault},on:{input:function(t){t.target.composing||(e.descripVault=t.target.value)}}}),s("button",{staticClass:"btn btn-success col-2 form-control"},[e._v("+")])])]):e._e(),s("div",{staticClass:"col-12"},[s("VaultKeeps",{staticClass:" d-flex justify-content-center",attrs:{vaultId:t.id}})],1)])])}))])},de=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-2 mt-2 mb-2"},[s("a",{attrs:{href:"#"}},[e._v("Logout")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12"},[s("h2",[e._v("My Vaults")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("i",{staticClass:"fas fa-edit"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("i",{staticClass:"fas fa-trash-alt"}),e._v(" ")])}],me={name:"vaults",data(){return{vaultName:"",vaultDescription:"",nameVault:"",descripVault:"",editVisible:""}},created(){this.$store.state.user.id||this.$router.push({name:"home"})},computed:{userVaults(){return this.$store.state.vaults}},methods:{makeEditVisible(e){e!=this.editVisible?this.editVisible=e:this.editVisible=""},createVault(){let e={name:this.vaultName,description:this.vaultDescription,userId:this.user.id};this.$store.dispatch("createVaults",e),this.vaultName="",this.vaultDescription="",this.vaultImg=""},editNameVault(e){this.$store.dispatch("updateVault",e),this.nameVault=""},editDescriptionVault(e){this.$store.dispatch("updateVault",e),this.descripVault=""}},components:{VaultKeeps:Q}},ve=me,fe=(s("5173"),Object(o["a"])(ve,pe,de,!1,null,null,null));fe.options.__file="Vaults.vue";var he=fe.exports;a["a"].use(u["a"]);var be=new u["a"]({routes:[{path:"/",name:"home",component:x},{path:"/login",name:"login",component:M},{path:"/profile",name:"profile",component:ie},{path:"/profile/keeps",name:"keeps",component:ue},{path:"/profile/vaults",name:"vaults",component:he}]}),ge=s("2f62"),_e=s("bc3a"),ke=s.n(_e);a["a"].use(ge["a"]);let Ce=ke.a.create({baseURL:"//localhost:5000/account/",timeout:3e3,withCredentials:!0}),Ke=ke.a.create({baseURL:"//localhost:5000/api/",timeout:5e3,withCredentials:!0});var we=new ge["a"].Store({state:{user:{},keeps:[],userKeeps:[],vaults:[],vaultKeeps:{}},mutations:{clearUser(e){e.user={},e.userKeeps=[],e.vaults=[],e.vaultKeeps={}},setUser(e,t){e.user=t},setKeeps(e,t){e.keeps=t},setUserKeeps(e,t){e.userKeeps=t},setUserVaults(e,t){e.vaults=t},setVaultKeeps(e,t){a["a"].set(e.vaultKeeps,t.vaultId,t.keeps)},setVaultKeepsId(e,t){a["a"].set(e.vaultKeepsId,t.vaultId,t.vaultkeeps)}},actions:{register({commit:e,dispatch:t},s){Ce.post("register",s).then(t=>{e("setUser",t.data),be.push({name:"profile"})}).catch(e=>{console.log("[registration failed] :",e)})},authenticate({commit:e,dispatch:t}){Ce.get("authenticate").then(t=>{e("setUser",t.data)}).catch(e=>{console.log("not authenticated")})},login({commit:e,dispatch:t},s){Ce.post("login",s).then(t=>{e("setUser",t.data),be.push({name:"profile"})}).catch(e=>{console.log("Login Failed")})},logout({commit:e}){Ce.delete("logout").then(()=>{e("clearUser"),be.push({name:"home"})})},getAllKeeps({commit:e,dispatch:t}){Ke.get("keeps").then(t=>{e("setKeeps",t.data)})},getUserKeeps({commit:e},t){Ke.get("keeps/"+t).then(t=>{e("setUserKeeps",t.data)})},createKeeps({dispatch:e},t){Ke.post("keeps",t).then(s=>{e("getUserKeeps",t.userId)})},deleteKeeps({dispatch:e},t){Ke.delete("keeps/"+t.id,t.id).then(s=>{e("getUserKeeps",t.userId)})},updateUserKeep({dispatch:e},t){Ke.put("keeps/"+t.id,t).then(s=>{e("getUserKeeps",t.userId),e("getAllKeeps")})},getUserVaults({commit:e},t){Ke.get("vaults/"+t).then(t=>{e("setUserVaults",t.data)})},createVaults({dispatch:e},t){Ke.post("vaults",t).then(s=>{e("getUserVaults",t.userId)})},updateVault({dispatch:e},t){Ke.put("vaults/"+t.id,t).then(s=>{e("getUserVaults",t.userId)})},deleteVaults({dispatch:e},t){Ke.delete("vaults/"+t.id,t.id).then(s=>{e("getUserVaults",t.userId)})},getVaultKeeps({commit:e},t){Ke.get("keeps/vault/"+t).then(s=>{e("setVaultKeeps",{vaultId:t,keeps:s.data})})},makeVaultKeeps({dispatch:e},t){Ke.post("keeps/vaultkeeps/",t).then(s=>{e("getVaultKeeps",t.vaultId)})},deleteVaultKeeps({dispatch:e},t){Ke.delete("keeps/vaultkeeps/"+t.keepId+"/"+t.vaultId).then(s=>{e("getVaultKeeps",t.vaultId)})}}});a["a"].config.productionTip=!1,new a["a"]({router:be,store:we,render:e=>e(c)}).$mount("#app")},"8f59":function(e,t,s){},"91be":function(e,t,s){},a327:function(e,t,s){},b868:function(e,t,s){"use strict";var a=s("09e2"),i=s.n(a);i.a},c21b:function(e,t,s){},cccb:function(e,t,s){"use strict";var a=s("8f59"),i=s.n(a);i.a},df18:function(e,t,s){"use strict";var a=s("91be"),i=s.n(a);i.a},ff29:function(e,t,s){}});
//# sourceMappingURL=app.45418ee4.js.map