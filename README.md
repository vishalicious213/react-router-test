# React Router v7 Test

Testing React Router v7 as a routing library, not as a full framework

## What's happening

- `main.jsx` is dropping \<Main> into the root element from `index.html`
- \<Main> uses __React Router 7__ to set up routes
    - "/" renders the \<Layout> component
        - This component renders either \<Home> or \<App> depending on a piece of state called `renderApp`
        - `renderApp` controls what `HomeToRender` shows, either \<Home> if the user is logged out or \<App> if the user is logged in
            - This is the `index` of \<Layout>, which means one of them renders in its path ("/") by default
- \<Layout> renders \<Nav> at the top of the browser window & the component that was selected from the `nav` in its \<Outlet>
    - \<About Us> renders with the `/about-us` path
    - \<FAQ> renders with the `/faq` path
    - \<Contact> renders with the `/contact` path
    - \<Home> shows the landing page  & retains the `/` path
    - \<App> shows the application & retains the `/` path
- \<Login> takes the state-setter `setRenderApp` from main -> layout -> nav -> login via prop-drilling
    - It updates `renderApp` to display \<Home> if `isLoggedIn` is `false`
    - It updates `renderApp` to display \<App> if `isLoggedIn` is `true`