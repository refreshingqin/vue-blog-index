(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a7aaf74"],{"200e":function(t,e,i){},"214f":function(t,e,i){"use strict";var a=i("32e9"),s=i("2aba"),n=i("79e5"),c=i("be13"),o=i("2b4c");t.exports=function(t,e,i){var r=o(t),l=i(c,r,""[t]),d=l[0],m=l[1];n(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,d),a(RegExp.prototype,r,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)}))}},"6acf":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" detail higtlight"},[t.text_loading?t._e():i("div",{staticClass:"title-box"},[i("h1",[t._v(t._s(t.detail.title))]),i("div",{staticClass:"post-box"},[i("div",[i("i",{staticClass:"iconfont lv-icon-kalendar"}),t._v("\n        "+t._s(t.detail.created_at)+"\n      ")]),t.detail.tags.length?i("div",{staticClass:"tag-box"},[i("i",{staticClass:"iconfont lv-icon-biaoqian6"}),t._l(t.detail.tags,function(e,a){return i("span",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])})],2):t._e(),i("div",[i("i",{staticClass:"iconfont lv-icon-huore"}),t._v(t._s(t.detail.view_count)+"热度")])])]),t.text_loading?i("TextLoading",{staticClass:"article"}):i("div",{staticClass:"article"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}],domProps:{innerHTML:t._s(t.compiledMarkdown)}}),i("div",{staticClass:"posmition"},[i("p",[t._v("文章版权所有："),i("a",{attrs:{href:"https://github.com/sweida",target:"_black"}},[t._v("sweida")]),t._v("，采用 "),i("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",target:"_black"}},[t._v("知识共享署名-非商业性使用 4.0 国际许可协议")]),t._v(" 进行许可。")]),i("p",[t._v("欢迎分享，转载务必保留出处及原文链接 "),i("a",{attrs:{href:t.href,target:"_blank"}},[t._v(t._s(t.href))])])]),i("div",{staticClass:"giveLike animate03",class:{hasclick:t.hasclick},on:{click:t.giveLike}},[i("i",{staticClass:"iconfont lv-icon-yijin13-zan"}),i("span",[t._v(t._s(t.detail.like))])]),i("div",{staticClass:"nextBox"},[i("p",{staticClass:"goArticle",on:{click:function(e){t.goArticle(t.prevArticle)}}},[i("Icon",{attrs:{type:"md-arrow-round-back"}}),i("span",[t._v(t._s(t.prevArticle?t.prevArticle.title:"无"))])],1),i("p",{staticClass:"goArticle",on:{click:function(e){t.goArticle(t.nextrAticle)}}},[i("span",[t._v(t._s(t.nextrAticle?t.nextrAticle.title:"无"))]),i("Icon",{attrs:{type:"md-arrow-round-forward"}})],1)])]),i("div",{staticClass:"commentbox"},[i("div",{staticClass:"comment-title"},[i("p",[t._v("评论 "),i("span",[t._v("「 "+t._s(t.detail.comment)+" 」")])])]),i("div",{staticClass:"input-box"},[i("div",{staticClass:"userbox"},[t.user.id?i("div",{staticClass:"user-img"},[i("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-"+t.user.id+".svg",alt:""}}),i("h4",[t._v(t._s(t.user.name))])]):i("div",{staticClass:"user-img"},[i("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-.svg",alt:""}}),i("h4",[t._v("游客")])])]),i("div",{staticClass:"textbox"},[i("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},maxlength:400,placeholder:"说点什么。。支持markdown语法，尾部2个空格后回车才会换行，最长400个字"},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}}),i("div",{staticClass:"submit-box"},[i("div",{staticClass:"ykname"},[t.user?t._e():i("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"游客可以选填昵称"},model:{value:t.comment.username,callback:function(e){t.$set(t.comment,"username",e)},expression:"comment.username"}})],1),i("Button",{attrs:{type:"primary"},on:{click:t.submitComment}},[t._v("提交评论")])],1)],1)]),t.detail.comment?i("div",[t.loading?i("MyLoading"):t._l(t.commentList,function(e,a){return i("div",{key:a,staticClass:"commentList"},[i("div",{staticClass:"user-ava"},[i("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-"+e.user_id+".svg",alt:""}})]),i("div",{staticClass:"comment-box animate03"},[i("div",{staticClass:"username"},[i("span",[i("Icon",{attrs:{type:"md-person"}}),t._v("\n              "+t._s(e.user?e.user.name:e.name?"游客（"+e.name+"）":"游客")+" \n              "),i("em",[t._v(t._s(1==e.user_id?"(博主)":""))]),i("span",{staticClass:"created"},[i("i",{staticClass:"el-icon-time"}),t._v(t._s(e.created_at))])],1)]),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"com_detail",domProps:{innerHTML:t._s(e.content)}}),e.user_id==t.user.id?i("div",{staticClass:"delete"},[i("Poptip",{attrs:{confirm:"",placement:"left",title:"是否删除该评论?"},on:{"on-ok":function(i){t.deleteComment(e)}}},[e.user_id==t.user.id&&e.user_id?i("Icon",{attrs:{type:"md-trash"}}):t._e()],1)],1):t._e()])])}),i("div",{staticClass:"more"},[t.hasMore?i("Button",{on:{click:t.getMore}},[t._v("加载更多")]):i("p",[t._v("没有更多了..")])],1)],2):i("div",{staticClass:"none"},[t._v("\n      还没有评论，快来抢沙发。\n    ")])])],1)},s=[],n=i("2909"),c=(i("ac6a"),i("a481"),i("be94")),o=i("2f62"),r=i("0e54"),l=i.n(r),d=(i("bc07"),{data:function(){return{text_loading:!0,show:!0,loading:!0,checked:!0,hasclick:!1,detail:[],commentList:[],prevArticle:{},nextrAticle:{},comment:{content:"",name:"",article_id:""},pageModel:{id:1},page:2,hasMore:!0,href:""}},computed:Object(c["a"])({},Object(o["c"])(["user"]),{compiledMarkdown:function(){return l()(this.detail.content,{sanitize:!0})}}),created:function(){this.href=window.location.href,this.getDetail()},watch:{$route:function(t,e){this.getDetail()}},methods:{getDetail:function(){var t=this;this.$post("/apis/article",this.$route.params).then(function(e){t.text_loading=!1,t.detail=e.data,t.detail.created_at=t.detail.created_at.substring(0,10).replace(/-/g,"/"),t.comment.article_id=t.detail.id,t.prevArticle=e.data.prevArticle[0],t.nextrAticle=e.data.nextrAticle[0],t.detail.comment&&t.getComment()}).catch(function(){})},goArticle:function(t){t&&(this.text_loading=!0,this.$router.push("/blog/".concat(t.id)),this.hasclick=!1)},giveLike:function(){var t=this,e={id:this.detail.id};this.hasclick||this.$post("/apis/article/like",e).then(function(e){t.detail.like+=1,t.hasclick=!0}).catch(function(){})},getComment:function(){var t=this,e={article_id:this.detail.id};this.$post("/apis/comment/read",e).then(function(e){t.commentList=e.data.data,e.data.total<10&&(t.hasMore=!1),t.commentList&&t.commentList.forEach(function(t){t.content=l()(t.content,{sanitize:!0})}),t.loading=!1}).catch(function(){})},submitComment:function(){var t=this;this.$post("/apis/comment/add",this.comment).then(function(e){t.comment.content="",t.detail.comment+=1,t.$Message.success(e.message),t.getComment()}).catch(function(){})},getMore:function(){var t=this,e={article_id:this.detail.id,page:this.page};this.$post("/apis/comment/read",e).then(function(e){var i;t.page+=1,e.data.length<10&&(t.hasMore=!1),(i=t.commentList).push.apply(i,Object(n["a"])(e.data.data)),t.commentList.forEach(function(t){t.content=l()(t.content,{sanitize:!0})})}).catch(function(){})},deleteComment:function(t){var e=this;this.$post("/apis/comment/delete",{id:t.id}).then(function(i){e.commentList.splice(e.commentList.indexOf(t),1),e.$Message.success(i.message),e.detail.comment-=1}).catch(function(){})}}}),m=d,u=(i("d90f"),i("eac2"),i("2877")),v=Object(u["a"])(m,a,s,!1,null,"3f868400",null);v.options.__file="detail.vue";e["default"]=v.exports},"90f3":function(t,e,i){},a481:function(t,e,i){i("214f")("replace",2,function(t,e,i){return[function(a,s){"use strict";var n=t(this),c=void 0==a?void 0:a[e];return void 0!==c?c.call(a,n,s):i.call(String(n),a,s)},i]})},bc07:function(t,e,i){},d90f:function(t,e,i){"use strict";var a=i("200e"),s=i.n(a);s.a},eac2:function(t,e,i){"use strict";var a=i("90f3"),s=i.n(a);s.a}}]);