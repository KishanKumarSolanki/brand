'use client'
import LegalLayout from './Legallayout'

const sections = [
    {
        id: 'intro',
        title: 'Introduction',
        content: (
            <>
                <p>Welcome to Creative Crew. These Terms &amp; Conditions (&quot;Terms&quot;, &quot;Agreement&quot;, or &quot;Terms &amp; Conditions&quot;) govern your access to and use of our website, services, products, digital services, and professional marketing solutions.</p>
                <p>By accessing our website, submitting an enquiry, requesting a quotation, making a payment, signing a proposal, approving a project, or using any service provided by Creative Crew, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions.</p>
                <p>If you do not agree with these Terms, you should not use our services.</p>
            </>
        ),
    },
    {
        id: 'about',
        title: '1. About Creative Crew',
        content: (
            <>
                <p>Creative Crew is a marketing and digital services agency providing professional services that may include:</p>
                <ul>
                    <li>Digital Marketing</li>
                    <li>Social Media Marketing</li>
                    <li>Social Media Management</li>
                    <li>Performance Marketing</li>
                    <li>Paid Advertising</li>
                    <li>Meta Advertising</li>
                    <li>Google Advertising</li>
                    <li>Search Engine Optimisation (SEO)</li>
                    <li>Website Development</li>
                    <li>Landing Page Development</li>
                    <li>Graphic Design</li>
                    <li>Branding</li>
                    <li>UI/UX Design</li>
                    <li>Video Editing</li>
                    <li>Content Creation</li>
                    <li>Copywriting</li>
                    <li>Lead Generation</li>
                    <li>Marketing Strategy</li>
                    <li>Creative Services</li>
                    <li>Web &amp; Digital Solutions</li>
                    <li>Other services agreed upon with the client</li>
                </ul>
                <p>The exact services provided to a client will depend on the quotation, proposal, invoice, service package, or written agreement applicable to that client.</p>
            </>
        ),
    },
    {
        id: 'acceptance',
        title: '2. Acceptance of Terms',
        content: (
            <>
                <p>These Terms are accepted when the client:</p>
                <ul>
                    <li>Makes a payment to Creative Crew</li>
                    <li>Signs or accepts a quotation or proposal</li>
                    <li>Approves a project</li>
                    <li>Places an order</li>
                    <li>Starts using a paid service</li>
                    <li>Provides written confirmation to proceed</li>
                    <li>Provides project requirements after receiving a quotation</li>
                    <li>Continues to use our services after being provided these Terms</li>
                </ul>
                <p>Once accepted, these Terms become part of the agreement between Creative Crew and the client.</p>
            </>
        ),
    },
    {
        id: 'scope',
        title: '3. Service Agreement & Scope of Work',
        content: (
            <>
                <p>Each project may have a defined scope of work.</p>
                <p>The scope may specify:</p>
                <ul>
                    <li>Services included</li>
                    <li>Deliverables</li>
                    <li>Number of deliverables</li>
                    <li>Project timeline</li>
                    <li>Number of revisions</li>
                    <li>Fees</li>
                    <li>Payment schedule</li>
                    <li>Responsibilities of the client</li>
                    <li>Responsibilities of Creative Crew</li>
                    <li>Other project-specific conditions</li>
                </ul>
                <p>Creative Crew is responsible for delivering the services described in the agreed scope.</p>
                <p>Requests outside the agreed scope may require an additional fee.</p>
            </>
        ),
    },
    {
        id: 'changes-to-requirements',
        title: '4. Changes to Project Requirements',
        content: (
            <>
                <p>The client may request changes to the project.</p>
                <p>However, changes that significantly alter the original requirements, strategy, design, development, content, or scope may be treated as additional work.</p>
                <p>Additional charges may apply for:</p>
                <ul>
                    <li>New features</li>
                    <li>New pages</li>
                    <li>New designs</li>
                    <li>Additional creatives</li>
                    <li>Additional revisions</li>
                    <li>New functionality</li>
                    <li>Change of concept</li>
                    <li>Change of strategy</li>
                    <li>New integrations</li>
                    <li>Additional content</li>
                    <li>Major changes after approval</li>
                </ul>
                <p>Creative Crew will communicate additional charges where reasonably possible before undertaking substantial additional work.</p>
            </>
        ),
    },
    {
        id: 'payment-terms',
        title: '5. Payment Terms',
        content: (
            <>
                <p>Unless otherwise agreed in writing:</p>
                <ul>
                    <li>Payments must be made according to the agreed payment schedule.</li>
                    <li>Advance payments may be required before work begins.</li>
                    <li>Creative Crew may begin work only after the required payment has been received.</li>
                    <li>Outstanding payments must be cleared within the agreed payment period.</li>
                    <li>Delayed payments may result in suspension or delay of services.</li>
                    <li>Additional work may require additional payment.</li>
                </ul>
                <p>All prices may be subject to applicable taxes, payment gateway charges, third-party expenses, or other charges where applicable.</p>
            </>
        ),
    },
    {
        id: 'no-refund',
        title: '6. Strict No-Refund Policy',
        content: (
            <>
                <p><strong>All payments made to Creative Crew are non-refundable.</strong></p>
                <p>Once payment has been made, the client is not entitled to a monetary refund due to:</p>
                <ul>
                    <li>Change of mind</li>
                    <li>Project cancellation</li>
                    <li>Business closure</li>
                    <li>Budget issues</li>
                    <li>Personal reasons</li>
                    <li>Dissatisfaction</li>
                    <li>Failure to use the service</li>
                    <li>Failure to provide required information</li>
                    <li>Change in business strategy</li>
                    <li>Change in requirements</li>
                    <li>Delayed feedback</li>
                    <li>Client-side delays</li>
                    <li>Failure to achieve specific business outcomes, including lead volume, conversion rates, or sales figures</li>
                </ul>
                <p>Full details of our refund policy, including limited exceptions and service adjustment options, are set out in our separate No Refund &amp; Service Adjustment Policy.</p>
            </>
        ),
    },
    {
        id: 'third-party-platforms',
        title: '7. Third-Party Platforms and Tools',
        content: (
            <>
                <p>Our Services may involve integration with third-party platforms (CRM systems, WhatsApp Business API, email providers, hosting, payment gateways, etc.). We are not responsible for:</p>
                <ul>
                    <li>Downtime, policy changes, pricing changes, or feature limitations of third-party platforms</li>
                    <li>Suspension or restriction of your third-party accounts due to your own use or violation of that platform&apos;s terms</li>
                    <li>Ongoing subscription costs of third-party tools, unless explicitly included in the proposal</li>
                </ul>
            </>
        ),
    },
    {
        id: 'ip',
        title: '8. Intellectual Property',
        content: (
            <ul>
                <li>Upon full payment, the client receives ownership of the final deliverables specifically created for them, unless otherwise agreed in writing.</li>
                <li>Creative Crew retains ownership of pre-existing tools, templates, frameworks, automation scripts, and proprietary processes, and may reuse non-client-specific components in future projects.</li>
                <li>The client grants Creative Crew a limited license to use their name, logo, and project outcomes for portfolio and marketing purposes, unless the client opts out in writing.</li>
            </ul>
        ),
    },
    {
        id: 'disclaimer',
        title: '9. Performance and Results Disclaimer',
        content: (
            <p>While our services are designed to improve marketing performance, lead generation, and business outcomes, Creative Crew does not guarantee specific results, including sales figures, lead volume, conversion percentages, or return on investment. Results depend on factors outside our control, including market conditions, your industry, pricing, offer quality, and how deliverables are used and maintained after launch.</p>
        ),
    },
    {
        id: 'support',
        title: '10. Support and Maintenance',
        content: (
            <ul>
                <li>Ongoing technical support is provided as specified in your service package.</li>
                <li>Support does not cover issues caused by third-party platform changes, unauthorized modifications, or misuse of delivered systems.</li>
                <li>Additional support beyond the agreed scope may be billed separately.</li>
            </ul>
        ),
    },
    {
        id: 'liability',
        title: '11. Limitation of Liability',
        content: (
            <p>To the maximum extent permitted by law, Creative Crew shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities, arising from your use of, or inability to use, our Services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
        ),
    },
    {
        id: 'termination',
        title: '12. Termination',
        content: (
            <ul>
                <li>Either party may terminate an ongoing engagement with written notice, subject to the applicable proposal or contract.</li>
                <li>Fees for work already completed, and any non-refundable amounts, remain payable upon termination.</li>
                <li>Upon termination, access to in-progress deliverables may be paused until outstanding payments are settled.</li>
            </ul>
        ),
    },
    {
        id: 'confidentiality',
        title: '13. Confidentiality',
        content: (
            <p>Both parties agree to keep confidential any non-public business, technical, or financial information shared during the engagement, and to use it solely for delivering or receiving the Services.</p>
        ),
    },
    {
        id: 'governing-law',
        title: '14. Governing Law',
        content: (
            <p>These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.</p>
        ),
    },
    {
        id: 'changes',
        title: '15. Changes to These Terms',
        content: (
            <p>We may update these Terms from time to time. Continued use of our Services after changes are posted constitutes your acceptance of the revised Terms.</p>
        ),
    },
    {
        id: 'contact',
        title: '16. Contact Us',
        content: (
            <p>
                <strong>Creative Crew</strong><br />
                Email: <a href="mailto:crewcreative98@gmail.com">crewcreative98@gmail.com</a><br />
                Phone: <a href="tel:+919971702329">+91 9971702329</a>
            </p>
        ),
    },
]

export default function TermsAndConditions() {
    return (
        <LegalLayout
            eyebrow="Legal"
            title="Terms & Conditions"
            lastUpdated="3 February 2026"
            sections={sections}
        />
    )
}