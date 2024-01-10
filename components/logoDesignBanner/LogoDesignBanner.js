import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function LogoDesignBanner() {
    return (
        <>
            <AppBanner
                YellowHeading="We Deliver Designs
            With Refreshing
            Ideas"
                paragraph="We create a brand symbol that voices its own story. Connect
            with the target audience on an emotional level and achieve
            success."
                backgroundImg="/images/loadingComponentBg.png"
                sideImage="/images/logoDesign.png"
            />
            <AppBanner
                hideBtnAndPartnerImage={true}
                YellowHeading="Scintillating Designs By
                Our Logo Design Agency"
                paragraph="Create a strong impression on the minds of your prospects with a well-defined
                logo. Being memorable and distinctive is the dream of every business. Get in
                touch with our logo designers and promote your brand in the right direction."
                backgroundColor="#090f4b"
                sideImage="/images/logoDesignSection.png"
            />
        </>
    )
}

export default LogoDesignBanner;