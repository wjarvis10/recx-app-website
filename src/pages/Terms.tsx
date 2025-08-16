import React from "react";

const Terms: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-primary">
        Recx Mobile Terms of Service
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Effective Date: August 1, 2025
      </p>

      <section className="mt-8 space-y-4 text-gray-800">
        <h2 className="text-xl font-semibold text-primary">
          1. Acceptance of Terms
        </h2>
        <p>
          By downloading, accessing, or using the Recx mobile application
          (“App”), you agree to be bound by these Terms of Service (“Terms”). If
          you do not agree, you may not use the App. These Terms apply worldwide
          to all users.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          2. Eligibility
        </h2>
        <p>
          You must be at least 13 years old to use Recx. If you are under the
          age of 18, you must have permission from a parent or legal guardian.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          3. Description of Service
        </h2>
        <p>
          Recx allows users to share, discover, and interact with location‑based
          recommendations, connect with friends, and engage through likes and
          comments. Users can create profiles, add places via Google Places
          Autocomplete, and upload photos to their recommendations.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          4. Account Registration and Security
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You must provide accurate and complete information when creating
            your account.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            login credentials.
          </li>
          <li>
            Recx uses one‑time passwords (OTPs) sent via SMS or email for
            account verification and password reset.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          5. Data Collection and Usage
        </h2>
        <p>
          Recx collects profile information such as first name, last name, phone
          number, email, optional profile image, account creation date/time,
          username, current city, latitude/longitude (entered manually), and
          biography. We also collect user content such as recommendations,
          friend connections, comments, likes, photos, and places added via
          Google Places Autocomplete. We use your email and/or phone number to
          identify and authenticate users, send OTPs for verification and
          password reset, and provide account‑related notifications. All other
          data is used solely to operate and improve in‑app features.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          6. Third‑Party Services
        </h2>
        <p>
          We use Supabase (database, authentication, storage), Twilio (SMS OTP
          delivery), Google Places API (location data), and Expo (app build
          tools). These providers process data only as necessary to deliver
          their services.
        </p>
        <p>
          <span className="font-medium">Google Places API</span>
          <br />
          This product uses the Google Places API and is not endorsed or
          certified by Google. “Powered by Google” is a trademark of Google LLC.
          Certain place information, including names and addresses, are sourced
          from Google and subject to Google’s Terms of Service.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          7. User Conduct
        </h2>
        <p>
          You agree not to post unlawful, harmful, or offensive content; harass,
          threaten, or impersonate others; use Recx for spam; or
          reverse‑engineer or disrupt the App’s functionality. Violations may
          result in account suspension or termination.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          8. Intellectual Property
        </h2>
        <p>
          All content and materials in the App, excluding user‑generated
          content, are owned by Recx or its licensors. You may not copy,
          distribute, or create derivative works without permission.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          9. Termination
        </h2>
        <p>
          We may suspend or terminate your account at any time for violations of
          these Terms or at our discretion.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          10. Disclaimers & Limitation of Liability
        </h2>
        <p>
          The App is provided “as is” without warranties of any kind. To the
          fullest extent permitted by law, Recx is not liable for any damages
          arising from your use of the App.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          11. Changes to Terms
        </h2>
        <p>
          We may update these Terms from time to time. Continued use of the App
          constitutes acceptance of the updated Terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          12. Contact Us
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

export default Terms;
