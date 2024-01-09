import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import JoinBtn from "./JoinBtn";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();

  const mailchimpUrl =
    "https://app.us21.list-manage.com/subscribe/post?u=83f032e8db8b4e67bbf0c50d0&amp;id=1797b12d15&amp;f_id=00a1f7e6f0";
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const SuccessMessage = () => {
    // Redirect to '/thanks-for-subscribing' upon success
    if (subscribeStatus === "success") {
      navigate("/thanks-for-subscribing");
    }
    return <p>Thank you for subscribing!</p>;
  };
  const ErrorMessage = ({ message }) => <p>Error: {message}</p>;

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="notify">
            <p>
              We are now allowing early-access for users.{" "}
              <a href="#">Learn More</a>
            </p>{" "}
          </div>
          <div className="title">
            <h1>Embracing Creativity.</h1>
          </div>
          <div className="description">
            <p>
              Your passport to a music journey. Whether you're an artist seeking
              a stage, a producer looking for the perfect beat, or simply
              someone who lives and breathes music, this is your chance to shape
              the symphony!{" "}
            </p>
            <span></span>
          </div>
          <MailchimpSubscribe
            url={mailchimpUrl}
            render={({ subscribe, status, message }) => (
              <form
                className="form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await subscribe({ EMAIL: email });
                    setSubscribeStatus(status);
                  } catch (error) {
                    console.error("Subscription failed:", error.message);
                    setSubscribeStatus("error");
                  }
                }}
              >
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your e-mail address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <JoinBtn type="submit" />
                {status === "sending" && (
                  <div style={{ color: "blue" }}>Subscribing...</div>
                )}
                {status === "success" && navigate('/thanks-for-subscribing')}
                {status === "error" && (
                  <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div style={{ color: "green" }}>Subscribed!</div>
                )}
              </form>
            )}
          />
          <div className="footer">
            <p>Follow our socials</p>
            <div className="brands">
              <img src="/Assets/instagram.svg" alt="Instagram" />
              <img src="/Assets/twitter.svg" alt="Twitter" />
            </div>
          </div>
        </div>
        <div className="illustration">
          <img
            className="yes"
            src="/Assets/illustration1.png"
            alt="Illustration"
          />
        </div>
      </div>
    </>
  );
};

export default Cta;
