function checkAnswers() 
{
  let score = 0;

  //Correct answers
  const correctAnswers = {
    q1: "B", // 54+32=86
    q2: "A", // 11x4=44
    q3: ["A", "C"], // 4x2 and 4+4
    q4: ["A", "B", "C"] // + - x
  };

  // ---- Question 1 ----
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1) {
    if (q1.value === correctAnswers.q1) {
      document.getElementById("result1").innerText = "Correct!";
      score++;
    } else {
      document.getElementById("result1").innerText = "Wrong. Correct answer: 86";
    }
  } else {
    document.getElementById("result1").innerText = "No answer selected.";
  }

  // ---- Question 2 ----
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2) {
    if (q2.value === correctAnswers.q2) {
      document.getElementById("result2").innerText = "Correct!";
      score++;
    } else {
      document.getElementById("result2").innerText = "Wrong. Correct answer: 44";
    }
  } else {
    document.getElementById("result2").innerText = "No answer selected.";
  }

  // ---- Question 3 (checkboxes) ----
  const selectedQ3 = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
  const correctQ3 = correctAnswers.q3;

  if (
    selectedQ3.length === correctQ3.length &&
    selectedQ3.every(val => correctQ3.includes(val))
  ) {
    document.getElementById("result3").innerText = "Correct!";
    score++;
  } else if (selectedQ3.length === 0) {
    document.getElementById("result3").innerText = "No answer selected.";
  } else {
    document.getElementById("result3").innerText = "Wrong. Correct answers: 4 x 2 and 4 + 4";
  }

  // ---- Question 4 (checkboxes) ----
  const selectedQ4 = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(cb => cb.value);
  const correctQ4 = correctAnswers.q4;

  if (
    selectedQ4.length === correctQ4.length &&
    selectedQ4.every(val => correctQ4.includes(val))
  ) {
    document.getElementById("result4").innerText = "Correct!";
    score++;
  } else if (selectedQ4.length === 0) {
    document.getElementById("result4").innerText = "No answer selected.";
  } else {
    document.getElementById("result4").innerText = "Wrong. Correct answers: +, -, x";
  }

  // ---- Display final score ----
  document.getElementById("scoreDisplay").innerText = `Your Score: ${score} / 4`;
}
