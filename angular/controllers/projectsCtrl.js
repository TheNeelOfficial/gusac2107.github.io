angular.module('paradox')
	.controller('projectsCtrl', ['$rootScope', '$scope', '$http', '$state', '$interval', '$filter', '$timeout', function ($rootScope, $scope, $http, $state, $interval, $filter, $timeout) {

		$scope.categories = [
			{id:1,name:"Interior Designing",image:"assets/images/interior_design.jpg",description:"Lorem ipsum dolor sit amet, his te vitae maluisset quaerendum, cum et saperet contentiones. No ius meis assentior, sed aeque vidisse cu"},
			{id:2,name:"Landscape Designing",image:"assets/images/landscape_design.jpg",description:"Lorem ipsum dolor sit amet, his te vitae maluisset quaerendum, cum et saperet contentiones. No ius meis assentior, sed aeque vidisse cu"},
			{id:3,name:"Product Designing",image:"assets/images/product_design.jpg",description:"Lorem ipsum dolor sit amet, his te vitae maluisset quaerendum, cum et saperet contentiones. No ius meis assentior, sed aeque vidisse cu"}
		]

		$scope.projects = [
			{id:1,categoryId:1,name:"Mr. VASANTHA RAYALU , RESIDENCE",description:"an exquisite penthouse in the city of destiny",thumb:"assets/images/2.jpg", images:["assets/images/1.jpg","assets/images/bg.jpg"]},
			{id:2,categoryId:1,name:"SUNRAY RESORTS",description:"A PERFECT HOLIDAY DESTINATION MADE ESPECIALLY FOR THE FUN LOVERS",thumb:"assets/images/1.jpg"},
			{id:3,categoryId:1,name:"Mr. SHIVA KUMAR RESIDENCE",description:"definition of simplicity with a twist",thumb:"assets/images/bg.jpg"},
			{id:4,categoryId:1,name:"Mr. SHARIEF",description:"when colonial style meets contemporary style",thumb:"assets/images/bg.jpg"},
			{id:5,categoryId:1,name:"Mr. S.A.N RAJU",description:"Opulent interiors in minimalist architecture",thumb:"assets/images/bg.jpg"},
			{id:6,categoryId:1,name:"Mr. Kalyan",description:"A white brown and black affair",thumb:"assets/images/bg.jpg"}
		]	

		$scope.viewAll = true;
		$scope.selectedCategory = {};
		$scope.selectedProject = {};
		$scope.filteredProjects = [];
		$scope.moveIndex = 0;
		$scope.showImageNav = false;
		$scope.viewCategory = function(index){
			$scope.selectedCategory = $scope.categories[index];
			$scope.filteredProjects = $filter('filter')($scope.projects, {categoryId: $scope.selectedCategory.id});
			$scope.selectedProject = $scope.filteredProjects[0];
			$scope.selectedProject.previewImage = $scope.selectedProject.thumb;
			$scope.selectedProjectIndex = 0;
			$scope.moveIndex = 0;
			$('#desc').css('visibility','hidden');
			$('#desc').removeClass('animatedesc');
			$timeout(function(){
				$('#desc').css('visibility','visible');
				$('#desc').addClass('animatedesc');
				if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
					$scope.currentPreviewIndex = 0;
					$scope.startPreviewImages();
				}
			}, 500);
			$scope.viewAll = false;
		}	

		var promise;
		$scope.startPreviewImages = function(){
			$timeout(function(){
				if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
					$interval.cancel(promise);
					$scope.selectedProject.previewImage = $scope.selectedProject.images[$scope.currentPreviewIndex];
					promise = $interval(function(){
						if($scope.currentPreviewIndex < $scope.selectedProject.images.length-1){
							$scope.currentPreviewIndex++;
						} else {
							$scope.currentPreviewIndex = 0;
						}
						$scope.selectedProject.previewImage = $scope.selectedProject.images[$scope.currentPreviewIndex];
					}, 3000);
				}
				$scope.showImageNav = true;
			}, 5000);
		}

		//$scope.viewCategory(0);

		$scope.goToGridView = function(){
			$scope.viewAll = true;
			$scope.selectedCategory = {};
			$scope.selectedProject = {};
			$scope.filteredProjects = [];
			$scope.moveIndex = 0;
			$scope.showImageNav = false;
			$interval.cancel(promise);
		}

		$scope.viewProject = function(index){
			if($scope.selectedProjectIndex != index){
				$('#desc').css('visibility','hidden');
				$('#desc').removeClass('animatedesc');
				if($('.project-carousel-list ul').width() - ($('#proj'+index).width() + $('#proj'+index).position().left) < 0){
					$scope.moveIndex++;
				}
				$interval.cancel(promise);
				$timeout(function(){
					$scope.selectedProject = $scope.filteredProjects[index];
					$scope.selectedProjectIndex = index;
					$scope.selectedProject.previewImage = $scope.selectedProject.thumb;
					$('#desc').css('visibility','visible');
					$('#desc').addClass('animatedesc');
					if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
						$scope.currentPreviewIndex = 0;
						$scope.startPreviewImages();
					}
				}, 500);
			}
		}

		$scope.nextProject = function(){
			if($scope.selectedProjectIndex < $scope.filteredProjects.length - 1){
				$('#desc').css('visibility','hidden');
				$('#desc').removeClass('animatedesc');
				$scope.selectedProjectIndex++;
				if($('.project-carousel-list ul').width() - ($('#proj'+$scope.selectedProjectIndex).width() + $('#proj'+$scope.selectedProjectIndex).position().left) < 0){
					$scope.moveIndex++;
				}
				$interval.cancel(promise);
				$timeout(function(){
					$scope.selectedProject = $scope.filteredProjects[$scope.selectedProjectIndex];
					$scope.selectedProject.previewImage = $scope.selectedProject.thumb;
					$('#desc').css('visibility','visible');
					$('#desc').addClass('animatedesc');
					if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
						$scope.currentPreviewIndex = 0;
						$scope.startPreviewImages();
					}
				}, 500);
			}
		}

		$scope.prevProject = function(){
			if($scope.selectedProjectIndex > 0){
				$('#desc').css('visibility','hidden');
				$('#desc').removeClass('animatedesc');
				$scope.selectedProjectIndex--;
				if($('#proj'+$scope.selectedProjectIndex).position().left < 0){
					$scope.moveIndex--;
				}
				$interval.cancel(promise);
				$timeout(function(){
					$scope.selectedProject = $scope.filteredProjects[$scope.selectedProjectIndex];
					$scope.selectedProject.previewImage = $scope.selectedProject.thumb;
					$('#desc').css('visibility','visible');
					$('#desc').addClass('animatedesc');
					if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
						$scope.currentPreviewIndex = 0;
						$scope.startPreviewImages();
					}
				}, 500);
			}	
		}

		$scope.nextPreviewImage = function(){
			$interval.cancel(promise);
			if($scope.currentPreviewIndex < $scope.selectedProject.images.length-1){
				$scope.currentPreviewIndex++;
			} else {
				$scope.currentPreviewIndex = 0;
			}
			$scope.selectedProject.previewImage = $scope.selectedProject.images[$scope.currentPreviewIndex];
			if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
				$scope.startPreviewImages();
			}
		}

		$scope.prevPreviewImage = function(){
			$interval.cancel(promise);
			if($scope.currentPreviewIndex > 0){
				$scope.currentPreviewIndex--;
			} else {
				$scope.currentPreviewIndex = $scope.selectedProject.images.length - 1;
			}
			$scope.selectedProject.previewImage = $scope.selectedProject.images[$scope.currentPreviewIndex];
			if($scope.selectedProject.images && $scope.selectedProject.images.length > 0){
				$scope.startPreviewImages();
			}
		}

		document.onkeydown = function(e) {
			if(!$scope.viewAll){
			    switch (e.keyCode) {
			        case 37:
			        	$scope.prevProject();
			            break;
			        case 38:
			            $scope.prevProject();
			            break;
			        case 39:
			            $scope.nextProject();
			            break;
			        case 40:
			            $scope.nextProject();
			            break;
			    }
			}
		};

		var lastScrollTop = 0;
		$(window).scroll(function(event){
			if(!$scope.viewAll){
			   	var st = $(this).scrollTop();
			   	if (st > lastScrollTop){
			    	$scope.nextProject();
			   	} else {
			      	$scope.prevProject();
			   	}
			   	lastScrollTop = st;
		   	}
		});
		
	}])