# KotiQ Requirements Specification

## Purpose

KotiQ is a web application that allows apartment residents to reserve shared building facilities and view building announcements through a centralized digital platform.

---

## Problem Statement

Many apartment buildings still use paper booking calendars and physical notice boards for managing shared facilities and announcements.

These methods are difficult to access remotely, can lead to reservation conflicts, and do not provide a convenient way for residents to stay informed.

KotiQ aims to digitize these processes.

---

## User Roles

### Resident

A resident can:

- Log in
- View facilities
- View available reservation slots
- Create reservations
- Cancel own reservations
- View announcements

### Administrator

An administrator can:

- Manage facilities
- Manage reservations
- Create announcements
- Edit announcements
- Delete announcements

---

## Shared Facilities

The system will initially support:

- Sauna
- Laundry Room
- Drying Room
- Gathering Room

---

## Functional Requirements

### Authentication

- Users can log in
- Users can log out
- System identifies user role

### Facility Management

- View facilities
- View facility details

### Reservation Management

- Create reservation
- Cancel reservation
- View reservations

### Reservation Validation

- Prevent double-booking
- Prevent overlapping reservations

### Announcements

- View announcements
- Create announcements (admin only)
- Edit announcements (admin only)
- Delete announcements (admin only)

---

## Non-Functional Requirements

### Performance

- Reservation pages should load quickly

### Usability

- User-friendly interface
- Mobile-responsive layout

### Reliability

- Reservations must be stored safely
- Data must persist after application restart

### Security

- Authentication required
- Authorization based on user role

---

## Success Criteria

The project will be successful when:

1. Residents can log in.
2. Residents can reserve facilities.
3. Residents can cancel reservations.
4. Double-booking is prevented.
5. Residents can view announcements.
6. Administrators can manage facilities and announcements.
