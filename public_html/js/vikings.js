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
    $rootScope.getPersonagemById = function(id) {
        for (var x in $rootScope.personagens) {
            if ($rootScope.personagens[x].id == id) {
                return $rootScope.personagens[x];
            }
        }
    };
});


angular.module('vikings').config(function($routeProvider) {
  $routeProvider
   .when('/personagens', {
    templateUrl: 'personagens.html',
    controller: 'personagensCtrl'
   })
   .when('/personagem/:id', {
    templateUrl: 'personagem.html',
    controller: 'personagemCtrl'
   });
});

angular.module('vikings').controller('personagensCtrl', function($scope) {
    
});

angular.module('vikings').controller('personagemCtrl', function($scope, $routeParams, $rootScope) {
    $scope.personagem = $rootScope.getPersonagemById($routeParams.id);
    $scope.linhas = [];
    var colunas = [];
    for (var i in $scope.personagem.texts) {
        colunas.push($scope.personagem.texts[i]);
        if (i % 2 !== 0) {
            $scope.linhas.push(colunas);
            colunas = [];
        }
    }
});

