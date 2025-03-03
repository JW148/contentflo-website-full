import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col h-full border border-muted bg-[url(/noise.svg)] bg-repeat bg-[length:500px_500px] rounded-xl shadow-sm">
      <div className="flex flex-col p-6 size-full rounded-xl bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
        <div className="flex-1">
          <svg
            className="h-8 w-8 mb-4"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <p>{quote}</p>
        </div>
        <div className="flex items-center space-x-3 mt-6">
          <div className="h-10 w-10 relative rounded-full bg-transparent backdrop-blur-sm flex items-center justify-center">
            <Image
              src={image}
              alt="Michael Rivera"
              fill
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
