(ns foood.core
    (:use [clojure.string :only [capitalize]])
    (:require
      [reagent.core :as r]))

(defonce foods
  {:fruits ["pear" "apple" "pineapple" "tomato"]
   :vegetables ["eggplant" "carrot" "tomato" "bell pepper" "jalepeno" "asparagus" "onion"]
   :dairy ["egg" "milk" "goat milk" "soy milk"]
   :meat ["steak" "hock" "ham" "chicken breast"]
   :baked ["bread" "pastry" "cake"]})

(defonce food-adjectives
  {
   :all ["just" "boiled" "carmelized" "roasted" "grilled" "par-boiled" "slow cooked"]
   :fruits []
   :vegetables []
   :meat ["pulled" "barbeque"]
   :baked ["vanilla" "chocolate" "strawberry"]})

(defn generate-food []
  (let [food-key (rand-nth (keys foods))]
    {:food (rand-nth (food-key foods))
     :adj (rand-nth (concat (food-key food-adjectives) (:all food-adjectives)))}))

(defn food->str [{adj :adj food :food}]
  (str (capitalize adj) " " (capitalize food)))

;; Components

(defn generate-button [on-click]
  [:button.classy {:on-click on-click} "Gimme Something Good!"])

;; Views

(defn splash-logo []
  [:div#splash
   [:div#main-title "Foood"]
   [:div#main-subtitle "An Alex Hutchinson Experience"]
   [:div#main-circle]])

(defn home-page []
  (let [food (r/atom nil)]
    (fn []
      [:div
       [splash-logo]
       [generate-button #(reset! food (generate-food))]
       (if (some? @food)
         [:div (food->str @food)]
         [:div "no food"])])))

;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! [] (mount-root))
