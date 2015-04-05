"use strict";
console.log('loading app');
angular.
	module('ImitationGameApp',[
		'ui.bootstrap',
		'ngRoute'
	]).
	/** Defines page navigation */
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when("/home", {templateUrl: "partials/home.html"/*, controller: ""*/}).
			//when("/example_page", {templateUrl: "partials/home.html"/*, controller: ""*/}). //Uncomment this line to add additional page navigation
			otherwise({redirectTo: '/home'});
		}
	]);
