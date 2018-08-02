Project 3 – Crankheads

-- Description –

Crankheads is a full stack react based application that was built with the intention of bringing together the mountain bike community in North Carolina.  The app provides a user experience with easy access to view trails to ride, events to ride in or volunteer with, as well as providing a personal touch with a user profile.

-- Technology used –

React – Javascript library platform used for this application
ReactStrap – Bootstrap add on combined with React
Passport JS – Authentication used in app
Bcrypt – Hashes password set by user
Axios – Used with API calls on app
Calendar JS – Used on personal page to view calendar of events
Moment JS –  Used to format time

-- API’s used –

MTBProject – API used for trails and location
Meetup – API used for mountain biking events in NC

-- Application Layout and use –

The application has a home page, connect page, discover page and personal page which can be accessed with the Login/Registration button.  Further details about the functions of each page are below:
Homepage
The homepage contains a Navbar, Jumbotron, brief description of the app, as well as an API call to display the top 3 most popular upcoming events.
Connect
The connect page provides an API call to the Torc-NC meetup group.  Using cards, all events are displayed vertically for the user to see.  Each card contains a location, image as well as a summary and date.  These events can be rides or volunteer opportunities.
Discover
The discover page is interactive with a drop down for both the city you are looking for, as well as the length of distance you are looking to ride.  After the submit click event, an API call to MTBProject is produced in cards on the page.  These cards contain a trails that meet the users drop down criteria.  Each card contains, an image, summary, location, trail length, difficulty as well as a rating.  The difficulty and rating are displayed with images.
Login/Register
The login button produces a modal that is a product of ReactStrap.  The modal displays over the jumbotron and provides the user the ability to either login with an account they previously made or register as a new user.  The registration and login utilize Passport for authentication of the user as well as Bcrypt, which hashes the user password and provides salt for added protection.
Once the user is authenticated, they are routed to the Personal page.
Personal
After login/registration the user can then add to their personal calendar and track events.

-- Database –

We are the noSQL database MongoDB to save user information when a registration is completed.

-- Conclusion –

The team hopes the interface is user friendly and helps current and future mountain bike riders in the state of North Carolina.



