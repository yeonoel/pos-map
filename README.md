# PosMap ~ *Find all financial transaction locations quickly and easily*

![Home](https://i.imgur.com/frfZqBt.png)

# Introduction

## The Project
All mobile money users know how difficult it is to find a pos to rely on to make their transaction regardless of the amount on Sundays, holidays and even on all other days.
That's why we created  **PosMap**.

**PosMap**PosMap is a site where all pos can register and create their account.
This way, anyone who wants to make a financial transaction can consult PosMap and find the nearest pos in real time, have his contact information to reach him before traveling and be sure that he can make his transaction in this pos.

Other features include: modification of pos parameters, creation of user accounts with their numbers, a dashboard that recaps the transactions received by the pos.

## The Context
This project is our Portfolio Project, concluding our Foundations Year at Holberton School. We were able to choose who we wanted to work with and what we wanted to work on, as long as we present a working program at the end of the three weeks of development.

## The Team

* **Yeo pevrogui Noel** [@yeonoel](https://twitter.com/ARNAZAKASH) - Dancer but also a very talented Software Engineer.

Follow us on Twitter for more dog and tech related awesomeness!

## Blog posts
After the development phase, we each wrote a blog post to reflect on the PosMap journey.

* yeo noel pevrogui article : [PosMap: It’s Like AirBnB For pos](https://medium.com/yeonoel)


# Tutorial

## Take a tour of the deployed version at puppr.best
-> [**PosMap**]


Here is a simple flow for the user experience on PuppR:

![infra](https://i.imgur.com/1on8HEg.png)

## Run PosMap with nodemon server



# Architecture

![infra](https://i.imgur.com/VmAGLIe.png)

## Overview
Our web application is a 6-page application, coded mainly in Javascript. **PosMap** is a fullstack application, which means that we focused our time and energy on developing a backend and then a frontend application. It is perfect for easy use. We designed most of the user interface, using simple CSS and some javascript transitions and animations, on the backend we used node.js and express to build the server and api, mysql for the database and sequilize as an ORM which offers a simpler solution to interact with the database. 



## Node.js
For this project, we decided to focus on learning the javascript language and a new backend framework. Following the advice of mentors and professionals, we chose to learn and use Node.js

Our backend is divided as follows: the controller folder which contains the functions to execute for each route;
the routes folder which contains all the routes to have access to all the resources;
an app.js file which contains all the access links to all the resources of our backend;
a server.js file which is the entry point of the application 
the public folder contains everything related to the frontend.

We have a total of 7 routes for the first version of our application:
/api/v1/pos   
displays all available pos as soon as you open the application
/api/v1/pos/orange
/api/v1/pos/mtn
/api/v1/pos/moov
/api/v1/pos/wave
displays all available pos for a selected operator we have for the moment the operators orange, mtn, wave, moov

/api/v1/auh 
this route allows a pos to register or to connect to his account
/api/v1/pos/:id
this route allows a pos to modify his settings
etc...





## sequilise


### MySql

### Authentication
As our app connects people and their dogs, authentication is a necessity. Firebase provides a straightforward and easy-to-implement solution so we can focus on designing an accessible app. Users simply sign up with an existing email address and a password of their choice. Firebase Authentication does the heavy lifting to make sure users are authentic.
### Cloud Firestore
The obvious choice for storing users' dog photos. It provides straightforward implementation for users to upload their photo and a relatively quick way to call and display these images for users to sift through.

# Acknowledgments



# Related projects

* [AirBnB Clone](https://github.com/yeonoel/AirBnB_clone_v4): a simple web app made in Python, Flask, and JQuery.

* [Simple Shell](https://github.com/yeonoel/simple_shell): a command line interpreter that replicates the sh program.

# License

PosMap License

