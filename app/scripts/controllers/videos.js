'use strict';

/**
 * @ngdoc function
 * @name gaboApp.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the gaboApp
 */
angular.module('gaboApp')
  .controller('VideosCtrl', function ($scope) {
    $scope.videos = [
    	{
    		'img': 'images/videos/riff-rat-hoodies-01.png',
    		'url': 'https://www.youtube.com/watch?v=N87MooTaxHc'
    	},
    	{
    		'img': 'images/videos/grecia-monroc-01.png',
    		'url': 'https://www.youtube.com/watch?v=vsZvGS9mwrg'
    	},
    	{
    		'img': 'images/videos/snapbacks-x-vlfmrk-01.png',
    		'url': 'https://www.youtube.com/watch?v=JmnGYv6Irrg'
    	},
    	{
    		'img': 'images/videos/qr-01.png',
    		'url': 'https://www.youtube.com/watch?v=YEKFSr-0nLU'
    	},
    	{
    		'img': 'images/videos/backpacks-01.png',
    		'url': 'https://www.youtube.com/watch?v=3iXERiXpCY8'
    	},
    	{
    		'img': 'images/videos/snapbacks-01.png',
    		'url': 'https://www.youtube.com/watch?v=WFb5IgEdU0E'
    	},
    	{
    		'img': 'images/videos/baseball-tshirts-01.png',
    		'url': 'https://www.youtube.com/watch?v=vINcF24ciic'
    	},
    	{
    		'img': 'images/videos/chikara.png',
    		'url': 'https://www.youtube.com/watch?v=chZ-hkwYVsI'
    	},
    	{
    		'img': 'images/videos/vlfmrk.png',
    		'url': 'https://www.youtube.com/watch?v=Tpa4lRs0Vo8'
    	},
    	{
    		'img': 'images/videos/hard-family.png',
    		'url': 'https://www.hard-familyyoutube.com/watch?v=r4vNGMqQ4Qo'
    	},
    ]
  });
