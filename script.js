var sigma;

document.getElementById("Submit").onclick = function () {
  sigma = document.getElementById("Input").value;
  console.log(sigma);
  document.getElementById("h21").textContent = "";
  document.getElementById("h22").textContent = "";

  if (sigma === "Monotropa uniflora") {
    document.getElementById("h1").textContent =
      "Good, you're paying attention.";
    document.getElementById("h21").textContent =
      "It's good to know i can trust you...";
    document.getElementById("h22").textContent = "It's... scary out here...";
    document.getElementById("h23").textContent =
      "01000100 01101111 01101110 01101111 01110100 01110100 01110010 01110101 01110011 01110100 01101000 01100101 01110010";
  } else {
    document.getElementById("h1").textContent = "...";
    document.getElementById("h21").textContent = "T̳̿ẖͣẽ̡̛̛͕̻͙̬̠͎̗͍͕͖̪̽̓̽̅̎͗͊̆ͨ̓͗̇̑̀̆ͦ́ͪ̑͟͝͝ t̡̯̭̪̘̝͖͎͚̩̝̱͖̳͔̙͋͆ͬ͂̂́̂ͭ̏̆ͥͥͫͨ̉̐ͯ̕͟͟͢͟͞ͅr̡̧̲̪͚̼̺̮̳̘̣̃̐ͦ͊̂͐ͬ̌́ͫ͢͞ạ̷̴̢͓̻͕̼̻͕̞ͤͬͫ̅ͫ̽͗ͭͥ͋ͩͭ͟͟ͅn̸̷̢̲̤͇̩͇̻̟̪̜̆̾ͩͬ̎̈́͒͋͑ͬ͌̄ͩ̈́ͧ̚͟͝͡͠͝ş̴̶̵̵̨̡̣̻̙̰̗̣̮̭͍͙̙͚͔̯̃̐̿͊͒ͫͦͦͫ̒̅́̆ͭḻ̸̼̤̳̲̬͇̟̭̿̿ͣͩ̽̏̓̆̔͗̀̓̎̕͡͠ă̢͈̹̦͍̩͚͙̬ͮ͆ͨͬ̈͐̒ͥ̆͗̍͝͠t̘̍̍͘i̢͔̹͉͕̣͍̤ͮ͛͢o̮̅̍ͯ̕ň̵͎̯ͮͬ i̵̷̢̛̳̘̪̞͉͇͕̟̼ͤ̓̔ͪ͊ͣͮͥ̄ͮ̽̀ͯ̾̏̃̾̒͋̇̃͌̀̔͆ͩ͘͠͠ş̠̱̖̜̝̯͙̙̠ͩ̏ͧ͂̒̈́̑̍̉͟͡ͅ aͨ͘ r̸̵̢̗̥̞̟̥͇̹͇͔͎̣̀͗͋͆͌ͯ͒̀̓ͤ͋̓ͫͪ͋͆͋̐̌͑ͤͫ̈͑ͨ̅̋̚͠͠ȩ̷̵̡̛̰͙̠͇͍̤͍͓̱̘̜̬̲̖̠͇̝͓͚̦̓ͫ̉̓̎ͧ͌̏ͨ́͋ͪ͆͐͟͟͡͝͠͞d̶̡̺̱͈̖̰̝͓̯̱̊ͮ̄͟͜ hͣę̶̷̡̛̰̻̗̮͙͇̖͖ͮ́̄ͪ͊̌͘͟͟͠r̸̹͎̻̠̺̮͌͐ͯ́̌̍͜r̷̡͕̮̫̬̪͔̰̥͓̹̗͕͍̝̺̺̂̏ͧͨ̃ͫͩ̈́ͧ̒̈́͋̕͢͠ͅi̵̠͇̗̼̟ͭͬͤ̕͢͜n̴̨̢̛̤̝̞̙̹͖̥̮̳̭͔͍̜͈̼̬̫̱̫̔̀̓͗̎ͯ͂̉̅̈́̏͌̈́͞͝g̛̖̬̟͖̜̫͚ͨ͌́̍ͥ͘_̃";
  }
};