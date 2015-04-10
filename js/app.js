"use strict";
console.log('loading app');
angular.
	module('ImitationGameApp',[
		'ImitationGameApp.controllers',
		'ui.bootstrap',
		'ngRoute'
	]).
	/** Defines page navigation */
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when("/home", {templateUrl: "partials/home.html"/*, controller: ""*/}).
			when("/analysis", {templateUrl: "partials/analysis.html"}).
			when("/class_topic/:topic", {templateUrl: "partials/google_doc.html", controller: "GDocsController"}).
			when("/page/:topic", {templateUrl: "partials/google_doc.html", controller: "GDocsController"}).
			//when("/example_page", {templateUrl: "partials/home.html"/*, controller: ""*/}). //Uncomment this line to add additional page navigation
			otherwise({redirectTo: '/home'});
		}
	]);
