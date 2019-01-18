// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25685__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25686__i = 0, G__25686__a = new Array(arguments.length -  0);
while (G__25686__i < G__25686__a.length) {G__25686__a[G__25686__i] = arguments[G__25686__i + 0]; ++G__25686__i;}
  args = new cljs.core.IndexedSeq(G__25686__a,0,null);
} 
return G__25685__delegate.call(this,args);};
G__25685.cljs$lang$maxFixedArity = 0;
G__25685.cljs$lang$applyTo = (function (arglist__25687){
var args = cljs.core.seq(arglist__25687);
return G__25685__delegate(args);
});
G__25685.cljs$core$IFn$_invoke$arity$variadic = G__25685__delegate;
return G__25685;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25688__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25689__i = 0, G__25689__a = new Array(arguments.length -  0);
while (G__25689__i < G__25689__a.length) {G__25689__a[G__25689__i] = arguments[G__25689__i + 0]; ++G__25689__i;}
  args = new cljs.core.IndexedSeq(G__25689__a,0,null);
} 
return G__25688__delegate.call(this,args);};
G__25688.cljs$lang$maxFixedArity = 0;
G__25688.cljs$lang$applyTo = (function (arglist__25690){
var args = cljs.core.seq(arglist__25690);
return G__25688__delegate(args);
});
G__25688.cljs$core$IFn$_invoke$arity$variadic = G__25688__delegate;
return G__25688;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
