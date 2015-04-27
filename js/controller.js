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
			'government_and_information_privacy': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1iW9rcd5qFnGF2vE1fdx0XnFrR_Q3w0Hpfy9Xb1vyoIk/pub?embedded=true"),
			'intellectual_property': $sce.trustAsResourceUrl("https://docs.google.com/document/d/14nHtLFvYqABwLhkag1DAkXbCmOwDP-3HJBdB0dBDCDQ/pub?embedded=true"),
			'network_communication': $sce.trustAsResourceUrl("https://docs.google.com/document/d/19kDSwRDWUvSpT7HIy3joxspiJtswttE2iSscHi5BGuk/pub?embedded=true"),
			'computer_network_security': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1nHf-mmUqTDci35kha53xBEsqFAPi46Z-VNufuKFQ9Gw/pub?embedded=true"),
			'computer_reliability': $sce.trustAsResourceUrl("https://docs.google.com/document/d/10RpB1YfY6z6GEp66E0jJiD41joNoJ6miZtGwkPckUzw/pub?embedded=true"),
			'work_wealth': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1QioOHCKlcsymGTGxXly5FsAWNMoCQrAX3f31tdryi-8/pub?embedded=true"),
			//'privacy_and_government': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1kLeKygRvPETuMUCYiITHJI3Att2NAIINkDyNTOIOhYI/pub?embedded=true"),
			//Defined for Documentation
			//id=0BxJ3N8DQlUWRfnYzNFM3QV9hVDl6NFdNR2NJZll3M2FuSFBRNzRsTXRSWnA4cDZSVExSQUk
			'minutes': $sce.trustAsResourceUrl("https://drive.google.com/embeddedfolderview?id=0BxJ3N8DQlUWRfnYzNFM3QV9hVDl6NFdNR2NJZll3M2FuSFBRNzRsTXRSWnA4cDZSVExSQUk#list"),
			'presentation': $sce.trustAsResourceUrl("https://docs.google.com/presentation/d/1pyRJFt5HGDDjq6aMT9xN7AFmtx5-X5_ULCgPvHRYRCo/embed?start=false&loop=false&delayms=5000"),
			//Defined for Pages
			'computing_technologies': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1BqB5LuRozjezttf1OGIv9IrI7P3h7pzC1LxJLb3EK6o/pub?embedded=true"),
			'intent_of_movie_makers': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1AyNYn7qlg8ac3OkXAnV5vIXN6_xv1tprg8rvVcTkrn0/pub?embedded=true"),
			'film_vs_reality': $sce.trustAsResourceUrl("https://docs.google.com/document/d/1zI34fHDT6-B4i5Mz5RNV3JYnDQbD_wtpwvYAaNjVTGY/pub?embedded=true"),
			'timeline': $sce.trustAsResourceUrl("https://docs.google.com/spreadsheets/d/1OsfKZ3zep1f8-xyAmcGW5j3ux8wLZZWVlR8ihwZYZ1k/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false;"),
		};
		$scope.iframeUrl= $scope.docTopic[$route.current.params['topic']];
		//console.log($scope.iframeUrl)

	});
