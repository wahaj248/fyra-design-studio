import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function PricingBanner() {
    return (
        <>
            <AppBanner
                YellowHeading="Reasonable Packages"
                paragraph="We have kept our rates minimal to make it easy for everybody to
                benefit from our branding & digital marketing services"
                backgroundImg="/images/Reasonable--Packages-BG.png"
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

export default PricingBanner;
