var tech = angular.module('battleCalc.tech', []);


tech.directive('playerTech', function(){
	return {
		restrict: 'E',
		templateUrl: 'tech/tech.html',
		scope: {
			'tech': '=tech'
		}
	}
});

