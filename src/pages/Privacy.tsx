import React from "react";

const Privacy: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-primary">
        Recx Mobile Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Effective Date: August 21, 2025
      </p>

      <section className="mt-8 space-y-4 text-gray-800">
        <h2 className="text-xl font-semibold text-primary">1. Overview</h2>
        <p>
          This Privacy Policy explains how Recx (“we,” “us,” or “our”) collects,
          uses, and protects your information when you use our mobile
          application. By using Recx, you agree to this Policy.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          2. Information We Collect
        </h2>
        <p>We collect the following categories of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">Profile Information:</span> first
            name, last name, phone number, email, optional profile image,
            account creation date/time, username, current city (entered manually
            or derived from device location), latitude/longitude (entered
            manually or, with your consent, obtained via device GPS), biography.
          </li>
          <li>
            <span className="font-medium">User-Generated Content:</span>{" "}
            recommendations, friend connections, comments, likes, photos, and
            places added via Google Places Autocomplete.
          </li>
          <li>
            <span className="font-medium">Verification Data:</span> one-time
            passwords (OTPs) for account sign-up and password reset.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          3. How We Use Your Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create and manage your account</li>
          <li>Authenticate and verify users</li>
          <li>Send OTPs via SMS or email for account security</li>
          <li>Provide and improve app features</li>
          <li>
            Facilitate user interactions (friend requests, comments, likes)
          </li>
          <li>
            Filter and sort recommendations by proximity, and personalize the
            recommendations you see based on your location
          </li>
          <li>
            If you submit a report about another user or content, we collect and
            store the details of the report and may share relevant information
            with the reported user as necessary to resolve the matter, in
            compliance with applicable law.
          </li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          4. Third-Party Services
        </h2>
        <p>
          We share limited data with service providers only as necessary to
          operate the App:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Supabase – authentication, database, storage</li>
          <li>Twilio – SMS delivery of OTPs</li>
          <li>Google Places API – retrieving place information</li>
          <li>Expo – app compilation/build infrastructure</li>
        </ul>
        <p>
          These providers process your data in accordance with their own privacy
          policies.
        </p>
        <p>
          Location Services are handled locally on devices. We do not currently
          sell or share location data with third parties.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          5. Data Retention
        </h2>
        <p>
          We retain your information for as long as your account is active or as
          needed to provide our services. OTP-related data is deleted shortly
          after use.
        </p>
        <p>
          GPS location data is not stored permanently; it is only used in real
          time for filtering recommendations. Profile location (if entered
          manually) is retained until you update or delete it.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          6. Data Security
        </h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your information from unauthorized access, disclosure, or
          destruction.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          7. Age Requirement
        </h2>
        <p>
          Recx is not intended for children under 13. If we learn that we have
          collected personal information from a child under 13 without parental
          consent, we will delete it.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          8. Your Rights
        </h2>
        <p>
          Depending on your location, you may have rights to: access, correct,
          or delete your information; request a copy of your data; withdraw
          consent for certain processing.
        </p>
        <p>
          You can revoke Recx’s access to your device’s GPS at any time in your
          mobile device settings. If you do so, the App will instead rely on
          your manually entered profile location.
        </p>
        <p>
          To exercise these rights, email{" "}
          <a href="mailto:recxapphelp@gmail.com" className="underline">
            recxapphelp@gmail.com
          </a>
          .
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy at any time. The “Effective Date”
          will reflect the latest version.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          10. Contact Us
        </h2>
        <p>
          Email:{" "}
          <a href="mailto:recxapphelp@gmail.com" className="underline">
            recxapphelp@gmail.com
          </a>
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: August 21, 2025
        </p>
      </section>
    </main>
  );
};

export default Privacy;
