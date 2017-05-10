angular
    .module('paradox', [
        'ui.router',
        'ui.bootstrap',
        'ngSanitize',
        'ngCookies',
        'ngMap'
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
            .state('contactus', {
                url: "/contactus",
                views: {
                    '': {
                        templateUrl: "templates/contactus.html",
                        controller: "contactusCtrl"
                    }
                }
            })
        }
    ])

    .run(['$rootScope', '$timeout', '$state', '$window', '$cookies', '$timeout',
        function($rootScope, $timeout, $state, $window, $cookies, $timeout){
            
            $rootScope.menuActive = false;
            $rootScope.toggleMenu = function(){
                $rootScope.menuActive = !$rootScope.menuActive;
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {   
                
            });

            $rootScope.scrollTo = function(id){
                $('html, body').animate({
                    scrollTop: $("#"+id).offset().top-110
                }, 500);
            }

        }
        
    ]);
