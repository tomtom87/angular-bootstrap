var app = angular.module('wp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: localized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/:slug', {
		templateUrl: localized.partials + 'content.html',
		controller: 'Content'
	})
	.otherwise({
		redirectTo: '/'
	});
});
//Main controller
app.controller('Main', ['$scope', 'ThemeService', function($scope, ThemeService) {
	//Get Categories from ThemeService
	ThemeService.getAllCategories();
	
	//Get the first page of posts from ThemeService
	ThemeService.getPosts(1);

	$scope.data = ThemeService;

}]);

app.controller('Content',
		['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
			$http.get('wp-json/posts/?filter[name]=' + $routeParams.slug).success(function(res){
				$scope.post = res[0];
			});
		}
	]
);
