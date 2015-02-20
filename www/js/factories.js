
angular.module('starter.factories', [])

.factory('Courses', function($http, $auth){
  var Courses = {};
  Courses.get = function(callback){
    $http.get($auth.apiUrl() + '/api/v1/courses').success(function(data){
      callback(data);
    });
  };
  return Courses;
})
