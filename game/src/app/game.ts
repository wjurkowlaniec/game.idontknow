var data = <any>{
  members: <any>{
    meta:{
      numMembers: <number>1,
      maxMembers: <number>5,
      nextXP: <number>1.5
    },
    ppl: [ {name: <string>"John",
      level: <number>1,
      xp: <number>0,
      nextXP: <number> 10,
      moneyRate: <number> 1
     }
    ]
  },
  status: {
    moneyRate: <number>0,
    totalMoney: <number>0
  }
}

// import {updateGameState} from "./presentation"

 function updateGameState(data: any){
  var moneyRate = <HTMLInputElement>document.getElementById("moneyRate");
  moneyRate.textContent=data.status.moneyRate;

   var totalMoney = <HTMLInputElement>document.getElementById("totalMoney");
   totalMoney.textContent=data.status.totalMoney + "$";
}

function updateData(){
  var sum = 0;
  for (let member of data.members.ppl){
      sum += member.moneyRate;
  }
  data.status.moneyRate = sum;
  data.status.totalMoney +=sum;
}

function gameLoop(){
  setInterval(function(){
    updateData();
    updateGameState(data);
  }, 1000);
}
gameLoop();
