import React from "react";
import Back from "../components/Back";

export default function Privacy() {

    return(
        <div className="view flex flex-column">
            <div className="content-container vtspace-75 vbspace-200">
                <h1 className="title-large text-center page-header">Privacy Policy</h1>
                <h2>Introduction</h2>
                <p>
                    This policy should be read in conjunction with our
                    <a href="./terms_and_conditions"> Terms and Conditions </a>
                    and applies to your use of:
                </p>
                <ul>
                    <li>
                        DreamKollab’s Kollab Share mobile application software (<span>App</span>) 
                        [available on our site] on [WEB ADDRESS]] (<span>App Site</span>), once you 
                        have downloaded or streamed a copy of the App onto your mobile 
                        telephone or handheld device (<span>Device</span>), and should be read in conjunction 
                        with our Terms and Conditions.
                    </li>
                    <li>
                        Any of the services accessible through the App (<span>Services</span>) that are available 
                        on the App Site or other sites of ours. This policy sets out the basis on which 
                        any personal data we collect from you, or that you provide to us, will be 
                        processed by us. This App is not intended for children and we do not knowingly 
                        collect data relating to children. Please read the following carefully to 
                        understand our practices regarding your personal data and how we will treat it.
                    </li>
                </ul>
                <h2>The data we collect about you</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you as follows:</p>
                <ul>
                    <li>Identity Data.</li>
                    <li>Contact Data.</li>
                    <li>Financial Data.</li>
                    <li>Transaction Data.</li>
                    <li>Device Data.</li>
                    <li>Profile Data.</li>
                    <li>Usage Data.</li>
                    <li>Location Data</li>
                </ul>
                <p>
                    We do not collect any Special Categories of Personal Data about you 
                    (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, 
                    sexual orientation, political opinions, trade union membership, information about your health, and 
                    genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
                </p>
                <h2>How is your personal data collected?</h2>
                <p>We will collect and process the following data about you:</p>
                <ul>
                    <li>
                        <span>Information you give us.</span> This is information (including Identity, Contact, Financial, and Marketing 
                        and Communications Data) you consent to giving us about you by filling in forms on the App Site and the 
                        Services Sites (together <span>Our Sites</span>), or by corresponding with us (for example, by email). It includes 
                        information you provide when you register to use the App Site, download or register an App, subscribe 
                        to any of our Services, search for an App or Service, and when you report a problem with an App, our Services, 
                        or any of Our Sites. If you contact us, we will keep a record of that correspondence. 
                    </li>
                    <li>
                        <span>Information we collect about you and your device.</span> Each time you visit one of Our Sites or use one of our Apps 
                        we will automatically collect personal data including Device, Content and Usage Data. We collect this data 
                        using cookies and other similar technologies.
                    </li>
                    <li>
                        <span>Location Data</span>. We also use Google Analytics to determine your current location. Some of our location-enabled Services 
                        require your personal data for the feature to work. If you wish to use the particular feature, you will be asked to consent 
                        to your data being used for this purpose. You can withdraw your consent at any time by contacting us at contact@dreamkollab.com.
                    </li>
                </ul>
                <h2>How we use your personal data</h2>
                <p>
                    We will only use your personal data when the law allows us to do so. Most commonly we will use your personal 
                    data in the following circumstances:
                </p>
                <ul>
                    <li>Where you have consented before the processing.</li>
                    <li>Where we need to perform a contract we are about to enter or have entered with you.</li>
                    <li>
                        Where it is necessary for our legitimate interests (or those of a third party) and your interests and 
                        fundamental rights do not override those interests.
                    </li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
                <p>
                    We will only send you direct marketing communications by email or text if we have your consent. You have the right to withdraw 
                    that consent at any time by contacting us.
                </p>
                <table className="vtspace-50">
                    <thead>
                        <tr>
                            <th>Purpose/activity</th>
                            <th>Type of data</th>
                            <th>Lawful basis for processing (UK & GDPR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>To install the App and register you as a new App user</td>
                            <td>
                                <ul>
                                    <li>Identity</li>
                                    <li>Contact</li>
                                    <li>Financial</li>
                                    <li>Device</li>
                                </ul>
                            </td>
                            <td><ul><li>Your consent</li></ul></td>
                        </tr>
                        <tr>
                            <td>
                                To deliver Services including managing payments and collecting money owed to us, 
                                and collect data necessary for the improvement of the application
                            </td>
                            <td>
                                <ul>
                                    <li>Identity</li>
                                    <li>Contact</li>
                                    <li>Financial</li>
                                    <li>Transaction</li>
                                    <li>Device</li>
                                    <li>Marketing and Communications</li>
                                    <li>Location</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Your consent</li>
                                    <li>Performance of a contract with you</li>
                                    <li>Necessary for our legitimate interests (to recover debts due to us)</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Data security</h2>
                <p>
                    We are committed to making sure your information is protected in accordance with applicable laws 
                    and our data privacy policies We work to protect the security of your personal information during 
                    transmission by using encryption protocols and software. We cannot fully guarantee against the access, 
                    disclosure, alteration, or deletion of data through events, including but not limited to hardware 
                    or software failure or unauthorized use. Any information that you provide to us is done so entirely 
                    at your own risk.
                </p>
                <h2>Data retention</h2>
                <p>
                    Please note that even If you delete your Smart Contract or addresses from the Kollabshare, 
                    uninstall the App from your device, or request that your information be deleted, we still 
                    may retain some information that you have provided to us to maintain the App or to comply 
                    with the laws and regulations to which the App is subject. If you have any question or objection 
                    as to how we collect and process your personal information, please contact <span className="italic">contact@dreamkollab.com</span>.
                </p>
                <h2>Your legal rights</h2>
                <p>
                    Under certain circumstances you have the following rights under data protection laws in relation 
                    to your personal data: 
                </p>
                <ul>
                    <li>Request access to your personal data.</li>
                    <li>Request correction of your personal data.</li>
                    <li>Request erasure of your personal data.</li>
                    <li>Object to processing of your personal data.</li>
                    <li>Request transfer or your personal data.</li>
                    <li>Right to withdraw consent.</li>
                </ul>
                <p>You also have the right to ask us not to continue to process your personal data for marketing purposes.</p>
                <p>You can exercise any of these rights at any time by contacting us at <span className="italic">contact@dreamkollab.com.</span></p>
                <h2>Glossary</h2>
                <h2>Lawful basis</h2>
                <p>
                    <span>Consent </span>means processing your personal data where you have signified your agreement by 
                    a statement or clear opt-in to processing for a specific purpose. Consent will only be valid if it 
                    is a freely given, specific, informed and unambiguous indication of what you want. You can withdraw 
                    your consent at any time by contacting us. 
                </p>
                <p>
                    <span>Legitimate Interest </span>means the interest of our business in conducting and managing our 
                    business to enable us to give you the best service/product and the best and most secure experience.
                    We make sure we consider and balance any potential impact on you (both positive and negative) and your 
                    rights before we process your personal data for our legitimate interests. We do not use your personal 
                    data for activities where our interests are overridden by the impact on you 
                    (unless we have your consent or are otherwise required or permitted to by law). You can obtain 
                    further information about how we assess our legitimate interests against any potential impact on 
                    you in respect of specific activities by contacting us.
                </p>
                <p>
                    <span>Performance of Contract </span>means processing your data where it is necessary for 
                    the performance of a contract to which you are a party or to take steps at your request before 
                    entering into such a contract.
                </p>
                <p>
                    <span>Comply with a legal obligation </span>means processing your personal data where it is necessary 
                    for compliance with a legal obligation that we are subject to.
                </p>
                <h2>Third parties</h2>
                <p>Internal third parties</p>
                <p>DSDK Technologies Ltd acting as joint controllers or processors who are based in Ireland and provide [IT and system administration services and undertake leadership reporting]. </p>
                <p>External third parties</p>
                <p>Service providers [acting as processors] based in [SPECIFIC COUNTRIES] who provide [IT and system administration services]. </p>
                <p>Professional advisers including lawyers, bankers, auditors and insurers based in the United Kingdom and Ireland who provide consultancy, banking, legal, insurance and accounting services.</p>
                <p>Professional advisers including lawyers, bankers, auditors and insurers based in the United Kingdom and Ireland who provide consultancy, banking, legal, insurance and accounting services.</p>
                <p>HM Revenue and Customs, regulators and other authorities acting as processors or joint controllers based [in the UK] [who require reporting of processing activities in certain circumstances.</p>
                <h2>Your legal rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>
                        <span>Request access </span>
                        to your personal data (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
                    </li>
                    <li>
                        <span>Request correction </span>
                        of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                    </li>
                    <li>
                        <span>Request erasure </span>
                        of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
                    </li>
                    <li>
                        <span>Object to processing </span>
                        of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
                    </li>
                    <li>
                        <span>Request restriction of processing </span>
                        of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:
                        <ol type="a">
                            <li>If you want us to establish the data's accuracy;</li>
                            <li>Where our use of the data is unlawful but you do not want us to erase it;</li>
                            <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or</li>
                            <li>You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
                        </ol>
                    </li>
                    <li>
                        <span>Request the transfer </span>
                        of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
                    </li>
                    <li>
                        <span>Withdraw consent at any time </span>
                        where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.
                    </li>
                </ul>
                <h2>Description of categories of personal data</h2>
                <ul>
                    <li>
                        <span>Identity Data: </span>
                        first name, last name, maiden name, username or similar identifier, marital status, title, date of birth, gender.
                    </li>
                    <li>
                        <span>Contact Data: </span>
                        billing address, email address and telephone numbers.
                    </li>
                    <li>
                        <span>Financial Data: </span>
                        bank account and payment card details relating to your Smart Contract.
                    </li>
                    <li>
                        <span>Device Data: </span>
                        includes the type of mobile device you use, a unique device identifier [(for example, your Device's IMEI number, the MAC address of the Device's wireless network interface, or the mobile phone number used by the Device)],] [mobile network information,] [your mobile operating system,] [the type of mobile browser you use,] [time zone setting. 
                    </li>
                    <li>
                        <span>Profile Data: </span>
                        includes your username and password, Smart Contract transaction history, feedback and survey responses.
                    </li>
                    <li>
                        <span>Usage Data: </span>
                        includes details of your use of any of our Apps or your visits to any of Our Sites including, but not limited to, [traffic data [and other communication data],] whether this is required for our own billing purposes or otherwise [and the resources that you access].
                    </li>
                    <li>
                        <span>Marketing and Communications Data: </span>
                        includes [your preferences in receiving marketing from us and our third parties and your communication preferences].
                    </li>
                    <li>
                        <span>Location Data: </span>
                        includes your current location disclosed by Google Analytics.
                    </li>
                </ul>
            </div>
            <p className="powered-tag-flex">Powered By Dream Kollab</p>
            <Back />
        </div>
    );

}