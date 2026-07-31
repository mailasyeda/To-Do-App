import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import StickyBoard from "./components/StickyBoard";
import Stats from "./components/Stats";

function App() {
  const [Task, setTask] = useState("");
  
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("darkMode");
  return savedTheme ? JSON.parse(savedTheme) : false;
});

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
}, [darkMode]);

  const startEdit = (id, text) => {
  setEditingId(id);
  setEditText(text);
};

const saveEdit = () => {
  const updatedNotes = notes.map((note) => {
    if (note.id === editingId) {
      return {
        ...note,
        text: editText,
      };
    }

    return note;
  });

  setNotes(updatedNotes);
  setEditingId(null);
  setEditText("");
};

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleComplete = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          completed: !note.completed,
        };
      }

      return note;
    });

    setNotes(updatedNotes);
  };

  return (
  <div
    className={`relative min-h-screen overflow-x-hidden transition-all duration-500 ${
      darkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        : "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100"
    }`}
  >
    
    <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl"></div>

    <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>

    
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <AddTask
        Task={Task}
        setTask={setTask}
        notes={notes}
        setNotes={setNotes}
      />

      <Stats notes={notes} />

      <StickyBoard
        notes={notes}
        deleteNote={deleteNote}
        toggleComplete={toggleComplete}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        startEdit={startEdit}
        saveEdit={saveEdit}
      />

    </div>
  </div>
);
}

export default App;