import React from 'react';
import AppBanner from '@/reusable/AppBanner';

function OnlineReputationManagementBanner() {
    return (
        <>
            <AppBanner
                YellowHeading="ORM SERVICES PROVIDERS"
                paragraph="Implementation of online reputation management (ORM) is
                essential for business success. It helps to possess a good
                standing in the target market and competition. Subsequently, it
                reduces negative feedback and comments."
                backgroundImg="/images/BORM-BG.png"
            />
            <AppBanner
                hideBtnAndPartnerImage={true}
                YellowHeading="How Do You Want Us To
                Help Transform Your
                Business?"
                paragraph="Building trust with customers and creating a good repute is not easy. You need to
                spend ample time fixing issues and promoting your site. However, if you are
                connected to a reliable company like Digit Media Designs, the branding process is
                not a tough nut. DMD is a renowned web designing company that offers high-
                quality online reputation management services. We help our clients overcome
                negativity and build a strong identity on the market."
                backgroundImg="/images/GROW-YOUR-BUSNIESS---BG.png"
            />
        </>
    )
}

export default OnlineReputationManagementBanner;
