# Enterprise Layout

## Description

Frontend project for Platzi Master

## Getting started

First you'll have to install some dependencies

``npm i``

## Init

Then you're ready to run the project

``npm start``

## Testing

For testing run the following command.

``npm test``

This will run the project on port 9876 and open Cypress interface

## Technical information

### Languages

- JavaScript (Vanilla)
- CSS
- HTML

### Technologies

- Web Components

### Dependencies

Right now the project do use module type scripts which means that it only runs on a server. If you use VSCode I recommend [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Design information

### CSS Methodology

- BEM

### Mock

![mock](./assets/mock.png)

### Dimensions

- Width: 662px
- Height: 827px

### Dependencies

The project is written to fit the mock dimensions, in bigger dimensions it will fit but lose some relations. For a more equal look I recommend to run it at the same dimensions.

## Directory structure

```
enterprise-layout
│   cypress.json (Here you'll find Cypress configuration file)
│   db.js (Here you'll find the data that fill the project)
│   index.html (Here you'll find the principal project layout)
│   index.js (Here you'll find the principal project script)
│   package.json (Here you'll find the information related to the project)
│   README.md (You're here 😀)
│   server.js (Here you'll find the server script to run the app)
│
└───assets (Here you'll find all the assets used in the project)
│   │   1.jpg
│   │   2.png
│   │   3.png
│   │   4.png
│   │   mock.png
│
└───components (Here you'll find all the reusable and specific components)
│   │   EntrySection.js
│   │   NavLink.js
│   │   RecentNew.js
│   │   ServiceLink.js
│   │   SolutionCard.js
│   │   WelcomeText.js
│
└───containers (Here you'll find all the reusable and specific containers)
│   │   ElementsMapper.js
│
└───cypress (Here you'll find all related to tests)
│   │
│   └───fixtures (Here you'll be add all the json with the fixtures information, like global variables)
│   │   │   colors.json
│   │
│   └───integration (Here you'll add all the tests you want to run)
│   │   │
│   │   └───components (Here you'll add all the tests related to components)
│   │   │       EntrySection.spec.js
│   │   │       NavLink.spec.js
│   │   │       RecentNew.spec.js
│   │   │       ServiceLink.spec.js
│   │   │       SolutionCard.spec.js
│   │   │       WelcomeText.spec.js
│   │   │
│   │   └───containers (Here you'll add all the tests related to containers)
│   │           ElementsMapper.spec.js
│   │
│   └───plugins (Here you'll add all plugins related to Cypress)
│   │   │   index.js
│   │
│   └───support (Here you'll add third party dependencies needed to extend Cypress behavior and custom commands to use in the tests)
│   │   │   commands.js
│   │   │   index.js
│   │
└───styles (Here you'll find all related to styles)
│   │
│   └───components (Here you'll find all styles related to components and containers)
│   │   │   banner.css
│   │   │   entries-container.css
│   │   │   navbar.css
│   │   │   recent-new.css
│   │   │   service.css
│   │   │   solution-card.css
│   │   │   solution-cards-container.css
│   │   │   welcome-text.css
│   │
│   └───fonts (Here you'll find all fonts used by the project)
│   │   │
│   │   └───asap-italic (Used by the header logo)
│   │   │   │   Asap-Italic.ttf.eot
│   │   │   │   Asap-Italic.ttf.svg
│   │   │   │   Asap-Italic.ttf.woff
│   │   │
│   │   └───source-sans-pro (Used in general by the project)
│   │       │   Source-Sans-Pro.ttf.eot
│   │       │   Source-Sans-Pro.ttf.svg
│   │       │   Source-Sans-Pro.ttf.woff
│   │
│   └───foundations (Here you'll find the styles that define the project, variables, rules and modifiers)
│   │   │   colors.css
│   │   │   modifiers.css
│   │   │   spacing.css
│   │   │   typography.css
```