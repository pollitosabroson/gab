'use strict';

/**
 * @ngdoc function
 * @name gaboApp.controller:TextilCtrl
 * @description
 * # TextilCtrl
 * Controller of the gaboApp
 */
angular.module('gaboApp')
	.controller('TextilCtrl', function ($scope) {
		$scope.carrusel = {
			'img1': 'images/FARAON/faraon-04.png',
			'img2': 'images/FARAON/faraon-02.png',
			'img3': 'images/FARAON/faraon-03.png'
		}
		$scope.imagenes = function(valor){
			console.log(valor)
			if(valor === 'native') {
				$scope.carrusel = {
					'img1': 'images/NATIVE/native-kid-04.png',
					'img2': 'images/NATIVE/native-kid-02.png',
					'img3': 'images/NATIVE/native-kid-03.png'
				}
			}else if(valor === 'faraon'){
				$scope.carrusel = {
					'img1': 'images/FARAON/faraon-04.png',
					'img2': 'images/FARAON/faraon-02.png',
					'img3': 'images/FARAON/faraon-03.png'
				}
			}else if(valor === 'cosmic'){
				$scope.carrusel = {
					'img1': 'images/COSMIC/cosmic-04.png',
					'img2': 'images/COSMIC/cosmic-02.png',
					'img3': 'images/COSMIC/cosmic-03.png'
				}
			}else if(valor === 'hoe'){
				$scope.carrusel = {
					'img1': 'images/HOE/hoe-04.png',
					'img2': 'images/HOE/hoe-02.png',
					'img3': 'images/HOE/hoe-03.png'
				}
			}else if(valor === 'buho'){
				$scope.carrusel = {
					'img1': 'images/BUHO/buho-04.png',
					'img2': 'images/BUHO/buho-02.png',
					'img3': 'images/BUHO/buho-03.png'
				}
			}else if(valor === 'samurai'){
				$scope.carrusel = {
					'img1': 'images/SAMURAI/samurai-04.png',
					'img2': 'images/SAMURAI/samurai-02.png',
					'img3': 'images/SAMURAI/samurai-03.png'
				}
			}else if(valor === 'v'){
				$scope.carrusel = {
					'img1': 'images/V/v-04.png',
					'img2': 'images/V/v-02.png',
					'img3': 'images/V/v-03.png'
				}
			}else if(valor === 'tengu'){
				$scope.carrusel = {
					'img1': 'images/TENGU/tengu-04.png',
					'img2': 'images/TENGU/tengu-02.png',
					'img3': 'images/TENGU/tengu-03.png'
				}
			}else if(valor === 'triple'){
				$scope.carrusel = {
					'img1': 'images/TRIPLE/triple-seis-04.png',
					'img2': 'images/TRIPLE/triple-seis-02.png',
					'img3': 'images/TRIPLE/triple-seis-03.png'
				}
			}else if(valor === 'geisha'){
				$scope.carrusel = {
					'img1': 'images/GEISHA/geisha-04.png',
					'img2': 'images/GEISHA/geisha-02.png',
					'img3': 'images/GEISHA/geisha-03.png'
				}
			};
		}
	});
