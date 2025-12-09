// src/components/TimeLineCalendar.tsx
import React from "react";
import { WeekDayEnum, persianWeekOrder, hours } from "@/types/timeline";

type AvailableSlot = {
  day: string;
  start: number;
  end: number;
};

type ReservedSlot = {
  day: string;
  from: number;
  to: number;
};

type TimeLineCalendarProps = {
  availables: AvailableSlot[];
  reservedTimes: ReservedSlot[];
};

const TimeLineCalendar = ({
  availables,
  reservedTimes,
}: TimeLineCalendarProps) => {
  const renderSlots = (day: string) => {
    const dayAvailables = availables.filter((slot) => slot.day === day);
    const dayReserved = reservedTimes.filter((slot) => slot.day === day);

    return (
      <div className="relative h-[60px]">
        {/* Available slots */}
        {dayAvailables.map((slot, idx) => {
          const left = (slot.start / 24) * 100;
          const width = ((slot.end - slot.start) / 24) * 100;
          return (
            <div
              key={`avail-${day}-${idx}`}
              className="absolute top-1/4 h-1/2 bg-green-200 rounded shadow-sm"
              style={{ left: `${left}%`, width: `${width}%` }}
            ></div>
          );
        })}

        {/* Reserved slots */}
        {dayReserved.map((slot, idx) => {
          const left = (slot.from / 24) * 100;
          const width = ((slot.to - slot.from) / 24) * 100;
          return (
            <div
              key={`res-${day}-${idx}`}
              className="absolute top-0 h-full bg-red-400 rounded opacity-80 shadow-sm"
              style={{ left: `${left}%`, width: `${width}%` }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="overflow-x-auto w-full  rounded-2xl shadow-e3">
      <div className="min-w-[1200px] relative">
        <div className="grid grid-cols-25 sticky top-0 z-10  border-b bg-accent-800 border-gray-200">
          <div className="p-2 border-r border-gray-200"></div>
          {hours.map((hour) => (
            <div
              key={`hour-${hour}`}
              className="text-xs sm:text-start text-center px-1 py-2 text-white translate-x-1/4"
            >
              <span className="">{hour}</span>
            </div>
          ))}
        </div>

        {persianWeekOrder.map((day) => (
          <div
            key={day}
            className="grid grid-cols-25 border-b bg-white border-gray-200"
          >
            <div className="flex items-center justify-end px-2 text-gray-700 font-medium border-r border-gray-200 h-[60px] text-sm sm:text-base">
              {WeekDayEnum[day]}
            </div>

            <div className="relative col-span-24 border-l border-gray-100">
              {renderSlots(day)}
              {hours.map((_, idx) => (
                <div
                  key={`line-${day}-${idx}`}
                  className="absolute top-0 h-full border-r border-gray-100"
                  style={{ left: `${(idx / 24) * 100}%`, width: "0px" }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLineCalendar;
