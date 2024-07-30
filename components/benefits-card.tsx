import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

const BenefitsCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="benefitCard">
      <div className="benefitCardGradient1"></div>
      <div className="benefitCardGradient2"></div>

      <div className="absolute -top-10">
        <div className="glassContainerContainerRound">
          <div className="benefitOrangeCircle">
            <div className="w-8 h-8">
              <Image src={image} alt={`benefit icon`} width={32} height={32} />
            </div>
          </div>
        </div>
      </div>

      <h2 className="grayTextGradient text-[24px]">{title}</h2>
      <p className="mt-3 text-white/60 text-[14px]">{description}</p>
    </div>
  );
};

export default BenefitsCard;
