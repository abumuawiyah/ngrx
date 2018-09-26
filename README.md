# NgRX Scaffold
Angular 6, CLI 6 (also known as angular workspace), NgRX and BootStrap 4

> I can't spend enough time for this scaffold as I have "hackhaton" session on saturday (scheduled before I have this assessment) and on sunday I need to taking care of my kid (get chicken pox). 

## Requirement
Please install NodeJS, Git and Yarn

## Project set-up
### Cloning the repo
```bash
git -c https://github.com/abumuawiyah/ngrx.git
```
### Remote the repo 
> If you like to contribute, feel free to remote this repo.

Add remote origin
```bash
git remote add origin https://github.com/abumuawiyah/ngrx.git
git pull origin master
```

## Kick-start

```bash
yarn
```
Build the job-ads-api library
```bash
ng build job-ads-api
```
Start new checkout app
```bash
ng serve seek-checkout-system --aot
```

## job-ads-api
The job-ads-api is the library that can be used across projects. 
The job-ads-api contains methods integrated with dummy services that I wrote as a faaS in Webtask cloud.

## Component-based
As Angular 6 is component-based framework, in this scaffold is demostrate several levels of component.

### Component as an Application
This scaffold created as a Workspace. Workspace means it's act as a container for the applications and libraries. By providing the project as a Workspace, the applications and the libraries live in the Workspace as monorepo. The idea is pretty similar with LernaJS, nwrl.io and Yarn workspace but the different is this stuff is coming from Angular.

> component as an application is the approach for micro-frontends.
> For example we can invoke the seek-checkout-system as a component
> isolated in Web-component shadow-dom. Imagine that we have 2 teams 
> works  on 2 different projects (checkout & pricing) and those
> projects used in the same page e.g. checkout application pass
> selected items to pricing application.

```bash
ng generate application seek-checkout-system
```

Please read more details on this article [UI Microservice](https://micro-frontends.org/)

### Component as a Library
Library is a component that can be reuse accross projects. To use library in other workspace, adding the library by configure the projects in angular.json

We develop the job-ads-api as a library

> An examples of third-party library is ngb-bootstrap, ngx-datatable and manymore

```bash
ng generate library job-ads-api
```

### Component as a Widget
Widget is a component that can be reuse across specific project. By referring to Principle of Least Power, we are not abstracting everything. 

We develop SeekContainer and SeekUl as a widget

Read more on here [Least Power rules](https://en.wikipedia.org/wiki/Rule_of_least_power)

## Run the test
seek-checkout-system

```bash
ng test seek-checkout-system
```

job-ads-api

```bash
ng test job-ads-api
```

## Run the build for prod

seek-checkout-system

```bash
ng build seek-checkout-system --prod
```

job-ads-api

```bash
ng build job-ads-api
```

## Project status
- unit test - 60% done
- integration test - 20% done
- automation test - 20% done

## Plan for enhancement
Adding the state management make the code clean & predictable but is make us spend more effort to code (reducer, effect and action codes). 
I plan to use [NgRX schematics](https://github.com/ngrx/platform/tree/master/docs/schematics) to easily generate reducer, effect and actions thru CLI
