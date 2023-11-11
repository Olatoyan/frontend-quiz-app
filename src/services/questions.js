export async function getQuiz() {
  const res = await fetch("/data.json");
  if (!res.ok) throw Error("Failed in getting quiz");

  const data = await res.json();
  return data?.quizzes;
}
