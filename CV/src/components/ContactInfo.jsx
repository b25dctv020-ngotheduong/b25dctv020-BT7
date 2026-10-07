export default function ContactInfo({ items }) {
  return (
    <div className="contact-info">
      <h3>Contact</h3>
      {items.map((item) => (
        <p key={item.label}>
          <strong>{item.icon} {item.label}:</strong> {item.value}
        </p>
      ))}
    </div>
  );
}
