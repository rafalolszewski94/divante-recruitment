webpackJsonp([0],{"5DaL":function(t,e){},"Cv+W":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIgogICAgIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIKICAgICAgICBkPSJNMTguODY5IDE5LjE2MmwtNS45NDMtNi40ODRjMS4zMzktMS40MDEgMi4wNzUtMy4yMzMgMi4wNzUtNS4xNzggMC0yLjAwMy0wLjc4LTMuODg3LTIuMTk3LTUuMzAzcy0zLjMtMi4xOTctNS4zMDMtMi4xOTctMy44ODcgMC43OC01LjMwMyAyLjE5Ny0yLjE5NyAzLjMtMi4xOTcgNS4zMDMgMC43OCAzLjg4NyAyLjE5NyA1LjMwMyAzLjMgMi4xOTcgNS4zMDMgMi4xOTdjMS43MjYgMCAzLjM2Mi0wLjU3OSA0LjY4OC0xLjY0NWw1Ljk0MyA2LjQ4M2MwLjA5OSAwLjEwOCAwLjIzMyAwLjE2MiAwLjM2OSAwLjE2MiAwLjEyMSAwIDAuMjQyLTAuMDQzIDAuMzM4LTAuMTMxIDAuMjA0LTAuMTg3IDAuMjE3LTAuNTAzIDAuMDMxLTAuNzA2ek0xIDcuNWMwLTMuNTg0IDIuOTE2LTYuNSA2LjUtNi41czYuNSAyLjkxNiA2LjUgNi41LTIuOTE2IDYuNS02LjUgNi41LTYuNS0yLjkxNi02LjUtNi41eiIvPgo8L3N2Zz4K"},EsWh:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMwMDAwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0ibTEyIDdhMiAyIDAgMSAwIC0yLTIgMiAyIDAgMCAwIDIgMnptMCAxMGEyIDIgMCAxIDAgMiAyIDIgMiAwIDAgMCAtMi0yem0wLTdhMiAyIDAgMSAwIDIgMiAyIDIgMCAwIDAgLTItMnoiLz4KPC9zdmc+Cg=="},GD7B:function(t,e){},KCsK:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMxNTVCQ0MiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGgKICAgIGQ9Ik0xOCwySDhBNCw0LDAsMCwwLDQsNlYxOGE0LDQsMCwwLDAsNCw0SDE4YTIsMiwwLDAsMCwyLTJWNEEyLDIsMCwwLDAsMTgsMlpNNiw2QTIsMiwwLDAsMSw4LDRIMThWMTRIOGEzLjkxLDMuOTEsMCwwLDAtMiwuNTZaTTgsMjBhMiwyLDAsMCwxLDAtNEgxOHY0Wk0xMCw4aDRhMSwxLDAsMCwwLDAtMkgxMGExLDEsMCwwLDAsMCwyWiIvPgo8L3N2Zz4K"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n={name:"Header",data:function(){return{showMenu:!1}},computed:{},methods:{toggleMenu:function(){window.innerWidth<768&&(this.showMenu=!this.showMenu)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"container"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("LOGO")]),t._v(" "),s("div",{class:{hidden:!t.showMenu,"sm:flex":!t.showMenu,"mobile-menu":t.showMenu}},[s("ul",{staticClass:"links",on:{click:t.toggleMenu}},[t._m(0),t._v(" "),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"toggle-menu flex sm:hidden"},[s("button",{on:{click:t.toggleMenu}},[s("img",{attrs:{src:i("EsWh"),alt:""}})])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"flex sm:hidden"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"w-6 h-6",attrs:{src:i("taey"),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("button",[e("img",{attrs:{src:i("Cv+W"),alt:""}})])])}]};var r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"sidebar mr-12"},[t._m(0),t._v(" "),s("section",[s("h3",[s("img",{attrs:{src:i("daNO"),alt:"cart icon"}}),t._v(" Cart\n      "),t.productsInCart.length?s("span",[t._v("\n         ("+t._s(t.productsInCart.length)+")\n      ")]):t._e()]),t._v(" "),t.productsInCart.length?s("small",{staticClass:"block -mt-5 mb-3 opacity-75"},[t._v("\n      Total value: "+t._s(t.totalCartValue)+"\n    ")]):t._e(),t._v(" "),s("div",{staticClass:"cart",class:{flex:!t.productsInCart.length}},[t.productsInCart.length?s("ul",{staticClass:"products-in-cart"},t._l(t.productsInCart,function(e,i){return s("li",{key:"ProductInCart"+i,attrs:{title:e.title}},[s("span",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "+t._s(e.title)+"\n        ")])}),0):s("span",[t._v("Cart is empty")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h3",[e("img",{attrs:{src:i("z+1A"),alt:"book icon"}}),this._v(" Contact")]),this._v(" "),e("p",{staticClass:"text-sm opacity-75"},[this._v("\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam\n      hic id molestias.\n    ")])])}]};var u={name:"App",components:{"c-header":i("VU/8")(n,a,!1,function(t){i("ltaS")},"data-v-2345e421",null).exports,"c-aside":i("VU/8")({name:"Aside",computed:{productsInCart:function(){return this.$store.getters["cart/productsInCart"]},totalCartValue:function(){return this.$store.getters["cart/totalCartValue"]}}},r,!1,function(t){i("n/oI")},"data-v-6dc15040",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("c-header"),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row flex-col sm:flex-row"},["Home"===this.$router.currentRoute.name||"Product"===this.$router.currentRoute.name?e("c-aside"):this._e(),this._v(" "),e("router-view")],1)])],1)},staticRenderFns:[]},o=i("VU/8")(u,c,!1,null,null,null).exports,d=i("/ocq"),l=[{id:1,title:"Mushroom - Lg - Cello",desc:"venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",img:"http://dummyimage.com/220x220.png/5fa2dd/ffffff",price:19.99},{id:2,title:"Quail - Jumbo Boneless",desc:"rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",img:"http://dummyimage.com/220x220.png/ff4444/ffffff",price:14.99},{id:3,title:"Asparagus - Frozen",desc:"curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",img:"http://dummyimage.com/220x220.png/dddddd/000000",price:2.49},{id:4,title:"Chinese Lemon Pork",desc:"odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",img:"http://dummyimage.com/220x220.png/cc0000/ffffff",price:39},{id:5,title:"Container - Hngd Cll Blk 7x7x3",desc:"faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",img:"http://dummyimage.com/220x220.png/cc0000/ffffff",price:3},{id:6,title:"Melon - Watermelon, Seedless",desc:"amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",img:"http://dummyimage.com/220x220.png/5fa2dd/ffffff",price:10.99},{id:7,title:"Tobasco Sauce",desc:"enim blandit mi in porttitor pede justo eu massa donec dapibus duis",img:"http://dummyimage.com/220x220.png/ff4444/ffffff",price:1.99},{id:8,title:"Edible Flower - Mixed",desc:"ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",img:"http://dummyimage.com/220x220.png/5fa2dd/ffffff",price:1.99},{id:9,title:"Bread - White, Sliced",desc:"condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",img:"http://dummyimage.com/220x220.png/ff4444/ffffff",price:.99},{id:10,title:"Ice Cream - Super Sandwich",desc:"odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",img:"http://dummyimage.com/220x220.png/5fa2dd/ffffff",price:8.99},{id:11,title:"Peppercorns - Green",desc:"purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",img:"http://dummyimage.com/220x220.png/5fa2dd/ffffff",price:3.99},{id:12,title:"Tendrils - Baby Pea, Organic",desc:"nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",img:"http://dummyimage.com/220x220.png/cc0000/ffffff",price:5.99},{id:13,title:"Wine - Segura Viudas Aria Brut",desc:"mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",img:"http://dummyimage.com/220x220.png/dddddd/000000",price:11.99},{id:14,title:"Bread - Pumpernickle, Rounds",desc:"phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in",img:"http://dummyimage.com/220x220.png/ff4444/ffffff",price:7.99},{id:15,title:"Bread - Assorted Rolls",desc:"convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",img:"http://dummyimage.com/220x220.png/cc0000/ffffff",price:9.99}],m={name:"Home",data:function(){return{products:l}},methods:{getMainClass:function(){return{"product-detail":"Product"===this.$router.currentRoute.name,"product-list":"Product"!==this.$router.currentRoute.name,"w-4/5":"Product"!==this.$router.currentRoute.name}},viewProduct:function(t){this.$router.push("/product/"+t)}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"w-full",class:t.getMainClass()},["Product"!==t.$router.currentRoute.name?t._l(t.products,function(e,s){return i("div",{key:"Product("+s+")",staticClass:"col w-full md:w-1/2 lg:w-1/3 xl:w-1/4"},[i("router-link",{attrs:{tag:"article",to:{name:"Product",params:{id:e.id}}}},[i("img",{attrs:{src:e.img,alt:""}}),t._v(" "),i("div",[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v(t._s(e.desc))])])])],1)}):t._e(),t._v(" "),i("router-view")],2)},staticRenderFns:[]};var f=i("VU/8")(m,M,!1,function(t){i("5DaL")},"data-v-3a268f92",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:i("KCsK"),alt:""}})]),this._v(" "),e("h1",[this._v("About")]),this._v(" "),e("p",[this._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi\n    dignissimos dolor doloremque, doloribus ducimus eos ex exercitationem\n    facere facilis ipsam ipsum iusto laboriosam laborum magnam maiores\n    numquam pariatur, ratione reiciendis saepe tempore tem.\n  ")])])}]};var g=i("VU/8")({name:"About"},p,!1,function(t){i("ZUy/")},"data-v-70d5475e",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"icon"},[s("img",{attrs:{src:i("KCsK"),alt:""}})]),t._v(" "),s("h1",[t._v("Contact")]),t._v(" "),s("address",{staticClass:"not-italic"},[s("a",{attrs:{href:"mailto:divante@divante.pl"}},[t._v("divante@divante.pl")]),s("br"),s("br"),t._v(" "),s("a",{attrs:{href:"tel:+48123456789"}},[t._v("tel. 123-456-789")]),s("br"),t._v(" "),s("a",{attrs:{href:"tel:+48887236324"}},[t._v("tel. 887-236-324")]),s("br"),s("br"),t._v("\n    ul. Dmowskiego 17"),s("br"),t._v("\n    00-000 Wrocław\n  ")])])}]};var C=i("VU/8")({name:"About"},w,!1,function(t){i("GD7B")},"data-v-9357015c",null).exports,v={name:"Product",data:function(){return{product:{}}},created:function(){var t;this.product=(t=this.$route.params.id,l.find(function(e){return e.id===Number(t)}))},computed:{productsInCart:function(){return this.$store.getters["cart/productsInCart"]},productIsInCart:function(){var t=this;return this.productsInCart.find(function(e){return e.id===t.product.id})}},methods:{addProductToCart:function(t){this.$store.dispatch("cart/addProductToCart",t)}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mb-10"},[i("div",{staticClass:"row"},[i("main",[i("div",{staticClass:"img-container",style:{backgroundImage:"url("+t.product.img+")"}}),t._v(" "),i("footer",[i("div",{staticClass:"details"},[i("h1",[t._v(t._s(t.product.title))]),t._v(" "),i("p",[t._v(t._s(t.product.desc))])]),t._v(" "),i("button",{class:{disabled:t.productIsInCart},attrs:{disabled:t.productIsInCart},on:{click:function(e){return t.addProductToCart(t.product.id)}}},[t.productIsInCart?[t._v("\n            Added\n          ")]:t._e(),t._v(" "),t.productIsInCart?t._e():[t._v("\n            Add to Cart\n          ")]],2)])])])])},staticRenderFns:[]};var L=i("VU/8")(v,h,!1,function(t){i("w5Xf")},"data-v-590509e6",null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Not found")])])}]};var I=i("VU/8")({name:"NotFound"},A,!1,function(t){i("TEu7")},"data-v-16e05e1e",null).exports;s.a.use(d.a);var D=new d.a({routes:[{path:"/",name:"Home",component:f,children:[{path:"/product/:id",name:"Product",component:L}]},{path:"/about",name:"About",component:g},{path:"/contact",name:"Contact",component:C},{path:"*",name:"NotFound",component:I}]}),y=(i("qK5K"),i("NYxO")),_={namespaced:!0,state:{cart:[]},getters:{productsInCart:function(t){return t.cart.map(function(t){var e=l.find(function(e){return e.id===t});return{id:e.id,title:e.title,price:e.price}})},totalCartValue:function(t){return t.cart.map(function(t){return l.find(function(e){return e.id===t})}).reduce(function(t,e){return t+e.price},0)}},actions:{addProductToCart:function(t,e){var i=t.state,s=t.commit;i.cart.filter(function(t){return t===e}).length||s("addProductToCart",e)}},mutations:{addProductToCart:function(t,e){t.cart.push(e)}}};s.a.use(y.a);var x=new y.a.Store({modules:{cart:_},strict:!1});s.a.config.productionTip=!1,new s.a({el:"#app",router:D,store:x,render:function(t){return t(o)}})},TEu7:function(t,e){},"ZUy/":function(t,e){},daNO:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGgKICAgIGQ9Ik0xOSw3SDE2VjZBNCw0LDAsMCwwLDgsNlY3SDVBMSwxLDAsMCwwLDQsOFYxOWEzLDMsMCwwLDAsMywzSDE3YTMsMywwLDAsMCwzLTNWOEExLDEsMCwwLDAsMTksN1pNMTAsNmEyLDIsMCwwLDEsNCwwVjdIMTBabTgsMTNhMSwxLDAsMCwxLTEsMUg3YTEsMSwwLDAsMS0xLTFWOUg4djFhMSwxLDAsMCwwLDIsMFY5aDR2MWExLDEsMCwwLDAsMiwwVjloMloiLz4KPC9zdmc+Cg=="},ltaS:function(t,e){},"n/oI":function(t,e){},qK5K:function(t,e){},taey:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLjQxLDEybDYuMy02LjI5YTEsMSwwLDEsMC0xLjQyLTEuNDJMMTIsMTAuNTksNS43MSw0LjI5QTEsMSwwLDAsMCw0LjI5LDUuNzFMMTAuNTksMTJsLTYuMyw2LjI5YTEsMSwwLDAsMCwwLDEuNDIsMSwxLDAsMCwwLDEuNDIsMEwxMiwxMy40MWw2LjI5LDYuM2ExLDEsMCwwLDAsMS40MiwwLDEsMSwwLDAsMCwwLTEuNDJaIi8+PC9zdmc+"},w5Xf:function(t,e){},"z+1A":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGgKICAgIGQ9Ik0xOCwySDhBNCw0LDAsMCwwLDQsNlYxOGE0LDQsMCwwLDAsNCw0SDE4YTIsMiwwLDAsMCwyLTJWNEEyLDIsMCwwLDAsMTgsMlpNNiw2QTIsMiwwLDAsMSw4LDRIMThWMTRIOGEzLjkxLDMuOTEsMCwwLDAtMiwuNTZaTTgsMjBhMiwyLDAsMCwxLDAtNEgxOHY0Wk0xMCw4aDRhMSwxLDAsMCwwLDAtMkgxMGExLDEsMCwwLDAsMCwyWiIvPgo8L3N2Zz4K"}},["NHnr"]);
//# sourceMappingURL=app.c630cdcdef69039eba0d.js.map