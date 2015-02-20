// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.factories', 'ng-token-auth'])

.run(function($ionicPlatform, $http, $auth) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.factory('ysHttpInterceptor', function($location, $q) {
  var ysHttpInterceptor = {
    'request': function(config){
      // console.log(config);
      return config;
    },
    'response': function(response) {
      // console.log(response);
      return response;
    }
  };
  return ysHttpInterceptor;
})

.config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {

  // $httpProvider.interceptors.push('ysHttpInterceptor');

  $authProvider.configure({
    apiUrl: 'http://yogic-sadhana.com',
    // storage: 'cookies',
    // tokenFormat: {
    //   "access-token": "{{ token }}",
    //   "token-type":   "Bearer",
    //   "client":       "{{ clientId }}",
    //   "expiry":       "{{ expiry }}",
    //   "uid":          "{{ uid }}"
    // },
    handleLoginResponse: function(response) {
      // console.log(response);
      return response.data;
    },
    handleAccountResponse: function(response) {
      // console.log(response);
      return response.data;
    },
    handleTokenValidationResponse: function(response) {
      // console.log(response);
      return response.data;
    }
  });

  $httpProvider.defaults.withCredentials = true;

  $stateProvider

  .state('sign_in', {
    url: "/sign_in",
    templateUrl: "templates/login.user.html",
    controller: 'LoginController'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl',
    // resolve:{
    //   auth: function($auth) {
    //     return $auth.validateUser();
    //   }
    // }
  })

  .state('app.courses', {
    url: "/courses",
    views: {
      'menuContent': {
        templateUrl: "templates/courses.html",
        controller: 'CoursesController'
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
})



