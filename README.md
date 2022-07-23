# 14 Model-View-Controller (MVC): Blog

## CMS-style blog site to publish articles &amp; deployed to Heroku.

## Task

To build a Content Managementstyle blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

- This site completely from scratch and is deployed it to Heroku.
- This app follows the MVC paradigm in its architectural structure.

---

### Application deployed at live URL: https://aruw-content-management-system.herokuapp.com/

### Application GitHub URL: https://github.com/AR31313/ContentManagment_System

---

## 🏆 INITIAL SETUP

1. Run `npm install`.

2. Confirm that the MySQL server is turned on.

3. Run `CREATE DATABASE posts_db;` to create a new database.

4. Return to your console and run `node seeds/index.js` to seed the database.

5. Run `npm start`.

6. Navigate to http://localhost:3001/ in your browser.

---

```md
Users are prompted to either sign up or sign in
They can create a username and password, their user credentials are saved and are logged into the site.
Users are presented with the post title, contents, post creator’s username, and date created for that post and have the option to read comments.
When Users are idle on the site for more than a 3 hours, the cookie will expire and Users will be required to log in again to start a new session.
```

---

## Application used:

- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views.
- [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and create an Express.js API for the Controllers.
- [Dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables,
- [Bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords,
- [Express-session](https://www.npmjs.com/package/express-session) to store the session data on the client in a cookie. 
- [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

---

© 2022 Avi Rana.
