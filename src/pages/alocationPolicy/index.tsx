import Head from 'next/head';
import Link from 'next/link';

const AllocationPolicy = () => {
  return (
    <>
      <Head>
        <title>Allocation Policy | Blue Sky City Ltd</title>
        <meta
          name="description"
          content="Land, plot, and unit allocation policy of Blue Sky City Ltd"
        />
      </Head>

      <main className="bg-white text-gray-700">
        <section className="py-24">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-center my-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Allocation Policy
                </h2>
                <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our allocation policies ensure fairness, transparency, and timely
                distribution of plots or units under our development projects.
              </p>
            </div>

            <div className="space-y-10 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  1. Eligibility
                </h2>
                <p>
                  Applicants must be Bangladeshi citizens or NRBs. Corporate
                  bodies registered in Bangladesh are also eligible to apply for
                  allocations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  2. Application Process
                </h2>
                <p>
                  Interested parties must submit the prescribed application form
                  with required documents and initial booking amount. Submission
                  does not guarantee allocation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  3. Selection & Priority
                </h2>
                <p>
                  Allotments are made on a first-come, first-served basis.
                  However, priority may be given to government employees, NRBs,
                  and corporate investors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  4. Payment Terms
                </h2>
                <p>
                  A minimum down payment is required to confirm allocation.
                  Remaining dues must be paid as per the installment plan. Late
                  payments may incur penalties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  5. Cancellation & Refund
                </h2>
                <p>
                  Cancellation by the client must be in writing. Refunds, if
                  applicable, will be processed within 30 working days after
                  deduction of administrative charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  6. Handover & Possession
                </h2>
                <p>
                  Possession of property will be handed over after full payment
                  and clearance. Any structural development will be allowed only
                  after legal registration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  7. Transfer of Allocation
                </h2>
                <p>
                  Allocation can be transferred upon written request, subject to
                  management approval and transfer fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  8. Policy Update
                </h2>
                <p>
                  Blue Sky City Ltd reserves the right to update the allocation
                  policy at any time. Clients are encouraged to review it
                  periodically.
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

export default AllocationPolicy;