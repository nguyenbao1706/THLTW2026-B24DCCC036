import { useState, useMemo } from 'react';
import {
	Alert,
	Button,
	Card,
	Col,
	InputNumber,
	List,
	Progress,
	Row,
	Space,
	Statistic,
	Typography,
} from 'antd';

interface Subject {
  id: string;
  name: string;
  monthlyGoal: number;
}

interface StudySession {
  id: string;
  subjectId: string;
  datetime: string;
  duration: number;
  content: string;
  note: string;
}

const App: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const [newSubject, setNewSubject] = useState("");
  const [goal, setGoal] = useState<number>(0);

  const [selectedSubject, setSelectedSubject] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const [content, setContent] = useState("");
  const [note, setNote] = useState("");

  
  useEffect(() => {
    const storedSubjects = localStorage.getItem("subjects");
    const storedSessions = localStorage.getItem("sessions");

    if (storedSubjects) setSubjects(JSON.parse(storedSubjects));
    if (storedSessions) setSessions(JSON.parse(storedSessions));
  }, []);

  
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  const addSubject = () => {
    if (!newSubject.trim()) return;

    const subject: Subject = {
      id: Date.now().toString(),
      name: newSubject,
      monthlyGoal: goal,
    };

    setSubjects([...subjects, subject]);
    setNewSubject("");
    setGoal(0);
  };

  const deleteSubject = (id: string) => {
    setSubjects(subjects.filter((s) => s.id !== id));
    setSessions(sessions.filter((s) => s.subjectId !== id));
  };

  const addSession = () => {
    if (!selectedSubject || duration <= 0) return;

    const session: StudySession = {
      id: Date.now().toString(),
      subjectId: selectedSubject,
      datetime: new Date().toISOString(),
      duration,
      content,
      note,
    };

    setSessions([...sessions, session]);

    setDuration(0);
    setContent("");
    setNote("");
  };

  const getMonthlyProgress = (subjectId: string) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    return sessions
      .filter((s) => {
        const date = new Date(s.datetime);
        return (
          s.subjectId === subjectId &&
          date.getMonth() === currentMonth &&
          date.getFullYear() === currentYear
        );
      })
      .reduce((total, s) => total + s.duration, 0);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h2>📚 Ứng dụng quản lý học tập</h2>

      {/* Thêm môn học */}
      <h3>Thêm môn học</h3>
      <input
        placeholder="Tên môn học"
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mục tiêu giờ/tháng"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
      />
      <button onClick={addSubject}>Thêm</button>

      <hr />

      {/* Danh sách môn */}
      <h3>Danh sách môn học</h3>
      {subjects.map((s) => {
        const progress = getMonthlyProgress(s.id);
        return (
          <div key={s.id} style={{ marginBottom: 10 }}>
            <b>{s.name}</b> | Mục tiêu: {s.monthlyGoal}h | Đã học: {progress}h{" "}
            {progress >= s.monthlyGoal ? (
              <span style={{ color: "green" }}>✔ Hoàn thành</span>
            ) : (
              <span style={{ color: "red" }}>✘ Chưa đạt</span>
            )}
            <button onClick={() => deleteSubject(s.id)}> Xóa</button>
          </div>
        );
      })}

      <hr />

      {}
      <h3>Thêm lịch học</h3>
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option value="">Chọn môn học</option>
        {subjects.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Số giờ học"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />

      <input
        placeholder="Nội dung đã học"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        placeholder="Ghi chú"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addSession}>Thêm lịch học</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);