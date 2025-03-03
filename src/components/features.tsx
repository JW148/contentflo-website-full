import {
  IoShieldCheckmark,
  IoColorPalette,
  IoLockClosed,
  IoExtensionPuzzle,
} from "react-icons/io5";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const feature1 = () => (
  <p>
    ContentFlo is a software house that specialises in <b>bespoke</b> content
    management web platforms with a focus on giving you <b>more control</b> over
    your <b>brand identity</b> and <b>content</b>.
  </p>
);

const feature2 = () => (
  <p>
    Our software allows you to host courses directly on <b>your own website</b>,
    giving you more brand control and <b>data ownership</b>.{" "}
  </p>
);

const feature3 = () => (
  <>
    <p>
      You own your data, unlike other <b>third-party platforms</b>.
    </p>
    <p>
      The platform we built for you is, managed by you and hosted on your
      domain.
    </p>
  </>
);

const feature4 = () => (
  <p>
    Tailor the look and feel of your courses to
    <b> match your brand perfectly</b>.
  </p>
);

const features = [
  {
    name: "Full Brand Control",
    description: feature1(),
    icon: IoShieldCheckmark,
  },
  {
    name: "Website Integration",
    description: feature2(),
    icon: IoExtensionPuzzle,
  },
  {
    name: "Date Ownership",
    description: feature3(),
    icon: IoLockClosed,
  },
  {
    name: "Enhanced Custom Branding Flexibility",
    description: feature4(),
    icon: IoColorPalette,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Why Choose ContentFlo?
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how <b>ContentFlo</b> can transform your content with our
          innovative features.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <HoverBorderGradient
            key={feature.name}
            containerClassName="rounded-lg mx-auto h-full px-0"
            as={"div"}
            className="relative p-0 h-full overflow-hidden border bg-[url(/noise.svg)] bg-repeat bg-[length:500px_500px] "
          >
            <div className="flex flex-col p-8 size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8" />
                <h3 className="font-bold">{feature.name}</h3>
              </div>
              <div className="flex flex-col mt-2 text-muted-foreground gap-4">
                {feature.description}
              </div>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </section>
  );
}
