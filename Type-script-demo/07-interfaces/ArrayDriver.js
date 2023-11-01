"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseBallCoach_1 = require("./BaseBallCoach");
var CrickitCoach_1 = require("./CrickitCoach");
var cricketCoach = new CrickitCoach_1.CrickitCoach();
var baseBallCoach = new BaseBallCoach_1.BaseBallCoach();
var coachs = [];
coachs.push(cricketCoach);
coachs.push(baseBallCoach);
for (var _i = 0, coachs_1 = coachs; _i < coachs_1.length; _i++) {
    var coach = coachs_1[_i];
    console.log(coach.getDailyWorkOut());
}
