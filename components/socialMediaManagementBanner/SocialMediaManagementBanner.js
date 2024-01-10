import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function SocialMediaManagementBanner() {
    return (
        <>
            <AppBanner
                YellowHeading="BE HEARD BY THE CROWDS VIA SMM SERVICES"
                paragraph="Let’s define your brand in an inspiring way! Our marketers use
                various social media platforms to generate astounding results."
                backgroundImg="/images/SmmBg.png"
            />
            <AppBanner
                hideBtnAndPartnerImage={true}
                YellowHeading="Show Your Worth To The
                World With Top Social
                Media Marketing
                Company Services"
                paragraph="Employ the best social media marketing professionals and let your brand
                generate a strong influence. Our team is adept in social media marketing; they
                know the art of promoting brands through campaigns, advertising, and more.
                Reach your audience with result-driven strategies."
                backgroundImg="/images/SmmSection.png"
            />
        </>
    )
}

export default SocialMediaManagementBanner;