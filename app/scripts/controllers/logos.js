'use strict';

/**
 * @ngdoc function
 * @name gaboApp.controller:LogosCtrl
 * @description
 * # LogosCtrl
 * Controller of the gaboApp
 */
angular.module('gaboApp')
  .controller('LogosCtrl', function ($scope) {
  	$scope.myInterval= 5000;
    $scope.slides = [
    	{image: 'images/logos/logotipos-header.png'}
    ];
    $scope.logos = [
    	{
    		image :'images/logos/vivalafatmark-02.png',
    		logo: 'images/logos/vivalafatmark-01.png'
    	},
    	{
    		image :'images/logos/gallo-malaguena-02.png',
    		logo: 'images/logos/gallo-malaguena-01.png'
    	},
    	{
    		image :'images/logos/cardenales-rebeldes-02.png',
    		logo: 'images/logos/cardenales-rebeldes-01.png'
    	},
    	{
    		image :'images/logos/fork-02.png',
    		logo: 'images/logos/fork-01.png'
    	},
    	{
    		image :'images/logos/big-thunder-02.png',
    		logo: 'images/logos/big-thunder-01.png'
    	},
    	{
    		image :'images/logos/gabriel-ponce-02.png',
    		logo: 'images/logos/gabriel-ponce-01.png'
    	},
    	{
    		image :'images/logos/ymtbb-02.png',
    		logo: 'images/logos/ymtbb-01.png'
    	},
    	{
    		image :'images/logos/2767-02.png',
    		logo: 'images/logos/2767-01.png'
    	},
    	{
    		image :'images/logos/white-fatal-smille-02.png',
    		logo: 'images/logos/white-fatal-smille-01.png'
    	},
    	{
    		image :'images/logos/los-aos-locos-02.png',
    		logo: 'images/logos/los-aos-locos-01.png'
    	},
    ];
    $scope.ClickLogo = function(valor){
    	console.log(valor)
    	console.log(valor.image)
    	$scope.slides = []
    	$scope.slides.push({image: 'images/logos/logotipos-header.png'},{image: valor.image});
    	console.log($scope.slides);
    }
  });
