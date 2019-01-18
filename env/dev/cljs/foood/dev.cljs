(ns ^:figwheel-no-load foood.dev
  (:require
    [foood.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
