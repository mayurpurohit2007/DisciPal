// Goal Tracker
const goalInput = document.getElementById("goalInput");
const addGoal = document.getElementById("addGoal");
const goalList = document.getElementById("goalList");

addGoal.addEventListener("click", () => {
    if (goalInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${goalInput.value}
        <span class="delete"><i class="fas fa-trash"></i></span>
    `;
    goalList.appendChild(li);
    goalInput.value = "";

    // Delete Goal
    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });
});

// Progress Tracker
const progressFill = document.getElementById("progressFill");
const markDone = document.getElementById("markDone");
let progress = 0;

markDone.addEventListener("click", () => {
    if (progress < 100) progress += 10;
    progressFill.style.width = `${progress}%`;
    progressFill.textContent = `${progress}%`;
});

// Motivational Quotes
const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");

const quotes = [
    "Discipline is the bridge between goals and accomplishment.",
    "Success is nothing more than a few simple disciplines, practiced every day.",
    "You will never always be motivated, so you must learn to be disciplined.",
    "Small disciplines repeated with consistency every day lead to great achievements.",
    "The pain of discipline is far less than the pain of regret."
];

newQuote.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = `"${randomQuote}"`;
});