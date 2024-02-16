## About The Project

This app is designed as an event venue that provides private space to registered users and reading and browsing access to guests.

Responsive React app implementing AJAX, CRUD operations, subscription, search and pagination.

### Demo Project Online
You can find the project by [clicking here]( https://event-center-eb631.web.app) to view it in the browser.

## Public part

### The public part of the project is visible without authentication, intended for users with free access:

1. **Home Page** - the main page that introduces the user to the content.
2. **About** – divided into three sections:
   - **Offer** – introduces event organizers to the offered services, allowing users to search for specific events by date, theme, or company.
   - **Services** - informs application visitors about the provided service and the team behind it.
   - **Our Spaces** - provides detailed information about all offered services, as well as specific meeting places, hall capacities, and seating arrangements.
3. **Calendar** - where users can find a list of all events, arranged by months and years, sorted by the date of addition. Each event has a link to Event Details.
4. **Event Details** - a page offering detailed information about the organizer, theme, and a comprehensive description of the event.
5. **Login** - where the login form for already registered users is located.
6. **Register** - where the registration form for new users is located.

## Private part 

### The private part of the project is only available to registered users:

1. **Event Reservation** – provides event creators with the following options:
   - **Create** - form to create your own event, selecting options for date, time, and location.
   - **Edit** - form to edit your own event.
   - **Delete** - allows you to delete your own event after confirmation.
2. **Event Details** - allows all other users to reserve seats for participation.

## Technical Description

### Built With:
React.JS, JavaScript, CSS, HTML 

### Database storage:
[Cloud platform Back4App](https://www.back4app.com/) for storing information about events and users.


