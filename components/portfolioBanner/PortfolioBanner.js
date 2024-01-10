import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function PortfolioBanner() {
    return (
        <>
            <AppBanner
                whiteHeading="View Our Diverse
            Portfolio To Know
            More"
                paragraph="OUR PORTFOLIO OFFERS A GREAT RANGE OF EXCITING IDEAS.
                We at Digit Media Designs are known for The Best Digital Fix"
                backgroundImg="/images/loadingComponentBg.png"
                sideImage="/images/portfolioImg.png"
            />
            <AppBanner
                hideBtnAndPartnerImage={true}
                YellowHeading="Get In Touch With Our
                Experts For A Free
                Consultation"
                paragraph="A unique and creative branding can help your business stand out from the
                competition and get your brand noticed. Digit Media Designs has a team of
                experienced professionals proficient at creating innovative branding strategies
                that can help your brand uncover its true potential."
                backgroundImg="/images/Free-Consultation---BG.png"
            />
        </>
    )
}

export default PortfolioBanner;
