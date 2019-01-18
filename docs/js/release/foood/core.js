// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('foood.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
if((typeof foood !== 'undefined') && (typeof foood.core !== 'undefined') && (typeof foood.core.foods !== 'undefined')){
} else {
foood.core.foods = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fruits,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pear","apple","pineapple","tomato"], null),cljs.core.cst$kw$vegetables,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eggplant","carrot","tomato","bell pepper","jalepeno","asparagus","onion"], null),cljs.core.cst$kw$dairy,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["egg","milk","goat milk","soy milk"], null),cljs.core.cst$kw$meat,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["steak","hock","ham","chicken breast"], null),cljs.core.cst$kw$baked,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bread","pastry","cake"], null)], null);
}
if((typeof foood !== 'undefined') && (typeof foood.core !== 'undefined') && (typeof foood.core.food_adjectives !== 'undefined')){
} else {
foood.core.food_adjectives = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$all,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["just","boiled","carmelized","roasted","grilled","slow-cooked"], null),cljs.core.cst$kw$fruits,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$vegetables,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$meat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pulled","barbeque"], null),cljs.core.cst$kw$baked,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vanilla","chocolate","strawberry"], null)], null);
}
foood.core.generate_food = (function foood$core$generate_food(){
var food_key = cljs.core.rand_nth(cljs.core.keys(foood.core.foods));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$food,cljs.core.rand_nth((food_key.cljs$core$IFn$_invoke$arity$1 ? food_key.cljs$core$IFn$_invoke$arity$1(foood.core.foods) : food_key.call(null,foood.core.foods))),cljs.core.cst$kw$adj,cljs.core.rand_nth(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((food_key.cljs$core$IFn$_invoke$arity$1 ? food_key.cljs$core$IFn$_invoke$arity$1(foood.core.food_adjectives) : food_key.call(null,foood.core.food_adjectives)),cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(foood.core.food_adjectives)))], null);
});
foood.core.food__GT_str = (function foood$core$food__GT_str(p__26215){
var map__26216 = p__26215;
var map__26216__$1 = (((((!((map__26216 == null))))?(((((map__26216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26216):map__26216);
var adj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26216__$1,cljs.core.cst$kw$adj);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26216__$1,cljs.core.cst$kw$food);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(adj))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(food))].join('');
});
foood.core.generate_button = (function foood$core$generate_button(on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$classy,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,on_click], null),"Gimme Something Good!"], null);
});
foood.core.splash_logo = (function foood$core$splash_logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_splash,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_main_DASH_title,"Foood"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_main_DASH_subtitle,"An Alex Hutchinson Experience"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_main_DASH_circle], null)], null);
});
foood.core.home_page = (function foood$core$home_page(){
var food = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(foood.core.generate_food());
return ((function (food){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$width,"100vw"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foood.core.splash_logo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [foood.core.generate_button,((function (food){
return (function (){
return cljs.core.reset_BANG_(food,foood.core.generate_food());
});})(food))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$food_DASH_result$unselectable,foood.core.food__GT_str(cljs.core.deref(food))], null)], null);
});
;})(food))
});
foood.core.mount_root = (function foood$core$mount_root(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foood.core.home_page], null),document.getElementById("app"));

return anime(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$targets,"#splash",cljs.core.cst$kw$translateY,"-20",cljs.core.cst$kw$easing,"easeOutQuad"], null)));
});
foood.core.init_BANG_ = (function foood$core$init_BANG_(){
return foood.core.mount_root();
});
