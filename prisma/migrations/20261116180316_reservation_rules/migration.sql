CREATE EXTENSION IF NOT EXISTS btree_gist;

ALTER TABLE "Reservation"
  ADD CONSTRAINT "Reservation_time_order"
  CHECK ("endTime" > "startTime");

ALTER TABLE "Reservation"
  ADD CONSTRAINT "Reservation_no_overlap"
  EXCLUDE USING gist (
    "facilityId" WITH =,
    tstzrange("startTime", "endTime", '[)') WITH &&
  )
  WHERE (status = 'ACTIVE');