export default function ProjectList({ items }) {
  return (
    <ul className="skills-list">
      {items.map((project) => (
        <li key={project.name}>{project.name}</li>
      ))}
    </ul>
  );
}
