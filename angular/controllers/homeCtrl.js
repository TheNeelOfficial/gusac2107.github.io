angular.module('paradox')
	.controller('homeCtrl', ['$rootScope', '$scope', '$http', '$state', function ($rootScope, $scope, $http, $state) {

		$scope.slickConfig = {
			enabled: true,
			infinite:true,
			dots:true,
			arrows:true,
			slidesToShow:1,
			slidesToScroll:1,
			autoplay:true,
			autoplaySpeed:5000,
			speed: 1000,
			event: {
				mousewheel: function (event) {
					console.log("sdfdds");
				    if (event.deltaX > 0 || event.deltaY < 0) {
				        $(this).slickNext();
				    } else if (event.deltaX < 0 || event.deltaY > 0) {
				        $(this).slickPrev();
				    }
				}
			}
		}
		
	}])