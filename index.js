const menu = [
  {
    name: "Пункт 1",
    submenu: [
      { name: "Пункт 1.1" },
      { name: "Пункт 1.2" },
      {
        name: "Пункт 1.3",
        submenu: [{ name: "Пункт 1.3.1" }, { name: "Пункт 1.3.2" }],
      },
    ],
  },
  {
    name: "Пункт 2",
  },
  {
    name: "Пункт 3",
    submenu: [
      { name: "Пункт 3.1" },
      { name: "Пункт 3.2" },
      { name: "Пункт 3.3" },
      { name: "Пункт 3.4" },
    ],
  },
];

const divWrapper = document.createElement("div");
divWrapper.className = "wrapper";
document.body.append(divWrapper);

menu.forEach((item, index) => {
  const firstFloor = document.createElement("div")
  firstFloor.className = "styleFirstFloor"
  firstFloor.textContent = `${item.name}`
  divWrapper.append(firstFloor)
  
  if (item.submenu) {
    let submenu = item.submenu
    submenu.forEach((item) => {
      const secondFloor = document.createElement("div")
      secondFloor.className = "styleSecondFloor"
      secondFloor.textContent = `${item.name}`
      firstFloor.addEventListener("mouseenter", (event) => {
        firstFloor.append(secondFloor);
      });
      firstFloor.addEventListener("mouseleave", (event) => {
        secondFloor.remove();
      });
        if (item.submenu){
          item.submenu.forEach((item) =>{
            const thirdFloor = document.createElement("div")
            thirdFloor.className = "styleThirdFloor"
            thirdFloor.textContent = `${item.name}`
            secondFloor.addEventListener("mouseenter", (event) =>{
              secondFloor.append(thirdFloor);
            });
            secondFloor.addEventListener("mouseleave", (event) => {
              thirdFloor.remove()
            })
          })
        }
    })
  }
});

console.log(divWrapper);
