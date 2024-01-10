import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function WebAndAppBanner() {
    return (
        <>
            <AppBanner
                whiteHeading="Build A Mobile App For"
                YellowHeading=" $149"
                paragraph="Connect with a top-ranked mobile app development agency to
            integrate your devices with user-friendly applications. We build
            engaging and compelling mobile apps for our customers."
                backgroundImg="/images/webAndAppBg.png"
            />
            <AppBanner
            hideBtnAndPartnerImage={true}
                YellowHeading="Mobile App Developers For Consultation"
                paragraph="Digit Media Designs offers free of cost consultation services to businesses. Expand
                your organization on iOS and Android smartphones by contacting experienced
                mobile app developers. Discuss your requirements with our experts and stay
                ahead of the competition."
                backgroundImg="/images/loadingComponentBg.png"
                sideImage="/images/webAndAppSection.png"
            />
        </>
    )
}

export default WebAndAppBanner;
