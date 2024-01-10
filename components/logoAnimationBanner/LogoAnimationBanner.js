import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function LogoAnimationBanner() {
    return (
        <>
            <AppBanner
                whiteHeading="DESIGN YOUR LOGO
        FOR "
                YellowHeading="$69"
                paragraph="Avail our affordable logo animation services. Fyra Design Studio
            offers original and valuable logo animation experiences to
            clients. Our logo animation services offer you the opportunity to
            work with talented designers who can help bring your brand
            vision to life."
                backgroundImg="/images/logoAnimationBg.png"
            />
            <AppBanner
            hideBtnAndPartnerImage={true}
                YellowHeading="Boost The Reputation Of
                Your Business With
                Custom Logo Animation"
                paragraph="Increase your brand’s awareness and marketing ROI using an animated logo.
                Fyra Design Studio is an ideal place for professionals with the expertise to make
                a terrific symbol. Create an emotional connection with the audience today."
                backgroundImg="/images/logoAnimationSection.png"
            />
        </>
    )
}

export default LogoAnimationBanner;
