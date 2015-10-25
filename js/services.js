
function CatService($http) {

	var CatService = {
		categories: []
	};

	CatService.getAllCategories = function() {
    	//If they are already set, don't need to get them again
		if (CatService.categories.length) {
			return;
		}

		//Get the category terms from wp-json
		return $http.get('wp-json/taxonomies/category/terms').success(function(res){
			CatService.categories = res;
		});
	};

	return WPService;
}

//Finally register the service
app.factory('CatService', ['$http', CatService]);
