import React from "react";
import TimeLineTable from "@/components/TimeLineTable";
import { WeekDay } from "@/types/timeline";

export const mockAvailables = [
  { day: "saturday" as WeekDay, start: "09:00", end: "14:00" },
  { day: "saturday" as WeekDay, start: "16:00", end: "20:00" },
  { day: "sunday" as WeekDay, start: "10:00", end: "18:00" },
  { day: "monday" as WeekDay, start: "08:00", end: "12:00" },
  { day: "tuesday" as WeekDay, start: "14:00", end: "22:00" },
  { day: "wednesday" as WeekDay, start: "09:00", end: "17:00" },
  { day: "thursday" as WeekDay, start: "10:00", end: "15:00" },
  // Friday is off (common in Iran), so no availability
] satisfies { day: WeekDay; start: string; end: string }[];

export const mockReservedTimes = [
  { day: "saturday" as WeekDay, from: "10:00", to: "11:30" },
  { day: "saturday" as WeekDay, from: "16:30", to: "17:45" },
  { day: "sunday" as WeekDay, from: "13:00", to: "14:00" },
  { day: "tuesday" as WeekDay, from: "18:00", to: "20:00" },
  { day: "wednesday" as WeekDay, from: "12:00", to: "13:00" },
] satisfies { day: WeekDay; from: string; to: string }[];

const Page = () => {
  return (
    <div className="p-3">
      <TimeLineTable
        availables={mockAvailables}
        reservedTimes={mockReservedTimes}
      />
    </div>
  );
};

export default Page;
