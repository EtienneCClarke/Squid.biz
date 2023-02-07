import React, { useRef } from "react";
import Back from "../components/Back";
import logo256 from "../assets/images/png/squid_logo_circle_purple.png";
import dreamkollab_logo from "../assets/logo/dreamkollab_with_text.JPG";

export default function Terms() {

    function scrollTo(target) {

    }

    return(
        <div className="view flex flex-column">
            <div className="content-container vtspace-75 vbspace-200">
                <h1 className="title-large text-center page-header">Terms and Conditions</h1>
                <h2>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE</h2>
                <h2>Who we are and how to contact us</h2>
                <p>
                    Squid.biz is a site operated by Dream Kollab Limited ("We"). We are registered in England and Wales 
                    under company number 13164361 and have our registered office at F14 Irwell House, 13 Slate Wharf, Castlefield, 
                    Manchester, M15 4SW. Our main trading address is F14 Irwell House, 13 Slate Wharf, Castlefield, Manchester, M15 4SW. 
                    We are regulated by the Financial Conduct Authority.
                    We are a limited company.
                    To contact us, please email Contact@DreamKollab.com or telephone our customer service line on +447478755564.
                </p>
                <div className="flex flex-row w-100 flex-space-around flex-wrap flex-align-center">
                    <img src={logo256} alt="squid.biz" className="vtspace-50"/>
                    <img src={dreamkollab_logo} alt="dreamkollab logo" className="vtspace-50"/>
                </div>
                <h2 className="vtspace-50">1.	Account Setup </h2>
                <p>If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.</p>
                <p>We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use.</p>
                <p>If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us at Contact@DreamKollab.com.</p>
                <h2>2.	Services and Functions</h2>
                <p>DreamKollab’s Squid creates unique cryptocurrency wallet addresses (a “Smart Contract”) which users can divert revenue into based on predetermined shares. Users will create a Smart Contract which DreamKollab’s software will turn into a single payment address (a “Smart Contract Address”) and split the revenue based on the user’s share allocation. Each Smart Contract Address will be unique to a single blockchain.</p>
                <p>A Squid is a collection of crypto addresses each with an assigned number of shares. Once a Squid has been created it can no longer be modified and all share values are fixed. If a payee wants to withdraw any monies from the Squid they can only withdraw the amount they are entitled to which is determined by the amount of shares they have been allocated. The creator of the Squid retains the ability to flush the contract and all payees will be transferred their share of any monies remaining.</p>
                <h2>3.	Use of Website and App (“Services”)</h2>
                <p>The Services operated and offered by DreamKollab’s Squid are not intended to be offered or made available to any person who resides in any of the following: Cuba, Iran, North Korea, Syria and the Crimea, Donetsk and Luhansk Regions. The full range of Services offered by DreamKollab is subject to change at any time.</p>
                <p>By using any of our Services, you ("you", "user", "client", "customer"):</p>
                <ul>
                    <li>By using any of our Services, you ("you", "user", "client", "customer"):</li>
                    <li>warrant and represent that you are at least eighteen (18) years of age and have full legal capacity to enter into an agreement.</li>
                </ul>
                <p>As with any asset, the values of cryptocurrencies may fluctuate significantly and there is a substantial risk of economic losses when purchasing, selling, holding or investing income into cryptocurrencies and their derivatives.</p>
                <p>By making use of DreamKollab Services, you acknowledge and agree that: </p>
                <ol>
                    <li>you are aware of the risks associated with transactions of and investing into digital currencies and their derivatives; </li>
                    <li>you shall assume all risks related to the use of DreamKollab services and transactions of digital currencies and their derivatives; and</li>
                    <li>DreamKollab shall not be liable for any such risks or adverse outcomes.</li>
                </ol>
                <p>If you disagree with these Terms of Service or any part of them, you must not use this any of our Services.</p>
                <p>DreamKollab may communicate with you about its Services electronically. You are responsible for keeping your email address up to date in your Account Profile. If at any time you no longer wish to receive these communications, please contact Contact@DreamKollab.com.</p>
                <h2>4.	Fees</h2>
                <p>A 1% transaction fee will be charged on all payments received into a Smart Contract. </p>
                <h2>5.	Liability</h2>
                <p>By using the Services, you agree and acknowledge that DreamKollab accepts no responsibility for any loss or adverse outcome suffered by a user in the following circumstances:</p>
                <ol>
                    <li>use of an incorrect Smart Contract address when attempting to pay into a Smart Contract leading to user funds becoming trapped in the blockchain, </li>
                    <li>the user losing access to their wallet, </li>
                    <li>network delay, computer system failures and other force majeure, which may lead to delay, suspension or deviation of the execution of our Services.</li>
                    <li>Tokens that contain malware being sent into or withdrawn from the Smart Contract.</li>
                </ol>
                <p>Though DreamKollab will use commercially reasonable endeavours to mitigate any loss suffered by a user in the circumstances set out above, in no event shall we, our affiliates or service providers, or any of our or their respective officers, directors, agents, employees or representatives, be liable for any of the following types of loss or damage arising under or in connection with our Services, these terms and conditions or otherwise.</p>
                <p className="underline">DreamKollab is not a regulated financial service provider and is not registered with or regulated or authorised by the Financial Conduct Authority, the Competition Consumer and Protection Commission or any other regulatory body in the UK or Ireland for financial services and so you will not be able to avail of regulatory protections associated with such regulated entities such as investor or deposit protection schemes or access to the Financial Services and Pensions Ombudsman in relation to the Digital Currency Services.</p>
                <h2>6.	There are other terms that may apply to you</h2>
                <p>These terms of use refer to the following additional terms, which also apply to your use of our site:</p>
                <ul>
                    <li>Our <a href="./privacy_policy" className="link">Privacy Policy</a>. See further under 11. How we may use your personal information.</li>
                </ul>
                <h2>7.	We may make changes to these terms</h2>
                <p>We amend these terms from time to time. Every time you wish to use our Services, please check these terms to ensure you understand the terms that apply at that time. </p>
                <h2>8.	We may make changes to our site</h2>
                <p>We may update and change our Services from time to time. We will endeavour to give you reasonable notice of any major changes but recommend that users frequently review these terms of use.</p>
                <h2>9.	Suspension or Withdrawal of Services</h2>
                <p>We do not guarantee that our Services will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our Services for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.</p>
                <p>You are also responsible for ensuring that all persons who use our Services through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.</p>
                <h2>10.	Transfer of Rights</h2>
                <p>We may transfer our rights and obligations under these terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract.</p>
                <h2>11.	How we may use your personal information</h2>
                <p>We will only use your personal information as set out in our <a className="link" href="./privacy_policy">Privacy Policy</a>.</p>
                <h2>12.	Viruses </h2>
                <p>
                    We do not guarantee that the platform from which you use our Services will be secure or free from bugs or viruses.
                    You are responsible for configuring your information technology, computer programmes and platform to access our Services. You should use your own virus protection software.
                </p>
                <h2>13.	Applicable Law</h2>
                <p>These terms of use, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</p>
                <p>If you are a business, these terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>
            <p className="powered-tag-flex">Powered By Dream Kollab</p>
            <Back />
        </div>
    );

}