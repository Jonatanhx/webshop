"use client";
export default function CheckoutProgressBar() {
  return (
    <ol id="checkout-progress-bar">
      <li className="progress-step text-neutral-400">
        <span className="progress-circle">1</span>
        <span className="progress-label">Sign in</span>
      </li>
      <li className="progress-step">
        <span className="progress-circle">2</span>
        <span className="progress-label">Address</span>
      </li>
      <li className="progress-step">
        <span className="progress-circle">3</span>
        <span className="progress-label">Payment</span>
      </li>
      <li className="progress-step">
        <span className="progress-circle">4</span>
        <span className="progress-label">Confirm</span>
      </li>
      <li className="progress-step">
        <span className="progress-circle">5</span>
        <span className="progress-label">Done!</span>
      </li>
    </ol>
  );
}
