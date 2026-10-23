# Angular CRUD, Binding and Pipes Demo

A small Angular application demonstrating component-driven CRUD operations on a local in-memory user list, along with Angular template binding and a custom capitalization pipe.

## Features

- Add a user with a name and address.
- Edit an existing user.
- Delete a user with a confirmation prompt.
- Display a local sample user list.
- Apply a custom pipe to transform displayed text.
- Practice Angular component templates, event handling, and data binding.

> **Scope:** This is a learning/demo application. User records are stored in component memory only; changes are not persisted to a backend or database and reset when the app reloads.

## Technology stack

- Angular 16
- TypeScript
- Angular Router and Forms
- Custom Angular pipe
- Jasmine and Karma test tooling

## Run locally

Prerequisites: Node.js and npm compatible with the project's Angular CLI 16 toolchain.

~~~bash
npm ci
npm start
~~~

Open `http://localhost:4200/`.

## Build and test

~~~bash
npm run build
npm test
~~~

## Project structure

~~~text
src/app/
├── Models/                # User model
├── user/
│   ├── user.component.*   # User list and CRUD interactions
│   └── capital-pipe.pipe.ts
├── app-routing.module.ts
└── app.module.ts
~~~

## Suggested next steps

- Add form validation and accessible feedback instead of JavaScript alerts.
- Add unit tests for add, edit, delete, and pipe behavior.
- If persistence is required, connect the app to a documented API and move data operations into a service.
- Add screenshots under `docs/screenshots/` when sharing a visual portfolio.

## License

No license file is currently included. Add an explicit license before inviting others to reuse or redistribute this project.
