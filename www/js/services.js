angular.module("futureme.services", [])

  .factory('StorageService', function ($localStorage, $filter) {
    $localStorage = $localStorage.$default({
      storage: [
        [
          {
            id: 1,
            title: "bagare",
            image: "Bagare.png",
            description: "Att jobba som bagare är ett roligt men utmattande jobb. Det är tidiga morgnar, men man får chans att mätta många magar. Vara kreativ och baka det man vill. Det är mycket kunskaper man bör bahärska för att få brödet så krispigt, något som kan löna sig från en utbildning.",
            google: 'https://www.google.se/#q=hur+blir+man+bagare',
            steps: ""
          },
          {
            id: 2,
            title: "sjuksköterska",
            image: "Sjuksköterska.png",
            description: "Om du känner att du vill hjälpa folk med allt från stora till små sår, men kanske int eplugga lika länge som en läkare. Kan nog sjuksköterska vara något för dig. Men för att bli det är det mycket man måste lära sig.",
            google: 'https://www.google.se/#q=hur+blir+man+sjuksk%C3%B6terska',
            steps: ""
          },
          {
            id: 3,
            title: "möbeldesigner",
            image: "Mobeldes.png",
            description: "Att jobba med möbeldesign är ett kreativt och utmanande yrke eftersom det kräver att de lyckas vara orginell och skaffar dig ett eget bildspråk. för att lära dig de grundläggade kunskaperna inom yrket kan en utbildning vara bra.",
            google: 'https://www.google.se/#q=hur+blir+man+m%C3%B6beldesigner',
            steps: ""
          },
          {
            id: 4,
            title: "läkare",
            image: "Sjuksköterska.png",
            description: "Vill du kunna göra vad som helst för att hjälpa folk, allt från stå i operation till att vara jour, dynget runt. Är dett något för dig. Men det krävs en utbildning så att du kan lära dig allt för att hjälpa dina medmänniskor.",
            google: 'https://www.google.se/#q=hur+blir+man+l%C3%A4kare',
            steps: ""
          }
        ],
        []
      ]
    });

    var _getAll = function () {
      return $localStorage.storage[0];
    };
    var _add = function (occupation) {
      $localStorage.storage[0].push(occupation);
    };
    var _remove = function (occupation) {
      $localStorage.storage[0].splice($localStorage.storage[0].indexOf(occupation), 1);
    };

    var _getOccupation = function (id) {
      array = $localStorage.storage[0];
      return $filter('filter')(array, {'id': id});
    };

    var _saveOccupation = function (occupation) {
      $localStorage.storage[1].push(occupation);
      console.log("the saved occupation was: " + occupation);
      console.log($localstorage.storage[1]);
    };

    return {
      getAll: _getAll,
      add: _add,
      remove: _remove,
      getOccupation: _getOccupation,
      saveOccupation: _saveOccupation
    };
  });
