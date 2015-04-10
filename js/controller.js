"use strict";
angular.module('ImitationGameApp.controllers', []).
	controller('HeaderController', function($scope, $location){
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};
	}).
	controller('GDocsController', function($scope, $sce, $route, $routeParams){
		$scope.docTopic = {
			//Defined for Class Pages
			'information_privacy': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1iW9rcd5qFnGF2vE1fdx0XnFrR_Q3w0Hpfy9Xb1vyoIk/pub?embedded=true"),
			'intellectual_property': $sce.trustAsResourceUrl("https://docs.google.com/document/d/14nHtLFvYqABwLhkag1DAkXbCmOwDP-3HJBdB0dBDCDQ/pub?embedded=true"),
			'network_communication': $sce.trustAsResourceUrl("https://docs.google.com/document/d/19kDSwRDWUvSpT7HIy3joxspiJtswttE2iSscHi5BGuk/pub?embedded=true"),
			'privacy_and_government': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1kLeKygRvPETuMUCYiITHJI3Att2NAIINkDyNTOIOhYI/pub?embedded=true"),
			//Defined for Pages
			'computing_technologies': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1BqB5LuRozjezttf1OGIv9IrI7P3h7pzC1LxJLb3EK6o/pub?embedded=true"),
			'intent_of_movie_makers': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1AyNYn7qlg8ac3OkXAnV5vIXN6_xv1tprg8rvVcTkrn0/pub?embedded=true"),
			'timeline':$sce.trustAsResourceUrl("https://docs.google.com/document/d/1YDy7x8rUm4pfoVh4WRYc8tcI00eVOVu5kIrH7EcUAFM/pub?embedded=true"),
		};
		$scope.iframeUrl= $scope.docTopic[$route.current.params['topic']];
		//console.log($scope.iframeUrl)

	});
