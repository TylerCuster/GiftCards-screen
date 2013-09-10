var app = angular.module('app', []);

app.controller('StandingsController', function($scope, $http) {
	$http.get('standings.json').success(function(data) {
		$scope.standings = data;
	});
});

app.controller('NewsController', function($scope, $http) {
	$http.get('news.json').success(function(data) {
		$scope.news = data;
	});
});

app.controller('StatsController', function($scope, $http) {
	$http.get('teamstats.json').success(function(data) {
		$scope.players = data;
	});
})