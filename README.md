# React-Router-Dom Example(with Axios)

[:point_right: Click here to see on browser](https://react-router-dom-example.vercel.app/)

![React-Router-Dom](https://github.com/kaplanh/react-router-dom-example/assets/101884444/1a8d9d3c-874e-4bb2-a085-9ed2678aac1c)



---

| **What's used in this app ?**                                                           | **How use third party libraries** | **Author**                                                                       |
| --------------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| [React-Router-Dom](https://reactrouter.com/en/main/start/overview)                      | npm i / yarn add react-router-dom | [Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/) |
| [useEfect() Hook componentDidUpdate()](https://react.dev/learn#using-hooks)             |                                   | [Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)                    |
| [useState() Hook](https://react.dev/learn#using-hooks)                                  |                                   |                                                                                  |
| [CRUD OPERATIONS with axios API](https://www.npmjs.com/package/axios#axios-api)         | npm i/yarn add axios              |                                                                                  |
| [react-events](https://react.dev/learn#responding-to-events)                            |                                   |                                                                                  |
| [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)            | npm i / yarn add bootstrap        |                                                                                  |
| [React-icons](https://react-icons.github.io/react-icons/)                               | npm i / yarn add react-icons      |                                                                                  |
|  [lifting state up](https://react.dev/learn/sharing-state-between-components)              |                                   |                                                                                  |
| [props-drilling](https://react.dev/learn#sharing-data-between-components)               |                                   |                                                                                  |
| [Semantic-Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) |                                   |                                                                                  |
| Deploy with [Vercel](https://vercel.com/kaplanh)                                        |                                   |                                                                                  |
| API [reqres](https://reqres.in/api/users)      |                                   |                                                                                  |

---

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```

### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```

OR

-   <strong>Clone the Repo</strong>

    ```sh
    git clone
    ```

-   <strong>Install NPM packages</strong>

    ```sh
    npm install or yarn
    ```

-   <strong>Run the project</strong>

    ```sh
    npm start or yarn start
    ```

-   <strong>Open the project on your browser</strong>

    ```sh
    http://localhost:3000/
    ```

-   ### <strong>Enjoy! 🎉</strong>

---

## Project Skeleton

```
 react-router-dom-example(folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
│    │       ├── About.jsx
│    │       ├── Courses.jsx
│    │       ├── Footer.jsx
│    │       ├── Nav.jsx
│    │
|    |--- img (folder)
│    │
│    |--- pages (folder)
|    |      ├── Aws.jsx
|    |      ├── Contact.jsx
|    |      ├── Fulstack.jsx
|    |      ├── Home.jsx
|    |      ├── Logın.jsx
|    |      ├── Next.jsx
|    |      ├── NotFound.jsx
|    |      ├── Paths.jsx
|    |      ├── People.jsx
|    |      ├── PersonDetaıl.jsx
|    |      ├── React.jsx
|    |
|    |--- router (folder)
│    │       ├── AppRouter.jsx
│    │       ├── PrivateRouter.jsx
|    |
|    |
│    ├--- App.js
│    ├--- data.js.js
│    |--- index.js
│    |--- index.css
│
│
|── .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock


```

---

### At the end of the project, the following topics are to be covered;

- React-Router-Dom

```jsx
//index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

//App.jsx
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <>
            <AppRouter />
            
        </>
    );
}

export default App;


//router/AppRouter.jsx
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Paths from "../pages/Paths";
import People from "../pages/People";
import PersonDetail from "../pages/PersonDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Fullstack from "../pages/Fullstack";
import Aws from "../pages/Aws";
import Next from "../pages/Next";
import React from "../pages/React";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { useState } from "react";

const AppRouter = () => {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || false
    );
    return (
        <div>
            <Nav user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paths" element={<Paths />}>
                    <Route index element={<Fullstack />} />
                    <Route path="fullstack" element={<Fullstack />}>
                        <Route index element={<React />} />
                        <Route path="next" element={<Next />} />
                    </Route>
                    <Route path="aws" element={<Aws />} />
                </Route>
                <Route element={<PrivateRouter user={user} />}>
                    <Route path="/people" element={<People />} />
                    <Route path="/people/:id" element={<PersonDetail />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default AppRouter;


```
   - Nested Router
```jsx


import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Paths from "../pages/Paths";
import People from "../pages/People";
import PersonDetail from "../pages/PersonDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Fullstack from "../pages/Fullstack";
import Aws from "../pages/Aws";
import Next from "../pages/Next";
import React from "../pages/React";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { useState } from "react";

const AppRouter = () => {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || false
    );
    return (
        <div>
            <Nav user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paths" element={<Paths />}>
                    <Route index element={<Fullstack />} />
                    <Route path="fullstack" element={<Fullstack />}>
                        <Route index element={<React />} />
                        <Route path="next" element={<Next />} />
                    </Route>
                    <Route path="aws" element={<Aws />} />
                </Route>
                <Route element={<PrivateRouter user={user} />}>
                    <Route path="/people" element={<People />} />
                    <Route path="/people/:id" element={<PersonDetail />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default AppRouter;


```

-   Private Router

```jsx
//router/PrivateRouter

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

const PrivateRouter = ({ user }) => {
  // const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

```

- Login& Logout

    ```jsx
    //Nav.jsx
        import { NavLink } from "react-router-dom";
        import logo from "../img/logo.png";
        
        function Nav({ user, setUser }) {
            return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/people"
                                className="nav-link"
                                aria-current="page"
                            >
                                People
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/paths"
                                className="nav-link"
                                aria-current="page"
                            >
                                Paths
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className="nav-link"
                                aria-current="page"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <NavLink
                                    to="/"
                                    className="nav-link"
                                    aria-current="page"
                                    onClick={() => setUser(false)}
                                >
                                    Logout
                                </NavLink>
                            ) : (
                                <NavLink
                                    to="/login"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Login
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
   }

   export default Nav;


    ```

- useNavigate & useParams & useLocaation

```jsx
//People.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);
    let navigate=useNavigate()

    const getPeople = () => {
        fetch("https://reqres.in/api/users")
            .then((res) => res.json())
            .then((data) => setPeople(data.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getPeople();
    }, []);

    return (
        <div className="container text-center mt-4">
            <h1>PEOPLE LIST</h1>
            <div className="row justify-content-center g-3">
                {people?.map((person) => {
                    const { id, first_name, last_name, avatar } = person;
                    return (
                        <div
                            key={id}
                            className=" col-sm-12 col-md-6 col-lg-4"
                            type="button"
                            onClick={() => navigate(`${id}`, { state: person })}
                        >
                            <img className="rounded" src={avatar} alt="img" />
                            <h6>
                                {first_name} {last_name}
                            </h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default People;



//PeopleDetails.jsx
import React, { useEffect, useState } from "react";
// import { useLocation} from "react-router-dom";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
    //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
    //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
    // let { state: person } = useLocation();
    let navigate = useNavigate();
    // console.log(person);
    //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
    let { id } = useParams();
    // console.log({ id });
    const [person, setPerson] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    // const getPerson = () => {
    //     axios(`https://reqres.in/api/users/${id}`)
    //         .then((res) => setPerson(res.data.data))
    //         .catch((err) => {
    //             setError(true);
    //             console.log(err);
    //         })
    //         .finally(() => setLoading(false));
    // };
    // useEffect(() => {
    //     getPerson();
    //     // eslint-disable-next-line
    //     // !warningden kurtulmak icin ya bunu ekleyebilirsin yada 2.yol seklinde yazabilirsin
    // }, []);
    
    // !2.yol id her degistiginde getPerson fonk calistir

    useEffect(() => {
        const getPerson = () => {
            axios(`https://reqres.in/api/users/${id}`)
                .then((res) => setPerson(res.data.data))
                .catch((err) => {
                    setError(true);
                    console.log(err);
                })
                .finally(() => setLoading(false));
        };
        getPerson();
    }, [id]);

    if (error) {
        return <NotFound />;
    } else if (loading) {
        return (
            <div className="text-center mt-4">
                <img src={spinner} alt="spinner" />
            </div>
        );
    }

    return (
        <div className="container text-center">
            <h3>
                {person?.first_name} {person?.last_name}
            </h3>
            <img className="rounded" src={person?.avatar} alt="" />
            <p>{person?.email}</p>
            <div>
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-success me-2"
                >
                    Go Home
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-warning"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default PersonDetail;



```

- NavLink  & Link & useNavigate() & Navigate

-   Semantic Commit Messages
    See how a minor change to your commit message style can make you a better programmer.

    Format: <type>(<scope>): <subject>

    <scope> is optional

    -   Example

    ```
                feat: add hat wobble
        ^--^  ^------------^
        |     |
        |     +-> Summary in present tense.
        |
        +-------> Type: chore, docs, feat, fix, refactor, style, or test.
    ```

-   More Examples:
    -   `feat`: (new feature for the user, not a new feature for build script)
    -   `fix`: (bug fix for the user, not a fix to a build script)
    -   `docs`: (changes to the documentation)
    -   `style`: (formatting, missing semi colons, etc; no production code change)
    -   `refactor`: (refactoring production code, eg. renaming a variable)
    -   `test`: (adding missing tests, refactoring tests; no production code change)
    -   `chore`: (updating grunt tasks etc; no production code change)

---

## Feedback and Collaboration

I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>
