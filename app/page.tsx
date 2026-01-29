import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import IntegrationsSection from "@/components/IntegrationsSection";

export default function Home() {
  return (
    <div>
      <section className="h-[438px] w-full bg-gradient-to-br from-[#371B86] to-[#280689] px-[80px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-between  w-[922px] h-[258px]">
          <div className="text-center flex flex-col items-center justify-between w-full h-[186px]">
            <h2 className="text-[18px] text-[#FFFFFF] font-[400] leading-[24px] tracking-[2px]">
              REQUEST DEMO
            </h2>
            <h1 className="text-[60px]  text-[#FFFFFF] font-[600] leading-[24px] tracking-[2px] leading-[90px] tracking-normal">
              We’d love to hear from you
            </h1>
            <p className="text-[18px] text-[#E0E0E0] leading-none tracking-normal ">
              Contact us, and we will promptly respond with real-time solutions
              utilizing:
            </p>
          </div>

          <div className="w-[740px] h-[24px] flex items-center justify-between">
            <div className="w-[201px] h-full pr-[10px] flex items-center justify-between ">
              <Image src="/Icon.png" alt="My App Logo" width={20} height={20} />
              <p className="text-[#FEFEFE] leading-[24px] text-[20px] font-normal -translate-y-[2px]">
                Conventional AI
              </p>
            </div>

            <div className="w-[236px] h-full pr-[10px] flex items-center justify-between">
              <Image src="/Icon.png" alt="My App Logo" width={20} height={20} />
              <p className="text-[#FEFEFE] leading-[24px] text-[20px] font-[400] -translate-y-[2px]">
                Hyper-connectivity
              </p>
            </div>
            <div className="w-[239px] h-full pr-[10px] flex items-center justify-between">
              <Image src="/Icon.png" alt="My App Logo" width={20} height={20} />
              <p className="text-[#FEFEFE] leading-none text-[20px] font-normal tracking-normal -translate-y-[2px]">
                Advanced Analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1107px] flex items-center justify-center">
        <form className="w-[628px] h-[894px] flex flex-col items-center justify-between">
          <div className="w-full h-[766px] flex flex-col items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="First Name"
                className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-[302px] pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
              />

              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Last Name"
                className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-[302px] pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
              />
            </div>

            <input
              type="text"
              name="jobTitle"
              id="job-title"
              placeholder="Job Title"
              className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-full pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
            <input
              type="text"
              name="companyName"
              id="company-name"
              placeholder="Company Name"
              className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-full pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-full pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
            <div
              className="w-full h-[48px] flex items-center justify-between border border-[#EAECF0] rounded-[4px] pr-[16px] transition-all
                focus-within:border-[#280689] focus-within:ring-1 focus-within:ring-[#280689]"
            >
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                className="h-full outline-none w-full pl-[16px] bg-transparent
               text-[#BBBBBB] 
               focus:text-[#000E29] 
               not-placeholder-shown:text-[#000E29]
               placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
               placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
              />

              <button className="text-[#667085] flex items-center justify-center cursor-pointer">
                <FaAngleDown size={16} />
              </button>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              id="phone-number"
              placeholder="Enter Phone Number"
              className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-full pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
            <input
              type="text"
              name="companyWebsite"
              id="company-website"
              placeholder="Company Website"
              className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-full pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
            <input
              type="text"
              name="CMPV"
              id="cmpv"
              placeholder="Current Monthly Processing Volume (USD)"
              className="peer border border-[#EAECF0] h-[48px] rounded-[4px] outline-none w-full pl-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
            <div
              className="w-full h-[48px] flex items-center justify-between border border-[#EAECF0] rounded-[4px] pr-[16px] transition-all
                focus-within:border-[#280689] focus-within:ring-1 focus-within:ring-[#280689]"
            >
              <input
                type="text"
                name="enquiry"
                id="enquiry"
                placeholder="How did you hear about Enif"
                className="h-full outline-none w-full pl-[16px] bg-transparent
               text-[#BBBBBB] 
               focus:text-[#000E29] 
               not-placeholder-shown:text-[#000E29]
               placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
               placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
              />

              <button className="text-[#667085] flex items-center justify-center cursor-pointer">
                <FaAngleDown size={16} />
              </button>
            </div>

            <textarea
              name="description"
              id="description"
              rows={5}
              placeholder="Description"
              className="peer border border-[#EAECF0]  rounded-[4px] outline-none w-full pl-[16px] pt-[16px]
             text-[#BBBBBB] bg-white
             focus:text-[#000E29] focus:border-[#280689] focus:ring-1 focus:ring-[#280689] 
             not-placeholder-shown:text-[#000E29] not-placeholder-shown:border-[#280689]
             placeholder-[#BBBBBB] placeholder:font-[400] placeholder:text-[14px] 
             placeholder:leading-[18px] placeholder:tracking-[0%] placeholder:opacity-100"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[64px] bg-[#04FFFF] text-[#1B0655]  text-[20px] leading-[24px] rounded-[32px] font-[500] cursor-pointer"
          >
            Request Demo
          </button>
        </form>
      </div>

      <div className="w-full h-[1184px] bg-[#F6F8FC] flex items-center justify-center p-[80px] ">
        <div className="w-full h-full  flex flex-col items-center justify-between">
          <div className="h-[116px] flex flex-col items-center justify-between ">
            <h1 className="font-[600] text-[#131339] text-[48px] leading-[70px] ">
              Experiment at Scale
            </h1>
            <p className="text-[18px] leading-[30px] text-[#121212] font-[300]">
              Unlock new possibilities across all teams.
            </p>
          </div>

          <div className="w-full h-[844px] grid grid-cols-3 grid-rows-3 gap-6 ">
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Escalations
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Automate issue resolution and ensure timely escalations for
                quick resolution.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Deflection
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Reduce support costs and improve customer satisfaction with
                self-service deflection.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Integrations
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Seamlessly integrate Enif with various apps and channels for
                enhanced automation.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Analytics
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Gain valuable insights into customer behavior with advanced
                analytics.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                SLA tracking
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Track and meet SLAs with Enif's automated tracking and alerting.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Lead generation
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Generate new leads and upsell existing customers with
                conversational AI.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Sentiment analysis
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Analyze customer feedback to improve customer satisfaction and
                loyalty.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Custom workflows
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Design workflows that meet your specific business needs for
                optimized efficiency.
              </p>
            </div>
            <div className="p-[32px] w-full h-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-[12px]">
              <Image
                src="/Featured icon.png"
                alt="chat logo"
                width={48}
                height={48}
              />
              <p className="font-[600] text-[20px] leading-[38px] text-[#101828] my-[12px]">
                Product development
              </p>

              <p className="text-[16px] leading-[28px] text-[#475467]">
                Automate product development tasks for faster time-to-market.
              </p>
            </div>
          </div>
        </div>
      </div>

      <IntegrationsSection />

      <div className="w-[1030px] h-[529px] mx-auto my-[150px] flex flex-col items-center justify-between">
        <div className="w-full h-[458px] flex flex-col items-center justify-between">
          <Image
            width={202}
            height={46}
            src="/CredPal.png"
            alt="credpal logo"
          />
          <p className="text-[20px] text-center leading-[60px] text-[#101010]">
            To improve their operations, CredPal turned to Enif. By using Enif's
            AI and automation capabilities, CredPal was able to efficiently
            handle a high volume of customer inquiries, improve customer
            satisfaction, and drive growth for their business.{" "}
            <span className="font-[700] text-[26px] leading-[60px] ">
              With Enif's help, CredPal was able to increase conversions
            </span>{" "}
            while reducing cost and stay ahead of the competition by proactively
            addressing customer needs based on data-driven insights
          </p>
          <div className="w-[255px] h-[64px] flex items-center justify-between">
            <Image
              src="/cerdpalmini.jpg"
              alt="cerdpal mini"
              width={58}
              height={58}
              className="rounded-[50%]"
            />
            <div className="w-[185px] h-[56px] flex flex-col items-start justify-between">
              <p className="text-[22px] leading-[20px] text-[#000000] font-[600]">
                Credpal
              </p>
              <p className="text-[18px] leading-[20px] text-[#000000] font-[300]">
                Head of Operations
              </p>
            </div>
          </div>
        </div>
        <div className="w-[66px] h-[14px]  flex items-center justify-between">
          <span className="w-[14px] h-full rounded-full bg-[#280689]" />
          <span className="w-[14px] h-full rounded-full bg-[#D9D9D9]" />
          <span className="w-[14px] h-full rounded-full bg-[#D9D9D9]" />
        </div>
      </div>
    </div>
  );
}
