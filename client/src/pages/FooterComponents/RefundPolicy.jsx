import React from 'react'

const RefundPolicy = () => {
  return (
    <div className='privacywrapper mb-4'>
                <h1 className="privacyhead" id="refundPolicy">Refund Policy</h1> 
        <div className="privacyMain">
          <p style={{ marginBottom: "1rem" }}>
            At Beiyo, we strive to provide the best accommodation experience for
            our residents. We understand that circumstances may change, and you
            may need to cancel your booking or request a refund. This Refund
            Policy outlines the conditions under which refunds are processed.
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            {" "}
            Refunds are available under the following conditions:
          </p>
          <p style={{ marginBottom: "2rem" }}>
            {" "}
            Cancellations Made Within 24 Hours of Booking: Full refund,
            excluding any non-refundable fees. <br />
            Cancellations Made More Than 7 Days Before Check-In: Partial refund
            (25% of the total booking amount), excluding any non-refundable
            fees. <br />
            Cancellations Made Less Than 7 Days Before Check-In: No refund.
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            {" "}
            Certain fees may be non-refundable. These include, but are not
            limited to: <br />
          </p>
          <p style={{ marginBottom: "2rem" }}>
            {" "}
            Processing fees <br />
            Service charges <br /> Administrative fees
          </p>
          <p style={{ marginBottom: "1rem" }}>
            {" "}
            Process for Requesting a Refund To request a refund, please follow
            these steps: <br />
            <br />
            Contact Us: Email our support team at [support@beiyo.in] with
            your booking details and reason for cancellation. <br />
            Review: Our team will review your request and respond within 3
            business days. <br /> Approval: If your refund request is approved,
            we will process the refund within 7 business days using the original
            method of payment.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            {" "}
            Special Circumstances Refunds may be considered on a case-by-case
            basis for special circumstances, such as: <br />
            <br />
            Medical emergencies Natural disasters Other unforeseen events To
            request a refund under special circumstances, please provide
            appropriate documentation to support your claim.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li>
              We reserve the right to modify this Refund Policy at any time. Any
              changes will be posted on this page with an updated effective
              date. We encourage you to review this policy periodically to stay
              informed about our refund practices.
            </li>
          </ul>
        </div>
    </div>
  )
}

export default RefundPolicy