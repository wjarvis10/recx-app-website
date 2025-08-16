import React from "react";

const Privacy: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-primary">
        Recx Mobile Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Effective Date: August 1, 2025
      </p>

      <section className="mt-8 space-y-4 text-gray-800">
        <h2 className="text-xl font-semibold text-primary">1. Overview</h2>
        <p>
          This Privacy Policy explains how Recx (“we”, “us”, “our”) collects,
          uses, and protects your information when you use our mobile
          application. By using Recx, you agree to this Policy.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          2. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">Profile Information:</span> first
            name, last name, phone number, email, optional profile image,
            account creation date/time, username, current city (entered
            manually), latitude/longitude (entered manually), biography.
          </li>
          <li>
            <span className="font-medium">User‑Generated Content:</span>{" "}
            recommendations, friend connections, comments, likes, photos, and
            places added via Google Places Autocomplete.
          </li>
          <li>
            <span className="font-medium">Verification Data:</span> one‑time
            passwords (OTPs) for account sign‑up and password reset.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          3. How We Use Your Information
        </h2>
        <p>
          We use your information to create and manage accounts, authenticate
          and verify users, send OTPs for account security, provide and improve
          app features, and facilitate user interactions. We do not sell your
          personal information.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          4. Third‑Party Services
        </h2>
        <p>
          We share limited data with Supabase (authentication, database,
          storage), Twilio (SMS OTP delivery), Google Places API (place
          information), and Expo (build tools), only as necessary to operate the
          App.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          5. Data Retention
        </h2>
        <p>
          We retain your information while your account is active or as needed
          to provide services. OTP‑related data is deleted shortly after use.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          6. Data Security
        </h2>
        <p>
          We use reasonable technical and organizational measures to protect
          your information from unauthorized access, disclosure, or destruction.
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
          Depending on your location, you may have rights to access, correct,
          delete, or request a copy of your data, and withdraw consent for
          certain processing. Contact us at{" "}
          <a href="mailto:recxapphelp@gmail.com" className="underline">
            recxapphelp@gmail.com
          </a>{" "}
          to exercise these rights.
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
          Last updated: August 1, 2025
        </p>
      </section>
    </main>
  );
};

export default Privacy;
