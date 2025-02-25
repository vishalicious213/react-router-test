# React Router v7 Test

Testing React Router v7 for routing capabilities

## What's happening

- `main.jsx` is dropping \<Main> into the root element from `index.html`
- \<Main> uses __React Router 7__ to set up routes
    - "/" renders the \<Layout> component
        - This component renders either \<Home> or \<App> depending on a piece of state called `renderApp`
        - `renderApp` controls what `HomeToRender` shows, either \<Home> if the user is logged out or \<App> if the user is logged in
            - This is the `index` of \<Layout>, which means one of them renders in its path ("/") by default