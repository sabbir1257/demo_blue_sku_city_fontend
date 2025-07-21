import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Blue Sky City Ltd</title>
      </Head>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <div className="text-center my-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Terms & Conditions
              </h2>
              <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read these Terms and Conditions carefully before using the
              Blue Sky City Ltd website.
            </p>
          </div>

          <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, you agree to be bound by these terms.
                If you do not accept the terms, please discontinue use of the
                site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                2. Intellectual Property Rights
              </h2>
              <p>
                All materials on this site, including logos, branding, text, and
                images, are owned by Blue Sky City Ltd. You may not copy,
                modify, or reuse them without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                3. Restrictions
              </h2>
              <p>
                You are specifically restricted from publishing, selling,
                sublicensing, or otherwise commercializing any site material
                without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                4. No Warranties
              </h2>
              <p>
                This website is provided as is, with all faults, and Blue Sky
                City Ltd expresses no representations or warranties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall Blue Sky City Ltd be liable for any damages
                arising out of or in any way connected with your use of this
                website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                6. External Links
              </h2>
              <p>
                Our site may include links to third-party websites. We are not
                responsible for their content or privacy practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                7. Revisions
              </h2>
              <p>
                We may update these Terms at any time. Changes will be effective
                immediately upon posting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                8. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, please contact us at:{' '}
                <a
                  href="mailto:info@blueskycityltd.com"
                  className="text-blue-600 underline"
                >
                  info@blueskycityltd.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} Blue Sky City Ltd. All rights
            reserved. <br />
            Template by{' '}
            <Link
              href="https://paradisesolution.us/"
              className="underline text-blue-500"
              target="_blank"
            >
              Paradise Solution
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
