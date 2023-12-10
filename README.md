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


1. App strictly follows SOLID design principles.
2. Every function or component has its own single responsibility. App is very loosely coupled and divided into multiple small reusable components.
3. App follows DRY principle there is only single line of code for single purpose. Code is reused in the form of reusable components or functions or types.
4. App uses the KISS principle and the code is simple and more readable. Code refactoring is considered strictly. To make list components smaller the api logic and table columns logics are extracted from the component and added to custom hooks so components have only states and the tsx code. which looks cleaner and more readable.
5. App uses styled components and they are more readable.
6. Used .env and .env.local for local uses. The Github token is used from the .env file as per standards.
7. Comments are not used to make code neet and clean as variables and function names tells the mean of code well
8. Search functionality implemented. 
9. Pagination works perfect.
10. Unit testing done.
11. Folder structured simple components are divided as per features. If we look from top it's easy to understand

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
1. I spend 2-3 hours for main functionality to complete and 2 hours extra for bonus points(Total around 4 hours approx). spend 2 hours extra to cover code review points. Includes unit tests and pagination fixes.
2. Search functionality is completed.
3. Pagination works fine.
4. Components covered with unit testing.