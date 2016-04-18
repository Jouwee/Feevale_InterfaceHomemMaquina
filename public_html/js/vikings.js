// Inicializa a aplicação AngularJS
angular.module('vikings', ['ngRoute']);

angular.module('vikings').config(function($routeProvider) {
  $routeProvider
   .when('/colorTable', {
    templateUrl: 'colorTable.html',
    controller: 'colorTableCtrl'
   });
});


// Controller da página de cores
angular.module('vikings').controller('colorTableCtrl', function($scope) {
    $scope.colors = [
        {
            name: 'Fundo',
            color: '#333333'
        },
        {
            name: 'Frente',
            color: '#FFFFFF'
        },
        {
            name: 'Frente cabeçalho',
            color: '#CCCCCC'
        }
    ];
});
