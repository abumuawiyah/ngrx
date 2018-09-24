# GS Angular Scaffold
Angular 6, CLI 6, NgRX and BootStrap 4

## Project set-up
### Cloning the repo with no ssh keys set
```bash
git -c http.sslVerify=false https://gitlab.nat.bt.com/gs-scaffolds/gs-angular.git
```
### Remote the repo 
> Make sure you run "git init" first in empty folder

configure info into git
- git config http.sslVerify false
- git config user.email user.email@bt.com
- git config user.name "User Name"

Add remote origin
```bash
git remote add origin https://gitlab.nat.bt.com/gs-scaffolds/gs-angular.git
```

Grab the code
```bash
git pull origin master
```

## Kick-start
Install packages using NPM/Yarn
NPM
```bash
npm install
npm start
```
Yarn
```bash
yarn
yarn start
```
Add remote origin
```bash
git remote add origin https://gitlab.nat.bt.com/gs-scaffolds/gs-angular.git
```
## Branching model
T.B.D - Trunk Based Development [Check it out!](https://trunkbaseddevelopment.com/)
- Trunk
- Feature branch
- Release branch

> Practice for new feature

```bash
# comment: create new branch for new feature
git checkout -b <feature-name> 
# comment: once you statified with the code add and commit it
git add --all
git commit -m "commit feature code into branch"
git push origin <feature-name>
# comment: merge your branch with trunk and make sure no conflicts
git fetch
git merge origin/master
# comment: merge your branch into trunk
git checkout master
git push origin <feature-name>:master
```
> Practice for release branch
To be update...

## Development
### Creating new page
```bash
cd src\app\layout
ng g m <page-name> --routing
ng g c <page-name> --flat
# comment: folder for page components - shareable across page only
mkdir components
# comment: folder for smart-components
mkdir containers
```

### Creating reusable component/widget/dumb component
```bash
cd src\app\shared
ng g m <put specific name e.g. "table">
cd table
# comment: specific components
mkdir components
cd components
ng g c <put specific name e.g. "advanced-table">
```

## Build

```bash
yarn run build
```

## Test

```bash
yarn run test
```

### Generate code-coverage report

```bash
yarn run testcoverage
```

## Automation test (e2e)

> setting up webdriver-manager by run

```bash
yarn add webdriver-manager

yarn run e2e

# global (recommended) - need to be run once
webdriver-manager update --proxy <proxy-url>
```

## Serve prod version

```bash
node node_modules\http-server\bin\http-server dist
```
open the page in localhost:8080

## NgRX helper using ngrx-schematic
[Link](https://github.com/ngrx/platform/tree/master/docs/schematics)
[NgRX documentation](/README.ngrx.md)

```bash
yarn add @ngrx/schematics --dev
ng config cli.defaultCollection @ngrx/schematics
```
open the page in localhost:8080

## Publishing to Internal NPM

Publish the project using the following commands.

    npm version patch
	npm run build
	npm publish

Push the new version back up to the master.

## Using the package
