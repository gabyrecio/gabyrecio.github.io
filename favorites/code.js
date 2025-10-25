// Array of 10 favorite items
const favoritesList = [
  "Family",
  "Books",
  "Music",
  "Movies",
  "Coffee",
  "Beach",
  "Animals",
  "Tacos",
  "Puzzles",
  "Sleeping"
];

// Get the <ul> element from the HTML
const list = document.getElementById("favoritesList");

// Use a loop to display all items in the array
for (let i = 0; i < favoritesList.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${i + 1}. ${favoritesList[i]}`;
  list.appendChild(li);
}
