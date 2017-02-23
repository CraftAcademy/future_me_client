angular.module("futureme.services", [])

  .factory('StorageService', function ($localStorage, $filter) {
    $localStorage = $localStorage.$default({

      occupations: [
        {
          id: 1,
          title: 'bagare',
          image: 'Bagare.png',
          description: 'Bagare kan arbeta på ett industribageri, ett mindre bageri med tillhörande butik eller på ett konditori. Arbetsuppgifterna skiljer sig åt beroende på var man arbetar men det som tillverkas i en process från ax till limpa är matbröd, vetebröd och kakor.',
          title_2: 'Arbetsuppgifter',
          description_2: 'Industribageri · Bagare på ett automatiserat industribageri övervakar bakningen som sker med hjälp av maskiner. De som arbetar på ett industribageri kan även kallas bageriarbetare. De knappar in receptet på den produkt som ska bakas i bakdatorn. Brödtillverkningen sker sedan helt automatiskt på “löpande band”. Ingredienserna blandas efter ett inprogrammerat recept. Degen delas upp och formas. Jäsningen sker medan degen transporteras på en jäsbana. Gräddningen sker i en tunnelugn genom vilken bröden förs på en linje. Sedan går brödet via en bana till paketeringen. Vissa industribagerier har dock ett större antal manuella moment. Att sätta degen kan exempelvis göras för hand, liksom att sköta utbakning och gräddning. Tillverkningen av kaffebröd är inte heller lika automatiserad som tillverkningen av matbröd. Mindre bageri · Även de mindre lokala bagerierna och butikerna är välutrustade med maskiner och kan ibland ha bakdator. Det vanliga är dock att de flesta arbetsmomenten utförs för hand vilket ger ett mer omväxlande arbete. Bagarna gör då allt från att väga upp ingredienserna till att forma, jäsa och grädda brödet eller kakorna. De tar också hand om disken och ser till att hålla arbetsplatsen ren och snygg.',
          title_3: 'Arbetsplatser',
          description_3: 'I dag produceras en del matbröd av ett antal stora industribagerier. Men en ökande del bröd bakas även i lokala, närproducerande bagerier. Många butiker bakar även sitt eget bröd och säljer direkt till kunderna utan mellanhänder',
          title_4: 'Arbetstider',
          description_4: 'Bagare på industribagerier arbetar ofta natt och helgarbete varannan helg eller liknande förekommer. Även skiftgång kan förekomma. Som bagare på ett litet bageri eller konditori börjar man oftast arbeta mycket tidigt på morgonen.',
          rating: '★★★★☆',
          google: 'https://www.google.se/#q=vad+g%C3%B6r+bagare%3F&*?',
          path_steps: 'Bagare(transparent).png'
        },
        {
          id: 2,
          title: 'sjuksköterska',
          image: 'Sjuksköterska.png',
          description: 'Sjuksköterskornas arbetsuppgifter och arbetsplatser varierar, men innebär framförallt att främja hälsa samt förebygga sjukdom och ohälsa.',
          title_2: 'Arbetsuppgifter',
          description_2: 'Som sjuksköterska arbetar du med omvårdnad inom en mängd olika specialområden. Allt från skolhälsovård, operation och kirurgi till äldrevård och psykiatri. Kärnan i yrket är omvårdnad, vilket innebär kunskap om hur människan bäst kan bevara sin hälsa och hur man undviker ohälsa. Sjuksköterskan är den på ett sjukhus, eller annan plats, som ansvarar för att medicinska ordinationer blir ordentligt genomförda och att patienterna får den vård de behöver. Sjuksköterskan administrerar läkemedel, utför behandlingar och informerar både patienter och anhöriga. I ditt arbete som sjuksköterska kommer du även att få handleda nyanställda och studerande och det kommer tillfällen då du får verka som arbetsledare.',
          title_3: 'Arbetsplatser',
          description_3: 'Sjuksköterskor kan arbeta inom landsting, kommun eller privat verksamhet. Exempel på arbetsplatser är sjukhus, kommunal äldrevård, vård och omsorg för funktionshindrade, vårdcentraler samt öppenvård.',
          rating: '★★★★☆',
          google: 'https://www.google.se/#q=vad+g%C3%B6r+sjuksk%C3%B6terska%3F&*?',
          path_steps: 'Nurse(transparent).png'
        },
        {
          id: 3,
          title: 'möbeldesigner',
          image: 'Mobeldes.png',
          description: 'Att jobba med möbeldesign är ett kreativt och utmanande yrke eftersom det kräver att de lyckas vara orginell och skaffar dig ett eget bildspråk. för att lära dig de grundläggade kunskaperna inom yrket kan en utbildning vara bra.',
          title_2: 'Arbetsuppgifter',
          description_2: 'Möbeldesign är konsten att formge och gestalta möbler. Som möbeldesigner följer du en process som börjar med en kartläggning av mål och förutsättningar för projektet, varefter du under projektets gång förkastar eller förädlar olika skisser och prototyper. En designprocess kännetecknas även av att målet är formulerat utifrån ett behov, snarare än en specifik lösning. Möbeldesigners jobbar ofta digitalt i datorprogram men kan också jobba tredimensionellt med händerna under skissprocessen för att komma på och testa idéer. Idag är det allt viktigare för möbeldesigners att vara medveten om hur möbeln representerar företagets identitet. Därför måste möbeldesignern kunna kommunicera med och ha intresse för, både marknad och teknik. En möbeldesigner kan vara specialiserad på ett visst material, en viss kundgrupp, en viss slutprodukt eller en viss tillverkningsprocess.',
          title_3: 'Arbetsplatser',
          description_3: 'Som möbeldesigner kan du jobba på möbelföretag, designbyråer, arkitektbyråer eller starta eget företag.',
          rating: '★★★☆☆',
          google: 'https://www.google.se/#q=vad+g%C3%B6r+m%C3%B6beldesigner%3F&*?',
          path_steps: 'FurnDesign(transparent).png'
        }
      ],
      saved_occupations: []
    });

    var _getAll = function () {
      return $localStorage.occupations;
    };
    var _add = function (occupation) {
      $localStorage.occupations.push(occupation);
    };
    var _remove = function (occupation) {
      $localStorage.occupations.splice($localStorage.occupations.indexOf(occupation), 1);
    };

    var _getOccupation = function (id) {
      array = $localStorage.occupations;
      return $filter('filter')(array, {'id': id});
    };

    var _saveOccupation = function (occupation) {
      for (var i = 0; i < $localStorage.saved_occupations.length; i++) {
        if ($localStorage.saved_occupations[i].id === occupation.id) {
          return;
        }
      }
      $localStorage.saved_occupations.push(occupation);
    };

  var _getSaved = function () {
    return $localStorage.saved_occupations;
  };

  var _deleteSaved = function (occupation) {
    for(var i=0; i < $localStorage.saved_occupations.length; i++) {
      if($localStorage.saved_occupations[i].id == occupation.id)
      {
        $localStorage.saved_occupations.splice(i,1);
      }
    }
  };

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove,
    getOccupation: _getOccupation,
    saveOccupation: _saveOccupation,
    getSaved: _getSaved,
    deleteSaved: _deleteSaved
  };
});
