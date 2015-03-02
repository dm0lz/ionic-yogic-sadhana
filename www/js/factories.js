
angular.module('starter.factories', [])

.factory('Courses', ['$http', '$auth', function($http, $auth){
  var Courses = {};
  Courses.get = function(locale, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/courses').success(function(data){
      callback(data);
    });
  };
  return Courses;
}])



.factory('Course', ['$http', '$auth', function($http, $auth){
  var Course = {};
  Course.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/courses/' + id).success(function(data){
      callback(data);
    });
  };
  return Course;
}])


.factory('Chapter', ['$http', '$auth', function($http, $auth){
  var Chapter = {};
  Chapter.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/chapters/' + id).success(function(data){
      callback(data);
    });
  };
  return Chapter;
}])

.factory('Theory', ['$http', '$auth', function($http, $auth){
  var Theory = {};
  Theory.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/theories/' + id).success(function(data){
      callback(data);
    });
  };
  return Theory;
}])

.factory('Practice', ['$http', '$auth', function($http, $auth){
  var Practice = {};
  Practice.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/practices/' + id).success(function(data){
      callback(data);
    });
  };
  return Practice;
}])

.factory('GetTheoryMedia', ['$http', '$auth', function($http, $auth){
  var GetTheoryMedia = {};
  GetTheoryMedia.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedia;
}])

.factory('GetPracticeMedia', ['$http', '$auth', function($http, $auth){
  var GetPracticeMedia = {};
  GetPracticeMedia.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v2/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeeMedia;
}]);

