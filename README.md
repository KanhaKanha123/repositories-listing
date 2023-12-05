## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Notes about the app design`

1. App stricly follows SOLID design principles.
2. Every function or component have it's own single responsiblity. App is very loosely copuled devided into multiple small resuable components.
3. App follows DRY priniciple there is only single line of code for single purpose. Code is reused in th form of resusable components or functions or types.
4. App uses KISS principle the code is simple and more redable. code refactoring is considered strictly. To make list component smaller the api logic and table columns logics are exctracted from the component and added to custom hooks so component have only states and the tsx code. which looks cleaner and more redable.
5. App uses styled components they are more redable.
6. Used .env and .env.local for local uses. the Github token is used from .env file as per standards.
7. Comments are not used to make code neet and clean as variables and function names tells the mean of code well
8. Search functionality implemented. 
9. Pagination doesn't work proper when you jump direct from 1-4 or 1-7..
10. Folder structured is simple components are devided as per features. If we look from top it's easy to understand

`src
|--asset
|--components
       |--header
       |--repositories-list
       |--shared(reusable components)
            |--error
            |--icon
            |--link
            |--loading
|--error-boundry
|--graphql
      |--queries
      |--client
|--hooks
|--pages(top level to intract with router)
    |--repositories-list-page
|--router
     |-- '' have only one route for now
|--store
     |--context Api(For sharing data)
|--.env(To store app level variables)
`

### `Important Notes`
1. I spend 2-3 hours for main functionality to complete and 2 hours extra for bonus points(Total arround 4 hours approx).Because i spend too much time, i skip few tests for major components. I started writing for isolated/resuable shared component then realised it's more time consuming so i did not write more tests. I hope i will get chance to explaine more in live session.
2. Search functionality is completed.
3. Pagination doesn't quite work proper when we click previous steps. Graphql before and after props is behaving little strange. It was more time consuming to investigate further so i just kept it like this. It's nice working condition.
4. When you jump pages 1-5 or 3-7 it's breaking the pagination.