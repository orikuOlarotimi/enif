import Image from "next/image";

const integrations = [
  { src: "/integrations/zoom.png", className: "top-[20%] left-[10%]" },
  { src: "/integrations/zendesk.png", className: "top-[30%] left-[25%]" },
  { src: "/integrations/evernote.png", className: "top-[18%] left-[45%]" },
  { src: "/integrations/google.png", className: "top-[22%] right-[35%]" },
  { src: "/integrations/dropbox.png", className: "top-[20%] right-[12%]" },
  { src: "/integrations/trello.png", className: "top-[45%] right-[40%]" },
  { src: "/integrations/slack.png", className: "top-[50%] left-[48%]" },
  { src: "/integrations/mailchimp.png", className: "top-[55%] left-[18%]" },
  { src: "/integrations/salesforce.png", className: "top-[55%] right-[18%]" },
  { src: "/integrations/shopify.png", className: "top-[42%] right-[8%]" },
];

export default function IntegrationsSection() {
  return (
    <section className="relative w-full  h-[853px] mt-[120px]">
      {/* Top Wave */}
      <Image src="/integrate.png" alt="My App Logo" fill priority />

      {integrations.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.className} w-[80px] h-[80px] bg-white rounded-2xl shadow-lg flex items-center justify-center`}
        >
          <Image src={item.src} alt="integration" width={40} height={40} />
        </div>
      ))}

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
