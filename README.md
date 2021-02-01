



<h1 align="center">
   <a href="#"> SHOPPING CART TEST </a>
</h1>

<h3 align="center">
    Shopping cart from an Middle Front End Developer admission test
</h3>

<p align="center">
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>
</p>


## About

This is a simple app developed to prove and improve my coding skills.
Project developed during a job challenge.

![project-screenshot](https://user-images.githubusercontent.com/66647120/105909678-a5a42380-6006-11eb-9101-832d6cd52448.png)

---

## Features

- [x] Set a local server that provides a shopping cart data

- [x] Present the data provided by the server in the browser:
   - [x] Check if the client got free shipping

---

## How it works

This project is divided into two parts:
1. Backend (shopping-cart-server folder)
2. Frontend (shopping-cart folder)

The Frontend need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/) and [Adonis.js] (https://adonisjs.com/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Backend (server)

```bash

# Clone this repository
$ git clone git@github.com/GabrielMMello/front-end-pleno-shopping-cart-test.git

# Access the project folder cmd/terminal
$ cd front-end-pleno-shopping-cart-test

# go to the server folder
$ cd shopping-cart-server

# install the dependencies
$ npm install

# Run the application in development mode
$ adonis serve --dev

# The server will start at port: 3333 - go to http://localhost:3333

```


#### Running the web application (Frontend)

```bash

# Clone this repository (Skip this if the Backend is done)
$ git clone git@github.com/GabrielMMello/front-end-pleno-shopping-cart-test.git

# Access the project folder in your terminal
$ cd front-end-pleno-shopping-cart-test

# Go to the Front End application folder
$ cd shopping-cart

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run start

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**

> See the file  [package.json](https://github.com/GabrielMMello/front-end-pleno-shopping-cart-test/blob/main/shopping-cart/package.json)

#### **Server**  ([AdonisJS](https://adonisjs.com/))

-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**

> See the file  [package.json](https://github.com/GabrielMMello/front-end-pleno-shopping-cart-test/blob/main/shopping-cart-server/package.json)

#### **Utilities**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Fonts:  **[Poppins](https://fonts.google.com/specimen/Poppins)**


---

## Author

<a href="https://www.linkedin.com/in/gabriel-mendes-mello/">
 <sub><b>Gabriel Mendes Mello</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-mendes-mello/)](https://www.linkedin.com/in/gabriel-mendes-mello/) 
[![Gmail Badge](https://img.shields.io/badge/-gabrielmendesmello@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielmendesmello@gmail.com)](mailto:gabrielmendesmello@gmail.com)
[![FreeCodeCamp Badge](https://img.shields.io/badge/-Gabriel-black?style=flat-square&logo=freecodecamp&logoColor=white&link=https://www.freecodecamp.org/gabrielmmello)](https://www.freecodecamp.org/gabrielmmello)

---

## License

This project is under the license [MIT](./LICENSE).

Made with passion by Gabriel Mello
[Call me anytime!](https://www.linkedin.com/in/gabriel-mendes-mello/)
