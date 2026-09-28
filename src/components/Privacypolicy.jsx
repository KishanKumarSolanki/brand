'use client'
import LegalLayout from './Legallayout'

const sections = [
    {
        id: 'introduction',
        title: 'Introduction',
        content: (
            <p>Creative Crew (&quot;Creative Crew&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects the privacy of our clients, website visitors, leads, customers, and users. This Privacy Policy explains how we collect, use, store, process, and protect personal information when you visit creativecrew.com.co, contact us, submit an enquiry, purchase our services, or otherwise interact with Creative Crew. By accessing our website or using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
        ),
    },
    {
        id: 'information-we-collect',
        title: '1. Information We Collect',
        content: (
            <>
                <p>Depending on how you interact with Creative Crew, we may collect the following information:</p>

                <p><strong>A. Personal Information</strong></p>
                <p>This may include:</p>
                <ul>
                    <li>Full name</li>
                    <li>Business/company name</li>
                    <li>Email address</li>
                    <li>Mobile/telephone number</li>
                    <li>Business address</li>
                    <li>Billing information</li>
                    <li>Professional information</li>
                    <li>Communication preferences</li>
                    <li>Information provided through enquiry forms</li>
                    <li>Information provided during consultations</li>
                    <li>Other information voluntarily provided by you</li>
                </ul>

                <p><strong>B. Project & Business Information</strong></p>
                <p>When you purchase or use our services, we may collect information necessary to perform the agreed services, including:</p>
                <ul>
                    <li>Business details</li>
                    <li>Website information</li>
                    <li>Social media account information</li>
                    <li>Marketing requirements</li>
                    <li>Advertising requirements</li>
                    <li>Branding information</li>
                    <li>Campaign information</li>
                    <li>Content and creative materials</li>
                    <li>Business objectives</li>
                    <li>Customer-provided documents or files</li>
                    <li>Login/access information where necessary for service delivery</li>
                </ul>
                <p>We only request access to information reasonably necessary to provide the relevant service.</p>

                <p><strong>C. Payment Information</strong></p>
                <p>When you make a payment, we may receive transaction-related information such as:</p>
                <ul>
                    <li>Payment amount</li>
                    <li>Transaction ID</li>
                    <li>Payment date</li>
                    <li>Payment status</li>
                    <li>Payment method</li>
                    <li>Billing information</li>
                </ul>
                <p>Where payments are processed through third-party payment gateways, your payment information may be processed directly by the relevant payment provider according to its own privacy policy and terms.</p>
                <p>Creative Crew does not intentionally store complete debit/credit card numbers, CVV numbers, PINs, or banking passwords on its own systems.</p>

                <p><strong>D. Technical Information</strong></p>
                <p>When you visit our website, certain information may automatically be collected, including:</p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Approximate location</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Referral source</li>
                    <li>Website interaction data</li>
                    <li>Cookies and similar technologies</li>
                </ul>
            </>
        ),
    },
    {
        id: 'how-we-collect',
        title: '2. How We Collect Information',
        content: (
            <>
                <p>We may collect information through:</p>
                <ul>
                    <li>Website forms</li>
                    <li>Contact forms</li>
                    <li>Lead-generation forms</li>
                    <li>WhatsApp or other communication platforms</li>
                    <li>Email</li>
                    <li>Phone calls</li>
                    <li>Social media</li>
                    <li>Direct messages</li>
                    <li>Online meetings</li>
                    <li>Quotations and proposals</li>
                    <li>Contracts</li>
                    <li>Payments</li>
                    <li>Website cookies</li>
                    <li>Analytics tools</li>
                    <li>Advertising platforms</li>
                    <li>Information voluntarily provided by clients</li>
                </ul>
            </>
        ),
    },
    {
        id: 'how-we-use-it',
        title: '3. How We Use Your Information',
        content: (
            <>
                <p>Creative Crew may use collected information for legitimate business purposes, including:</p>
                <ul>
                    <li>Responding to enquiries</li>
                    <li>Providing quotations</li>
                    <li>Communicating with clients</li>
                    <li>Delivering purchased services</li>
                    <li>Managing projects</li>
                    <li>Creating marketing strategies</li>
                    <li>Managing advertising campaigns</li>
                    <li>Managing social media services</li>
                    <li>Website development and maintenance</li>
                    <li>Providing customer support</li>
                    <li>Processing payments</li>
                    <li>Sending invoices and receipts</li>
                    <li>Managing contracts</li>
                    <li>Improving our services</li>
                    <li>Improving our website</li>
                    <li>Analysing website usage</li>
                    <li>Preventing fraud or abuse</li>
                    <li>Maintaining business records</li>
                    <li>Sending service-related communications</li>
                    <li>Sending promotional communications where permitted</li>
                    <li>Complying with applicable legal requirements</li>
                </ul>
            </>
        ),
    },
    {
        id: 'marketing-communications',
        title: '4. Marketing Communications',
        content: (
            <>
                <p>If you provide your contact information to Creative Crew, we may contact you regarding:</p>
                <ul>
                    <li>Services</li>
                    <li>Offers</li>
                    <li>Promotions</li>
                    <li>New products</li>
                    <li>Marketing packages</li>
                    <li>Updates</li>
                    <li>Educational content</li>
                    <li>Business-related information</li>
                </ul>
                <p>Where applicable, you may opt out of promotional communications by contacting us or using the unsubscribe mechanism provided in the relevant communication.</p>
            </>
        ),
    },
    {
        id: 'legal-basis',
        title: '5. Legal Basis for Processing',
        content: (
            <>
                <p>Where applicable law requires, we process your personal data based on one or more of the following:</p>
                <ul>
                    <li>Your consent (e.g., submitting a lead form or opting into WhatsApp/email communications)</li>
                    <li>The necessity of processing to perform a contract with you (e.g., delivering a purchased service)</li>
                    <li>Our legitimate business interests (e.g., improving our services and website)</li>
                    <li>Compliance with a legal obligation</li>
                </ul>
            </>
        ),
    },
    {
        id: 'sharing',
        title: '6. How We Share Your Information',
        content: (
            <>
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul>
                    <li><strong>Service providers</strong> — CRM platforms, WhatsApp Business API and email automation providers, appointment scheduling tools, payment gateways, hosting providers, and analytics providers</li>
                    <li><strong>Business partners</strong>, only where necessary to deliver a requested service</li>
                    <li><strong>Legal authorities</strong>, where required by law, regulation, or legal process</li>
                    <li><strong>Successors</strong>, in the event of a merger, acquisition, or sale of business assets</li>
                </ul>
                <p>All third-party service providers are required to handle your data securely and only for the purposes we authorize.</p>
            </>
        ),
    },
    {
        id: 'retention',
        title: '7. Data Retention',
        content: (
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, including maintaining your business/CRM record, complying with legal obligations, resolving disputes, and enforcing our agreements. You may request deletion of your data as described in Section 10.</p>
        ),
    },
    {
        id: 'cookies',
        title: '8. Cookies and Tracking Technologies',
        content: (
            <>
                <p>Our website may use cookies and similar technologies to remember your preferences, understand how visitors interact with our site, and measure the effectiveness of our marketing and analytics.</p>
                <p>You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features, including lead forms and booking tools.</p>
            </>
        ),
    },
    {
        id: 'security',
        title: '9. Data Security',
        content: (
            <p>We implement reasonable administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        ),
    },
    {
        id: 'your-rights',
        title: '10. Your Rights',
        content: (
            <>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent to marketing communications at any time</li>
                    <li>Object to or restrict certain processing of your data</li>
                    <li>Request a copy of your data in a portable format</li>
                </ul>
                <p>To exercise these rights, contact us using the details in Section 13.</p>
            </>
        ),
    },
    {
        id: 'third-party',
        title: '11. Third-Party Links and Integrations',
        content: (
            <p>Our website may contain links to, or integrations with, third-party platforms (e.g., WhatsApp, email providers, payment processors, social media). We are not responsible for the privacy practices of these third parties. We encourage you to review their respective privacy policies.</p>
        ),
    },
    {
        id: 'children',
        title: "12. Children's Privacy",
        content: (
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it.</p>
        ),
    },
    {
        id: 'contact',
        title: '13. Contact Us',
        content: (
            <>
                <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                <p>
                    <strong>Creative Crew</strong><br />
                    Email: <a href="mailto:crewcreative98@gmail.com">crewcreative98@gmail.com</a><br />
                    Phone: <a href="tel:+919971702329">+91 9971702329</a>
                </p>
            </>
        ),
    },
    {
        id: 'changes',
        title: '14. Changes to This Policy',
        content: (
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of our services after changes are posted constitutes acceptance of the revised policy.</p>
        ),
    },
]

export default function PrivacyPolicy() {
    return (
        <LegalLayout
            eyebrow="Legal"
            title="Privacy Policy"
            lastUpdated="3 February 2026"
            sections={sections}
        />
    )
}