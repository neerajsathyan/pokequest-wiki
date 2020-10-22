(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"/6rj":function(t,s,e){},"3t9V":function(t,s,e){},A3KH:function(t,s,e){"use strict";var a=e("/6rj"),o=e.n(a);o.a},GvAH:function(t,s,e){"use strict";var a=e("3t9V"),o=e.n(a);o.a},YCw7:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Screen",{attrs:{title:t.$t("pokemon["+JSON.stringify(t.pokemon.name)+"]")}},[e("Main",{ref:"main"},[e("div",{staticClass:"pokemon"},[e("div",{staticClass:"header"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.pokemon.avatar,alt:"avatar"}})]),e("div",{staticClass:"title"},[e("div",{staticClass:"id"},[t._v("No."+t._s((1e3+t.pokemon.id+"").slice(1)))]),e("div",{staticClass:"name"},[t._v(t._s(t.$t("pokemon["+JSON.stringify(t.pokemon.name)+"]")))])])]),e("div",{staticClass:"section classification"},[t._v(t._s(t.pokemon.classification))]),e("div",{staticClass:"section type-list",attrs:{"data-anchor":"Type"}},[e("h3",[t._v(t._s(t.$tc("concepts.type")))]),t._l(t.pokemon.type,function(s){return e("TypeCapsule",{key:s,staticClass:"type",attrs:{value:s},nativeOn:{click:function(e){t.toPokemonList({types:s})}}})})],2),e("div",{staticClass:"section picture",attrs:{"data-anchor":"Picture"}},[e("h3",[t._v(t._s(t.$tc("concepts.sprite")))]),e("div",{staticClass:"sprite"},[e("img",{attrs:{src:t.pokemon.sprite,alt:"sprite"}})])]),t.pokemon.evolution?e("div",{staticClass:"section evolution",attrs:{"data-anchor":"Evolution"}},[e("h3",[t._v(t._s(t.$tc("concepts.evolution")))]),t._v("\n        "+t._s(t.pokemon.evolution)+"\n      ")]):t._e(),"unknown"!==t.pokemon.color?e("div",{staticClass:"section color",attrs:{"data-anchor":"Color"}},[e("h3",[t._v(t._s(t.$tc("concepts.color")))]),e("span",{staticClass:"color-capsule",class:"color-"+t.pokemon.color.toLowerCase(),on:{click:function(s){t.toPokemonList({color:t.pokemon.color.toLowerCase()})}}},[t._v(t._s(t.$t("colors["+JSON.stringify(t.pokemon.color.toLowerCase())+"]")))])]):t._e(),e("div",{staticClass:"section dishes",attrs:{"data-anchor":"Dishes"}},[e("h3",[t._v(t._s(t.$tc("concepts.dish",2)))]),e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",{staticClass:"logo"}),e("th",{staticClass:"name clickable",on:{click:function(s){t.sortDishes("id")}}},[t._v("\n                (ID) "+t._s(t.$tc("concepts.name"))+"\n                "),e("Iconfont",{staticClass:"icon",attrs:{type:"id"!==t.dishesSorter.field?"minus":t.dishesSorter.reverse?"sort-up":"sort-down"}})],1),e("th",{staticClass:"quality"},[t._v("\n                "+t._s(t.$tc("concepts.quality"))+"\n              ")]),e("th",{staticClass:"chance clickable",on:{click:function(s){t.sortDishes("chance",!0)}}},[t._v("\n                "+t._s(t.$tc("concepts.chance"))+"\n                "),e("Iconfont",{staticClass:"icon",attrs:{type:"chance"!==t.dishesSorter.field?"minus":t.dishesSorter.reverse?"sort-up":"sort-down"}})],1)])]),e("tbody",[t._l(t.dishes,function(s,a){return e("tr",{key:a,staticClass:"dish",class:{"not-exist":!s.isExist},on:{click:function(e){t.toDish(s.id,s.quality)}}},[e("td",{staticClass:"logo"},[e("img",{attrs:{src:s.logo,alt:"logo"}})]),e("td",{staticClass:"name"},[t._v(t._s(t.$t("dishes["+JSON.stringify(s.name)+"]")))]),e("td",{staticClass:"quality"},[t._v(t._s(t.$t("qualities["+JSON.stringify(s.quality)+"]")))]),e("td",{staticClass:"chance"},[t._v(t._s((100*s.chance).toFixed(2))+"%")])])}),0===t.dishes.length?e("tr",{staticClass:"dish"},[e("td",{attrs:{colspan:"4"}},[t._v(t._s(t.$t("messages.not-exist")))])]):t._e()],2)])]),e("div",{staticClass:"section moves",attrs:{"data-anchor":"Moves"}},[e("h3",[t._v(t._s(t.$tc("concepts.move",2)))]),e("div",{staticClass:"table-container"},[e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",{staticClass:"type"},[t._v(t._s(t.$tc("concepts.type")))]),e("th",[t._v(t._s(t.$tc("concepts.name")))]),e("th",[t._v(t._s(t.$tc("concepts.attack")))]),e("th",[t._v(t._s(t.$tc("concepts.wait")))]),e("th",[t._v(t._s(t.$tc("concepts.learnable")))])])]),e("tbody",t._l(t.pokemon.moves,function(s,a){return e("tr",{key:a,staticClass:"move",on:{click:function(e){t.toMove(s)}}},[e("td",{staticClass:"type"},[e("type-capsule",{attrs:{value:s.type}})],1),e("td",[t._v(t._s(t.$t("moves["+JSON.stringify(s.name)+"]")))]),e("td",[t._v(t._s(s.attack))]),e("td",[t._v(t._s(s.wait))]),e("td",[t._v(t._s(s.learnable?"√":s.method))])])}))])])]),e("div",{staticClass:"section attack-mode",attrs:{"data-anchor":"Attack-Mode"}},[e("h3",[t._v(t._s(t.$tc("concepts.attack-mode")))]),e("Iconfont",{staticClass:"icon",attrs:{type:"melee"===t.pokemon.automaticStyle.toLowerCase()?"melee":"range"===t.pokemon.automaticStyle.toLowerCase()?"bow":"question"}}),t._v("\n        "+t._s(t.$tc("attack-modes["+JSON.stringify(t.pokemon.automaticStyle.toLowerCase())+"]"))+"\n      ")],1),e("div",{staticClass:"section stats",attrs:{"data-anchor":"Stats"}},[e("h3",[t._v(t._s(t.$tc("concepts.stat",2))+" (HP and ATK)")]),e("div",{staticClass:"table-container"},[e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",{staticClass:"group-first-item clickable",attrs:{colspan:t.statsTable.showPotDetail?3:1},on:{click:function(s){t.statsTable.showPotDetail=!t.statsTable.showPotDetail}}},[e("Iconfont",{staticClass:"icon",attrs:{type:t.statsTable.showPotDetail?"minus-circle-o":"plus-circle"}}),t._v(" "+t._s(t.$tc("concepts.pot"))+"\n                ")],1),e("th",{staticClass:"group-first-item clickable",attrs:{colspan:t.statsTable.showBase?2:1},on:{click:function(s){t.statsTable.showBase=!t.statsTable.showBase}}},[e("Iconfont",{staticClass:"icon",attrs:{type:t.statsTable.showBase?"minus-circle-o":"plus-circle"}}),t._v(" "+t._s(t.statsTable.showBase?"Level 0 ("+t.$tc("concepts.base")+")":"L0")+"\n                ")],1),e("th",{staticClass:"group-first-item",attrs:{colspan:"2"},on:{click:t.editStatsTableCustomLevel}},[t._v("\n                  Level "+t._s(t.statsTable.customLevel)+" "),e("Iconfont",{staticClass:"icon",attrs:{type:"edit"}})],1)]),e("tr",[e("th",{staticClass:"group-first-item"},[t._v(t._s(t.$tc("concepts.name")))]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v(t._s(t.$tc("concepts.bonus")))]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v(t._s(t.$tc("concepts.iv-range")))]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}],staticClass:"group-first-item"},[t._v("HP")]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}]},[t._v("ATK")]),e("th",{directives:[{name:"show",rawName:"v-show",value:!t.statsTable.showBase,expression:"!statsTable.showBase"}],on:{click:function(s){t.statsTable.showBase=!0}}},[t._v("...")]),e("th",{staticClass:"group-first-item"},[t._v("HP")]),e("th",[t._v("ATK")])])]),e("tbody",t._l(t.pots,function(s){return e("tr",{key:s.id,staticClass:"pot"},[e("td",{staticClass:"name group-first-item",class:"pot-"+s.name},[t._v(t._s(t.$t("pots["+JSON.stringify(s.name)+"]")))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v(t._s(s.statBonus))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v(t._s(s.ivRange.minimum)+" - "+t._s(s.ivRange.maximum))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}],staticClass:"group-first-item"},[t._v(t._s(t._f("statRange")(t.pokemon.baseHp,s)))]),e("td",{directives:[{name:"show",rawName:"v-show",value:!t.statsTable.showBase,expression:"!statsTable.showBase"}],on:{click:function(s){t.statsTable.showBase=!0}}},[t._v("...")]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}]},[t._v(t._s(t._f("statRange")(t.pokemon.baseAtk,s)))]),e("td",{staticClass:"group-first-item"},[t._v(t._s(t._f("statRange")(t.pokemon.baseHp,s,t.statsTable.customLevel)))]),e("td",[t._v(t._s(t._f("statRange")(t.pokemon.baseAtk,s,t.statsTable.customLevel)))])])}))])])]),e("div",{staticClass:"section bingo",attrs:{"data-anchor":"Bingo"}},[e("h3",[t._v(t._s(t.$tc("concepts.bingo-bonus")))]),e("div",{staticClass:"table-container"},[e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",[t._v(t._s(t.$tc("concepts.slot")))]),e("th",[t._v(t._s(t.$tc("concepts.bingo-bonus")))])])]),e("tbody",[t._l(t.pokemon.bonus,function(s,a){return[~t.bingosTable.hiddenSlots.indexOf(a)?[e("tr",{key:a},[e("td",{staticClass:"clickable",on:{click:function(s){t.switchBingosTableSlot(a)}}},[e("Iconfont",{staticClass:"icon",attrs:{type:"plus-circle"}}),t._v("\n                      "+t._s(t.$tc("concepts.slot"))+" "+t._s(a+1)+"\n                    ")],1),e("td",[t._v("...")])])]:t._l(s,function(s,o){return e("tr",{key:a+"-"+o},[0===o?e("td",{staticClass:"slot clickable",attrs:{rowspan:"3"},on:{click:function(s){t.switchBingosTableSlot(a)}}},[e("Iconfont",{staticClass:"icon",attrs:{type:"minus-circle-o"}}),t._v("\n                      "+t._s(t.$tc("concepts.slot"))+" "+t._s(a+1)+"\n                    ")],1):t._e(),e("td",[t._v(t._s(s))])])})]})],2)])])]),e("div",{staticClass:"section pokemons"},[e("h3",[t._v(t._s(t.$t("messages.see-other-pokemon")))]),e("div",{staticClass:"paginations"},[t.previous.id?e("div",{staticClass:"previous",on:{click:function(s){t.toPokemon(t.previous.id)}}},[e("Iconfont",{staticClass:"icon",attrs:{type:"left"}}),e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.previous.avatar,alt:"avatar"}})])],1):t._e(),t.next.id?e("div",{staticClass:"next",on:{click:function(s){t.toPokemon(t.next.id)}}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.next.avatar,alt:"avatar"}})]),e("Iconfont",{staticClass:"icon",attrs:{type:"right"}})],1):t._e(),e("Clearfix")],1)])])]),e("Navbar")],1)},o=[],i=(e("f3/d"),e("pIFo"),e("iv4g")),n=(e("V+eJ"),e("0l/t"),e("yT7P")),c=(e("Vd3H"),e("bWfx"),e("dRSK"),e("sOrj")),l=e("wMG2"),r=e("DSsS"),v=100,h={name:"PokemonDetail",data:function(){return{pots:c["d"],dishesSorter:{field:"id",reverse:!1},statsTable:{showPotDetail:!1,showBase:!1,customLevel:v},bingosTable:{hiddenSlots:[]}}},computed:{pokemon:function(){var t=this;return c["c"].find(function(s){return s.id===+t.$route.params.id})||{}},dishes:function(){var t=this.pokemon.dishes,s=this.dishesSorter,e=s.field,a=s.reverse;return t.sort(function(t,s){return(t[e]>s[e]?1:t[e]<s[e]?-1:0)*(a?-1:1)}).map(function(t){return Object(n["a"])({},t,{isExist:c["e"].filter(function(s){return s.dish.id===t.id&&s.quality===t.quality}).length>0})})},previous:function(){var t=this;return c["c"].find(function(s){return s.id===+t.$route.params.id-1})||{}},next:function(){var t=this;return c["c"].find(function(s){return s.id===+t.$route.params.id+1})||{}}},methods:{sortDishes:function(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.dishesSorter.field===t?this.dishesSorter.reverse=!this.dishesSorter.reverse:this.dishesSorter={field:t,reverse:s}},editStatsTableCustomLevel:function(){var t=window.prompt(this.$t("messages.please-enter-level"),this.statsTable.customLevel);if(null!==t){var s=parseInt(t);!s||s<1||s>100?window.confirm(this.$t("messages.invalid-level-try-again"))&&this.editStatsTableCustomLevel():this.statsTable.customLevel=s}},switchBingosTableSlot:function(t){var s=this.bingosTable.hiddenSlots.indexOf(t);~s?this.bingosTable.hiddenSlots=Object(i["a"])(this.bingosTable.hiddenSlots.slice(0,s)).concat(Object(i["a"])(this.bingosTable.hiddenSlots.slice(s+1))):this.bingosTable.hiddenSlots.push(t)},toDish:function(t,s){this.$router.push("/dishes/".concat(t,"?anchor=Quality-").concat(s))},toPokemon:function(t){this.$router.push("/pokemon/".concat(t)),this.$refs.main.scrollTop()},toPokemonList:function(t){this.$router.push({path:"/pokemon",query:t})},toMove:function(t){this.$router.push("/moves/".concat(t.name.replace(" ","--")))}},components:{TypeCapsule:l["a"],Iconfont:r["a"]},filters:{statRange:function(t,s){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"".concat(+t+s.statBonus+s.ivRange.minimum+e," - ").concat(+t+s.statBonus+s.ivRange.maximum+e)}}},u=h,d=(e("GvAH"),e("KHd+")),p=Object(d["a"])(u,a,o,!1,null,"416f5829",null);s["default"]=p.exports},wMG2:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"capsule",class:"type-"+t.value},[t._v("\n  "+t._s(t.$t("types["+JSON.stringify(t.value)+"]"))+"\n")])},o=[],i={name:"TypeCapsule",props:{value:String}},n=i,c=(e("A3KH"),e("KHd+")),l=Object(c["a"])(n,a,o,!1,null,"931bc660",null);s["a"]=l.exports}}]);
//# sourceMappingURL=3.8548c3cc.js.map