const InformationCollect = () => {
  return (
    <div className="component-container">
      <h2>Information We Collect and Why</h2>
      <p>
        Our website's application form and profile builder require users to
        provide certain personal information such as contact details, skills,
        education information, and emergency contacts. Additionally, we collect
        certain data in the background using cookies. Here is a brief overview
        of the types of data we collect and the specific purposes for
        collection:
        <h6>User Queries (search keywords, source URLs) </h6>
        To understand how users find our website and enhance our visitor count.
        <h6>Contact Details (name, phone number, email address)</h6>
        To communicate with you in the future and keep you informed about
        updates and opportunities at Champlook.
        <h6>Demographic Data (gender, skills, education, experience) </h6>
        To conduct better analytics and improve the targeting of our services.
        <h6>
          Geographical Data (IP address, address, city, region, country,
          timezone){" "}
        </h6>
        To determine users' locations, deliver marketing materials, and provide
        accurate and relevant content. As of May 2019, we no longer collect
        mailing addresses from our users.
        <h6>
          Device Details (device type, operating system, browser version){" "}
        </h6>
        To ensure compatibility and usability of our services across different
        devices.
        <h6>
          User Behaviour (pages viewed, time spent, website search history)
        </h6>
        To gain insights into how users navigate our website and enhance the
        user experience accordingly.
        <h6>Payment ID </h6>
        All payments made on our website are processed through the Razorpay
        payment gateway. We only retain the payment ID for record-keeping
        purposes once a transaction is completed.
      </p>
    </div>
  );
};

export default InformationCollect;
