
angular.module('starter.directives', [])

.directive('mediaElement', function(){
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
    }
  }
});
