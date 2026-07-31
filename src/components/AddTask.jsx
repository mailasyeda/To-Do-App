function AddTask({ Task, setTask, notes, setNotes }) {
  const colors = [
    "bg-yellow-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-orange-200",
    "bg-purple-200",
  ];

  const rotations = [
    "-rotate-3",
    "rotate-2",
    "-rotate-2",
    "rotate-3",
    "rotate-1",
    "-rotate-1",
  ];

  const shapes = [
    "rounded-lg",
    "rounded-2xl",
    "rounded-tl-[45px]",
    "rounded-br-[40px]",
    "rounded-tr-[35px]",
    "rounded-bl-[35px]",
  ];

  const addNote = () => {
    if (Task.trim() === "") return;

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    const randomRotation =
      rotations[Math.floor(Math.random() * rotations.length)];

    const randomShape =
      shapes[Math.floor(Math.random() * shapes.length)];

    setNotes([
      ...notes,
      {
        id: Date.now(),
        text: Task,
        color: randomColor,
        rotation: randomRotation,
        shape: randomShape,
        completed: false,
      },
    ]);

    setTask("");
  };

  return (
    <div className="w-full flex justify-center mt-10 mb-14">
      <div
        className="
        w-full
        max-w-2xl
        bg-white/70
        backdrop-blur-xl
        rounded-[35px]
        shadow-2xl
        border
        border-white/50
        p-8
      "
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          📝 Add a New Note
        </h2>

        <input
          type="text"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="Write something amazing..."
          className="
            w-full
            h-16
            rounded-2xl
            bg-white
            shadow-inner
            px-6
            text-lg
            outline-none
            placeholder:text-gray-400
            focus:ring-4
            focus:ring-amber-200
            transition
          "
        />

        <button
          onClick={addNote}
          className="
            w-full
            mt-6
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-amber-400
            to-orange-400
            hover:from-amber-500
            hover:to-orange-500
            text-white
            font-bold
            text-lg
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddTask;