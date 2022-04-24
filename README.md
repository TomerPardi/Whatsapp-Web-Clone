# Web Client Implementation - Chats App
## General
- This is the **first part** of a four-part project.
- This implementation is not suppurted by web server but by **"Hard-coded" arrays**.
- It's written as part of a project we asked to make in _Advanced Programming 2_ course at Bar Ilan University.
- Authors: **Daniel Bronfman** (ID: 315901173) & **Tomer Pardilov** (ID: 316163922).

## Logic
We implemented **three main pages**:
- **Login page**: The user is asked to insert username and password, both are required.
- **Registration page**: The user is asked to insert username, nickname, password and image. All are required and only alphanumeric pattern is accepted.
- **Chats page**: Here we can see user's contacts list and the conversations he has with them.


![Screenshot](loginScreenshot.png)
![Screenshot](registerScreenshot.png)
![Screenshot](chatsScreenshot.png)

## Instructions for using the app
first, user need to input valid username and password in Login page. In case the user doesn't has an account he can register by link he has in Login page.
### Valid credentials for login
- alice: 12345
- bob: foo123
- tomer: 12345
- daniel: 12345
- peter: familyguy
### Register
Here the user need to input his username, nickname, password and an Image. These fields are required, valid text input is alphanumeric only!
### Chats page
To test our app, it's recommended to login with "tomer" (password 12345). After successful login, you will see welcome page (you can return back to login by clicking Logout button). Now, by clicking any chat in left side of the window - you will see the messages with your friends.

### Input Support
We support some types of messages:
- **Text** messages.
- **Audio** messages.
- Current **location**.
- **Images** & **Videos**:
  - From file explorer.
  - As camera input.
## Technologies Used
In this part of the project we used multiple technologies, mainly **React, JavaScript, HTML & CSS**.
For styling we used **Bootstrap & React-Bootstrap**.

