(function(){
    'use strict';

    angular
    .module('mdr.datepicker', [])
    .directive('mdrDatepicker', [function(){
        /**
        * @param model {date}
        * @param date {date}
        * @param format {string}
        * @param lang {string}
        * @param zindex {string}
        * @param placeholder {string}
        * @param disabled {boolean}
        * @param required {boolean}
        */
        return {
            restrict: 'E',
            controller: 'mdrDatepickerCtrl',
            scope: {
                ngModel: '=',
                format: '@',
                lang: '@',
                zindex: '@',
                placeholder: '@',
                disabled: '=',
                required: '='
            },
            template: '<input type="text" class="form-control datepicker" placeholder="{{placeholder}}" ng-model="ngModel" ng-disabled="disabled" ng-required="required">'
        };
    }])
    .controller('mdrDatepickerCtrl', ['$scope', '$element', '$attrs', '$filter', function($scope, $element, $attrs, $filter){
        initialize();
        // Se crea el metodo que inicializa el datepicker
        function initialize(){
            // Se asignan los atributos que tendrá el datepicker
            $(".datepicker").datepicker({
                format: $scope.format,
                autoclose: true,
                todayHighlight: true,
                zIndexOffset: $scope.zindex,
                language: $scope.lang
            });
        }

    }]);

})();
