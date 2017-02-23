# Future Me (Client)
This is the final project for the Nov -16 cohort from Craft Academy Bootcamp.

### Pivotal Tracker
[Pivotal](https://www.pivotaltracker.com/n/projects/1968195)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install
```
npm install -g cordova ionic
```

### Installing

Fork and clone repository.

```
$ npm install && bower install.
```

## Running the application in browser

```
$ ionic serve --lab
```

## Upload to Ionic view application

Download _Ionic View_ from [Google Play](https://play.google.com/store/apps/details?id=com.ionic.viewapp&hl=en) or [App Store](https://itunes.apple.com/us/app/ionic-view/id849930087?mt=8). link to download

Sign in with credentials.

Go to computers terminal,
```
$ ionic upload
```

Follow instructions in the terminal

Insert app id (xxxxxxxx)
```
Successfully uploaded (xxxxxxxx)
```

When completed the latest changes will be successfully uploaded in the ionic view application.

## How to add/delete/edit occupations

Open project in selected text editor and open the file `services.js`.

### Adding Occupations

To add a new occupation you will need to add a new hash `{ }` below the last one. Don't forget `,` after the previous hash `{}`. Fill in all necessary information needed.

```
{
  id: [replace me with a number that is not already in use],
  title: '[replace me with title of occupation]',
  image: '[replace me with image name from img folder]',
  description: '[replace me with description of occupation]',
  title_2: '[replace me with title 2]',
  description_2: '[replace me with description for title_2]',
  title_3: '[replace me with title 3]',
  description_3: '[replace me with description for title_3]',
  title_4: '[replace me with title 4]',
  description_4: '[replace me with description for title_4]',
  rating: '[replace me with stars]',
  google: '[replace me with google url]',
  path_steps: '[replace me with occupation path picture]'
}
```

To add a new image, add the file to www/img folder in project.

### Deleting Occupations
Delete the whole occupation hash `{ }`, or information inside hash `{ }` that is not necessary.

### Editing Occupations
Edit in occupation hash `{ }` by replacing information with other information.


## Built With
  * [AngularJS](https://angularjs.org) - Framework for JavaScript
  * [Ionic Framework](http://ionicframework.com) - Built with the mobile application framework Ionic
  * [ionic-ion-tinder-cards-2](https://github.com/loringdodge/ionic-ion-tinder-cards-2) - Used for implementing the tinder cards functionality
  * [ng-Storage](https://github.com/gsklee/ngStorage) - Used for saving data in local storage, including occupations as default.

## Authors
  * **Craft Academy** - [CraftAcademy](https://github.com/CraftAcademy)
  * **Ebba Aniansson** - [aniansson](https://github.com/aniansson)
  * **Kristoffer Karlsson** - [kriizjones](https://github.com/kriizjones)
  * **Philip Zudemberg** - [Philippoes](https://github.com/Philippoes)
  * **Rodrigo Muños** - [rmzse](https://github.com/rmzse)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
