const elements = Array.from(document.getElementsByClassName('image-viewer'));

// console.log(elements)
// for (const element of elements) {
//   console.log(element); // Access each element
// }

function closeMenu() {
  document.getElementById("menu").checked = false;
}


function closePopUp() {
  let popup = document.getElementById('popup');
  popup.classList.add("hide");

  let closeBar = document.getElementById('closeBar');
  closeBar.classList.add("hide");

  let grayFuzz = document.getElementById('grayFuzz');
  grayFuzz.classList.add("hide");
}



let popupMeta = {
  "stb-built": {
    title: "Shut the Box - Assembled",
    price: "Assembled - $16.00 US",
    itemNumber: "8462965309607",
    img: "/images/Assembled/shut-the-box/stb-1.jpg",
    p1: "Shut the box (also called ACKPOT, batten down the hatches or trick-track) is a game of dice for one or more players, commonly played in a group of two to four for stakes. Traditionally, a counting box is used with tiles numbered 1 to 9 where each can be covered with a hinged or sliding mechanism, though the game can be played with only a pair of dice, pen, and paper. -Wikipedia",
    p2: '',
    p3: "",
    downloads: [
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/shut the box-Game-instructions-small-cards-fold-4x.pdf" },
    ],
    altimg: [
      "/images/Assembled/shut-the-box/stb-2.jpg",
      "/images/Assembled/shut-the-box/stb-3.jpg",
      "/images/Assembled/shut-the-box/stb-4.jpg",
      "/images/Assembled/shut-the-box/stb-5.jpg",
      "/images/Assembled/shut-the-box/instructions.jpg",
      "images/usa.gif",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/shut-the-box-assembled'
  },
  "stb-kit": {
    title: "Shut the Box - Wood Kit",
    price: "Kit - $16.00 US",
    itemNumber: "8462968193191",
    img: "/images/Assembled/shut-the-box/stb-6.jpg",
    p1: "Shut the box (also called ACKPOT, batten down the hatches or trick-track) is a game of dice for one or more players, commonly played in a group of two to four for stakes. Traditionally, a counting box is used with tiles numbered 1 to 9 where each can be covered with a hinged or sliding mechanism, though the game can be played with only a pair of dice, pen, and paper. -Wikipedia",
    p2: 'This is my take on the classic game. I have crafted nine wooden switches, and a dice holder. The whole game fits in pocket-sized box with a slide out tray. This toy makes great fidget, I often enjoy a quick game whenever I have a free moment. This is a classic game that supports one to five+ players.',
    p3: "",
    downloads: [
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/shut the box-Game-instructions-small-cards-fold-4x.pdf" },
      { title: 'Build Instructions', text: '', icon: 'pdf', url: "instructions/build/stb-build-instructions.pdf" },
    ],
    altimg: [
      "/images/Assembled/shut-the-box/stb-6.jpg",
      "/images/Kits/shut-the-box/20250208_093341.jpg",
      "/images/Assembled/shut-the-box/stb-1.jpg",
      "/images/Assembled/shut-the-box/stb-2.jpg",
      "/images/Assembled/shut-the-box/stb-3.jpg",
      "/images/Assembled/shut-the-box/stb-4.jpg",
      "/images/Assembled/shut-the-box/stb-5.jpg",
      "/images/Assembled/shut-the-box/instructions.jpg",
      "images/usa.gif",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/shut-the-box-wood-kit'
  },

  "mom-kit": {
    title: "Mine-ore-Mine - Wood Kit",
    price: "Kit w/Cards - $16.00 US",
    itemNumber: "8475091894439",
    img: "/images/Kits/mine-ore-mine/20250209_174643.jpg",
    p1: "Shut the box (also called ACKPOT, batten down the hatches or trick-track) is a game of dice for one or more players, commonly played in a group of two to four for stakes. Traditionally, a counting box is used with tiles numbered 1 to 9 where each can be covered with a hinged or sliding mechanism, though the game can be played with only a pair of dice, pen, and paper. -Wikipedia",
    p2: "",
    p3: "",
    downloads: [
      { title: 'Build Instructions', text: '', icon: 'pdf', url: "instructions/build/mom-build-instructions.pdf" },
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/mom-play-instructions.pdf" }
    ],
    altimg: [
      "/images/Kits/mine-ore-mine/20250209_174643.jpg",
      "/images/Kits/mine-ore-mine/20250209_175809.jpg",
      "/images/Kits/mine-ore-mine/20250209_175831.jpg",
      "/images/Kits/mine-ore-mine/20250209_175925.jpg",
      "/images/Kits/mine-ore-mine/20250209_175955.jpg",
      "/images/Kits/mine-ore-mine/20250209_180035.jpg",
      "/images/Kits/mine-ore-mine/20250209_180111.jpg",
      "/images/Kits/mine-ore-mine/20250209_180139.jpg",
      "/images/Kits/mine-ore-mine/20250209_180155.jpg",
      "/images/Kits/mine-ore-mine/20250209_180200.jpg",
      "/images/Kits/mine-ore-mine/20250209_180205.jpg",
      "/images/Kits/mine-ore-mine/20250209_180210.jpg",
      "/images/Cards/mom-cards/20241111_145523.jpg",
      "/images/Cards/mom-cards/group.gif",
      "/images/Cards/mom-cards/20241111_145623.jpg",
      "/images/Cards/mom-cards/Xa-Card-Back-V2.jpg",
      "/images/Cards/mom-cards/2a-of-Clubs.jpg",
      "/images/Cards/mom-cards/2a-of-Diamonds.jpg",
      "/images/Cards/mom-cards/Aa-of-Clubs.jpg",
      "/images/Cards/mom-cards/Ja-of-Diamonds.jpg",
      "/images/Cards/mom-cards/Ka-of-Clubs.jpg",
      "/images/Cards/mom-cards/Qa-of-Diamonds.jpg",
      "/images/Cards/mom-cards/Xa-Shovel.jpg",
      "/images/Cards/mom-cards/Xa-Pick-Ax.jpg",
      "/images/Cards/mom-cards/8a-of-Clubs.jpg",
      "/images/Cards/mom-cards/10a-of-Spades.jpg",
      "/images/Cards/mom-cards/5a-of-Diamonds.jpg",
      "/images/Cards/mom-cards/4a-of-Clubs.jpg",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/shut-the-box-wood-kit'
  },



  "sitn-built": {
    title: "Yo-Ho Ships in the Night© (2x)",
    price: "Assembled - $30.00 US",
    itemNumber: "8462965375143",
    img: "/images/Assembled/ships-in-the-night/sitn-1.jpg",
    p1: "Faster and more fun than the classic ship game you are thinking of. (Yo-Ho Ships-in-the-Night) focuses on one ship. You must evade other players’ cannon balls while also outsmarting your enemy by moving, shooting and listening. Each shot at the enemy also gives away some information about your own location.",
    p2: "This is a fast-paced cat and mouse style hunt. Sure to get you energized. With unlimited moves but only 5 shots, the game is as long or as short as your attention span allows.",
    p3: "",
    downloads: [
      { title: 'Display size - play instructions', text: '', icon: 'pdf', url: "instructions/play/sitn-big-instructions.pdf" },
      { title: 'Instructions - small double sided insert', text: '', icon: 'pdf', url: "instructions/play/Yo-Ho-Game-instructions-small-cards-fold-4x.pdf" }
    ],
    altimg: [
      "/images/Assembled/ships-in-the-night/sitn-1.jpg",
      "/images/Assembled/ships-in-the-night/sitn-2.jpg",
      "/images/Assembled/ships-in-the-night/sitn-3.jpg",
      "/images/Assembled/ships-in-the-night/sitn-4.jpg",
      "/images/Assembled/ships-in-the-night/sitn-5.jpg",
      "/images/Assembled/ships-in-the-night/sitn-6.jpg",
      "/images/Assembled/ships-in-the-night/sitn-7.jpg",
      "/images/Assembled/ships-in-the-night/sitn-8.jpg",
      "/images/Assembled/ships-in-the-night/sitn-9.jpg",
      "/images/Assembled/ships-in-the-night/sitn-10.jpg",
      "/images/Assembled/ships-in-the-night/sitn-11.jpg",
      "/images/Assembled/ships-in-the-night/sitn-12.jpg",
      "/images/Assembled/ships-in-the-night/sitn-13.jpg",
      "/images/Assembled/ships-in-the-night/sitn-big-instructions.svg",
      "images/usa.gif",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/yo-ho-ships-in-the-night%C2%A9-2x'
  },
  "fof-cards": {
    title: "Fort-Or-Fodder© Card Game",
    price: "One Deck - $12.00 US",
    itemNumber: "8462965801127",
    img: "/images/Cards/FOF-Cards/20241017_221544.jpg",
    p1: "A more sophisticated take on the classic game of war. Defend your forts by expending troops. Attack as a group of cards but defend with only a single card. This simple game will play out in endless strategic combinations. A few minutes to learn, and a lifetime to master.",
    p2: '*This is also a standard 52 card poker deck. ',
    p3: "",
    downloads: [
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/FoF-Game-instructions.pdf" }
    ],
    altimg: [
      "/images/Cards/FOF-Cards/20241017_221522.jpg",
      "/images/Cards/FOF-Cards/20241017_221544.jpg",
      "/images/Cards/FOF-Cards/20241017_221801.jpg",
      "/images/Cards/FOF-Cards/20241017_221902.jpg",
      "/images/Cards/FOF-Cards/20241017_223554.jpg",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/fort-or-fodder%C2%A9-card-game-deck'
  },
  "fof-kit": {
    title: "Fort-Or-Fodder© Kit",
    price: "Kit w/Cards - $16.00 US",
    itemNumber: "8475088945319",
    img: "/images/Kits/fort-or-fodder/20250209_175653.jpg",
    p1: "A more sophisticated take on the classic game of war. Defend your forts by expending troops. Attack as a group of cards but defend with only a single card. This simple game will play out in endless strategic combinations. A few minutes to learn, and a lifetime to master.",
    p2: '',
    p3: "",
    downloads: [
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/FoF-Game-instructions.pdf" },
      { title: 'Build Instructions', text: '', icon: 'pdf', url: "instructions/build/fof-build-instructions.pdf" }
    ],
    altimg: [
      "/images/Kits/fort-or-fodder/20250209_175653.jpg",
      "/images/Kits/fort-or-fodder/20250209_180240.jpg",
      "/images/Kits/fort-or-fodder/20250209_180254.jpg",
      "/images/Kits/fort-or-fodder/20250209_180259.jpg",
      "/images/Kits/fort-or-fodder/20250209_180314.jpg",
      "/images/Kits/fort-or-fodder/20250209_180331.jpg",
      "/images/Kits/fort-or-fodder/20250209_180344.jpg",
      "/images/Kits/fort-or-fodder/20250209_180419.jpg",
      "/images/Kits/fort-or-fodder/20250209_180443.jpg",
      "/images/Kits/fort-or-fodder/20250209_180533.jpg",
      "/images/Kits/fort-or-fodder/20250209_180628.jpg",
      "/images/Kits/fort-or-fodder/20250209_180650.jpg",
      "/images/Kits/fort-or-fodder/20250209_180715.jpg",
      "/images/Kits/fort-or-fodder/20250209_180734.jpg",
      "/images/Kits/fort-or-fodder/20250209_180741.jpg",
      "/images/Kits/fort-or-fodder/20250209_180749.jpg",
      "/images/Kits/fort-or-fodder/20250209_180757.jpg",
      "/images/Kits/fort-or-fodder/FOF-Kit-Packaging-front.jpg",
      "/images/Cards/FOF-Cards/20241017_221522.jpg",
      "/images/Cards/FOF-Cards/20241017_221544.jpg",
      "/images/Cards/FOF-Cards/20241017_221801.jpg",
      "/images/Cards/FOF-Cards/20241017_221902.jpg",
      "/images/Cards/FOF-Cards/20241017_223554.jpg",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/fort-or-fodder%C2%A9-card-game-deck'
  },

  "fun": {
    title: "Fundensity-Four© Shut the Box Edition",
    price: "Assembled - $80.00 US",
    itemNumber: "8462965735591",
    img: "/images/fundensity/20250208_170340.jpg",
    p1: 'Four great games in one awesome display cabinet. Shut-the-box is the first game, you select the other three. Card games/ wood games you choose.',
    p2: 'This Edition comes with [ Shut-the-Box ] Pre-selected for Game in Slot #1.',
    p3: 'Note: [ Yo-Ho Ships in the Night ] requires two or more games to play.',
    downloads: [],
    altimg: [
      "/images/fundensity/20250208_170340.jpg",
      "/images/fundensity/20250208_171816.jpg",
      "/images/fundensity/20250208_170538.jpg",
      "/images/fundensity/20250208_170622.jpg",
      "/images/fundensity/20250208_170452.jpg",
      "/images/fundensity/20250208_165918.jpg",
      "/images/fundensity/20250208_165932.jpg",
      "/images/fundensity/20250208_165941.jpg",
      "/images/fundensity/20250208_165948.jpg",
      "/images/fundensity/20250208_165959.jpg",
      "/images/fundensity/20250208_170007.jpg",
      "/images/fundensity/20250208_170015.jpg",
      "/images/fundensity/20250208_170031.jpg",
      "/images/fundensity/20250208_170156.jpg",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/fundensity-four%C2%A9-loaded-cabinet'
  },
  "mom-cards": {
    title: "Mine-ore-Mine© Cards Game",
    price: "One Deck - $12.00",
    itemNumber: "8462965964967",
    img: "/images/Cards/mom-cards/20250209_183914.jpg",
    p1: 'A fun, Mine-themed, Strategy game. Move cards to make connections and claim gems. Create pairs to protect them. Your shovel and pick-ax will help you perform special actions. The first player with four pairs wins.',
    p2: '*This is also a standard 52 card poker deck. ',
    p3: "",
    downloads: [
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/mom-play-instructions.pdf" }
    ],
    altimg: [
      "/images/Cards/mom-cards/20250209_183914.jpg",
      "/images/Cards/mom-cards/20250209_183920.jpg",
      "/images/Cards/mom-cards/20250209_183931.jpg",
      "/images/Cards/mom-cards/20250209_183939.jpg",
      "/images/Cards/mom-cards/20241111_145523.jpg",
      "/images/Cards/mom-cards/group.gif",
      "/images/Cards/mom-cards/20241111_145623.jpg",
      "/images/Cards/mom-cards/Xa-Card-Back-V2.jpg",
      "/images/Cards/mom-cards/2a-of-Clubs.jpg",
      "/images/Cards/mom-cards/2a-of-Diamonds.jpg",
      "/images/Cards/mom-cards/Aa-of-Clubs.jpg",
      "/images/Cards/mom-cards/Ja-of-Diamonds.jpg",
      "/images/Cards/mom-cards/Ka-of-Clubs.jpg",
      "/images/Cards/mom-cards/Qa-of-Diamonds.jpg",
      "/images/Cards/mom-cards/Xa-Shovel.jpg",
      "/images/Cards/mom-cards/Xa-Pick-Ax.jpg",
      "/images/Cards/mom-cards/8a-of-Clubs.jpg",
      "/images/Cards/mom-cards/10a-of-Spades.jpg",
      "/images/Cards/mom-cards/5a-of-Diamonds.jpg",
      "/images/Cards/mom-cards/4a-of-Clubs.jpg",
    ],
    productlink: 'https://mjeted-6q.myshopify.com/products/mine-ore-mine%C2%A9-card-game'
  },
  "crevasse": {
    title: "Crevasse - A Climb to the Top©",
    price: "Assembled - $16.00",
    itemNumber: '8473836224679',
    img: "images/Assembled/crevasse/20250228_122716.jpg",
    p1: 'Can you escape the Crevasse? Khumbu Icefall on Mount Everest has turned deadly. You and your buddy have fallen to the bottom of a deadly crevasse. The high altitude is limiting your energy. No-one knows where you are. It has turned into a race to the top, as your energy is used up, and your climbing skills are put to the test. Survival lies in your hands alone. Climb for your life in this thrilling one player skill game.',
    p2: 'Instructions: Flick the lever. (one ball is one turn) Each turn, sum up all balls that are captured and move one climber to an adjacent space that is equal to or less than the current sum.',
    p3: 'Note: the rope is a random color friendship bracelet.',
    downloads: [
      { title: 'Play Instructions', text: '', icon: 'pdf', url: "instructions/play/Crevasse-Game-instructions-small-cards-fold-4x.pdf" }
    ],
    altimg: [
      "images/Assembled/crevasse/20250228_122716.jpg",
      "images/Assembled/crevasse/20250228_122611.jpg",
      "images/Assembled/crevasse/20250228_122742.jpg",
      "images/Assembled/crevasse/20250228_122752.jpg",
      "images/Assembled/crevasse/20250228_122822.jpg",
      "images/Assembled/crevasse/20250228_122838.jpg",
      "images/Assembled/crevasse/20250228_122858.jpg",
      "images/Assembled/crevasse/20250228_122908.jpg",
      "images/Assembled/crevasse/20250228_122918.jpg",
      "images/Assembled/crevasse/20250228_122926.jpg",
      "images/Assembled/crevasse/20250228_122936.jpg",
      "images/Assembled/crevasse/20250228_122945.jpg",
      "images/Assembled/crevasse/20250228_122953.jpg"
    ],
    productlink: 'https://mjeted-6q.myshopify.com/cart/46599724826791:1?channel=buy_button'
  },



}


function openPopUp(cardName) {
  if (!window.orbitShop) {
    window.orbitShop = shopify;
    orbitShop.init();
    setTimeout(() => openPopUp(cardName), 1000);
    return;
  } else {

    let closeBar = document.getElementById('closeBar');
    closeBar.classList.remove("hide");

    // set the variables
    document.getElementById('popupTitle').innerHTML = popupMeta[cardName].title;
    document.getElementById('popupPrice').innerHTML = popupMeta[cardName].price;
    document.getElementById('popupImage').style.backgroundImage = "url('" + popupMeta[cardName].img + "')";
    document.getElementById('popupP1').innerHTML = popupMeta[cardName].p1;
    document.getElementById('popupP2').innerHTML = popupMeta[cardName].p2;
    document.getElementById('popupP3').innerHTML = popupMeta[cardName].p3;

    let downLoad = ``;

    if (popupMeta[cardName].downloads.length) {
      for (let x = 0; x < popupMeta[cardName].downloads.length; x++) {
        downLoad = downLoad + `<div class="downloadLink">
      <img src="images/icons/pdf.png"/>
      <a href="${popupMeta[cardName].downloads[x].url}" download>${popupMeta[cardName].downloads[x].title}</a>
    </div>`
      }
    }
    document.getElementById("downloadlinks").innerHTML = downLoad;

    let miniBar = document.getElementById('popupMiniBar');
    miniBar.innerHTML = "";

    let images = popupMeta[cardName].altimg;
    for (let x in images) {
      let img = document.createElement('img');
      img.style.backgroundImage = "url('" + images[x] + "')";
      img.classList.add("popupMiniThumb");
      img.addEventListener("click", () => { document.getElementById('popupImage').style.backgroundImage = "url('" + images[x] + "')"; });
      miniBar.appendChild(img);
    }

    document.getElementById("shopifyAdd").href = popupMeta[cardName].productlink;


    // show the pop up
    document.getElementById('popup').classList.remove("hide");
    document.getElementById('grayFuzz').classList.remove("hide");

    // Clean up all old buttons
    var els = document.getElementsByClassName("shopifyText");
    Array.prototype.forEach.call(els, function (el) {
      if (el) {
        el.innerHTML = ""
      }
    });


    console.log(popupMeta[cardName].itemNumber);
    //document.getElementsByClassName("shopifyText")[0].id = "product-component-" + popupMeta[cardName].itemNumber;
    window.orbitShop.refresh(popupMeta[cardName].itemNumber);
  }
}

