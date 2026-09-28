'use client'
import LegalLayout from './Legallayout'

const sections = [
    {
        id: 'strict-no-refund',
        title: '1. Strict No Refund Policy',
        content: (
            <>
                <p>All payments made to Creative Crew are <strong>strictly non-refundable</strong> once the payment has been successfully received.</p>
                <p>This includes, but is not limited to:</p>
                <ul>
                    <li>Advance payments</li>
                    <li>Project payments</li>
                    <li>Service fees</li>
                    <li>Package payments</li>
                    <li>Retainer payments</li>
                    <li>Campaign management fees</li>
                    <li>Marketing fees</li>
                    <li>Website development payments</li>
                    <li>Design payments</li>
                    <li>Advertising management fees</li>
                    <li>Consultation fees</li>
                    <li>Setup fees</li>
                    <li>Domain/hosting-related payments</li>
                    <li>Software or third-party service charges</li>
                    <li>Any other payment made for services provided or arranged by Creative Crew</li>
                </ul>
                <p>Once a payment has been made, the client cannot demand, request, or claim a monetary refund.</p>
            </>
        ),
    },
    {
        id: 'work-started',
        title: '2. Payment Is Not Refundable After Work Has Started',
        content: (
            <>
                <p>Once Creative Crew has started working on a project, allocated resources, assigned team members, created strategies, prepared designs, developed content, initiated campaigns, or performed any other work related to the client&apos;s project, the payment will be considered committed toward the service.</p>
                <p>The client will not be entitled to a refund because of:</p>
                <ul>
                    <li>Change of mind</li>
                    <li>Change in business plans</li>
                    <li>Personal reasons</li>
                    <li>Budget issues</li>
                    <li>Delay in providing client materials</li>
                    <li>Failure to provide required information</li>
                    <li>Failure to respond to the Creative Crew team</li>
                    <li>Cancellation of the client&apos;s business or project</li>
                    <li>Change of marketing strategy</li>
                    <li>Change of business ownership or management</li>
                    <li>Dissatisfaction with the direction of the project</li>
                    <li>Failure to use the purchased service</li>
                    <li>Any other reason initiated by the client</li>
                </ul>
            </>
        ),
    },
    {
        id: 'service-exchange',
        title: '3. Service Exchange / Service Adjustment',
        content: (
            <>
                <p>Although Creative Crew does not provide monetary refunds, in certain situations the client may request that the unused value of a service be adjusted toward another service offered by Creative Crew.</p>
                <p>For example, if a client has paid for a particular service but mutually decides not to continue with that service, Creative Crew may, at its discretion, allow the remaining eligible service value to be adjusted toward another service.</p>
                <p>Possible services may include:</p>
                <ul>
                    <li>Graphic Design</li>
                    <li>Social Media Management</li>
                    <li>Website Development</li>
                    <li>Landing Page Development</li>
                    <li>SEO</li>
                    <li>Paid Advertising</li>
                    <li>Meta Ads Management</li>
                    <li>Content Creation</li>
                    <li>Video Editing</li>
                    <li>Branding</li>
                    <li>UI/UX Design</li>
                    <li>Marketing Strategy</li>
                    <li>Copywriting</li>
                    <li>Lead Generation</li>
                    <li>Other services offered by Creative Crew</li>
                </ul>
                <p>Service exchange is not an automatic right and will be subject to mutual agreement, service availability, and the terms applicable to the replacement service.</p>
            </>
        ),
    },
    {
        id: 'no-cash-refund',
        title: '4. No Cash or Bank Refund Through Service Exchange',
        content: (
            <>
                <p>If Creative Crew agrees to provide an alternative service, the applicable amount will be adjusted toward that service.</p>
                <p>The adjusted amount:</p>
                <ul>
                    <li>Cannot be withdrawn as cash.</li>
                    <li>Cannot be transferred back to the client&apos;s bank account.</li>
                    <li>Cannot be claimed as a cash refund.</li>
                    <li>Cannot be converted into a monetary refund through any payment method.</li>
                    <li>Cannot be transferred to another person without written approval from Creative Crew.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'client-cancellation',
        title: '5. Client Cancellation',
        content: (
            <>
                <p>If a client decides to cancel a project or service after making payment, the payment will remain non-refundable.</p>
                <p>Where practically possible, Creative Crew may offer the client an alternative service or adjustment against another eligible service, subject to approval.</p>
                <p>Cancellation by the client does not automatically create a right to a refund.</p>
            </>
        ),
    },
    {
        id: 'client-delays',
        title: '6. Project Delays Caused by the Client',
        content: (
            <>
                <p>Creative Crew will not be responsible for delays caused by the client, including:</p>
                <ul>
                    <li>Late submission of content</li>
                    <li>Late submission of login credentials</li>
                    <li>Delayed approvals</li>
                    <li>Delayed feedback</li>
                    <li>Unavailability of the client</li>
                    <li>Changes in requirements after work has commenced</li>
                    <li>Failure to provide necessary access, assets, or third-party credentials on time</li>
                </ul>
                <p>Any delay caused by the client does not entitle the client to a refund, extension of deliverables at no cost, or compensation, and may result in revised timelines for project delivery.</p>
            </>
        ),
    },
    {
        id: 'revisions-support',
        title: '7. Revisions and Support',
        content: (
            <>
                <p>Where revisions or support are included as part of a package or agreement, Creative Crew will provide such revisions or support strictly within the scope, quantity, and timeframe defined in the applicable proposal, invoice, or agreement.</p>
                <p>Requests for revisions or support that fall outside the agreed scope may be treated as new work and billed separately. Unused revisions or support do not carry a cash value and are not refundable if unused.</p>
            </>
        ),
    },
    {
        id: 'dispute-resolution',
        title: '8. Dispute Resolution',
        content: (
            <>
                <p>In the event of any disagreement regarding this policy or a specific payment, the client is encouraged to first raise the matter directly with Creative Crew in writing so that it may be reviewed and addressed in good faith.</p>
                <p>Creative Crew reserves the right to make a final decision on any request for service adjustment, exception, or dispute at its sole discretion, subject to applicable law.</p>
            </>
        ),
    },
    {
        id: 'governing-law',
        title: '9. Governing Law',
        content: (
            <p>This policy shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising under this policy shall be subject to the exclusive jurisdiction of the courts located in [Insert City/State].</p>
        ),
    },
    {
        id: 'contact',
        title: '10. Contact Us',
        content: (
            <>
                <p>If you have questions about this policy or believe a payment was made in error, please contact us:</p>
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
        title: '11. Changes to This Policy',
        content: (
            <p>Creative Crew reserves the right to update or modify this No Refund & Service Adjustment Policy at any time. Any changes will be posted on this page with a revised &quot;Effective Date.&quot;</p>
        ),
    },
]

export default function NoRefundPolicy() {
    return (
        <LegalLayout
            eyebrow="Legal"
            title="No Refund & Service Adjustment Policy"
            lastUpdated="3 February 2026"
            sections={sections}
        />
    )
}