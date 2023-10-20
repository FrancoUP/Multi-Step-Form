export function Step5ThankYou() {
  return (
    <div className="container-thank-you">
      <img
        className="img-thank-you"
        alt=""
        src={process.env.PUBLIC_URL + "/images/icon-thank-you.png"}
      />
      <p className="thankyou">Thank you!</p>
      <p className="thankyou-detail">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
