const btns = document.getElementById("btn");
btns.addEventListener("click", () => {
  const before = document.getElementById("text")
  before.textContent = before.textContent.replace("してください", "しました");
});