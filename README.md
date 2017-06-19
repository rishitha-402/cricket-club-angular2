# CricketClub

  This webpage was created to keep a log of cricket player's profile and their team information.

## Planning

1. Configuration/dependencies:
  * It includes all dependencies.
    You will need the following things properly installed on your computer.

    * [Git](https://git-scm.com/)
    * [Node.js](https://nodejs.org/) (with NPM)
    * [Bower](https://bower.io/)
    * [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

2. Specs

| Behavior | Input | Output |
|----------|-------|--------|
|User visits a CricketClub to list of all players | User navigates to club page | A list of players appears|
| User can click on club player's profile | User clicks on club player's profile | a detail page about the player opens|
| Users can filter the lists of players by their role for the team| User can click on the "batsman" | only players who are under the role of 'batman' appears|
| Users can click on team logo to filter players by their team and filter player by their role in that specific team | click on team logo | a list of players in that team are routed to a new page |
| Admin can add new users to the club | Admin can input a form with name, age, hand , team and role | Admin can click on add button to add users to club|
| Admin can edit new users to the club | Admin can click on edit button to edit the user's properties | Edits the properties and updates on the detail page|
| Admin can delete a user from the club | Admin can click on delete button to delete the member | It deletes the member from the club |
| User can create an account and sign up | User signs up with email and password  | User logins in |


3. Integration
* App component to display a list of all players(members).
* Player component to display each player with detail information.
* New Player component to let user fill a form and log a new player to the club.
* Edit Player component to let user edit a property of player.
* Player-list component displays a list of all players.
* Player model contains the object constructor and properties which will be exported to all other components.
* role.pipe.ts for filtering player data by role.


Components:
* app
  - app.component.ts
  - app.component.html
  - app.component.css
  - new-player.component.ts
  - new-player.component.html
  - new-player.component.css
  - edit-player.component.ts
  - edit-player.component.html
  - edit-player.component.css
  - player-list.component.ts
  - player-list.component.css
  - player-list.component.html
  - admin.component.ts
  - admin.component.css
  - admin.component.html
  - role.pipe.ts
  - team.pipe.ts


Model:
  * player.model.ts


Services:
- player.service.ts
- auth.service.ts (for user authentication)

4. UX/UI
  * Included bootstrap,css.

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
