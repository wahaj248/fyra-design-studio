import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function BrandingBanner() {
    return (
        <>
            <AppBanner
            whiteHeading="BRAND YOUR WEBSITE FOR"
                YellowHeading=" $149"
                paragraph="Advertise your brand with the best branding services company.
                Create an impressive customer experience by projecting your
                business with targeted marketing."
                backgroundImg="/images/loadingComponentBg.png"
                sideImage="/images/brandingImg.png"
                />
            <AppBanner
                hideBtnAndPartnerImage={true}
                YellowHeading="Promote Your Brand And
                Market Your Company
                With Digit Media Designs"
                paragraph="Businesses are in constant need of promotional campaigns. Connect with Digit
                Media Designs and let our branding consultants serve you round the clock. We
                provide you with ideas to market your company and advertise your brands."
                backgroundImg="/images/brandingSectionImg.png"
            />
        </>
    )
}

export default BrandingBanner;
