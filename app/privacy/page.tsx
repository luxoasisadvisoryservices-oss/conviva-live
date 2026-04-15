export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-12">
        <a href="/" className="text-sm text-teal-600 hover:text-teal-800 transition-colors">← Back to Conviva.live</a>
      </div>

      <h1 className="font-display text-4xl text-[#1E2D3D] tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-sm text-[#7A8899] mb-12">Last updated: April 15, 2026</p>

      <div className="prose prose-slate max-w-none space-y-8 text-[#3D5166] leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">1. Introduction</h2>
          <p>Conviva.live is an AI-powered guest communication platform operated by Lux Oasis Advisory &amp; Services LLC ("we", "our", "us"). This Privacy Policy explains how we collect, use, store, and protect personal data when you use our platform, including communications processed through WhatsApp Business API.</p>
          <p className="mt-3">By using Conviva.live, you agree to the practices described in this policy. If you do not agree, please discontinue use of the platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">2. Who We Are</h2>
          <p><strong>Company:</strong> Lux Oasis Advisory &amp; Services LLC</p>
          <p><strong>Platform:</strong> Conviva.live</p>
          <p><strong>Contact:</strong> <a href="mailto:info@luxoasisadvisory.com" className="text-teal-600">info@luxoasisadvisory.com</a></p>
          <p className="mt-3">We act as a data processor on behalf of holiday homes operators (our clients) who use Conviva.live to manage guest communications.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">3. Data We Collect</h2>
          <p>We collect and process the following categories of data:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Guest data:</strong> WhatsApp phone numbers, display names, and message content shared by guests when communicating with a property managed by an operator using Conviva.live.</li>
            <li><strong>Operator data:</strong> Business name, contact email, property details, and operational information provided during onboarding.</li>
            <li><strong>Conversation data:</strong> Messages sent and received via WhatsApp Business API, including timestamps and conversation history.</li>
            <li><strong>Technical data:</strong> IP addresses, browser type, device information, and usage logs collected automatically when accessing the platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">4. WhatsApp Data &amp; Meta Platform Policy</h2>
          <p>Conviva.live uses the WhatsApp Business API, provided by Meta Platforms, Inc. By using our platform, guest communications are processed through Meta's infrastructure in accordance with Meta's <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-teal-600" target="_blank" rel="noopener noreferrer">WhatsApp Privacy Policy</a>.</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>We do not share WhatsApp conversation data with third parties for advertising purposes.</li>
            <li>Message content is used solely to provide automated guest support responses on behalf of the operator.</li>
            <li>We comply with Meta's Platform Terms and WhatsApp Business Policy at all times.</li>
            <li>Guests may contact us at any time to request deletion of their conversation data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">5. How We Use Your Data</h2>
          <p>We use the data we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>To provide automated guest communication services on behalf of operators.</li>
            <li>To improve the accuracy and performance of AI responses.</li>
            <li>To monitor platform usage and prevent misuse.</li>
            <li>To respond to support requests and enquiries.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p className="mt-3">We do not sell personal data to third parties. We do not use guest data for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">6. Data Storage &amp; Security</h2>
          <p>Data is stored on secure servers hosted by Hetzner (EU-based infrastructure). We implement industry-standard security measures including encryption in transit (SSL/TLS), access controls, and regular security reviews.</p>
          <p className="mt-3">Conversation data is retained for a maximum of 12 months unless a longer retention period is required by law or requested by the operator.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">7. GDPR Compliance (EU Users)</h2>
          <p>For users in the European Union, we process personal data in accordance with the General Data Protection Regulation (GDPR). Our legal basis for processing is:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Legitimate interest:</strong> To provide the contracted service to operators.</li>
            <li><strong>Contractual necessity:</strong> To fulfil our obligations to operators and their guests.</li>
            <li><strong>Legal obligation:</strong> Where required by applicable law.</li>
          </ul>
          <p className="mt-3">EU users have the right to access, rectify, erase, restrict, or port their personal data. To exercise these rights, contact us at <a href="mailto:info@luxoasisadvisory.com" className="text-teal-600">info@luxoasisadvisory.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">8. UAE PDPL Compliance</h2>
          <p>For users in the United Arab Emirates, we process personal data in accordance with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021). We are committed to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Processing personal data fairly and transparently.</li>
            <li>Collecting data only for specified, legitimate purposes.</li>
            <li>Not transferring personal data outside the UAE without appropriate safeguards.</li>
            <li>Honouring data subject rights including access, correction, and deletion requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">9. Third-Party Services</h2>
          <p>We use the following third-party services to operate the platform:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Meta / WhatsApp Business API</strong> — for guest messaging</li>
            <li><strong>Chatwoot</strong> — for operator communication management (self-hosted)</li>
            <li><strong>OpenAI</strong> — for AI response generation</li>
            <li><strong>Hetzner</strong> — for server infrastructure</li>
            <li><strong>360dialog</strong> — for WhatsApp Business API access</li>
          </ul>
          <p className="mt-3">Each provider operates under their own privacy policy and data processing agreements.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">10. Cookies</h2>
          <p>Our website uses minimal cookies for functionality and analytics purposes only. We do not use advertising cookies or track visitors across third-party sites.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify operators of material changes by email. Continued use of the platform after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1E2D3D] mb-3">12. Contact Us</h2>
          <p>For any privacy-related questions or data requests, please contact:</p>
          <div className="mt-3 p-4 bg-[#F4F4F1] rounded-xl">
            <p><strong>Lux Oasis Advisory &amp; Services LLC</strong></p>
            <p>Email: <a href="mailto:info@luxoasisadvisory.com" className="text-teal-600">info@luxoasisadvisory.com</a></p>
            <p>Website: <a href="https://conviva.live" className="text-teal-600">conviva.live</a></p>
          </div>
        </section>

      </div>
    </main>
  );
}
