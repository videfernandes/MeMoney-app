# MeMoney Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server
Nodejs must be installed on the machine.
Angular, express and axios must be installed on the local directory.

To install Nodejs go to https://nodejs.org/en/.
To install angular, express and axios in the local directory, do:
    npm install -g @angular/cli
	npm install express body-parser --save
	npm instal axios
Then use ng build.

To execute the aplication, is need to open two terminals. So in the respective order shown below, do:
    To start backend server:
        Open a terminal, go to the project repository.
		Type: npm start

    To start front end, angular server:
        Open a terminal, go to the project repository.
	    Type: ng serve --proxy-config proxy.config.json

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli)

