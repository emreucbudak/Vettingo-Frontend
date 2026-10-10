import { connection } from "next/server";
import { HrInterviewAgendaContent } from "./hr-interview-agenda-content";

function getCalendar(now: Date) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now).map((part) => [part.type, part.value]));
  const today = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
  const dates = [-2, -1, 0, 1, 2].map((offset) => {
    const date = new Date(today);
    date.setUTCDate(date.getUTCDate() + offset);
    return date;
  });
  const dayFormatter = new Intl.DateTimeFormat("tr-TR", { weekday: "short", timeZone: "UTC" });
  const rangeFormatter = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    ...(dates[0].getUTCFullYear() !== dates[4].getUTCFullYear() ? { year: "numeric" } : {}),
  });

  return {
    days: dates.map((date, index) => ({
      key: date.toISOString().slice(0, 10),
      day: dayFormatter.format(date),
      date: String(date.getUTCDate()),
      active: index === 2,
    })),
    dateRange: rangeFormatter.formatRange(dates[0], dates[4]),
  };
}

export async function HrInterviewAgenda() {
  await connection();
  return <HrInterviewAgendaContent calendar={getCalendar(new Date())} />;
}
