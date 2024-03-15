## Introduction
Welcome to Emaily!  This is an application for product owners to automatically organize their user feedback, connecting the back end, based in Node.js, to the front end through React.js.  Product owners and startups often need to track users for a service, survey those users, and review the data in order to improve the application.  The application will allow product managers to more easily go through this process.

Users sign up for an account via Google OAuth to identify users individually, rather than creating an account, then pay for e-mail credits with Stripe.  Site owners can then create a "campaign" or survey to send to their users for feedback collection.  Inside this e-mail is a simple link to collect feedback.  The service will tabulate that feedback into a report for Site owenrs to analyze data.

Heroku Link: https://emaily-frozen-lake-27026-c8f7077b9dd1.herokuapp.com/

The Render link is hosted on Render's free tier, which will wind down with inactivity, so requests may be delayed by 50 seconds or more.
Render Link: emaily-jecn.onrender.com/

## Table of Contents
Technologies Used
Relationship between Node and Express
Google OAuth
Generating Express Apps
Express Route Handlers

## Technologies Used
- Express.js
- Google OAuth - Express, MongoDB, and PassportJS (for user OAuth)
- Stripe API (to handle billing) with MongoDB (to store payment records in a database)
- React.js + Redux + Redux Form (for survey data storage)
- 3rd party e-mail provider to send surveys
- E-mail provider + Express + Mongo (to store data provided by the surveys)
- MongoDB (to tabulate feedback)
- MongoDB + React + Redux (to present report of the responses)

## Relationship between Node and Express
Node is a JS runtime environment that is used to execute code outside of the browser.  Express is a library that runs in the Node runtime.  Node could handle everything directly, but Express has helpers to make dealing with HTTP traffic easier.

PassportJS handles the routes in the OAuth flow to forward users' requests to Google, Google's response to grant permission, send the code from the URL to Google servers, receive Google's reply with details about the user.  Two common issues are:

    (1) Passport requires us to add extra code during some of these steps, causing disruptions in the process that is intended to be fully automated
    (2) The Passport library is structured into two different libraries: passport, which generates helpers for handling authorization in Express applications, and passport strategy, which generates helpers for authentication with one specific method (email/password, Google, Facebook, etc.), and you must install each one separately.  This app uses only Google, so it only uses one passport strategy.

## Google OAuth
Google OAuth recommends using either OAuth1 or OAuth20, so we will use OAuth20.

## Generating Express Apps


## Express Route Handlers
Express API contains business logic to take incoming requests from React/Node application, pull information from MongoDB, and send information back to React application - React does not communciate directly with MongoDB.  Express API and React app will communicate entirely through HTTP requsts.  Express and MongoDB will communicate via an internal method.
