"use strict";angular.module("gaboApp",["ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home/principal"),a.state("home",{url:"/home",templateUrl:"views/menu.html",controller:"MenuCtrl"}).state("home.principal",{url:"/principal",templateUrl:"views/main.html"}).state("home.about",{url:"/about",templateUrl:"views/about.html"}).state("home.textil",{url:"/textil",templateUrl:"views/textil.html",controller:"TextilCtrl"})}]),angular.module("gaboApp").controller("MenuCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("gaboApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("gaboApp").controller("TextilCtrl",["$scope",function(a){a.carrusel={img1:"images/textil/FARAON/faraon-04.png",img2:"images/textil/FARAON/faraon-02.png",img3:"images/textil/FARAON/faraon-03.png"},a.imagenes=function(b){console.log(b),"native"===b?a.carrusel={img1:"images/textil/NATIVE/native-kid-04.png",img2:"images/textil/NATIVE/native-kid-02.png",img3:"images/textil/NATIVE/native-kid-03.png"}:"faraon"===b?a.carrusel={img1:"images/textil/FARAON/faraon-04.png",img2:"images/textil/FARAON/faraon-02.png",img3:"images/textil/FARAON/faraon-03.png"}:"cosmic"===b?a.carrusel={img1:"images/textil/COSMIC/cosmic-04.png",img2:"images/textil/COSMIC/cosmic-02.png",img3:"images/textil/COSMIC/cosmic-03.png"}:"hoe"===b?a.carrusel={img1:"images/textil/HOE/hoe-04.png",img2:"images/textil/HOE/hoe-02.png",img3:"images/textil/HOE/hoe-03.png"}:"buho"===b?a.carrusel={img1:"images/textil/BUHO/buho-04.png",img2:"images/textil/BUHO/buho-02.png",img3:"images/textil/BUHO/buho-03.png"}:"samurai"===b?a.carrusel={img1:"images/textil/SAMURAI/samurai-04.png",img2:"images/textil/SAMURAI/samurai-02.png",img3:"images/textil/SAMURAI/samurai-03.png"}:"v"===b?a.carrusel={img1:"images/textil/V/v-04.png",img2:"images/textil/V/v-02.png",img3:"images/textil/V/v-03.png"}:"tengu"===b?a.carrusel={img1:"images/textil/TENGU/tengu-04.png",img2:"images/textil/TENGU/tengu-02.png",img3:"images/textil/TENGU/tengu-03.png"}:"triple"===b?a.carrusel={img1:"images/textil/TRIPLE/triple-seis-04.png",img2:"images/textil/TRIPLE/triple-seis-02.png",img3:"images/textil/TRIPLE/triple-seis-03.png"}:"geisha"===b&&(a.carrusel={img1:"images/textil/GEISHA/geisha-04.png",img2:"images/textil/GEISHA/geisha-02.png",img3:"images/textil/GEISHA/geisha-03.png"})},$("#myAffix").affix({offset:{top:100}})}]);