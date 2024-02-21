#React Context API Example-1

[:point_right: Click here to see on browser]()

![react-context-api](https://github.com/kaplanh/React-Context-Api-Example-2/assets/101884444/5599ad8a-4b59-4b2c-9467-e9af74d72104)




---

| **What's used in this app ?**                                                           | **How use third party libraries** | **Author**                                                                       |
| --------------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| [useContext()/Context APi](https://react.dev/reference/react/useContext)                      | npm i / yarn add react-router-dom | [Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/) |
| [React-Router-Dom](https://reactrouter.com/en/main/start/overview)                      | npm i / yarn add react-router-dom |[Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)   |
| [useEfect() Hook componentDidUpdate()](https://react.dev/learn#using-hooks)             |                                   |                    |
| [useState() Hook](https://react.dev/learn#using-hooks)                                  |                                   |                                                                                  |
| [fetch API](https://www.npmjs.com/package/react-fetch)         | npm i/yarn add fetch              |                                                                                  |
| [react-events](https://react.dev/learn#responding-to-events)                            |                                   |                                                                                  |
| [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)            | npm i / yarn add bootstrap        |                                                                                  |
| [React-icons](https://react-icons.github.io/react-icons/)                               | npm i / yarn add react-icons      |                                                                                  |
| [lifting state up](https://react.dev/learn/sharing-state-between-components)              |                                   |                                                                                  |
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
 React-Context-Api-example(folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
│    │       ├── Courses.jsx
│    │       ├── Footer.jsx
│    │       ├── Navs.jsx
│    │
|    |--- img (folder)
│    │
│    |--- pages (folder)
|    |      ├── About.jsx
|    |      ├── Home.jsx
|    |      ├── Logın.jsx
|    |      ├── People.jsx
|    |      ├── PersonDetaıl.jsx
|    |      ├── PrivateRouter.jsx
|    |
|    |--- context (folder)
│    │       ├── LoginContext.jsx
|    |
|    |
│    ├--- App.js
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

- useContext()/ Context Api

```jsx
//! 1.Adim

//context/LoginContext.jsx
import { createContext } from "react";

//! Login Context'i olusuturuldu
export const LoginContext = createContext();


//! 2.adim
//App.jsx

import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
    // //! Local State
    const [user, setUser] = useState({ email: "", password: "" });

    console.log(user);
    return (
        <LoginContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Navs />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />

                    <Route path="people" element={<PrivateRouter />}>
                        <Route path="" element={<People />} />
                        <Route path=":id" element={<PersonDetail />} />
                    </Route>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </LoginContext.Provider>
    );
}

export default App;


//! 3.adim

import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
    const { user } = useContext(LoginContext);
    return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;


```

-   Private Router

```jsx
//PrivateRouter.jsx

import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
    const { user } = useContext(LoginContext);
    return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;



```

- Login& Logout

    ```jsx
    import { useContext } from "react";
    import Container from "react-bootstrap/Container";
    import Button from "react-bootstrap/Button";
    import Form from "react-bootstrap/Form";
    import { LoginContext } from "../context/LoginContext";
    import { useNavigate } from "react-router-dom";
    
    const Login = () => {
        // //! Local State
        // const [user, setUser] = useState({ email: "", password: "" })

    //? Consuming of login context
    const { user, setUser } = useContext(LoginContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(-1);
        // setUser({ email: "", password: "" })
    };

    return (
        <Container>
            <h1 className="text-center mt-4">LOGIN PAGE</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={user?.email}
                        required
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={user?.password}
                        required
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                </Form.Group>
                <Container className="text-center">
                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    );
    };

    export default Login;




    ```

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
