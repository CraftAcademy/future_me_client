angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate) {

    $scope.cards = [
      {title: "bagare", image: "chef.png"},
      {title: "sjuksköterska", image: "nurse.png"}
    ]

  });
