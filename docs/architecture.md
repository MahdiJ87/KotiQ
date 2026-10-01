# KotiQ Architecture

## System Overview

Frontend
    |
    V
Backend API
    |
    V
Database

---

## Technology Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS

Backend:
- Next.js API Routes
- TypeScript

Database:
- PostgreSQL
- Prisma ORM

---

## Core Entities

- User
- Facility
- Reservation
- Announcement

---

## Main Data Flow

Resident
    ↓
Make Reservation
    ↓
API Validation
    ↓
Check Availability
    ↓
Save Reservation
    ↓
Return Success Response
