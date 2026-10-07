import { useState } from "react";
import ContactInfo from "./components/ContactInfo.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Section from "./components/Section.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SkillList from "./components/SkillList.jsx";

const contacts = [
  { icon: "📍", label: "Địa chỉ", value: "Nguyễn Lân, Thanh Xuân, Hà Nội, Việt Nam" },
  { icon: "📞", label: "SĐT", value: "0948.316.146" },
  { icon: "✉️", label: "Email", value: "DuongNT.B25TV020@stu.ptit.edu.vn" },
  { icon: "🔗", label: "GitHub", value: "b25dctv020-ngotheduong" },
];

const skills = [
  "Lập trình, Toán cao cấp, Hóa học",
  "Embedded, AIoT, Machine Learning",
  "OOP, RAG, IoT, Git & GitHub",
  "Trekking",
];

const projects = [
  { name: "AMA" },
  { name: "LLM trích xuất văn bản" },
  { name: "Nhận diện khuôn mặt với YOLOv8" },
];

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Chào buổi sáng! 🌅";
  }
  if (hour < 18) {
    return "Chào buổi chiều! ☕";
  }
  return "Chào buổi tối! 🌙";
}

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const backgroundColors = ["#ffffff", "#f5f6fa", "#fdf5e6", "#e8f6f3", "#f9ebea"];

  function changeBackground() {
    setColorIndex((colorIndex + 1) % backgroundColors.length);
  }

  return (
    <div className="cv-container" style={{ backgroundColor: backgroundColors[colorIndex] }}>
      <Sidebar>
        <ContactInfo items={contacts} />
      </Sidebar>

      <main className="content">
        <header className="cv-header">
          <h1>Ngô Thế Dương - B25DCTV020</h1>
          <h2>Học viện Công nghệ Bưu chính Viễn thông</h2>
          <h3>Ngành Trí tuệ nhân tạo vạn vật - AIoT</h3>
          <p className="greeting">{getGreeting()}</p>
          <button id="nutDoiMau" onClick={changeBackground} type="button">
            Đổi màu nền
          </button>
        </header>

        <Section title="Giới thiệu bản thân">
          <p>
            Hello World!!! Mình là Dương - sinh viên thuộc viện Khoa học Kỹ thuật
            Bưu điện. Đây là bài tập Lập Trình Web của mình. Mình yêu thích lập
            trình và đang tìm hiểu thêm về AIoT.
          </p>
        </Section>

        <Section title="Môn học - Công nghệ - Sở thích">
          <SkillList items={skills} />
        </Section>

        <Section title="Dự án">
          <ProjectList items={projects} />
        </Section>
      </main>
    </div>
  );
}
