<p align="center">
  <h1 align="center">Pressfeed</h1>
</p>

## About:
An application designed to amalgamate the news. Powered by the New York Times, Pressfeed allows users to filter recent top news articles by section, search through the rendered feed based on keywords in article titles, and save articles as favorites for further reading! Pressfeed is broken up into an MVC architecture pattern to ensure appropriate separation of concern.

<hr/>

## File Structure:
```
├── README.md
├── config.ts
├── database
│   ├── index.ts
│   └── schema.sql
├── package-lock.json
├── package.json
├── pressfeed-client
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── App.tsx
│   │   ├── api-routes
│   │   │   └── routes.ts
│   │   ├── components
│   │   │   ├── Appbar.tsx
│   │   │   ├── Article.tsx
│   │   │   ├── Feed.tsx
│   │   │   ├── Menu.tsx
│   │   │   ├── RadioButtons.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── constants
│   │   │   └── constants.tsx
│   │   ├── index.tsx
│   │   ├── react-app-env.d.ts
│   │   └── styles
│   │       ├── App.css
│   │       ├── index.css
│   │       └── styles.ts
│   ├── tsconfig.json
│   └── types.ts
├── pressfeed-server
│   ├── models
│   │   ├── getStories.ts
│   │   └── handleDatabase.ts
│   └── src
│       └── index.ts
└── tsconfig.json
```

<hr/>

## Technologies:

<table align="center">
  <tbody>
    <tr>
      <th>Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
         <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
        <img alt="Typescript" src="https://img.shields.io/badge/typescript-%23404d59.svg?style=for-the-badge&logo=typescript&logoColor=%2361DAFB" />
        <img alt="MaterialUI" src="https://img.shields.io/badge/material-ui%20-%231572B6.svg?&style=for-the-badge&logo=material-ui&logoColor=white" />
      </td>
    </tr>
        <tr>
      <th>Database</th>
      <td>
        <img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>

<hr/>

## Components:
- Appbar/Searchbar: The header of the project! Allows the user to filter the currently rendered feed based on article titles - this render is automatic once a search term three characters or longer is provided by the user

<p align="center">
  <img src="https://imgur.com/7kadKBK" alt="animated" />
</p>

- Menu: Articles are rendered based on their category, and the user selects a category via the menu. The default "Home" category will provide articles from a variety of categories that have been popular lately, but other categories include "Politics", "Technology", and "Arts" to name a few

<p align="center">
  <img src="https://imgur.com/AkfGPTH" alt="animated" />
</p>

- Feed/Article: The "press" and "feed" in Pressfeed! News articles are rendered as individual card components within a feed. Each article card displays the article's title, a primary image, the article's byline, and a brief summary of the article. The user has the option to navigate to the original article via the New York Times or add this article to their favorites!

<p align="center">
  <img src="https://imgur.com/GzHtxQR" alt="animated" />
</p>

- Radio Buttons: "Feed" and "Favorites" radio buttons allow the user to choose whether the feed should render current news articles or articles that they added to their favorites

<p align="center">
  <img src="https://imgur.com/TUVQgYz" alt="animated" />
</p>

<hr/>