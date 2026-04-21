interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieBanner({ onAccept, onDecline }: Props) {
  return (
    <div className="bm-cookie">
      <span>
        We use cookies to ensure you get the best experience on our website.
        By continuing, you agree to our <a href="#">privacy policy</a>.
      </span>
      <div className="bm-cookie-btns">
        <button className="bm-cookie-decline" onClick={onDecline}>Decline</button>
        <button className="bm-cookie-accept" onClick={onAccept}>Accept</button>
      </div>
    </div>
  );
}
