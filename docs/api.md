# KotiQ API Specification

## Authentication

### Login

POST /api/auth/login

Purpose:
Authenticate a user and create a session.

Request:

{
  "email": "mahdi@example.com",
  "password": "password123"
}

Response:

{
  "user": {
    "id": 1,
    "name": "Mahdi",
    "role": "RESIDENT"
  }
}

---

### Logout

POST /api/auth/logout

Purpose:
Terminate the current user session.

Response:

{
  "success": true
}

--------------------------------------------------

## Facilities

### Get All Facilities

GET /api/facilities

Purpose:
Retrieve all available facilities.

Response:

[
  {
    "id": 1,
    "name": "Sauna",
    "description": "Shared building sauna"
  }
]

--------------------------------------------------

## Reservations

### Get Reservations

GET /api/reservations

Purpose:
Retrieve reservations.

Response:

[
  {
    "id": 1,
    "facilityId": 1,
    "userId": 1,
    "startTime": "2026-10-20T18:00:00",
    "endTime": "2026-10-20T19:00:00"
  }
]

--------------------------------------------------

### Create Reservation

POST /api/reservations

Purpose:
Create a new facility reservation.

Request:

{
  "facilityId": 1,
  "startTime": "2026-10-20T18:00:00",
  "endTime": "2026-10-20T19:00:00"
}

Success Response:

{
  "success": true
}

Failure Response:

{
  "success": false,
  "message": "Time slot already booked."
}

--------------------------------------------------

### Delete Reservation

DELETE /api/reservations/:id

Purpose:
Cancel an existing reservation.

Response:

{
  "success": true
}

--------------------------------------------------

## Announcements

### Get Announcements

GET /api/announcements

Purpose:
Retrieve all announcements.

Response:

[
  {
    "id": 1,
    "title": "Elevator Maintenance",
    "content": "Maintenance scheduled for Saturday."
  }
]

--------------------------------------------------

### Create Announcement

POST /api/announcements

Purpose:
Create an announcement.

Request:

{
  "title": "Water Shutdown",
  "content": "Water will be unavailable on Monday."
}

Response:

{
  "success": true
}

--------------------------------------------------

### Delete Announcement

DELETE /api/announcements/:id

Purpose:
Remove an announcement.

Response:

{
  "success": true
}
