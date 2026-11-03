# KotiQ Database Design

## Entity Relationship Overview

User
│
├── creates
│
└── Reservation

Facility
│
└── has many
│
└── Reservations

Announcement
│
└── created by
│
└── Administrator

---

## User

Represents a resident or administrator.

### Fields

- id
- name
- email
- passwordHash
- role
- createdAt

### Role Values

- RESIDENT
- ADMIN

---

## Facility

Represents a shared apartment facility.

### Fields

- id
- name
- description
- createdAt

### Examples

- Sauna
- Laundry Room
- Drying Room
- Gathering Room

---

## Reservation

Represents a facility reservation.

### Fields

- id
- userId
- facilityId
- startTime
- endTime
- createdAt

### Business Rules

- Reservation must belong to a user
- Reservation must belong to a facility
- Overlapping reservations are not allowed

---

## Announcement

Represents a building notice.

### Fields

- id
- title
- content
- authorId
- createdAt

### Business Rules

- Only administrators may create announcements
