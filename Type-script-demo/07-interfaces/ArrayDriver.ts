import { BaseBallCoach } from "./BaseBallCoach";
import { Coach } from "./Coach";
import { CrickitCoach } from "./CrickitCoach";

let cricketCoach = new CrickitCoach();
let baseBallCoach = new BaseBallCoach();

let coachs: Coach[] = [];
coachs.push(cricketCoach);
coachs.push(baseBallCoach);

for (let coach of coachs) {
    console.log(coach.getDailyWorkOut());
}