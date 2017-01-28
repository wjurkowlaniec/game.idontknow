import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'game-app',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameAppComponent {
  title = 'game works!';
  totalMoney = 10;
  moneyRate = 1;


  data = {
    members: {
      meta:{
        maxMembers: <number>5,
        nextLevelXP: <number>1.5,
        nextLevelRate: <number>1.2,

        // baseNewMemberPrice: <number>1000,
        memberPriceIncrease: <number>10,
        priceNewMember: <number>1,

      },
      ppl: [ {
        id: 0,
        name: <string>"John",
        level: <number>1,
        XP: <number>0,
        nextXP: <number> 10,
        totalXP: <number> 0,
        moneyRate: <number> 1
       }
      ]
    },
    status: {
      moneyRate: <number>0,
      totalMoney: <number>0
    }
  };


 updateData() {
   console.log("update data");
   var sum = 0;
   for (let member of this.data.members.ppl){
       sum += member.moneyRate;
   }
   this.data.status.moneyRate = sum;
   this.data.status.totalMoney +=sum;
 };

 ngOnInit(){
   setInterval(() => { this.updateData(); }, 1000);
 }

 public trainMember(id) {
   let member = this.data.members.ppl[id];
   member.XP +=1;
   if (member.nextXP < member.XP) {
     member.nextXP *= this.data.members.meta.nextLevelXP;
     member.totalXP = member.XP;
     member.XP = 0;
     member.moneyRate *= this.data.members.meta.nextLevelRate;
     member.level +=1;
   }
}
 public hireNewMember() {
   if (this.data.members.ppl.length < this.data.members.meta.maxMembers)
    this.data.members.ppl[this.data.members.ppl.length] = {
      id: this.data.members.ppl.length,
      name: <string>"Mark " + this.data.members.ppl.length,
      level: <number>1,
      XP: <number>0,
      nextXP: <number> 10,
      totalXP: <number> 0,
      moneyRate: <number> 1
     }
     this.data.members.meta.priceNewMember *= this.data.members.meta.memberPriceIncrease;

 }



}
