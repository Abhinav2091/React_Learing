import { Coach } from "./Coach";

export class BaseBallCoach implements Coach {
    getDailyWorkOut(): string {
        return "This is you base ball Coach hit enough balls for home run";
    }

}