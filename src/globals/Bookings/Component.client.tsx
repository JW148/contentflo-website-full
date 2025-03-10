"use client";

import type { Booking } from "@/payload-types";
import Cal from "@calcom/embed-react";

interface BookingEmbedProps {
  booking: Booking;
}

export function BookingEmbed({ booking }: BookingEmbedProps) {
  console.log(booking);

  const { section3, section2 } = extractCalLinkSections(
    booking.eventLink || ""
  );

  return (
    <div className=" h-auto scroll-mt-36" id="cal-embed">
      <Cal
        namespace={section3}
        calLink={section2 + "/" + section3}
        config={{ layout: "month_view" }}
        className="no-scrollbar"
      />
    </div>
  );
}

const extractCalLinkSections = (url: string) => {
  const calRegex = /^(https:\/\/cal\.com\/)([a-z0-9-]+)\/([a-z0-9]+)$/;

  const match = url.match(calRegex);

  if (!match) {
    return { error: "Invalid Cal.com link" };
  }

  return {
    section1: match[1], // Root URL (https://cal.com/)
    section2: match[2], // User name and ID (e.g., joe-wiggin-dz6z79)
    section3: match[3], // Event name-space (e.g., 30min)
  };
};
