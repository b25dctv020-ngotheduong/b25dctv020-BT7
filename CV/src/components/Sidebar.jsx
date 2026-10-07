export default function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      <div className="profile-pic" aria-label="Ảnh đại diện">
        D
      </div>
      {children}
    </aside>
  );
}
