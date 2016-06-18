'use strict';
angular
  .module('DeliveryStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'LocalStorageModule',
    'summernote',
    'bootstrap.fileField',
    'google.places',
    'angular-loading-bar',
    'nvd3',
    'angular-stripe',
    'infinite-scroll',
    'facebook',
    'checklist-model',
	  'luegg.directives',
    'angularGrid',
    'ahdin',
    'angular-img-cropper',
    'contenteditable',
    'pascalprecht.translate'
])
.config(function($httpProvider,$stateProvider, $urlRouterProvider,localStorageServiceProvider) {
  $httpProvider.interceptors.push('');
  localStorageServiceProvider.setPrefix('DeliveryStoreApp');
  localStorageServiceProvider.setStorageType('localStorage');
  
   $stateProvider
   .state('index',{
      url: '',
      abstract: true,
      views: {
        'home': {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl',
          controllerAs: "home"
        },
      }
    })
   
});
