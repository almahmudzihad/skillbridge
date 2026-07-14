import Link from "next/link";

export const metadata = {
  title: "Contact | SCIC",
  description: "Contact SCIC team.",
};

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-primary text-primary-content py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="card bg-base-100 shadow-xl border">

            <div className="card-body">

              <h2 className="text-3xl font-bold mb-6">
                Send Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                ></textarea>

                <button className="btn btn-primary w-full">
                  Send Message
                </button>

              </form>

            </div>

          </div>

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="card bg-base-100 shadow-xl border">

              <div className="card-body">

                <h2 className="text-3xl font-bold">
                  Contact Information
                </h2>

                <div className="space-y-4 mt-6">

                  <div>
                    <h4 className="font-bold">📍 Address</h4>
                    <p>Dhaka, Bangladesh</p>
                  </div>

                  <div>
                    <h4 className="font-bold">📧 Email</h4>
                    <p>amzihad@gmail.com</p>
                  </div>

                  <div>
                    <h4 className="font-bold">📞 Phone</h4>
                    <p>+880 1752533838</p>
                  </div>

                  <div>
                    <h4 className="font-bold">🕒 Office Hours</h4>
                    <p>Sun - Thu | 9:00 AM - 6:00 PM</p>
                  </div>

                </div>

              </div>

            </div>

            {/* FAQ */}

            <div className="card bg-primary text-primary-content">

              <div className="card-body">

                <h3 className="text-2xl font-bold">
                  Need Quick Help?
                </h3>

                <p>
                  Check our frequently asked questions for instant
                  answers.
                </p>

                <Link
                  href="/"
                  className="btn btn-warning w-fit"
                >
                  View FAQ
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-3xl font-bold text-center mb-8">
            Find Us
          </h2>

          <iframe
            className="w-full h-[450px] rounded-xl border"
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </main>
  );
}