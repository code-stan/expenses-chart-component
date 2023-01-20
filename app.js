const jsonData = `[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]`
const parseData = JSON.parse(jsonData);
const barHeight = document.querySelectorAll(".et-bar");
const barHeightArray = [15, 13.5, 12, 10, 9, 7, 6, 5, 4];
const amount = document.querySelectorAll(".bar-status");
for(let i = 0; i < barHeight.length; i++){
    if(parseData[i].amount >= 75){
        barHeight[i].style.height = `${barHeightArray[0]}rem`;
    }
    else if(parseData[i].amount >= 65 && parseData[i].amount < 75 ){
        barHeight[i].style.height = `${barHeightArray[1]}rem`;

    }
    else if(parseData[i].amount >= 50 && parseData[i].amount < 65 ){
        barHeight[i].style.height = ` ${barHeightArray[2]}rem`;
        
    }
    else if(parseData[i].amount >= 45 && parseData[i].amount < 50 ){
        barHeight[i].style.height = ` ${barHeightArray[3]}rem`;
        
    }
    else if(parseData[i].amount >= 40 && parseData[i].amount < 45 ){
        barHeight[i].style.height = ` ${barHeightArray[4]}rem`;
        
    }
    else if(parseData[i].amount >= 35 && parseData[i].amount < 40 ){
        barHeight[i].style.height = ` ${barHeightArray[5]}rem`;
        
    }
    else if(parseData[i].amount >= 30 && parseData[i].amount < 35 ){
        barHeight[i].style.height = ` ${barHeightArray[6]}rem`;
        
    }
    else if(parseData[i].amount >= 25 && parseData[i].amount < 35 ){
        barHeight[i].style.height = ` ${barHeightArray[7]}rem`;
    }
    else{
        barHeight[i].style.height = `${barHeightArray[8]}rem`;
    }

}

// SHOW VALUE FOR HOVER DEVICES

for(let i = 0; i < barHeight.length; i++){
  let parseAmount = `$${parseData[i].amount}`;
  barHeight[i].addEventListener("mouseover", ()=>{
    amount[i].innerText = parseAmount;
    amount[i].classList.add("bar-stat-active");
    
  })
  barHeight[i].addEventListener("mouseout", () =>{
    amount[i].classList.remove("bar-stat-active")
  })
}

// SHOW VALUE FOR NON HOVER DEVICES

for (let i = 0; i < barHeight.length; i++) {
  let parseAmount = `$${parseData[i].amount}`;
  barHeight[i].addEventListener("click", () => {
    amount[i].innerText = parseAmount;
    amount[i].classList.toggle("bar-stat-active");

  })
}

// GETTING THE HIGHEST AMOUNT VALUE FROM THE JSON FILE
function highestBar(){
  let amounts = [];
  for (let i = 0; i < parseData.length; i++) {
    amounts.push(parseData[i].amount);
  }

  return Math.max(...amounts);
}

// GENERATING A DIFFERENT COLOR BAR FOR THE HIGHEST EXPENSE AMOUNT
for (let i = 0; i < parseData.length; i++) {
  let parseAmount = parseData[i].amount
  if(parseAmount === highestBar() ){
    barHeight[i].style.backgroundColor = "hsl(186, 34%, 60%)";
    break;
  }
}