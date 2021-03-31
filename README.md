# OnlinePwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

*********************

step 1:

npm install json-server

step 2:

create a db.json in main folder (out of src) folder

and add two records for to-do list

step 3:
    npm install concurrently


step 4: to start the application

    npm run start

step 5: 
create employee
    ng g c employee

step 6:
create employee add
ng g c employee-add

step 7:
create model
ng g class model\employee

step 8:
create service
ng g s serives\employee

step 9: adding service worker modules

ng add @angular/pwa

step 10: build the application
ng build --prod

step 11: to deploy this application we need server
npm install -g http-server

step 12:
goto dist\online-pwa

tep 13: http-server -p 8081

step 14: open ngsw-config.json
add the following  element

"dataGroups":[
    {
        "name":"employees",
        "urls":[
            "http://localhost:3000/employees"
        ],
        "cacheConfig":{
            "maxSize": 5,
            "maxAge":"1h",
            "timeout":"10s",
            "strategy": "freshness"
        }
    }
]