# SmartSessionUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Build and Launch Process.

#### Open terminal 1:
```
npm run generate:jsonserver
```
```
npm run jsonserver
```
#### Open terminal 2:
```
ng serve
```
or
```
ng test
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To serve from another port you can use the following command:

`ng serve --port 4401` 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

There are two configurations one can use test. You configure settings in the karma.conf.js.

### Default Karma Reporter

```
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/SmartSessionUi'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
```
### Use Mocha Reporter

To rather use the mocha reporter, one should remove the karma-jasmine-html-reporter from the plugins in karma.conf.js. One should replace this line with:
`require('karma-coverage-istanbul-reporter'),`

- Replacement to reporters: `reporters: ['mocha'],`

- Run the following command: `npm install karma-mocha-reporter --save-dev`

- Remove all node_modules and do an npm install.

[Add Mocha reporter for Karma unit tests to your Angular CLI project](https://juristr.com/blog/2018/02/add-mocha-reporter-angular-cli-tests/)


```
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      // require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/SmartSessionUi'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};

```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Application Specific Documentation

## Json Server

### REST Research

- [REST API concepts and examples (9 min)](https://www.youtube.com/watch?v=7YcW25PHnAA)
- [REST API & RESTful Web Services Explained | Web Services Tutorial (16 min)](https://www.youtube.com/watch?v=LooL6_chvN4)

### Notes

To install Json Server run the following at your terminal `npm install json-server`
Json Server will allow you to mock a rest json server if you prefer to work on the FE without access to a real API (or you don't want to call into an real API).

To run json-server type the following at the terminal `npm run jsonserver`. This is set up in the package.json file under scripts. See the following websites for more information:

- [Creating Demo APIs with json-server](https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server)
- [JSON Server on npmjs.com](https://www.npmjs.com/package/json-server)
- [Create a Fake REST API with JSON-Server](https://www.youtube.com/watch?v=1zkgdLZEdwM)
- [GitHub Page](https://github.com/typicode/json-server)

All your configuration is added to the package.json file. This configuration points to the json-server.json config file and it has further settings such as the default host, port, and custom route mappings.

### Use Multiple json-server Files

To cater for the generation of a single json server file from a list of more representative files (ie. goals.json, tasks.json etc.). The following package will
need to be installed:

`npm install json-concat --save-dev`

Now create a concat-json.js file and add the following code in it:

`
var jsonConcat = require('json-concat');
jsonConcat({
        src: 'mocks/data',
        dest: 'mocks/db.json',
    }, function(json){
    console.log(json);
});
`
A reference to this file needs to be added to the package.json file:

[Mock Data for Angular 6 applications with JSON Server — Part 2(final)](https://medium.com/@kaustubhtalathi/mock-data-for-angular-5-applications-with-json-server-part-2-final-427bd68005bb)

`"generate:jsonserver":"node \"./mocks/concat-json.js\"",`

Now you can run `npm run generate:jsonserver` to generate the data in your db.json file.

Note: db.json is added to gitignore because it is now generated.

### Use Faker to Generate Data

- [GitHub Page](https://github.com/marak/Faker.js/)

## Setting up Material

You can go to angular.material.io and if you go to Guides, Getting Started... all the steps you need to set up are there.

So the steps are

- Install Angular Material and Angular CDK
- Animations Support
- Import the component modules
- Include a theme
- Gesture support (hammerjs)
- Add material icons

`
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save hammerjs
`

ignore errors if coming from codelyzer since this is a linting toool

import BrowserAnimationsModule into AppComponent
Create a new module to take in all your material imports

`ng g m material --dry-run`

`ng g m material --flat`

material.angular.io <------------ documentation

Now you must include a theme
So add this to your styles.scss
You can find these themes: node_modules\@angular\material\prebuilt-themes

`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

Open up main.ts because we need to import hammerjs

`import 'hammerjs';`

[Add material icons to index.html](https://google.github.io/material-design-icons/)

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

    Import MatIconModule to your materials module

For material fonts
`<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">`

### Install Flex Layout

npm install @angular/flex-layout --save

and then import the flex layout module into every feature module that needs it.

## Research into Authorization and Authentication

- [Article 1 - Angular 8 - JWT Authentication Example & Tutorial](https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial)
- [Article 2 - Angular 8 - Role Based Authorization Tutorial with Example - Jason Watmore](https://jasonwatmore.com/post/2019/08/06/angular-8-role-based-authorization-tutorial-with-example)

## Research into adding Charts

https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f
