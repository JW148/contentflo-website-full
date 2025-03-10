import { Booking as BookingType } from "@/payload-types";
import { getGlobal } from "@/utilities/getGlobals";
import { BookingEmbed } from "./Component.client";

export async function Booking() {
  const bookingData = (await getGlobal("bookings", 1)) as BookingType;
  let eventLink;
  if (bookingData.eventLink) eventLink = bookingData.eventLink;
  return (
    <>
      {eventLink && (
        <div className="flex flex-col w-full gap-8">
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 self-center">
            ...or schedule a call with us below.
          </p>
          <BookingEmbed booking={bookingData} />
        </div>
      )}
    </>
  );
}
