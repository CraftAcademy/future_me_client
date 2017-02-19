angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate, $timeout, StorageService) {

    // var cards = StorageService.getAll();

    $scope.cards = {
      master: StorageService.master(),
      active: StorageService.active()
    };

    console.log(StorageService.active());

    $scope.cardDestroyed = function (index) {
      var a = $scope.cards.active.splice(index, 1);
      // StorageService.active(a);
      StorageService.active($scope.cards.active);
      console.log("StorageService.active(): " + StorageService.active());
      if ($scope.cards.active.length === 0)
        $scope.refreshCards();
      console.log("a: " + a);
      console.log("$scope.cards.active: " + $scope.cards.active);
    };

    $scope.$on('removeCard', function(event, element, card) {
      $scope.cards.active.splice($scope.cards.active.indexOf(card), 0);
    });

    $scope.addCard = function () {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    };

    $scope.refreshCards = function () {
      $scope.cards.active = null;
      $timeout(function () {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
      });
    };

    $scope.cardSwipedLeft = function (index) {
    };

    $scope.cardSwipedRight = function (index) {
    };
  })

  .controller('cardCtrl', function ($scope, TDCardDelegate) {
  })

  .controller('descriptionCtrl', function ($scope, $ionicHistory) {
    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
  })

  .controller('pathCtrl', function ($scope, $ionicHistory) {
    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
  })

  .controller('libraryController', function ($scope) {

  });
