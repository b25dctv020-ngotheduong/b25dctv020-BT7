export default function SkillList({ items }) {
  return (
    <ul className="skills-list">
      {items.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
