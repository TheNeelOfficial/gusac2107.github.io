angular.module('paradox')
	.controller('contactusCtrl', ['$rootScope', '$scope', '$http', '$state', function ($rootScope, $scope, $http, $state) {

		$scope.slickConfig = {
			enabled: true,
			infinite:false,
			dots:true,
			arrows:false,
			slidesToShow:1,
			slidesToScroll:1,
			draggable: false,
			autoplay:false,
			speed: 1000
		}
		
	}])