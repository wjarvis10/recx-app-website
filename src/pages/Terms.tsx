import React from "react";

const Terms: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-primary">
        Recx Mobile Terms of Service
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Effective Date: August 21, 2025
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
          Recx is a mobile application that allows users to share, discover, and
          interact with location-based recommendations, connect with friends,
          and engage through likes and comments. Users can create profiles, add
          places via Google Places Autocomplete, and upload photos to their
          recommendations. Certain features rely on location information you
          provide or share from your device.
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
            Recx uses one-time passwords (OTPs) sent via SMS or email for
            account verification and password reset.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          5. Data Collection and Usage
        </h2>
        <p>Recx collects:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">Profile Information:</span> first
            name, last name, phone number, email, optional profile image,
            account creation date/time, username, current city (as text),
            latitude/longitude (entered manually), biography.
          </li>
          <li>
            <span className="font-medium">User Content:</span> recommendations,
            friend connections, comments, likes, photos, and places added via
            Google Places Autocomplete.
          </li>
          <li>
            <span className="font-medium">Location Data (GPS):</span> with your
            permission, Recx may collect your device’s approximate or precise
            location through GPS or similar technologies. This data is used
            solely to filter and personalize recommendations and to improve your
            experience in the App.
          </li>
        </ul>
        <p>
          We use your email and/or phone number to: identify and authenticate
          users, send OTPs for verification and password reset, and provide
          account-related notifications. All other data is used solely to
          operate and improve in-app features.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          6. Third-Party Services
        </h2>
        <p>We use trusted third parties to provide core functionality:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Supabase (database, authentication, storage)</li>
          <li>Twilio (SMS delivery for OTP verification)</li>
          <li>Google Places API (location data for place search)</li>
          <li>Expo (app compilation and build tools)</li>
        </ul>
        <p>
          <span className="font-medium">Google Places API</span>
          <br />
          This product uses the Google Places API and is not endorsed or
          certified by Google. “Powered by Google” is a trademark of Google LLC.
          Certain place information, including names, addresses, and images, is
          sourced from Google and subject to Google’s Terms of Service.
        </p>
        <p>
          These providers process data only as necessary to deliver their
          services to us.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          7. User Conduct & Moderation
        </h2>
        <p>
          Users may not post unlawful, harmful, or offensive content. Recx
          reserves the right to remove any content and suspend or terminate
          accounts that violate these Terms. Users can block other users or
          report content that they believe violates these Terms. We review
          reports and may take appropriate action, including removing content,
          restricting visibility, or disabling accounts.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          8. Intellectual Property
        </h2>
        <p>
          All content and materials in the App, excluding user-generated
          content, are owned by Recx or its licensors. You may not copy,
          distribute, or create derivative works without our permission.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-primary">
          9. Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate your account at any time
          for violating these Terms or for any reason at our sole discretion.
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
          Last updated: August 21, 2025
        </p>
      </section>
    </main>
  );
};

export default Terms;
