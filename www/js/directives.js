
angular.module('starter.directives', [])

.directive('mediaElement', ['$auth', function($auth){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){

      scope.$watch("media", function(mel){
        if (mel){
          angular.element(element).mediaelementplayer({
            success: function(mel){
              scope.mel = mel;
            }
          });
        }
      });

      scope.togglePlay = function(){
        var el = angular.element(element).mediaelementplayer();
        if (el[0].paused){
          el[0].play();
        }else{
          el[0].pause();
        }
        updateButton();
      };

      var updateButton = function(e){
        var button = angular.element("button.button.button-full");
        button.toggleClass("button-balanced button-assertive");
      };

      scope.getMediaUrl = function(path){
        return $auth.apiUrl() + path;
      };

    }
  }

}]);



