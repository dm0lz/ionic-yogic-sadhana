angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout, $auth, $rootScope) {
  // Form data for the login modal
  // $scope.loginData = {};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.loginForm = {};
  $scope.submitLogin = function() {
    $auth.submitLogin($scope.loginForm)
    .then(function(resp) {
      console.log($auth.retrieveData('auth_headers'));
      $auth.authenticate('email')
        .then(function(){
          console.log("Authenticated");
          $scope.closeLogin();
          $state.go('app.courses');
        })
        .catch(function(){
          console.log("Authentication Failed !!");
        });
      // $scope.closeLogin();
    })
    .catch(function(resp) {
      // handle error response
    });
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $rootScope.$on('auth:login-success', function(ev, user) {
    // alert('Welcome ', user.email);
    $state.go('app.courses');
  });
  $rootScope.$on('auth:validation-success', function() {
    $state.go('app.courses');
  });
  $rootScope.$on('auth:logout-success', function(ev) {
    console.log('auth:logout-success');
    $state.go('sign_in');
  });

  $scope.signOut = function() {
    $auth.signOut();
  };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('LoginController', function($scope, $auth, $state, $controller) {
  $controller('AppCtrl', {$scope: $scope});

  // $scope.loginForm = {};
  //
  // $scope.submitLogin = function() {
  //   $auth.submitLogin($scope.loginForm)
  //   .then(function(resp) {
  //     console.log($auth.retrieveData('auth_headers'));
  //     $auth.authenticate('email')
  //       .then(function(){
  //         console.log("Authenticated");
  //         // $state.go('app.courses');
  //       })
  //       .catch(function(){
  //         console.log("Authentication Failed !!");
  //       });
  //     // $scope.closeLogin();
  //   })
  //   .catch(function(resp) {
  //     // handle error response
  //   });
  // };



  // var userCheck = $auth.validateUser();
  // if(userCheck.$$state.status == 1){
  //   $state.go('app.courses');
  // };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CoursesController', function($scope, $state, $auth, Courses, $controller) {
  $controller('AppCtrl', {$scope: $scope});

  // $auth.validateUser()
  //   .then(function(res){
  //     console.log(res);
  //   })
  //   .catch(function(res){
  //     console.log(res);
  //   });

  Courses.get(function(data){
    $scope.courses = data.courses;
    $scope.i18n_translations = data.i18n_translations;
    // console.log(data.courses);
  });

  // var userCheck = $auth.validateUser();
  // if(userCheck.$$state.status == 2){
  //   $state.go('sign_in');
  // };

});
