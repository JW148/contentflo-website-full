import { Rocket, Calendar, Handshake, StarsIcon } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      id: 1,
      title: "Book a Free Consultation",
      description:
        "Get started by scheduling a personalised consultation with our CTO and Co-Founder, where we'll assess your needs and show how ContentFlo can help you take control of your content.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Onboarding and Support",
      description:
        "In your first month, we'll guide you step-by-step with onboarding, offering weekly support calls to ensure everything is set up perfectly and customised to your brand.",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Launch Your Custom Platform",
      description:
        "After you send us your content, we'll have your website fully integrated with your content, tailored to your exact specifications, from front end website to backend content management system (the software package) - ready to engage your audience!",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Take Control with Your Dashboard",
      description:
        "Easily manage your content, courses, and customer data from a simple, intuitive dashboard designed for flexibility and full control.        ",
      icon: <StarsIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Your Journey To Full Brand Control
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Our streamlined onboarding process gets you from signup to full
            control of your content in just four simple steps.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className=" absolute left-8 top-0 h-[85%] mt-[12vh] w-0.5 bg-gradient-to-b from-zinc-800 to-zinc-200 md:left-1/2 md:-ml-0.5 "></div>

            {/* Timeline steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={step.id} className="relative items-center flex">
                  {/* Step number indicator */}
                  <div className="absolute left-0 md:left-1/2 md:-ml-8 z-10">
                    <div
                      className={`flex h-16 w-16 place-self-center items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground`}
                    >
                      <span className="text-2xl font-bold">{step.id}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-16 "
                        : "md:ml-auto md:pl-16"
                    } md:w-6/12 `}
                  >
                    <div
                      className={`rounded-lg border shadow-sm transition-all border-muted  bg-[url(/noise.svg)] bg-repeat bg-[length:500px_500px] `}
                    >
                      <div className="size-full p-4 rounded-lg bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
                        <div className="flex items-center gap-2 mb-2">
                          {step.icon}
                          <h3 className="text-lg font-semibold">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
