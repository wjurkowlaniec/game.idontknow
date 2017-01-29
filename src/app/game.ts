export class GameBase {
  g = {
    members: {
      meta:{
        maxMembers: <number>5,
        nextLevelXP: <number>1.5,
        nextLevelRate: <number>1.2,

        // priceNewMember: <number>1000,
        memberPriceIncrease: <number>10, // *
        priceNewMember: <number>1,
        XPPerSec: <number>0.5,
        updatePriceIncrease: <number> 10, // *
      },
      ppl: [ {
        id: 0,
        name: <string>"John",
        level: <number>1,
        XP: <number>0,
        nextXP: <number> 10,
        totalXP: <number> 0,
        moneyRate: <number> 1,
        updateCost: <number>10,
       }
      ]
    },
    status: {
      moneyRate: <number>0,
      totalMoney: <number>0
    }
  };

}
