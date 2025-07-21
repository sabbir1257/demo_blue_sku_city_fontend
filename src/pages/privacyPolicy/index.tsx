import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Blue Sky City Ltd</title>
        <meta
          name="description"
          content="Privacy Policy of Blue Sky City Ltd"
        />
      </Head>

      <main className="bg-white text-gray-700">
        <section className="py-24">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-center my-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Privacy Policy
                </h2>
                <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, and protect your information.
              </p>
            </div>

            <div className="space-y-10 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect personal information such as your name, email
                  address, phone number, and other relevant data when you use
                  our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  2. How We Use Your Information
                </h2>
                <p>
                  Your information is used to provide and improve our services,
                  respond to inquiries, send updates, and comply with legal
                  obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  3. Cookies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience. You can control cookies through your
                  browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  4. Data Security
                </h2>
                <p>
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access or disclosure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  5. Third-Party Services
                </h2>
                <p>
                  We may share your information with trusted third-party service
                  providers to help operate our business and provide services to
                  you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  6. Your Rights
                </h2>
                <p>
                  You have the right to access, correct, or delete your personal
                  information. Please contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  7. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically. We encourage
                  you to review it regularly for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  8. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at{' '}
                  <a
                    href="mailto:info@blueskycityltd.com"
                    className="text-blue-600 underline"
                  >
                    info@blueskycityltd.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-16 text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Blue Sky City Ltd. All rights
              reserved. <br />
              Template by{' '}
              <Link
                href="https://paradisesolution.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Paradise Solution
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
