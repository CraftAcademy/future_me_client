angular.module('future_me.controllers', [])

  .controller('cardsCtrl', function($scope, TDCardDelegate) {

    $scope.cards = [
      {title: "bagare", image: "chef.jpg"},
      {title: "sjuksköterska", image: "nurse.png"}
    ];
  })

  .controller('DescriptionController', function() {

  });
