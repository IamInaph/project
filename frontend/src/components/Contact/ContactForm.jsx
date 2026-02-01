import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ email: '', message: '' });
  };

  return (
    <section className="bg0 p-t-104 p-b-116">
      <div className="container">
        <div className="flex-w flex-tr">
          <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
            <form onSubmit={handleSubmit}>
              <h4 className="mtext-105 cl2 txt-center p-b-30">
                Send Us A Message
              </h4>

              <div className="bor8 m-b-20 how-pos4-parent">
                <input
                  className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <img className="how-pos4 pointer-none" src="/images/icons/icon-email.png" alt="ICON" />
              </div>

              <div className="bor8 m-b-30">
                <textarea
                  className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                  name="msg"
                  placeholder="How Can We Help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                Submit
              </button>
            </form>
          </div>

          <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
            <div className="flex-w w-full p-b-42">
              <span className="fs-18 cl5 txt-center size-211">
                <span className="lnr lnr-map-marker"></span>
              </span>

              <div className="size-212 p-t-2">
                <span className="mtext-110 cl2">
                  Address
                </span>

                <p className="stext-115 cl6 size-213 p-t-18">
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
                </p>
              </div>
            </div>

            <div className="flex-w w-full p-b-42">
              <span className="fs-18 cl5 txt-center size-211">
                <span className="lnr lnr-phone-handset"></span>
              </span>

              <div className="size-212 p-t-2">
                <span className="mtext-110 cl2">
                  Lets Talk
                </span>

                <p className="stext-115 cl1 size-213 p-t-18">
                  +1 800 1236879
                </p>
              </div>
            </div>

            <div className="flex-w w-full">
              <span className="fs-18 cl5 txt-center size-211">
                <span className="lnr lnr-envelope"></span>
              </span>

              <div className="size-212 p-t-2">
                <span className="mtext-110 cl2">
                  Sale Support
                </span>

                <p className="stext-115 cl1 size-213 p-t-18">
                  contact@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
