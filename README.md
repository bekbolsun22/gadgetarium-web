# Gadgetarium

Gadgetarium is a e-commerce web-application that allows users to browse and purchase connected devices. The website features a variety of devices, such as smart home devices, IoT devices, and more. Users can also manage their purchase history and track their orders. 

## Tech Stack

- React TS
- RTK Query
- Material UI
- Styled MUI
- React-Router-Dom v.6
- React-Hook-Form


## Run Locally

Clone the project:

```bash
  git clone https://github.com/bekbolsun22/gadgetarium-web.git
```

Go to the project directory:

```bash
  cd gadgetarium-web
```

Run commands:

`npm install`

It installs all required dependencies included in package.json file

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Documentation

### Project rules & Style guides

#### Folder structure


`src/assets`

This folder contains subfolders: `styles`,  `icons` and `images`.

`src/components`

This folder contains reusable stateless and stateful components. It has following sub folders:

`src/components/UI`

This folder containes common presentational components(eg. Button, Input, etc.)

`src/components/Company/Form/CreateCompanyForm.tsx`

 Inside `src/components` we may have also other domain specific components like `src/components/Post/PostCard.tsx`

`src/pages`

Each page includes many small components. This folder is similar to src/components, but it contains our large components which is literally our app pages.

`src/utils/constants`

This folder to define some objects or arrays and import them anywhere we want to use. These constants could be list items or some text or some words. This is a good practice to keep them separate from components.

`src/utils/helpers`

We can define helper functions in this folder. There are some functions that we might need across application which generate some certain data or do something special. It’s better to keep them separate from components in order to make them reusable and make code cleaner.

`src/utils/helpers/hooks`

The hooks folder contains every single custom hook in your entire project. This is a useful folder to have in any size project since almost every project will have multiple custom hooks so having a single place to put them all is really useful.



`src/layout`

It contains the layout components\*.
Layout is the common top wrapper component usually will contain Navbar , Sidebar and Children components

`src/redux`

All type definitions, actions, reducers and the redux index belong to this folder.

`src/routes`

We’ll need this folder for react-router configs and route related components.

`src/config`

It contains the config files using the env and others

### Style Guide

#### Linters

We are using Eslint and prettier linter tools to find bugs and errors before they happen.
We'll spend less time testing new features and team's code will be more consistent.
We are following AirBnB JavaScript style guide

### How to work with Git?

#### How to name a branch?

`feature/branch-name`

If you are working on a new feature, you should checkout from `development` branch and name the branch as `feature/branch-name`.\
After finishing your task, merge your current branch into the `development` branch by creating `pull request`

`bugfix/branch-name`

If you are fixing a bug on a development environment, you should checkout from `development` and name the branch as `bugfix/branch-name`.\
After finishing your bugfix, merge your current branch into the `development` branch

`hotfix/branch-name`

If you are fixing a urgent bug on a production, you should chekout from `master` branch and name the branch as `hotfix/branch-name`\
After finishing your hotfix, merge your current branch into the `staging` branche by creating `pull request`.\
Then test your changes on the `staging` environment, if it's OK, then you must merge changes with `development` and `master` branches.
