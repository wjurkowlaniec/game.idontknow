import { Component } from '@angular/core';
import {GameBase } from './game';
@Component({
  moduleId: module.id,
  selector: 'game-app',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameAppComponent extends GameBase {

 gameLoop() {
   console.log("update data");
   var sum = 0;
   for (let member of this.g.members.ppl){
       sum += member.moneyRate;
       if (member.XP < member.nextXP) {
       member.XP += this.g.members.meta.XPPerSec  ;
     }
   }
   this.g.status.moneyRate = sum;
   this.g.status.totalMoney +=sum;


 };

 ngOnInit(){
   setInterval(() => { this.gameLoop(); }, 1000);
 }

 public updateMember(id){
   let member = this.g.members.ppl[id];
   if (member.nextXP <= member.XP) {
     member.nextXP *= this.g.members.meta.nextLevelXP;
     member.totalXP = member.XP;
     member.XP = 0;
     member.moneyRate *= this.g.members.meta.nextLevelRate;
     member.level +=1;
     member.updateCost *= this.g.members.meta.updatePriceIncrease;
   }
 }

 public trainMember(id) {
   let member = this.g.members.ppl[id];
   if ( member.XP < member.nextXP ) {
      member.XP +=1;
    }


}
 public hireNewMember() {
   if (this.g.members.ppl.length < this.g.members.meta.maxMembers)
    this.g.members.ppl[this.g.members.ppl.length] = {
      id: this.g.members.ppl.length,
      name: <string>"Mark " + this.g.members.ppl.length,
      level: <number>1,
      XP: <number>0,
      nextXP: <number> 10,
      totalXP: <number> 0,
      moneyRate: <number> 1,
      updateCost: <number>10
     }
     this.g.members.meta.priceNewMember *= this.g.members.meta.memberPriceIncrease;

 }


 public localStorage_consoleInfo() {
     //if (fShowMaximumSize === void 0) { fShowMaximumSize = false; }
     var fShowMaximumSize = false;
     var amount = 0;
     var size = 0;
     for (var i = 0; i < localStorage.length; ++i) {
         var key = localStorage.key(i)
         var value = localStorage.getItem(key);
         console.log(amount, key, value);
         size += key.length + value.length;
         amount++;
     }
     console.log("Total entries:", amount);
     console.log("Total size:", size);
    //  if (fShowMaximumSize === true) {
    //      var maxSize = localStorage_getMaximumSize();
    //      console.log("Total size:", maxSize);
    //  }
 }
 public saveGame() {
   localStorage['save']=JSON.stringify(this.g);
 }
 public loadGame() {
   if ( localStorage['save'] &&  localStorage['save'] != "undefined" &&  localStorage['save'] != "null") {
            this.g = JSON.parse( localStorage['save']);
        }
 }

}
