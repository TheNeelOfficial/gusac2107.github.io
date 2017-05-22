angular
    .module('paradox', [
        'ui.router',
        'ui.bootstrap',
        'ngSanitize',
        'ngCookies',
        'ngMap',
        'slickCarousel'
    ])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when("", "/");

            $urlRouterProvider.otherwise("/home");
            $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    '': {
                        templateUrl: "templates/home.html",
                        controller: "homeCtrl"
                    }
                }
            })
            .state('projects', {
                url: "/projects",
                views: {
                    '': {
                        templateUrl: "templates/projects.html",
                        controller: "projectsCtrl"
                    }
                }
            })
            .state('services', {
                url: "/services",
                views: {
                    '': {
                        templateUrl: "templates/services.html"
                    }
                }
            })
            .state('contactus', {
                url: "/contactus",
                views: {
                    '': {
                        templateUrl: "templates/contactus.html",
                        controller: "contactusCtrl"
                    }
                }
            })
            .state('aboutus', {
                url: "/aboutus",
                views: {
                    '': {
                        templateUrl: "templates/aboutus.html"
                    }
                }
            })
        }
    ])

    .run(['$rootScope', '$timeout', '$state', '$window', '$cookies', '$timeout',
        function($rootScope, $timeout, $state, $window, $cookies, $timeout){
            
            $rootScope.menuActive = false;
            $rootScope.toggleMenu = function(){
                if(!$rootScope.menuActive){
                    $("#bodyOverlay").show();
                    $("body").css("overflow","hidden");
                } else {
                    $("#bodyOverlay").hide();
                    $("body").css("overflow","auto");
                }
                $rootScope.menuActive = !$rootScope.menuActive;
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {   
                $rootScope.menuActive = false;
                $("#bodyOverlay").hide();
                $("body").css("overflow","auto");
            });

            $rootScope.scrollTo = function(id){
                $('html, body').animate({
                    scrollTop: $("#"+id).offset().top-110
                }, 500);
            }

        }
        
    ]);
