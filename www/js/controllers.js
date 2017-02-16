angular.module('futureme.controllers', [])

  .run(function($state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
      console.log('stateChangeSuccess');
      if (toState.headerChangeColor) {
        $rootScope.headerChangeColor = true;
      } else {
        $rootScope.headerChangeColor = false;
      }
    });
  });

  .controller('cardsCtrl', function ($scope, TDCardDelegate) {

    $scope.cards = [
      {title: "bagare", image: "chef.png"},
      {title: "sjuksköterska", image: "nurse.png"}
    ]

  });

