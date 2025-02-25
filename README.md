# React Router v7 Test

Testing React Router v7 for routing capabilities

## What's happening

- `main.jsx` is dropping \<Main> into the root element from `index.html`
- \<Main> uses __React Router 7__ to set up routes
    - "/" renders the \<Layout> component
        - This component renders either \<Home> or \<App> depending on a piece of state called `renderApp`
        - `renderApp` controls what `HomeToRender` shows, either \<Home> if the user is logged out or \<App> if the user is logged in
            - This is the `index` of \<Layout>, which means one of them renders in its path ("/") by default
- \<Layout> renders \<Nav> and whatever component was selected from the `nav` in its \<Outlet>
    - \<About Us>, \<FAQ> & \<Contact> render with paths in the URL (/about-us, /faq & /contact, respectively)
    - \<Home> shows the landing page & \<App> shows the application but retain the "/" path
- \<Login> takes the state-setter `setRenderApp` from main -> layout -> nav -> login & updates whether to show \<Home> or \<App> in tandem with the value of its own state of `isLoggedIn`