import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function LearningCourse() {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "Management Sportif Professionnel",
    modules: [
      {
        id: 1,
        title: "Découvrir le management sportif",
        lessons: [
          { id: 1, title: "Tirez un maximum de ce cours", completed: false },
        ],
      },
      {
        id: 2,
        title: "Les fondamentaux",
        lessons: [
          { id: 2, title: "Identifier les acteurs du sport", completed: false },
          { id: 3, title: "Comprendre l'écosystème sportif", completed: false },
          { id: 4, title: "Analyser le marché sportif", completed: false },
        ],
      },
      {
        id: 3,
        title: "Leadership et gestion",
        lessons: [
          { id: 5, title: "Construire une équipe performante", completed: false },
          { id: 6, title: "Manager les conflits", completed: false },
        ],
      },
    ],
  });

  const [currentLessonId, setCurrentLessonId] = useState(1);

  // 🔥 flatten lessons
  const allLessons = useMemo(
    () => courseData.modules.flatMap((m) => m.lessons),
    [courseData]
  );

  const currentIndex = allLessons.findIndex(
    (l) => l.id === currentLessonId
  );

  const currentLesson = allLessons[currentIndex];

  // 📊 progress
  const progress = useMemo(() => {
    const total = allLessons.length;
    const done = allLessons.filter((l) => l.completed).length;
    return (done / total) * 100;
  }, [allLessons]);

  // ✅ mark lesson as completed + go next
  const nextLesson = () => {
    if (currentIndex === -1 || currentIndex >= allLessons.length - 1) return;

    const currentId = currentLessonId;
    const next = allLessons[currentIndex + 1];

    setCourseData((prev) => ({
      ...prev,
      modules: prev.modules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === currentId
            ? { ...lesson, completed: true }
            : lesson
        ),
      })),
    }));

    setCurrentLessonId(next.id);
  };

  // ⬅️ previous
  const previousLesson = () => {
    if (currentIndex > 0) {
      setCurrentLessonId(allLessons[currentIndex - 1].id);
    }
  };

  // 🎯 select lesson manually
  const selectLesson = (id) => {
    setCurrentLessonId(id);
  };

  return (
    <div className="h-screen flex bg-white overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-96 border-r border-gray-200 bg-white overflow-y-auto hidden lg:block">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b z-10 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl text-gray-900">Table des matières</h2>

            <button
              onClick={() => navigate("/formations")}
              className="text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* PROGRESS */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Progression</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* MODULES */}
        <div className="pb-10">
          {courseData.modules.map((module, index) => (
            <div key={module.id}>
              <div className="bg-gray-100 px-6 py-5">
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  Partie {index + 1}
                </p>
                <h3 className="font-bold text-lg mt-1 text-gray-900">
                  {module.title}
                </h3>
              </div>

              {module.lessons.map((lesson) => {
                const isActive = lesson.id === currentLessonId;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => selectLesson(lesson.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 text-left transition ${
                      isActive ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-semibold ${
                        lesson.completed
                          ? "bg-green-600 text-white border-green-600"
                          : isActive
                          ? "border-blue-600 text-blue-600"
                          : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {lesson.completed ? "✓" : lesson.id}
                    </div>

                    <span
                      className={`text-sm ${
                        isActive
                          ? "font-semibold text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {lesson.title}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">

          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-blue-600 hover:underline"
          >
            ← Retour à la formation
          </button>

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            {currentLesson?.title}
          </h1>

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            className="w-full rounded-2xl mb-10"
            alt=""
          />

          {/* CONTENT */}
          <div className="prose max-w-none text-gray-700">
            <p>
              Le management sportif est un secteur stratégique
              qui combine leadership, marketing et gestion.
            </p>

            <p>
              Il est essentiel de maîtriser les acteurs du sport
              pour évoluer dans ce domaine.
            </p>

            <ul>
              <li>Clubs sportifs</li>
              <li>Fédérations</li>
              <li>Sponsors</li>
              <li>Médias</li>
            </ul>
          </div>

          {/* QUIZ */}
          {/* <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-3">
              Quiz rapide
            </h3>

            <p className="text-gray-600 mb-4">
              Qui supervise une compétition nationale ?
            </p>

            <div className="space-y-3">
              {[
                "Un sponsor",
                "Une fédération sportive",
                "Un influenceur",
              ].map((a) => (
                <button
                  key={a}
                  className="w-full text-left border rounded-lg p-3 hover:border-blue-500"
                >
                  {a}
                </button>
              ))}
            </div>
          </div> */}

          {/* NAVIGATION */}
          <div className="mt-12 flex justify-between">
            <button
              onClick={previousLesson}
              disabled={currentIndex <= 0}
              className="px-6 py-3 border rounded-xl disabled:opacity-50"
            >
              ← Leçon précédente
            </button>

            <button
              onClick={nextLesson}
              disabled={currentIndex >= allLessons.length - 1}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl disabled:opacity-50"
            >
              Leçon suivante →
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}