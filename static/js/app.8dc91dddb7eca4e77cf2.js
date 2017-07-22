webpackJsonp([0],[,,function(t,e,s){function a(t){s(14)}var r=s(0)(s(9),s(20),a,"data-v-d9a8b53e",null);t.exports=r.exports},function(t,e,s){"use strict";var a=s(1),r=s(21),n=s(15),i=s.n(n),o=s(16),c=s.n(o);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/:username",name:"Profile",component:c.a}]})},function(t,e,s){function a(t){s(12)}var r=s(0)(s(7),s(18),a,null,null);t.exports=r.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),r=s(5),n=s(4),i=s.n(n),o=s(3);a.a.config.productionTip=!1,a.a.use(r.a),new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),r=s.n(a);e.default={name:"",data:function(){return{users:"",totalUsers:0,pagination:0,pageNumber:1,showLoadBar:!0,sort:""}},components:{loading:r.a},created:function(){this.LoadProfiles()},methods:{Sort:function(t){this.sort=t,this.showLoadBar=!0,this.LoadProfiles()},LoadProfiles:function(){var t=this;this.$http.get("https://api.github.com/search/users?q=location:Angola+location:luanda&sort="+this.sort+"&per_page=30").then(function(e){var s=JSON.parse(e.bodyText);t.totalUsers=s.total_count,t.pagination=Math.round(s.total_count/30)+1,t.users=s.items,t.showLoadBar=!1},function(t){console.log(t)})},LoadMoreProfiles:function(){var t=this;this.showLoadBar=!0,this.pageNumber<=this.pagination&&(this.pageNumber+=1,this.$http.get("https://api.github.com/search/users?q=location:Angola+location:luanda&per_page=30&page="+this.pageNumber).then(function(e){var s=JSON.parse(e.bodyText);t.users=t.users.concat(s.items),t.showLoadBar=!1},function(t){console.log(t)}))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Loading",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),r=s.n(a);e.default={name:"Profile",data:function(){return{user:"",repositories:"",showLoadBar:!0}},components:{loading:r.a},created:function(){var t=this,e=this.$route.params.username;this.$http.get("https://api.github.com/users/"+e).then(function(e){var s=JSON.parse(e.bodyText);t.user=s,t.showLoadBar=!1,t.GetRepositories()},function(t){console.log(t)})},methods:{GetRepositories:function(){var t=this,e=this.$route.params.username;this.$http.get("https://api.github.com/search/repositories?q=user:"+e).then(function(e){t.repositories=JSON.parse(e.bodyText).items,console.log(e.bodyText)},function(t){console.log(t)})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){function a(t){s(11)}var r=s(0)(s(8),s(17),a,null,null);t.exports=r.exports},function(t,e,s){function a(t){s(13)}var r=s(0)(s(10),s(19),a,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view"},[t.showLoadBar?s("loading"):t._e(),t._v(" "),s("h1",{directives:[{name:"show",rawName:"v-show",value:t.users,expression:"users"}],staticClass:"we-are title is-4"},[t._v("We are "+t._s(t.totalUsers)+" programmers and organizations based in "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Angola",title:"Want to know more about Angola?"}},[t._v("Angola")]),t._v(" 🙌 👏.")]),t._v(" "),s("div",{staticClass:"filters wrap"},[s("span",{staticClass:"tag",on:{click:function(e){t.Sort("followers")}}},[t._v("Followers")]),t._v(" "),s("span",{staticClass:"tag",on:{click:function(e){t.Sort("joined")}}},[t._v("Joined date")]),t._v(" "),s("span",{staticClass:"tag",on:{click:function(e){t.Sort("repositories")}}},[t._v("Number of repositories")])]),t._v(" "),s("article",{staticClass:"users wrap"},t._l(t.users,function(e){return s("div",{staticClass:"user card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is4by3"},[s("router-link",{attrs:{to:{name:"Profile",params:{username:e.login}},title:"Open "+e.login+"`s profile"}},[s("img",{attrs:{src:e.avatar_url,alt:e.login}})])],1)]),t._v(" "),s("div",{staticClass:"card-content"},[s("h1",{staticClass:"title is-4"},[s("a",{attrs:{href:e.html_url}},[t._v("\n\t\t\t\t\t\t@"+t._s(e.login)+"\n\t\t\t\t\t")])])])])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.users,expression:"users"}],staticClass:"wrap"},[s("a",{staticClass:"button is-info",on:{click:t.LoadMoreProfiles}},[t._v("Load more profiles")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{directives:[{name:"show",rawName:"v-show",value:!t.users,expression:"!users"}],staticClass:"main-header"},[t._m(0),t._v(" "),s("p",[t._v("Get to know all the coders based in Angola who loves open source in the Octocat's platform a.k.a Github.")])]),t._v(" "),s("router-view"),t._v(" "),s("footer",{directives:[{name:"show",rawName:"v-show",value:!t.users,expression:"!users"}],staticClass:"main-footer"},[t._m(1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/#"}},[s("img",{attrs:{src:"/static/logo.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("angolans-on-github is fully open source released under the "),s("a",{attrs:{href:""}},[t._v("MIT License")]),t._v(". You can \n\t\t\t"),s("a",{attrs:{href:"https://github.com/flowck/angolan-on-github"}},[t._v("contribute from here.")])]),t._v(" "),s("p",[t._v("Built with ❤ by "),s("a",{attrs:{href:"https://github.com/flowck",title:"Hi there, it's me"}},[t._v("Firmino Changani")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view"},[t.showLoadBar?s("loading"):t._e(),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",[s("a",{attrs:{href:t.user.html_url,target:"blank"}},[s("img",{attrs:{src:t.user.avatar_url,alt:t.user.login}})])])]),t._v(" "),s("div",{staticClass:"card-content"},[s("p",{staticClass:"title is-4"},[s("a",{attrs:{href:t.user.html_url}},[t._v("\n\t\t\t\t\t"+t._s(t.user.name)+"\n\t\t\t\t")])]),t._v(" "),s("p",{staticClass:"subtitle is-6"},[s("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t"+t._s(t.user.location)+"\n\t\t\t\t \n\t\t\t\t"),s("i",{staticClass:"fa fa-link",attrs:{"aria-hidden":"true"}}),t._v(" "),s("a",{attrs:{href:t.user.blog}},[t._v(" "+t._s(t.user.blog)+" ")])]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n\t\t\t\t"+t._s(t.user.bio)+"\n\t\t\t")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"content repositories"},[s("h2",{staticClass:"title"},[t._v(" Projects ")]),t._v(" "),t._l(t.repositories,function(e){return s("a",{attrs:{href:e.html_url,target:"blank"}},[s("div",{staticClass:"card repository"},[s("p",{staticClass:"title is-4"},[s("a",{attrs:{href:e.html_url,target:"blank"}},[t._v(" "+t._s(e.name)+" ")])]),t._v(" "),s("span",{staticClass:"meta-data"},[s("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(e.stargazers_count)+"\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"),s("span",[s("i",{staticClass:"fa fa-code-fork",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(e.forks)+"\n\t\t\t\t\t\t")])])])})],2)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-box"},[s("div",{staticClass:"bar"})])}]}},,,,function(t,e){}],[6]);
//# sourceMappingURL=app.8dc91dddb7eca4e77cf2.js.map