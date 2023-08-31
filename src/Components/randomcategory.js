const categories = {
  food: ["burger", "pizza", "pasta", "biryani", "cake", "icecream", "Fries"],
  animal: [
    "zebra",
    "lion",
    "elephant",
    "monkey",
    "Fox",
    "Bear",
    "Donkey",
    "Tiger",
  ],
  programming: [
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby",
    "fortran",
  ],
};

function randomcategory() {
  const categoryKeys = Object.keys(categories);
  const randomCategory =
    categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  const categoryWords = categories[randomCategory];
  return {
    category: randomCategory,
    word: categoryWords[Math.floor(Math.random() * categoryWords.length)],
  };
}
export default randomcategory;
