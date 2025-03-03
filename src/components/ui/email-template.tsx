import {
  Tailwind,
  Html,
  Body,
  Section,
  Column,
  Head,
  Preview,
  Row,
  Img,
  Text,
  Link,
} from "@react-email/components";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function EmailTemplate({ name }: { name: string }) {
  return (
    <Html lang="en" className={inter.className}>
      <Head />
      <Preview>Preview Text</Preview>
      <Tailwind>
        <Body className=" pt-[50px]  bg-zinc-900">
          <p className="text-center text-gray-200 mb-[10px] font-light">
            Welcome to
          </p>
          <Img
            src="https://utfs.io/f/x1QQpYwRTAfhNusn1xWh2UHjepuTJBAaLqNrQwtvMX4mb8zZ"
            alt="ContentFlo Logo"
            width="250"
            className="mx-auto"
          />
          <Section className="mt-[60px] w-[80%] mx-auto text-gray-200 text-[16px] flex flex-row text-justify ">
            <p className="mb-[20px]">Hi {name},</p>
            <p className="py-[5px]">
              We&apos;re Joe and Liam, the co-founders of ContentFlo - and
              we&apos;re excited to have you with us!
            </p>
            <p className="py-[5px]">
              Our goal at ContentFlo is simple: to give creators like you full
              control over your content and brand. We know how important it is
              to own your platform, and by hosting your courses and content on
              your own site, you can build a seamless, authentic experience for
              your audience.
            </p>
            <p className="py-[5px]">
              Privacy and control are at the heart of what we do. Unlike other
              platforms, we ensure your data stays yours – no third-party
              access, no hidden surprises. You&apos;re always in the
              driver&apos;s seat, shaping the experience for your audience.
            </p>
            <p className="py-[5px]">
              Over the next few days, we&apos;ll share tips and insights to help
              you hit the ground running with ContentFlo. We&apos;re here to
              make sure you get the most out of it!
            </p>
            <p className="py-[5px]">
              If you&apos;d like to chat with us directly or explore how we can
              tailor ContentFlo to your needs, feel free to contact us by
              replying to this email.
            </p>
            <p className="py-[5px]">
              Thanks for joining us – we can&apos;t wait to see what you create!
              🚀
            </p>

            <p className="py-[20px]">Kind regards,</p>
            <p className="py-[5px]">Joe Wiggin & Liam Coyle</p>
            <p>Co-CEOs, ContentFlo</p>
          </Section>

          <Section className="text-center mt-[80px]">
            <table className="w-full">
              <tr className="w-full">
                <td align="center">
                  <Link href="https://www.contentflo.io">
                    <Img
                      alt="Contentflo logo"
                      height="30px"
                      width="50px"
                      src="https://utfs.io/f/x1QQpYwRTAfhn6Nj56DgIuxrSlmVPsQbowLkdAKDe3ai18MZ"
                      className="mb-[20px]"
                    />
                  </Link>
                </td>
              </tr>

              <tr>
                <td align="center">
                  <Row className="table-cell w-[100px] align-bottom">
                    <Column className="pr-[10px]">
                      <Link href="https://x.com/contentflo_io">
                        <Img
                          alt="Twitter"
                          height="25"
                          src="https://utfs.io/f/x1QQpYwRTAfhLdZfFUja9pGzNrhMBxum0XD3ncfHlQo87AIi"
                          width="25"
                        />
                      </Link>
                    </Column>
                    <Column className="pr-[10px]">
                      <Link href="https://www.tiktok.com/@contentflo">
                        <Img
                          alt="TikTok"
                          height="25"
                          src="https://utfs.io/f/x1QQpYwRTAfho8ctxZscx6HkgLBzlA4qZn91mWrOjVpRKYNF"
                          width="25"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.instagram.com/contentflo.io/">
                        <Img
                          alt="Instagram"
                          height="25"
                          src="https://utfs.io/f/x1QQpYwRTAfhx5s9o2wRTAfhFNM02w9b3C1eKjpmoknIvLuD"
                          width="25"
                        />
                      </Link>
                    </Column>
                  </Row>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <Link
                    href="https://www.contentflo.io"
                    className="no-underline"
                  >
                    <Text className="mb-0 text-[16px] font-light leading-[24px] text-gray-200 no-underline">
                      contentflo.io
                    </Text>
                  </Link>
                </td>
              </tr>
            </table>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
