// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.factories', 'starter.directives', 'ng-token-auth'])

.run(['$ionicPlatform', function($ionicPlatform) {

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

}])

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

.config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider', '$sceDelegateProvider', function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $sceDelegateProvider) {

  // $httpProvider.interceptors.push('ysHttpInterceptor');
  // $httpProvider.defaults.withCredentials = true;
  $sceDelegateProvider.resourceUrlWhitelist([ 'self', 'http://yogic-sadhana.com**']);

  $authProvider.configure({
    apiUrl: 'http://yogic-sadhana.com',
    storage: 'localStorage',
    tokenFormat: {
      "access-token": "{{ token }}",
      "token-type":   "Bearer",
      "client":       "{{ clientId }}",
      "expiry":       "{{ expiry }}",
      "uid":          "{{ uid }}"
    }
    // handleLoginResponse: function(response) {
    //   return response.data;
    // },
    // handleAccountResponse: function(response) {
    //   return response.data;
    // },
    // handleTokenValidationResponse: function(response) {
    //   return response.data;
    // }
  });

  // $httpProvider.defaults.withCredentials = true;

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
    resolve:{
      auth: ['$auth', function($auth) {
        return $auth.validateUser();
      }]
    }
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

  .state('app.course', {
    url: "/courses/:courseId",
    views: {
      'menuContent': {
        templateUrl: "templates/course.html",
        controller: 'CourseController'
      }
    }
  })

  .state('app.course.chapter', {
    url: "/chapters/:chapterId",
    views: {
      'menuContent@app': {
        templateUrl: "templates/chapter.html",
        controller: 'ChapterController'
      }
    }
  })

  .state('app.course.chapter.theory', {
    url: "/theories/:theoryId",
    views: {
      'menuContent@app': {
        templateUrl: "templates/theory.html",
        controller: 'TheoriesController'
      }
    }
  })

  .state('app.course.chapter.practice', {
    url: "/practices/:practiceId",
    views: {
      'menuContent@app': {
        templateUrl: "templates/practice.html",
        controller: 'PracticesController'
      }
    }
  })

  .state('app.course.chapter.theory.media', {
    url: "/medias/:mediaId",
    views: {
      'menuContent@app': {
        templateUrl: "templates/media.html",
        controller: 'TheoryMediaController'
      }
    }
  })

  .state('app.course.chapter.practice.media', {
    url: "/medias/:mediaId",
    views: {
      'menuContent@app': {
        templateUrl: "templates/media.html",
        controller: 'PracticeMediaController'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign_in');
}])



