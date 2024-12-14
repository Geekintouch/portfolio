import React from "react";
import TypingText from "@/components/TypingText";
import AppSection from "@/components/AppSection";
import AppText from "../AppText";
import ContactLogos from "../ContactLogos";
import AppButton from "../AppButton";
import { HOME } from "@/constants/menu";
import Image from "next/image";

function HeaderSection() {
  return (
    <AppSection headerTxt={HOME} hideHeaderTxt>
      <div className="flex justify-between items-center gap-x-2 gap-y-8 lg:flex-row flex-col">
        <div className={`lg:basis-3/5 flex flex-col gap-3 md:basis-auto`}>
          <div
            className={`flex flex-col gap-3 relative pl-2 ml-4 md:ml-0
                        before:content-[''] before:absolute before:h-5 before:w-5 before:rounded-full before:bg-primaryColor before:-left-[26px] 
                        after:content-[''] after:absolute after:h-full after:w-1 after:-left-[18px] after:top-1 after:bg-gradient-to-b from-primaryColor via-primaryColor`}
          >
            <AppText
              textTag="p"
              extraMedium
              semiBold
              defaultColor
            >{`Hello, It's me`}</AppText>
            <AppText
              textTag="h1"
              extraLarge
              bold
              primary
            >{`Shyam Kiran`}</AppText>
            <div className="flex flex-row flex-wrap gap-2">
              <AppText textTag="p" extraMedium semiBold defaultColor>
                {`I'm a`}
              </AppText>
              <TypingText textArr={["Backend Developer", "DevOps Engineer", "Data Engineer", "Full Stack Developer", "Data Analyst", "Frontend Developer", "Software Developer" ]} />
            </div>
            <AppText textTag="p" medium defaultColor customClass="mt-4 mb-4">
              {`As a passionate & ambitious Engineer curious to design, implement & optimize complex systems, with a strong focus on building scalable services leveraging diverse technologies and cloud platforms. I thrive on hands-on learning through impactful projects and embrace a mindset of perpetual learning with continuous growth and development.`}
            </AppText>
            <ContactLogos />
          </div>
          <div className="flex items-center justify-start gap-4 mt-6 flex-wrap">
          <AppButton
              ariaLabel="Send email"
              buttonType="primary"
              onClick={() => window.location.href = 'mailto:shyamkiran0831@gmail.com'}
              buttonText="Contact Me"
            />
            <AppButton
              ariaLabel=""
              buttonType="secondary"
              onClick={() => {
                window.open("https://drive.google.com/file/d/15j5-fnJLwbGows8jwmAJMumaubBYlqpT/view?usp=share_link", '_blank');
              }}
              buttonText="See My Resume"
            />
          </div>
        </div>
        <div className="lg:basis-2/5 md:basis-auto">
  <div className="w-full h-full relative m-auto">
    <Image
      alt="Shyam's Avatar Image"
      src={"/images/new-avatar.png"}
      fill
      loading={"lazy"}
      className="bg-backgroundColor-day dark:bg-backgroundColor-night"
    />
  </div>
</div>

      </div>
    </AppSection>
  );
}

export default HeaderSection;
