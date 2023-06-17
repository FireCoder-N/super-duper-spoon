# Technical Problem Report Platform

This is a GitHub repository for the university of Patras (department of electrical & computer engineering) course "Internet Programming (ECE_GK802)".

## Project Description
Our project is a full-stack website titled "Technical Problem Report Platform". We have chosen to create a website for a shopping mall where users can report technical issues they have encountered, and the mall staff can address them. The website is intended for use by users of various groups, such as customers and shopping mall staff .


![Mall exterior](https://raw.githubusercontent.com/FireCoder-N/super-duper-spoon/ONA/building%20exterior.png)
*Image source: https://www.hs3dindia.com/ (edited)*

## User Cases and Privileges

Our website will have three types of users: customers, staff and administrators. After signing in, users will be presented with an interactive photo of the building's exterior, where they can select the floor where the problem is located. Then, a second screen with the floor plan is opened where the users are asked to pinpoint the problem's location. Finally, they can fill out a form and submit the issue. Admin users will have more privileges, such as viewing the submissions and deleting them from the database.

## Logo

![Logo](https://raw.githubusercontent.com/FireCoder-N/super-duper-spoon/ONA/logo.png)
*Logo is created using the website www.freelogodesign.org*
  

## Technologies Used

- HTML
- CSS
- JavaScript
- Handlebars
- Node.js
- Express
- MongoDB
- Twingate

## Miscellaneous

### How to run the application?
For the purpose of our subject, our application was "hosted on premises", namely on a raspberry pi 400, being accessible 24/7. However, **there is no public ip or domain name to access the website.**
In order to access the raspberry pi, a modern and secure technology called Twingate was used. If you want to learn more or use this service head to the section **Install Twingate**.  If you want to run the application yourself, read the section **Running Tutorial**.

### Install Twingate (https://www.twingate.com/)
  > Twingate helps organizations secure and manage access to their resources in a world where people work from anywhere.
  - Read the official documentation
  https://www.twingate.com/docs/quick-start
  - Or follow this tutorial (not sponsored or otherwise affiliated with our work)
  https://www.youtube.com/watch?v=IYmXPF3XUwo&t=609s

### Running Tutorial
1. Install node.js from the official website: 
https://nodejs.org/en/download
2.  Download the application from github, running the following command:
`git clone https://github.com/FireCoder-N/the-hall-Sthena.git`
3. In the created directory run the command `npm install` to install all needed javascript libraries.
4. Also create a `.env` file. The original was not shared because of security reasons. The file should have the following structure:
	```
    KEY = <your-secret-key>
    PORT = <port-number>
	``` 
5. Finally you need to install MongoDB. To do so, it is recommended to follow the official instructions for your Operating System. For the raspberry pi, the following tutorial was used: https://www.donskytech.com/how-to-install-mongodb-on-raspberry-pi/
6. Then, create a new database running the command `use The_Hall_Sthena`. ***Important: the database should be hosted on the default port (27017).***
7.  Finally, you have to create two collections for the database: `users` and `submissions`.
It is recommended to do so using the json files included in the collections folder of the repository. Use the following command:
`mongoimport --db The_Hall_Sthena --collection collection_name --file path/to/json.json`, 
replacing `collection_name` with users or submissions and choosing the correct json.

### What is to follow?
As described above, our website was created only in the context of the course "Internet Programming (ECE_GK802) and currently there are no plans on updating or maintaining it.

## Contributors

- https://github.com/FireCoder-N

- https://github.com/Blue-Cultist
