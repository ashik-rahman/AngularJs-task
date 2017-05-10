module.directive('myDirective', function($compile) {
  return {
    restrict: 'EA',
    scope: {
      ngModel: '='
    },
    replace: true,
    require: 'ngModel',
    link: function(scope, elem, attrs,modelCtrl) {
      modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
        });
      
      
    }
  };
});