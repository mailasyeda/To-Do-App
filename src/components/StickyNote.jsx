import { motion } from "framer-motion";
import {
  FaCheck,
  FaEdit,
  FaTrash,
  FaThumbtack,
} from "react-icons/fa";

function StickyNote({
  id,
  text,
  color,
  rotation,
  shape,
  completed,
  deleteNote,
  toggleComplete,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, y: -30, rotate: 10 }}
      transition={{ duration: 0.4 }}
      className={`
        ${color}
        ${rotation}
        ${shape}
        relative
        p-6
        min-h-[230px]
        shadow-xl
        hover:rotate-0
        hover:scale-105
        hover:-translate-y-3
        transition-all
        duration-300
      `}
    >
     
      <FaThumbtack className="absolute top-3 left-1/2 -translate-x-1/2 text-red-500 text-2xl" />

      
      {editingId === id ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="mt-10 w-full rounded-lg border border-gray-300 p-2 outline-none"
        />
      ) : (
        <p
          className={`mt-10 font-medium leading-7 break-words transition-all duration-300 ${
            completed
              ? "line-through text-gray-400 opacity-70"
              : "text-gray-700"
          }`}
        >
          {text}
        </p>
      )}

      
      <div className="absolute bottom-4 right-4 flex gap-4">

      
        <button
          onClick={() => toggleComplete(id)}
          disabled={editingId === id}
          className={`transition duration-300 hover:scale-125 ${
            completed
              ? "text-green-600"
              : "text-gray-600 hover:text-green-600"
          } ${editingId === id ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <FaCheck />
        </button>

        
        {editingId === id ? (
          <button
            onClick={saveEdit}
            className="text-green-600 hover:scale-125 transition duration-300"
          >
            💾
          </button>
        ) : (
          <button
            onClick={() => startEdit(id, text)}
            className="text-blue-600 hover:scale-125 transition duration-300"
          >
            <FaEdit />
          </button>
        )}

       
        <button
          onClick={() => deleteNote(id)}
          className="text-red-500 hover:scale-125 transition duration-300"
        >
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}

export default StickyNote;