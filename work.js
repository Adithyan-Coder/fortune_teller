const fortunes = [
  "You might step into a dog poop today",
  "Your coffee will be cold no matter what!",
  "You will get wet today!",
  "A cat will turn back on you.",
  "You are the chosen one. For something weird.",
  "You will finally understand that one meme… tomorrow.",
  "Don’t worry, nobody else knows what they’re doing either.",
  "Your life will be like a password — complicated and easily forgotten.",
  "You might get a girlfriend today. WAKE UP from your dream!!!!!!!!!",
  "A mysterious breeze will change your plans."
];

window.onload = function () {
  const fortuneElement = document.getElementById("fortuneBox");
  const userQuery = sessionStorage.getItem('userQuery');
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];

  fortuneElement.innerText = `"${userQuery}"\n\n🔮 ${fortune}`;
};
