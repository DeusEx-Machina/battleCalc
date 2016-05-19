/**
 * Created by TheTower on 5/18/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()

export class TechService {

  attackerTech = [
    {name: 'Armor', level: 0},
    {name: 'Laser', level: 0},
    {name: 'Missiles', level: 0},
    {name: 'Plasma', level: 0},
    {name: 'Shielding', level: 0},
    {name: 'Ion', level: 0},
    {name: 'Photon', level: 0},
    {name: 'Disruptor', level: 0},
    {name: 'Command Center', level: 0},
    {name: 'Tactical Commander', level: 0}
  ]

  defenderTech = [
    {name: 'Armor', level: 0},
    {name: 'Laser', level: 0},
    {name: 'Missiles', level: 0},
    {name: 'Plasma', level: 0},
    {name: 'Shielding', level: 0},
    {name: 'Ion', level: 0},
    {name: 'Photon', level: 0},
    {name: 'Disruptor', level: 0},
    {name: 'Command Center', level: 0},
    {name: 'Tactical Commander', level: 0}
  ]
}
