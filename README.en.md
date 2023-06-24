**Language: [Ukrainian](README.md), [English](README.en.md).**

## Appearance

![Appearance](./assets/view.jpg)
## Description of the project

Service for manual registration of visitors in the building, which involves the frontend and [backend](https://github.com/DaniilPopov0809/tech-task-visitors-backend) with data recording in a file.
The service uses basic authorization through the administrator's login/password.

## Implemented

1. Welcome page
2. The `Visitors` page, which displays information about visitors to the building in tabular form (name, patronymic,
    time of entering the building)
3. You can add, delete or update a visitor to the table.
4. The table can be filtered by first name, patronymic, and time of entering the building
5. When deleting, changing or creating a visitor, the data in the table is updated
6. Information about the deletion, change or creation of a visitor
7. Automatic redirection of the user in case of switching to non-existent `route`
8. Authorization for the administrator
9. All data about visitors in the building is available only when logging in to the system

## Technology stack (frontend):

![JavaScrip](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-bootstrap](https://img.shields.io/badge/Reactbootstrap-35FFF8?style=for-the-badge)
![Redux Toolkit](https://img.shields.io/badge/redux-36084F?style=for-the-badge&logo=Redux&logoColor=A50EF7)
![Axios](https://img.shields.io/badge/axios-20232A?style=for-the-badge&logo=axios&logoColor=61DAFB)
![Styled-components](https://img.shields.io/badge/Proptypes-090000?style=for-the-badge)
![PropTypes](https://img.shields.io/badge/PropTypes-0BEDD7?style=for-the-badge)

## Technology stack [(backend)](https://github.com/DaniilPopov0809/tech-task-visitors-backend):

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Commander](https://img.shields.io/badge/commander-000000?style=for-the-badge)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/jwt-ED0B2F?style=for-the-badge)
![JOI](https://img.shields.io/badge/joi-F1FD1D?style=for-the-badge)

## Implementation of the project:

- The project was compiled using [create-react-app](https://create-react-app.dev/).
- Components are created using the [react-bootstrap](https://react-bootstrap.netlify.app/) library
- `backend` is built on Node.js [Visitors-BackEnd](https://github.com/DaniilPopov0809/tech-task-visitors-backend)
- The project uses the state management library [ReduxToolkit](https://redux-toolkit.js.org/).
- The necessary data is stored in `localStorage` using the [Redux Persist](https://www.npmjs.com/package/redux-persist) library

## Starting the frontend

```bash
-git clone https://github.com/DaniilPopov0809/tech-task-visitors-frontend.git
-npm i
-npm start
```

## Starting the backend

```bash
-git clone https://github.com/DaniilPopov0809/tech-task-visitors-backend.git
-npm i
```

At the root of the project, create an `.env` file and add the following data to it:

```bas
ADMIN_USERNAME='your_admin_name'
ADMIN_PASSWORD='your_admin_password'
SECRET_KEY='your_secret_key'
```

run the project:

```bas
-npm start
```
## Instructions for use

1. `Login` button - log in
2. `Logout` button - log out
3. `Add visitor` button - add a visitor
4. To delete or update a visitor, click the left button on the row of the desired visitor:
     - `Delete` button - delete the visitor
     - `Update `button - update the visitor
5. `Home` is the welcome page
6. `Visitors` - a page with data about visitors
7. Filter when clicking `Name` `Lastname` `Time visit` cells