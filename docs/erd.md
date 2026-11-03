# KotiQ Entity Relationship Diagram

## Diagram

User
│
├── id (PK)
├── name
├── email
├── passwordHash
├── role
└── createdAt
│
│ 1
│
│ N
▼

Reservation
├── id (PK)
├── userId (FK → User.id)
├── facilityId (FK → Facility.id)
├── startTime
├── endTime
└── createdAt

▲
│ N
│
│ 1
│

Facility
├── id (PK)
├── name
├── description
└── createdAt

-------------------------------------------------

User (Admin)
│
│ 1
│
│ N
▼

Announcement
├── id (PK)
├── title
├── content
├── authorId (FK → User.id)
└── createdAt
