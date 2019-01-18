(ns foood.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen
  [:body {:color "#1a1a1c" :background-color "#fffff3" :font-family "Crete Round"}]
  [:#main-title {:font-size "5em" :font-family "Rock Salt" :line-height "200%"}]
  [:#main-subtitle {:font-size "0.9em" :font-family "Rock Salt" :font-weight "bold" :line-height "100%"}]
  [:#splash {:position "relative" :color "white" :text-align "center"}]
  [:#main-circle {:background-image "url(\"https://farmviewmarket.com/wp-content/uploads/2017/04/healthy-organic-food-600x600.jpg\")"
                  :height "400px"
                  :width "400px"
                  :background-color "#ffffdd"
                  :position "absolute"
                  :top "50%"
                  :left "50%"
                  :clip-path "circle(50%)"
                  :transform "translate(-50%, -50%)"
                  :z-index "-1"}]
  [:button.classy {:background-color "#599939aa"
                   :padding "25px"
                   :color "white"
                   :font-family "Rock Salt"
                   :font-weight "600"
                   :font-size "0.9em"
                   :border "4px solid white" }])
