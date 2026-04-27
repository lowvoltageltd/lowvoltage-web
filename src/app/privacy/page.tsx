import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Low Voltage Ltd apps — Wiregram, Buildable, Electrify, Plumbable, and LidarPlan.",
};

const LAST_UPDATED = "27 April 2026";

const APPS = [
  "Wiregram",
  "Buildable",
  "Electrify",
  "Plumbable",
  "LidarPlan",
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
          <p>
            This Privacy Policy applies to all apps published by <strong>Low Voltage Ltd</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;),
            a company registered in New Zealand. Our apps include:
          </p>
          <ul className="mt-3 ml-4 space-y-1 list-disc list-outside">
            {APPS.map((app) => (
              <li key={app}>{app}</li>
            ))}
          </ul>
          <p className="mt-4">
            We are committed to protecting your privacy. This policy explains how our apps handle information in
            compliance with the <strong>New Zealand Privacy Act 2020</strong> and the <strong>Australian Privacy Act 1988</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h2>
          <p>
            <strong>Our apps do not collect, store, transmit, or share any personal information.</strong>
          </p>
          <p className="mt-3">
            All data you enter or create within our apps — diagrams, measurements, calculations, and notes — is stored
            locally on your device only and never leaves it. We have no servers that receive your data, and no
            accounts are required.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Device Permissions</h2>
          <p>
            Some of our apps may request access to device features such as the camera, file storage, or sensors
            (e.g. LiDAR). These permissions are used solely to provide the app&rsquo;s core functionality on your device.
            No data captured through these permissions is transmitted off your device.
          </p>
          <p className="mt-3">
            You can revoke any permission at any time through your device settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h2>
          <p>
            Our apps do not integrate third-party analytics, advertising, crash reporting, or tracking SDKs.
          </p>
          <p className="mt-3">
            Please note that <strong>Apple App Store</strong> and <strong>Google Play Store</strong> may independently collect
            anonymised usage statistics (such as crash reports and aggregate download counts) in accordance with
            their own privacy policies. This data is collected by Apple or Google, not by us, and we do not have
            access to any individually identifiable information from these sources.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Children&rsquo;s Privacy</h2>
          <p>
            Our apps are designed for trade professionals and are not directed at children under the age of 13.
            We do not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a
            revised &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-3">
            <strong>Low Voltage Ltd</strong><br />
            <a href="mailto:privacy@lowvoltage.nz" className="text-blue-600 hover:text-blue-800 transition-colors">
              privacy@lowvoltage.nz
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
