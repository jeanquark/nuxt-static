(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(t){t.exports=JSON.parse('[{"title":"Post 1","slug":"post_1","image":"coldest-sunset.jpg","tags":["photography","travel","winter"],"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit aperiam ratione vero ex. Doloremque provident voluptates repellendus obcaecati adipisci nisi ab, fugiat magnam recusandae corporis voluptas ipsum consequuntur alias."},{"title":"Post 2","slug":"post_2","image":"road.jpg","tags":["cloud","road","mountain"],"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit aperiam ratione vero ex. Doloremque provident voluptates repellendus obcaecati adipisci nisi ab, fugiat magnam recusandae corporis voluptas ipsum consequuntur alias."},{"title":"Post 3","slug":"post_3","image":"forest.jpg","tags":["green","nature","tree"],"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit aperiam ratione vero ex. Doloremque provident voluptates repellendus obcaecati adipisci nisi ab, fugiat magnam recusandae corporis voluptas ipsum consequuntur alias."}]')},205:function(t,e,o){"use strict";o.r(e);o(124),o(125),o(9),o(13);var n,r=o(2),l=o(201),c={layout:"layoutFront",mounted:function(){},data:function(){return{profile:this.$auth.profile}},computed:{isAuthenticated:function(){return this.$store.getters["auth/isAuthenticated"]},loggedUser:function(){return this.$store.getters["auth/loggedUser"]},posts:function(){return l}},methods:{login:function(){this.$auth.loginWith("auth0")},logout:(n=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.logout();case 2:window.location.href="https://dev-b36ddgyg.eu.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000";case 3:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),alert:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){alert(t)})}},d=o(19),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"flex content-start flex-wrap bg-gray-200"},t._l(t.posts,function(e){return o("div",{key:e.slug,staticClass:"w-1/3 p-2"},[o("div",{staticClass:"text-center rounded overflow-hidden shadow-lg"},[o("img",{staticClass:"w-full",attrs:{src:"images/"+e.image,alt:""+e.image}}),t._v(" "),o("div",{staticClass:"px-6 py-4"},[o("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"text-gray-700 text-base"},[t._v("\n                            "+t._s(e.content)+"\n                        ")])]),t._v(" "),o("div",{staticClass:"px-6 py-4"},t._l(e.tags,function(e,n){return o("span",{key:n,staticClass:"inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},[t._v("#"+t._s(e))])}),0)])])}),0),t._v(" "),o("div",{staticClass:"flex flex-row mb-4"},[o("button",{staticClass:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",on:{click:function(e){return t.alert("My message")}}},[t._v("Show alert")]),t._v(" "),o("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",on:{click:function(e){return e.stopPropagation(),t.login()}}},[t._v("Login")]),t._v(" "),o("button",{staticClass:"bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full",on:{click:function(e){return e.stopPropagation(),t.logout()}}},[t._v("Logout")])]),t._v(" "),o("div",{staticClass:"flex flex-row mb-4"},[o("h2",[t._v("Authentication")]),o("br"),t._v(" "),t.isAuthenticated?o("p",[t._v("\n                Now that you're authenticated, maybe you should try going to our "),o("nuxt-link",{staticClass:"link",attrs:{to:"/secret"}},[t._v("super secret page")]),t._v("!"),o("br"),t._v("\n                loggedUser: "+t._s(t.loggedUser)+"\n            ")],1):o("p",[t._v("\n                You're not authenticated yet. Maybe you want to "),o("nuxt-link",{staticClass:"link",attrs:{to:"/auth/sign-in"}},[t._v("sign in")]),t._v(" and see what happens?\n            ")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-4"},[e("div",{staticClass:"w-full bg-gray-500 h-12"})])}],!1,null,"30d5f2fe",null);e.default=component.exports}}]);