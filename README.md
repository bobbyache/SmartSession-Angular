# SmartSessionUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Application Specific Documentation

## Json Server

To install Json Server run the following at your terminal `npm install json-server`
Json Server will allow you to mock a rest json server if you prefer to work on the FE without access to a real API (or you don't want to call into an real API).

To run json-server type the following at the terminal `npm run jsonserver`. This is set up in the package.json file under scripts. See the following websites for more information:

- Creating Demo APIs with json-server - https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
- JSON Server on npmjs.com: https://www.npmjs.com/package/json-server
-   https://www.youtube.com/watch?v=1zkgdLZEdwM
-   https://github.com/typicode/json-server

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

Add material icons to index.html
https://google.github.io/material-design-icons/

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

    Import MatIconModule to your materials module

For material fonts
`<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">`

### Install Flex Layout

npm install @angular/flex-layout --save

and then import the flex layout module into every feature module that needs it.

