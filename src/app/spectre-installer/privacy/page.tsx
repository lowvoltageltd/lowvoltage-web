import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spectre Installer — Privacy Policy",
  description:
    "Privacy policy for the Spectre Installer mobile app (Android + iOS) used by Low Voltage Ltd field installers.",
}

const LAST_UPDATED = "4 May 2026"

export default function SpectreInstallerPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Spectre Installer — Privacy Policy
        </h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <p className="text-sm text-gray-500 mt-3">
          This policy applies specifically to the <strong>Spectre Installer</strong> mobile app.
          For Low Voltage Ltd&rsquo;s other mobile apps (Electrify, Plumbable, lidar-plan, etc.) see the{" "}
          <a href="/privacy" className="text-blue-600 underline">general privacy policy</a>.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
          <p>
            <strong>Spectre Installer</strong> is a workforce app used by Low Voltage Ltd
            (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) field installers to provision GPS
            tracking devices on customer vehicles and equipment. Unlike our consumer apps,
            Spectre Installer transmits data to our servers because device provisioning
            inherently requires a server connection.
          </p>
          <p className="mt-3">
            We comply with the <strong>New Zealand Privacy Act 2020</strong> and the{" "}
            <strong>Australian Privacy Act 1988</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Who Uses This App</h2>
          <p>
            Access is limited to Low Voltage Ltd installer staff and authorised contractors.
            Account creation requires an invitation from a Spectre administrator — there is
            no public sign-up. The app is published on the Apple App Store and Google Play
            Store under restricted distribution.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">What the App Collects</h2>
          <p>The app collects only the data required to record a device installation:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Account data</strong> — your email address and a hashed password used
              to authenticate against the Spectre platform.
            </li>
            <li>
              <strong>Device identifiers you scan or enter</strong> — IMEI numbers from
              tracker devices being installed.
            </li>
            <li>
              <strong>Asset metadata you record about the vehicle or equipment</strong> —
              registration plate, VIN, make/model, odometer, engine hours, rego/WoF expiry
              dates, install notes.
            </li>
            <li>
              <strong>Install photos you take</strong> — captured via the device camera or
              picked from the photo library to document mounting, wiring, and the install
              location.
            </li>
            <li>
              <strong>Self-test results</strong> — algorithmic checks (GPS quality, ignition
              cycle detection, connectivity, configured inputs / outputs) that run server-side
              against telemetry from the device being installed.
            </li>
            <li>
              <strong>Audit events</strong> — who marked the device installed / re-installed
              / edited install notes, and when.
            </li>
          </ul>
          <p className="mt-3">
            The app does <strong>not</strong> collect your phone&rsquo;s location, contacts,
            calendar, microphone audio, or any data unrelated to the device installation
            you&rsquo;re currently performing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Why We Collect It</h2>
          <p>
            Each piece of data exists to support the install workflow: photos prove the
            device was fitted correctly, asset metadata links the tracker to the vehicle
            it monitors, and self-tests / audit events provide quality assurance and
            warranty-period accountability.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Device Permissions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Camera</strong> — used (a) to scan QR / barcode stickers on tracker
              devices for IMEI lookup, and (b) to take photos of the install for the
              fitment record. The camera is only invoked when you tap a Scan or Take Photo
              button — it&rsquo;s not running in the background.
            </li>
            <li>
              <strong>Photo library</strong> — used only to let you pick an existing photo
              instead of taking a new one. No photos are read without you selecting them.
            </li>
            <li>
              <strong>Network / Internet</strong> — required so the app can talk to the
              Spectre server.
            </li>
          </ul>
          <p className="mt-3">
            You can revoke any permission at any time through your device&rsquo;s settings.
            Without camera permission, QR scanning and photo capture stop working.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Where Data Is Stored</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Spectre servers</strong> hosted in New Zealand. Database and uploaded
              files reside on infrastructure operated by Low Voltage Ltd.
            </li>
            <li>
              <strong>Google Drive (photo archive)</strong> — install photos are
              automatically copied to a Low Voltage Ltd-controlled Google Workspace Shared
              Drive (resized to 2048&thinsp;px JPEG) for backup and warranty-period
              retention. Access to the Shared Drive is restricted to authorised Low Voltage
              staff. Original photos remain on the Spectre server.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h2>
          <p>
            The app does not integrate analytics, advertising, crash reporting, or tracking
            SDKs. The only outbound network connections are:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>installer.spectre-gps.co.nz</strong> — the Spectre platform server
              itself (HTTPS).
            </li>
            <li>
              <strong>OpenStreetMap tile servers</strong> — the in-app reference map renders
              public OSM tiles over HTTPS. No identifying information is sent with tile
              requests beyond standard browser headers.
            </li>
          </ul>
          <p className="mt-3">
            Google Play and Apple App Store may independently collect aggregate usage
            statistics (crash reports, install counts) according to their own privacy
            policies — this data is collected by Google/Apple, not by us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">How Long We Keep Data</h2>
          <p>
            Install photos, asset metadata, self-test results and audit events are retained
            for the operational life of the tracker device plus a warranty-period buffer.
            Account records are kept for as long as your account is active. We delete data
            on request once it&rsquo;s no longer required by law or contract.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h2>
          <p>
            Under the New Zealand Privacy Act 2020 you can request access to or correction of
            your personal information. To exercise these rights, or to request account
            deletion, email{" "}
            <a href="mailto:hello@spectre-gps.co.nz" className="text-blue-600 underline">
              hello@spectre-gps.co.nz
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this policy as the app evolves. The &ldquo;Last updated&rdquo; date
            at the top reflects the most recent change. Material changes will be
            communicated in-app or via email.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
          <p>
            Low Voltage Ltd<br />
            New Zealand<br />
            <a href="mailto:hello@spectre-gps.co.nz" className="text-blue-600 underline">
              hello@spectre-gps.co.nz
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
