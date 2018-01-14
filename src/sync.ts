import { Character } from "./models/character.model";
import { Class } from "./models/class.model";
import { Inventory } from "./models/inventory.model";
import { Item } from "./models/item.model";
import { Race } from "./models/race.model";
import { Job } from "./models/jobs.model";

Character.sync()
Class.sync()
Inventory.sync()
Item.sync()
Race.sync()
Job.sync()