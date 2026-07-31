import StickyNote from "./StickyNote";
import { AnimatePresence } from "framer-motion";

function StickyBoard({
  notes,
  deleteNote,
  toggleComplete,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
}) {
  return (
    <div className="mt-12">
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {notes.map((note) => (
            <StickyNote
              key={note.id}
              id={note.id}
              text={note.text}
              color={note.color}
              rotation={note.rotation}
              shape={note.shape}
              completed={note.completed}
              deleteNote={deleteNote}
              toggleComplete={toggleComplete}
              editingId={editingId}
              editText={editText}
              setEditText={setEditText}
              startEdit={startEdit}
              saveEdit={saveEdit}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default StickyBoard;