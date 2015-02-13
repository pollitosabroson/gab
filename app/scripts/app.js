'use strict';

/**
 * @ngdoc overview
 * @name gaboApp
 * @description
 * # gaboApp
 *
 * Main module of the application.
 */
angular
  .module('gaboApp', [
    // 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/principal');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .state('home.principal',{
        url: '/principal',
        templateUrl: 'views/main.html',
        // controller: 'HomeCtrl',
        /*data: { requiredLogin: true }*/
      })
      .state('home.about',{
        url: '/about',
        templateUrl: 'views/about.html',
        // controller: 'HomeCtrl',
        /*data: { requiredLogin: true }*/
      })
      .state('home.textil',{
        url: '/textil',
        templateUrl: 'views/textil.html',
        controller: 'TextilCtrl',
        /*data: { requiredLogin: true }*/
      })
      .state('home.logos',{
        url: '/logos',
        templateUrl: 'views/logos.html',
        controller: 'LogosCtrl',
        /*data: { requiredLogin: true }*/
      })
      .state('home.videos',{
        url: '/videos',
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl',
        /*data: { requiredLogin: true }*/
      })

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
