angular.module('wp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl: localized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/:ID', {
		templateUrl: localized.partials + 'content.html',
		controller: 'Content'
	})
	.otherwise({
		redirectTo: '/'
	});
})
.controller('Main', function($scope, $http, $routeParams) {
	$http.get('wp-json/posts/').success(function(res){
		$scope.posts = res;
	});
})
.controller('Content', function($scope, $http, $routeParams) {
	$http.get('wp-json/posts/' + $routeParams.ID).success(function(res){
		$scope.post = res;
	});
});
