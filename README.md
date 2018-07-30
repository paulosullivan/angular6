# My Notes

## Component Based Framework
1. There is a root component.
2. Components can contain other components.
3. Components contain the HTML and the JavaScript.
4. Components get referenced by their name header-section => <header-section>...</header-section>

## Setup

* Download NodeJS (which comes with NPM)  
	* node -v  
	* npm -v  
* Download Angular CLI
	* npm install -g @angular/cli
	* ng -v
* IDE - Java Brains use Visual Studio Code. I'm using Intellij Ultimate (so far so good)

## New Project

* ng new <project-name>
* ng serve (Run the bare bones app that got created when we called ng new)
* localhost:4200

## New Component

* ng generate component hello-world
* Generates 4 files under a new folder - .html, .css, .ts, .spec.ts
* Updates the app.module.ts file under the root app folder. Adds a new import
* The selector is in the .ts file -> selector: 'app-hello-world'
* ng serve
* Now add the component to app.component.html -> <app-hello-world></app-hello-world>

## Component Lifecycle

https://angular.io/guide/lifecycle-hooks

## Project Struture

* app/index.html - <app-root></app-root>
* app/app.component.html|css|ts
* app/app.modules.ts
	* app/app.component.spec.ts - for unit testing
	* app/my-component/my-component.html|css|ts
	* app/my-component/my-component.spec.ts
	
## Syntax Gotchas

* Event Handling. Calling a function from component.html to component.ts
	* <button (click)="someFunction()">...</button>
* Passing objects between components
	* <app-address-card [user]="user"></app-address-card>
* Expression Language
	* Data Binding - Use {{componentVar}} or {{componentFunction()}}
* Two Way Data Binding (Banana in a box syntax)
	* [] Component to view
	* () View to component
	* <input type="text" [(ngModel)]="componentProp">

## Component CSS

* These rules will only be applied to a given component
* Angular applies a posfix to the HTML elements and to the CSS rule names to achieve this restriction
* EG .address-card[_ngcontent-c3] => Assuming c3 due to the fact that the address-card component was the 3rd component we created in the app

## Two Way Data Binding

* Used much?
* To enable update app.modules.ts
	* Add a new import - import { FormsModule } from '@angular/forms';
	* Update the imports section of the NgModule declaration - FormsModule
* Add form field - <input type="text" [(ngModel)]="componentProp">
* Also show value on page - {{componentProp}}

## Multiple Modules

* An app can contain multiple modules
* By default we get one module called app
* ng generate module <module-name>
* ng generate component [module-name/]<component-name>
* Source modules need to export the relevant components
* Destination modules need to import the source module

## Services

* ng generate service <service-name>
* Creates two files on the root of the current module
  * service-name.service.ts
  * service-name.service.spec.ts
* Now add the service to a given module
  FYI Newer versions of the CLI appear to do this by default by setting a property on the @Injectable annotation -> providedIn: 'root'
  * Open the xx.module.ts file
  * Add your service to the providers array of the @NgModule declaration. You need to import the TypeScript class as well  
  Remember the imports allow you to ref TypeScript classes and the @NgModule allows you to link these classes with Angular
 * Now add the service to a component
  * Import the service
  * Create a new instance of the service or more preferably inject the service (to allow for mocking, etc.)
  To inject you can add the service to the constructor.
  Angular looks at the constructor args and determines if any of them are injectable
  You can use the TypeScript shortcut of making the constructor private which will implicitly create an instance attribute on your component.
  You can then use this attribute outside of the constructor.
* Service scope is slightly different to normal component scope.
  There is a common shared service space between the modules (aka the injection context).
  The service only needs to be injected into one such module to become available.
  You should still define the service in the most related module (even though each module will have access).
  
## HTTP Client

* Existing service
* It is normal practice to inject these common services (via their modules) into the root app (i.e. app.module)
  * import {HttpClient, HttpClientModule} from "@angular/common/http";
  * @NgModule ... imports array ... HttpClientModule
* Add the HttpClient class to your selected component
* Call one of it's method.
  * this.httpClient.get("https://api.github.com/users/paulosullivan"); 
  * Async Call - Gives back a promise (Angular 1) or an Observable (Angular 2+)
  * let observable.subscribe(response => console.log(response));
  
## Building for Production

* ng serve
  * Dev Only
  * No optimization such as minimizing js files
* ng build
  * Adds dist folder
  * To test this locally
    * npm install http-server -g
    * http-server dist/angular6
  * Still not in prod mode.
* ng build --prod

# Notes generated by ng new

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

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

My Notes
