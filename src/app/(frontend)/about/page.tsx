import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-[#63e]/20 blur-[100px]" />
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 relative z-10 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
                About Us
              </h1>
              <p className="mt-4 text-muted-foreground sm:text-lg">
                Meet the team behind <b>ContentFlo</b>
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-8 mt-12">
            <p className="md:text-lg/relaxed">
              Picture this: two best mates, sitting in a freezing cold townhouse
              in the heart of Edinburgh, with <i>Shaun of the Dead</i> playing
              in the background. That&apos;s where <b>ContentFlo</b> was born.
              <br />
              <br />
              Liam had just flown in to catch up with Joe after a busy summer.
              Both were on the hunt for their next big venture—something with
              real purpose. Joe, a web developer with years of freelance
              experience (and countless late nights), pitched an idea that
              stopped the conversation cold: a platform that lets creators own
              their content, manage it under their <b>own brand</b> and
              <b>domain</b>, and keep 100% of their revenue. No middlemen. No
              cuts.
              <br />
              <br />
              For Liam, the idea hit close to home. He&apos;d spent years
              helping influencers and educators in the U.S. and Canada grow
              their sales but saw a recurring problem: creators working insane
              hours only to surrender control of their audience, data, and
              income to third-party platforms. He knew this was the solution
              creators were waiting for—a way to <b>own</b> their success.
              <br />
              <br />
              The plan? Build <b>bespoke websites</b> that are fast, beautiful,
              and completely customised. Add powerful tools to host online
              courses, manage memberships, and monetise like never before—all
              seamlessly integrated into one platform.
              <br />
              <br />
              Joe&apos;s technical expertise, honed over years of freelancing
              while juggling a café side hustle, made him the perfect architect.
              Meanwhile, Liam&apos;s background in international business and
              online sales brought the strategy and drive to turn this idea into
              reality.
              <br />
              <br />
              Oh, and the ace up their sleeve? They&apos;ve been friends since
              they were four. Growing up in Cardiff, they built treehouses
              before they built software. Now, one with a degree in computer
              science from Edinburgh and the other with international business
              and Spanish from HBS, they&apos;ve reunited to rewrite the rules
              for creators and businesses.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12 mt-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-xl">
                <Image
                  src="/liam.jpeg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Liam Coyle"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold">Liam Coyle</h2>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Co-Founder & CEO
                </p>
                <p className=" md:text-base/relaxed text-balance text-left">
                  Liam combines a background in high-stakes appointment setting,
                  sales strategy, and business development with a proven track
                  record of helping diverse brands maximise their outreach and
                  profitability. He has successfully generated substantial sales
                  revenue for various sectors over 180K USD , from e-commerce to
                  health coaching, and has worked closely with industry leaders
                  to refine client communications, lead generation, and
                  appointment-setting strategies. He holds a first-class
                  business degree from the University of Reading and was awarded
                  the Dean&apos;s Award for Best Overall Performance in Business
                  Programmes, reflecting his academic excellence and dedication.
                  Leveraging his experience in tech startup advisement with the
                  UK government, Liam excels in connecting clients with scalable
                  systems that drive results. Working within the senior team at
                  the Alpesh Patel Ventures, he helped accelerate the landing of
                  24 shortlisted companies to the UK, with the UK Government
                  targeting at least one of those to add £100m in their
                  valuation as a UK company from set up to 5-10 years from now.
                  His expertise ensures that ContentFlo clients benefit from
                  tailored solutions, impactful outreach, and seamless
                  integration, making it easy to launch and manage courses that
                  resonate with their audiences.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-xl">
                <Image
                  src="/joe.jpg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Joe Wiggin"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold">Joe Wiggin</h2>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Co-Founder & CTO
                </p>
                <p className="md:text-base/relaxed text-left">
                  Joe is the technical force behind ContentFlo, leveraging a
                  robust background in software development and a passion for
                  creating tailored digital solutions. With a First-Class
                  Honours degree in Computer Science from Heriot-Watt University
                  and years of hands-on experience as a freelance developer, Joe
                  specializes in creating bespoke web platforms that combine
                  technical innovation with creative design. Throughout his
                  career, he has built applications that streamline processes
                  and improve user experience, from educational platforms to web
                  apps enhancing business operations. Proficient in cutting-edge
                  technologies like React, Next.js, and MongoDB, he brings a
                  meticulous approach to building responsive, user-friendly, and
                  data-driven solutions. His mission with ContentFlo is to
                  empower content creators and businesses by providing bespoke,
                  brand-focused content management solutions that simplify their
                  workflows and amplify their online presence.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-20 space-y-6">
            <h2 className="text-2xl font-bold text-center">Our Vision</h2>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted-foreground" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white rounded-md px-4  text-black">
                  Building the future together
                </span>
              </div>
            </div>
            <blockquote className="border-l-4 pl-6 italic  md:text-lg/relaxed">
              &quot;ContentFlo isn&apos;t just a tool. It&apos;s a movement. A
              way for creators, educators, and influencers to take back control
              of their brands, their audiences, and their futures.&quot;
            </blockquote>
            <p className=" md:text-base/relaxed">
              Together, Joe and Liam have built a company culture centered on
              innovation, collaboration, and customer success. Their
              complementary skills and shared commitment to excellence have been
              instrumental in their growth and the trust earned from clients
              across industries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
