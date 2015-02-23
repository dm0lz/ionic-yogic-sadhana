
angular.module('starter.factories', [])

.factory('Courses', ['$http', '$auth', function($http, $auth){
  var Courses = {};
  Courses.get = function(locale, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/courses').success(function(data){
      callback(data);
    });
  };
  return Courses;
}])



.factory('Course', ['$http', '$auth', function($http, $auth){
  var Course = {};
  Course.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/courses/' + id).success(function(data){
      callback(data);
    });
  };
  return Course;
}])


.factory('Chapter', ['$http', '$auth', function($http, $auth){
  var Chapter = {};
  Chapter.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/chapters/' + id).success(function(data){
      callback(data);
    });
  };
  return Chapter;
}])

.factory('Theory', ['$http', '$auth', function($http, $auth){
  var Theory = {};
  Theory.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/theories/' + id).success(function(data){
      callback(data);
    });
  };
  return Theory;
}])

.factory('GetTheoryMedia', ['$http', '$auth', function($http, $auth){
  var GetTheoryMedia = {};
  GetTheoryMedia.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedia;
}]);
