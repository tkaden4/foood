(defproject foood "0.1.0"
  :description "A food idea generator"
  :url "https://foood.tkaden.net"
  :license {:name "MIT License"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [reagent "0.8.1"]
                 [garden "1.3.5"]
                 [cljsjs/anime "2.2.0-0"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.18"]
            [lein-garden "0.3.0"]
            [lein-cooper "1.2.2"]]

  :source-paths ["src/clj" "src/cljs"]

  :garden {:builds [{
                     :id "screen"
                     :source-paths ["src/clj"]
                     :stylesheet foood.css/screen
                     :compiler {
                                :output-to "docs/css/stylesheet.css"
                                :pretty-print? false}}]}

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["docs"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["docs/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src/cljs" "env/dev/cljs"]
                        :compiler
                        {:main "foood.dev"
                         :output-to "docs/js/app.js"
                         :output-dir "docs/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "foood.core/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src/cljs" "env/prod/cljs"]
                        :compiler
                        {:output-to "docs/js/app.js"
                         :output-dir "docs/js/release"
                         :asset-path   "js/out"
                         :optimizations :advanced
                         :pretty-print false}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src/clj" "env/dev/clj"]
                   :dependencies [[binaryage/devtools "0.9.10"]
                                  [figwheel-sidecar "0.5.18"]
                                  [nrepl "0.5.3"]
                                  [cider/piggieback "0.3.10"]]}})
