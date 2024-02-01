const wizards = [
  {
    id: 1,
    name: "Harry Potter",
    house: "gryffindor",
    imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/6fjvdemYmo7kJ2V5P5Xqhc/1fc2b0b396123f891e858069e00d0d2b/hp-f6-harry-at-great-hall-table-web-fact-file-image.jpg?h=416&w=600&fit=pad"
  },
  {
    id: 2,
    name: "Draco Malfoy",
    house: "slytherin",
    imageUrl: "https://i.pinimg.com/736x/2c/f8/19/2cf8190c62b3027bed25741e5b3b8e69.jpg"
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "ravenclaw",
    imageUrl: "https://i.insider.com/636c2222951bdc00182d691e?width=1136&format=jpeg"
  },
  {
    id: 4,
    name: "Cedric Diggory",
    house: "hufflepuff",
    imageUrl: "https://i.pinimg.com/474x/4e/49/5d/4e495d36f905d5d92da2c002079465dc.jpg"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId);
  selectedDivId.innerHTML = htmlToRender;
}; 


const cardsOnDom = (wizards) =>{
let domString = "";
wizards.map (wizard => {
domString += `<div class="card" style="width: 18rem;">
<img src="${wizard.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${wizard.name}</h5>
      <h6>${wizard.house}</h6>
      <button class="btn-danger-btn" id="delete--${wizard.id}" background-color="red">Expel</button>
    </div>
  </div>`
})
renderToDom("#app", domString)
};

const filter = (type) => {
  const typeArray = [];

  wizards.map((wizards) => {
    if(wizards.house === type)
    typeArray.push(wizards)
  })
  cardsOnDom(typeArray);
};

const showAllButton = document.querySelector("#all-wizards");
const showGryffindorButton = document.querySelector("#gryffindor");
const showRavenclawButton = document.querySelector("#ravenclaw");
const showSlytherinButton = document.querySelector("#slytherin");
const showHufflepuffButton = document.querySelector("#hufflepuff");


showAllButton.addEventListener("click", (e) => {
  cardsOnDom(wizards)
});


showGryffindorButton.addEventListener("click", (e) => {
  const filterGryffindor = wizards.filter(wizard.type === "gryffindor");
 cardsOnDom(allGryffindor);
});


showRavenclawButton.addEventListener("click", (e)  => {
  const filterRavenclaw = wizards.filter(wizard.type === "ravenclaw");
 cardsOnDom(filterRavenclaw);
});


showSlytherinButton.addEventListener("click", (e) => {
const filterSlytherin = wizards.filter(wizard.type === "slytherin");
cardsOnDom(filterSlytherin);
});

showHufflepuffButton.addEventListener("click", (e) => {
const filterHufflepuff = wizards.filter(wizard.type === "hufflepuff");
cardsOnDom(filterHufflepuff);
  });



  const form = document.querySelector("#app")
  const createWizard = (e) => {
    e.preventDefault
    
      const newWizard = {
      id: wizards.length + 1,
      name: document.querySelector("name").value,
      house: document.querySelector("house").value,
    }

    wizards.push(newWizard);
    cardsOnDom(wizards);
    form.reset();
    };
    
    form.addEventListener("submit", createWizard);


  const wizard = document.querySelector("#app");

   wizard.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
   const [ , id] = e.target.id.split("--");


   const index = wizards.findIndex((e => e.id === Number(id)));

wizards.splice(index, 1);

cardsOnDom(wizards)
}
});


const startApp = () => {
cardsOnDom(wizards);
};


startApp();
