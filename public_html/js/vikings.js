// Inicializa a aplicação AngularJS
angular.module('vikings', ['ngRoute']);

angular.module('vikings').run(function($http, $rootScope) {
    $http.get('data/episodios.json').success(function(response) {
        $rootScope.episodios = response;
        $rootScope.episodioSelected = $rootScope.episodios[0];
    });
    $http.get('data/personagens.json').success(function(response) {
        $rootScope.personagens = response;
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
            name: 'Fundo #1',
            color: '#333333'
        },
        {
            name: 'Frente #1',
            color: '#CCCCCC'
        },
        {
            name: 'Fundo #2',
            color: '#444444'
        },
        {
            name: 'Frente #2',
            color: '#CCCCCC'
        },
    ];
});

