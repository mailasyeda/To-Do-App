function Stats({ notes }) {
  const total = notes.length;

  const completed = notes.filter((note) => note.completed).length;

  const pending = total - completed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-amber-500">{total}</h3>
        <p className="text-gray-600 font-medium mt-2">Total Notes</p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-green-500">{completed}</h3>
        <p className="text-gray-600 font-medium mt-2"> Completed</p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-red-500">{pending}</h3>
        <p className="text-gray-600 font-medium mt-2"> Pending</p>
      </div>

    </div>
  );
}

export default Stats;