export default function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      <img className="profile-pic" src="/avatar.jpg" alt="Ảnh chân dung" />
      {children}
    </aside>
  );
}
