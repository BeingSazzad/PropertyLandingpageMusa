import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { CARD, PEOPLE_IMAGES } from "@/lib/brand";

const reviews = [
  {
    name: "Marcus Sterling",
    designation: "Portfolio landlord, 14 London flats",
    body: "Rent from all 14 flats now lands through Open Banking. Gas Safe dates stay visible, and I stopped chasing tenants on WhatsApp.",
    profile: PEOPLE_IMAGES.marcus,
  },
  {
    name: "Sarah Jenkins",
    designation: "Resident tenant, Kensington",
    body: "I pay rent in one tap, the deposit sits with DPS, and when the boiler failed a Gas Safe engineer was booked the next morning.",
    profile: PEOPLE_IMAGES.sarah,
  },
  {
    name: "David Chen",
    designation: "HMO investor, Manchester",
    body: "Compliance dates, tenancy files, and repair tickets live in one register. The app paid for itself in the first month of inspections I didn’t miss.",
    profile: PEOPLE_IMAGES.david,
  },
  {
    name: "Sophie Walsh",
    designation: "Letting manager, Bristol",
    body: "Landlords and tenants finally see the same job list. Certificates, rent, and contractor notes stay together instead of scattered across inboxes.",
    profile: PEOPLE_IMAGES.sophie,
  },
  {
    name: "James Whitfield",
    designation: "Buy-to-let landlord, Leeds",
    body: "Setup took an afternoon. Rent reminders went out, arrears dropped, and I can check every tenancy from my phone before a viewing.",
    profile: PEOPLE_IMAGES.james,
  },
  {
    name: "Amira Hassan",
    designation: "Portfolio landlord, Birmingham",
    body: "Fourteen units used to mean a spreadsheet and a Saturday. Now rent, EPC dates, and trades sit in one place and I get evenings back.",
    profile: PEOPLE_IMAGES.amira,
  },
  {
    name: "Oliver Grant",
    designation: "Family landlord, Edinburgh",
    body: "We only have two houses, but the paperwork still piled up. Landlord HQ keeps the lease, deposit, and gas certificate where we can actually find them.",
    profile: PEOPLE_IMAGES.oliver,
  },
  {
    name: "Hannah Reid",
    designation: "Resident tenant, Brighton",
    body: "Paying rent used to mean a transfer and a screenshot. Now it is one tap, I can see the receipt, and repairs are logged so nothing gets lost.",
    profile: PEOPLE_IMAGES.hannah,
  },
];

const firstRow = reviews.slice(0, 4);
const secondRow = reviews.slice(4);

const ReviewCard = ({
  profile,
  name,
  designation,
  body,
}: {
  profile: string;
  name: string;
  designation: string;
  body: string;
}) => {
  return (
    <Card className={`relative h-full w-[320px] cursor-default overflow-hidden p-5 shadow-none ${CARD}`}>
      <CardContent className="flex flex-col gap-3 p-0">
        <div className="flex flex-row items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-11 w-11 rounded-full object-cover object-top bg-[#E8F3FF]"
            width="44"
            height="44"
            alt={name}
            src={profile}
          />
          <div className="flex min-w-0 flex-col">
            <p className="font-[family-name:var(--font-display)] text-[16px] font-semibold leading-5 text-[#0A192F]">
              {name}
            </p>
            <p className="truncate font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#5B6775]">
              {designation}
            </p>
          </div>
        </div>
        <p className="line-clamp-4 font-[family-name:var(--font-nav)] text-[16px] font-normal leading-6 text-[#3F4B58]">
          {body}
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:36s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:36s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r sm:w-1/5" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l sm:w-1/5" />
    </div>
  );
}
