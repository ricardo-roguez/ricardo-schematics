# Getting Started With Schematics

Prerequisites:

```bash
npm install -g @angular-devkit/schematics-cli
```

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM created by the following command:

```bash
schematics blank --name=ricardo-schematics
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

# Welcome to ricardo-schematics

Here you can find the necessary steps to use and develop new schemas

#### Install the repository dependencies and build the project

In the root of the project run

```bash
npm install && npm run build
```

#### How to run certain schematic

In the root of the Angular project run:

```bash
 ng generate ricardo-schematic:schemaName --options
```

# List of available schemas in the project

## Model:

This schema builds the basic template for the following utils:

- Model

##### options:

    --name=modelName
    --path=path/from/src

### Important!

Before to run the generate command you **_must create a json file_** with the properties and types (see example below)

##### Json Rules:

1.- The json must be in the same model folder where we want to place our new model

2.- The json name must be the dasherize name of our new model.

json example:

<pre>
{
 "data": [
   {
     "name": "id",
     "type": "number"
   },
   {
     "name": "title",
     "type": "string"
   },
  ]
}
</pre>

### Steps and example

Desired model:

`src/app/modules/home/models/new-model/new-model.ts`

Step 1:

Create the following json:

`src/app/modules/home/models/new-model/new-model.json`

Step 2:

Run the following command:

```bash
 ng generate ricardo-schematic:model --name=newModel --path=src/app/modules/home
```

##### Note:

In case you forget to add the mentioned json an explained error will be throw:

```bash
 Error: new-model.json file configuration not found in src/app/modules/home/models/new-model/new-model.json, please create it.
 If you need help, follow the readme for more instructions:
https://github.com/RicardoR/ricardo-schematics
```

# You want to help ?

Nice because we need you! Please continue reading the next steps to start collaborating

## Necessary dependencies

In order to develop schematics you have to install the following global packages:

```bash
npm install -g @schematics/schematics
npm install -g @angular-devkit/schematics-cli
npm install -g @angular-devkit/schematics
npm install -g @angular-devkit/core
```

## Create new schema in this repo

In the root of the project run the following command

```bash
schematics blank --name=schemaName
```

## Watcher run:

In order to develop quickly you can use the watcher option

```bash
npm run build:watch
```

## How to test the generate files here

Instead of testing inside of angular project you can test it locally.
Example of model schema:

```bash
 schematics .:model --name=modelDemo --path="." --debug=false
```

**NOTE**: if you dont use `--debug=false` files are not going to be created, actions are only logged by default

## Publishing

Simply run the following command: `npm publish`

### Documentation / utils from Angular:

https://github.com/angular/schematics-angular-builds
https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/core/src/utils
