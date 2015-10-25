
function ThemeService($http) {

	var ThemeService = {
		categories: []
	};

	ThemeService.getAllCategories = function() {
    	//If they are already set, don't need to get them again
		if (ThemeService.categories.length) {
			return;
		}

		//Get the category terms from wp-json
		return $http.get('wp-json/taxonomies/category/terms').success(function(res){
			ThemeService.categories = res;
		});
	};

	return WPService;
}

//Finally register the service
app.factory('ThemeService', ['$http', ThemeService]);
