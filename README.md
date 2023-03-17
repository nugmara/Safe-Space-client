# Safe Space

<br>

## Description

A mobile phone application to help those people with any type of issues talk about it. About themlselves, a space for them to speak without fear. And in the event that they need professional help, provide it for them. 

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start making my own blog
-  **Login:** As a user I can login to the platform so that I can write about me and see what other people write
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Friends** As a user I can follow other users
-  **List of Comments** As a user I can start a conversation in a post with other users
-  **Search for Users** As a user I want to search friends
-  **Add posts** As a user I can add post
-  **Delete elements** As a user I can delete my posts
-  **Check profile** As a user I can check my profile and stats

## Backlog

User profile:
- see the followers and following of another users and my own
- be able to like the posts

Posts: 
- remove the comments of a post
- be able to post images

Chat: 
- start a conversation in a private chat
- be able to make a group chat

Search:
- search hashtags and interest infromation, not just users

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | LogoHome                     | public `<Route>`            | Home Page                                        |
| `/signup`                 | Signup                       | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to login after signup |
| `/signin`                  | Signin                      | anon only `<AnonRoute>`     | Login form, link to home, navigate to homepage after login  |
| `/logout`                 | n/a                            | user only `<IsPrivate>`  | Navigate to homepage after logout, expire session             |
| `/home`         | NavBar, Home | user only `<IsPrivate>`  | Shows all posts of the users on backlog                                |
| `/post/:id`          | NavBar, PostDetails,  | user only `<IsPrivate>`  | Shows the details f a post and its comments                                   |
| `/profile`          | NavBar, Profile,  | user only `<IsPrivate>`  | Shows the users logged in profile                                  |
| `/search`          | SearchForm, SearchResults, SomePhotos      | user only  `<IsPrivate>` | Search another users and below the search bar you can see cute pictures                             |
                            |
| `/profile/edit`           | SearchForm, SettingsProfile      | user only `<IsPrivate>`  | Edit your profile                              |
| `/post`                | AddPost                   | user only `<IsPrivate>`  | Add a post to the backlog                                 |
| `/information/help`                | HelpContactPage             | user only  `<IsPrivate>` | Check some information in case you need help                  |
                    |
          
## Components

- Signin

- Signup

- NavBar

- IsPrivate

- CommentList

- Error

- HelpContactPage

- Home

- LogoHome

- NotFound

- PostDetails

- Profile

- SearchPage

- SettingsProfile

-UserProfile



## Services

- Config Service
  - config-services

- Auth Service
  - auth.services(user)

- Backlog Service
 - comments.services
 - following.services
 - post.sevices
 - profile.services
 - search.services
  

<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  firstName: {String},
  lastName: {String},
  email: {type: String, required: true, lowercase: true, unique: true},
  password: {type: String, required: true},
  description: {type: String, default: ""}
  followers: [{type: Schema.Types.ObjectId, ref:'User'}]
}
```



Post model

```javascript
 {
   content: {type: String, required: true},
   authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   likes: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   time: {type: Date, default: Date.now},
 }
```

Comment model

```javascript
 {
   content: {type: String, required: true},
   author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
   time: {type: Date, default: Date.now},
 }
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password, firstName, lastName, image}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/signin`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session    |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET/POST/DELETE       | `/post`                 | {content}  |                | 400          | Add new backlog post and add to user                                               |
| GET/PATCH         | `/profile`             |                              |                | 400          | Show profile of the user                                         |
| GET         | `/profile/editfilms`              |                              |                |              | Show form to edit the profile                                          |
| GET         | `/post/:id `              |                              |                |              | Show post details                                          |
| GET/POST/DELETE         | `/post/:id/comments`                        |                              | 201            | 400          | Show the post details and let leave a comment on it                                        |



<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/iloDccrZ/backlog-quest) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://safe-space-app.netlify.app/)

[Server repository Link](https://expensive-loincloth-colt.cyclic.app/api)


### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1b5fEBRB_W34ImcXpYAofZE-2KfVfnDKf/edit?usp=sharing&ouid=102181827856456085623&rtpof=true&sd=true)