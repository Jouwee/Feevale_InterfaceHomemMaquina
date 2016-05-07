// Inicializa a aplicação AngularJS
angular.module('vikings', ['ngRoute']);

angular.module('vikings').run(function($http, $rootScope) {
    $http.get('data/episodios.json').success(function(response) {
        $rootScope.episodios = response;
        $rootScope.episodioSelected = $rootScope.episodios[0];
    });
});


angular.module('vikings').config(function($routeProvider) {
  $routeProvider
   .when('/colorTable', {
    templateUrl: 'colorTable.html',
    controller: 'colorTableCtrl'
   })
   .when('/personagens', {
    templateUrl: 'personagens.html',
    controller: 'colorTableCtrl'
   })
   .when('/personagens/:nomePersonagem', {
    templateUrl: 'colorTable.html',
    controller: 'colorTableCtrl'
   });
});

angular.module('vikings').controller('colorTableCtrl', function($scope) {
    
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
