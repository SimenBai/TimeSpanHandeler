import * as TimeF from "./TimeFunctions.mjs";
import {TimeSpan} from "./TimeSpan.mjs";
import {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY} from "./TimeSpan.mjs";


let RESET = "";
let RED = "";
let GREEN = "";

if (false) {
    RESET = "\x1b[0m";
    RED = "\x1b[31m";
    GREEN = "\x1b[36m";
}

export {RESET, RED, GREEN}

let period = 30 * TimeF.MINUTE;
