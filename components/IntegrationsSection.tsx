import Image from "next/image";

export default function IntegrationsSection() {
  return (
    <section className="relative w-full  h-[853px] mt-[120px]">
      {/* Top Wave */}
      <Image src="/integrate.png" alt="My App Logo" fill priority />

      <Image
        src="/integrations/zoom.png"
        alt="integration"
        width={120}
        height={120}
        className="absolute top-[228px] left-[10%]"
      />
      <Image
        src="/integrations/zendesk.png"
        alt="zendesk"
        width={120}
        height={120}
        className="absolute top-[213px] left-[25%]"
      />
      <Image
        src="/integrations/evernote.png"
        alt="evernote"
        width={54}
        height={64}
        className="absolute top-[161px] left-[42%]"
      />
      <Image
        src="/integrations/google.png"
        alt="google"
        width={120}
        height={120}
        className="absolute top-[126.08px] right-[35%]"
      />
      <Image
        src="/integrations/dropbox.png"
        alt="dropbox"
        width={120}
        height={120}
        className="absolute top-[120.08px] right-[12%]"
      />
      <Image
        src="/integrations/shopify.png"
        alt="shopify"
        width={120}
        height={120}
        className="absolute top-[303.08px] right-[8%]"
      />
      <Image
        src="/integrations/salesforce.png"
        alt="salesforce"
        width={93}
        height={65}
        className="absolute top-[382.08px] right-[18%]"
      />
      <Image
        src="/integrations/trello.png"
        alt="trello"
        width={64}
        height={64}
        className="absolute top-[269.08px] right-[25%]"
      />
      <Image
        src="/integrations/slack.png"
        alt="slack"
        width={64}
        height={64}
        className="absolute top-[333.08px] left-[45%]"
      />
      <Image
        src="/integrations/mailchimp.png"
        alt="mailchimp"
        width={64}
        height={64}
        className="absolute top-[375.08px] left-[20%]"
      />



      {/* Center content */}
      <div className="absolute w-[937px] h-[188px] text-center top-[545px] left-1/2 -translate-x-1/2">
        <h2 className="text-[60px] font-[800] text-[#101010]">
          Integrate Top Work Tools
        </h2>

        <p className="text-[18px] leading-[200%] text-[#272727] font-[400]">
          Create smooth workflow across multiple channels to boost productivity
          and drive collaboration among teams. Enjoy real-time insights on
          workflow performance and identify bottlenecks.
        </p>
      </div>
    </section>
  );
}
