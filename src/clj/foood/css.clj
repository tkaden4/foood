(ns foood.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen
  [:html {:width "100vw" :height "100vh"}]
  [:body {:color "#1a1a1c"
          :margin "0px"
          :height "100%"
          :width "100%"
          :padding "0px"
          :display "flex"
          :flex-direction "column"
          :justify-content "center"
          :align-items "center"
          :background-color "#fffff3"
          :font-family "Bitter"}]
  [:div.unselectable {:-webkit-user-select "none"
                      :-moz-user-select "none"
                      :-ms-user-select "none"
                      :user-select "none"}]
  [:#main-title {:font-size "5em" :font-family "Rock Salt" :line-height "130px"}]
  [:#main-subtitle {:font-size "0.9em" :font-family "Rock Salt" :font-weight "bold"}]
  [:#splash {:position "relative"
             :width "100%"
             :margin-bottom "10px"
             :color "white"
             :z-index "-1"
             :text-align "center"}]
  [:#main-circle {:background-image "url(\"https://farmviewmarket.com/wp-content/uploads/2017/04/healthy-organic-food-600x600.jpg\")"
                  :background-color "red"
                  :height "400px"
                  :width "400px"
                  :position "absolute"
                  :top "50%"
                  :left "50%"
                  :clip-path "circle(50%)"
                  :transform "translate(-50%, -50%)"
                  :z-index "-1"}]
  [:div.food-result {:font-size "3.5em"}]
  [:button.classy {:background-color "#599939aa"
                   :padding "25px"
                   :color "white"
                   :font-family "Rock Salt"
                   :font-weight "600"
                   :font-size "0.9em"
                   :border "none"
                   :transition ["color 0.2s" "background-color 0.2s" "transform 0.2s"]
                   }
                   [:&:hover {:color "#599939"
                              :background-color "#ffffffee"}]
                   [:&:active {:transform "scale(0.95)" :font-size "0.9em"}]])
