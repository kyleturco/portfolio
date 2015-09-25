angular
  .module('kyleTurco')
  .controller('artCtrl', function ($scope) {

    var main = this;

    main.paintings = [
        {
            id: 'one',
            title: 'Italy Street',
            medium: 'Pen & Ink',
            notes: 'Drawn from a photo',
            url: 'assets/img/italy-street-2012.jpg'
        },
        {
            id: 'two',
            title: 'Elephant',
            medium: 'Pen & Prismacolor Marker',
            notes: 'Drawn from a National Geographic',
            url: 'assets/img/elephant-january-2012.jpg'
        },
        {
            id: 'three',
            title: 'Boston Building',
            medium: 'Ink & Watercolor',
            notes: 'Drawn from a photo',
            url: 'assets/img/boston-building-january-2012.jpg'
        },
        {
            id: 'four',
            title: 'Man - Italy',
            medium: 'Pen & Prismacolor Marker',
            notes: 'Drawn from a photo',
            url: 'assets/img/italy-man-december-2011.jpg'
        }
    ];

    main.digitals = [
        {
            id: 'one',
            title: 'Soccer Player',
            medium: 'Adobe Illustrator',
            notes: 'Created for TechnologyAdvice.com',
            url: 'assets/img/digital-soccer.png'
        },
        {
            id: 'two',
            title: 'Machine',
            medium: 'Adobe Illustrator',
            notes: 'Created for TechnologyAdvice.com',
            url: 'assets/img/digital-machine.png'
        },
        {
            id: 'three',
            title: 'Optometry',
            medium: 'Adobe Illustrator',
            notes: 'Created for TechnologyAdvice.com',
            url: 'assets/img/digital-optometry.png'
        },
        {
            id: 'four',
            title: 'Marathon Runner',
            medium: 'Adobe Illustrator',
            notes: 'Created for TechnologyAdvice.com',
            url: 'assets/img/digital-marathon-runner.png'
        }
    ];

    main.covers = [
        {
            id: 'one',
            title: 'Weight of the World - Cover',
            medium: 'Pen & Ink',
            notes: 'Created for Colma - Drawn from a Smithsonian photo',
            url: 'assets/img/colma-weight-of-the-world-cover.jpg'
        },
        {
            id: 'two',
            title: 'Find Your Way - Cover',
            medium: 'Ink drawing - digitized with Photoshop and Illustrator',
            notes: 'Created for Dynamo',
            url: 'assets/img/dynamo-find-your-way-cover.jpg'
        },
        {
            id: 'three',
            title: 'Live at Oceanway - Cover',
            medium: 'Created in Adobe Illustrator',
            notes: 'Created for Dynamo',
            url: 'assets/img/dynamo-ocean-way-cover.jpg'
        },
        {
            id: 'four',
            title: 'Toothbrush EP - Cover',
            medium: 'Ink & Watercolor - digitized in Photoshop',
            notes: 'Created for Sam Allen',
            url: 'assets/img/sam-allen-toothbrush-ep.jpg'
        }
    ];

    main.modalLoad = function (id, group) {
      main[group].forEach(function (painting) {
        if (painting.id === id) {
          main.current = painting;
        };
      })
      $('#artModal').modal('show');
      $('#artModal').on('hidden.bs.modal', function (e) {
        $scope.$apply();
      });
    };

    main.modalHide = function () {
      $('#artModal').modal('hide');
    };


  });
