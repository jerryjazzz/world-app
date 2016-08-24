// formAutofillFix

angular.module('formAutofillFix', [])

expats.directive('formAutofillFix', function ($timeout) {
  return function (scope, element, attrs) {
    element.prop('method', 'post');
    if (attrs.ngSubmit) {
      $timeout(function () {
        element
          .unbind('submit')
          .bind('submit', function (event) {
            event.preventDefault();
            element
              .find('input, textarea, select')
              ionic.trigger('input')
              ionic.trigger('change')
              ionic.trigger('keydown');
            scope.$apply(attrs.ngSubmit);
          });
      });
    }
  };
});