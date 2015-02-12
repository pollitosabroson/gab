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
			'img1': 'images/textil/FARAON/faraon-04.png',
			'img2': 'images/textil/FARAON/faraon-02.png',
			'img3': 'images/textil/FARAON/faraon-03.png'
		}
		$scope.imagenes = function(valor){
			console.log(valor)
			if(valor === 'native') {
				$scope.carrusel = {
					'img1': 'images/textil/NATIVE/native-kid-04.png',
					'img2': 'images/textil/NATIVE/native-kid-02.png',
					'img3': 'images/textil/NATIVE/native-kid-03.png'
				}
			}else if(valor === 'faraon'){
				$scope.carrusel = {
					'img1': 'images/textil/FARAON/faraon-04.png',
					'img2': 'images/textil/FARAON/faraon-02.png',
					'img3': 'images/textil/FARAON/faraon-03.png'
				}
			}else if(valor === 'cosmic'){
				$scope.carrusel = {
					'img1': 'images/textil/COSMIC/cosmic-04.png',
					'img2': 'images/textil/COSMIC/cosmic-02.png',
					'img3': 'images/textil/COSMIC/cosmic-03.png'
				}
			}else if(valor === 'hoe'){
				$scope.carrusel = {
					'img1': 'images/textil/HOE/hoe-04.png',
					'img2': 'images/textil/HOE/hoe-02.png',
					'img3': 'images/textil/HOE/hoe-03.png'
				}
			}else if(valor === 'buho'){
				$scope.carrusel = {
					'img1': 'images/textil/BUHO/buho-04.png',
					'img2': 'images/textil/BUHO/buho-02.png',
					'img3': 'images/textil/BUHO/buho-03.png'
				}
			}else if(valor === 'samurai'){
				$scope.carrusel = {
					'img1': 'images/textil/SAMURAI/samurai-04.png',
					'img2': 'images/textil/SAMURAI/samurai-02.png',
					'img3': 'images/textil/SAMURAI/samurai-03.png'
				}
			}else if(valor === 'v'){
				$scope.carrusel = {
					'img1': 'images/textil/V/v-04.png',
					'img2': 'images/textil/V/v-02.png',
					'img3': 'images/textil/V/v-03.png'
				}
			}else if(valor === 'tengu'){
				$scope.carrusel = {
					'img1': 'images/textil/TENGU/tengu-04.png',
					'img2': 'images/textil/TENGU/tengu-02.png',
					'img3': 'images/textil/TENGU/tengu-03.png'
				}
			}else if(valor === 'triple'){
				$scope.carrusel = {
					'img1': 'images/textil/TRIPLE/triple-seis-04.png',
					'img2': 'images/textil/TRIPLE/triple-seis-02.png',
					'img3': 'images/textil/TRIPLE/triple-seis-03.png'
				}
			}else if(valor === 'geisha'){
				$scope.carrusel = {
					'img1': 'images/textil/GEISHA/geisha-04.png',
					'img2': 'images/textil/GEISHA/geisha-02.png',
					'img3': 'images/textil/GEISHA/geisha-03.png'
				}
			};
		}
		$('#myAffix').affix({
			offset: {
				top: 100,
			}
		})
	});
