/**
 * Created by TheTower on 5/18/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()

export class FleetService {

  attackerFleet = [
{
  name: 'Fighter',
  key:'fighter',
  size: 5,
  x: 1,
  armor: 2,
  power: 2,
  shield: 0,
  startAmnt:0,
  endAmnt:0

},
 {
   name: 'Bomber',
    size: 10,
    x: 2,
    power: 4,
    armor: 2,
    shield: 0,
   startAmnt:0,
   endAmnt:0
},
{
  name: 'Heavy Bomber',
    size: 30,
    x: 3,
    power: 10,
    armor: 4,
    shield: 0,
  startAmnt:0,
  endAmnt:0
},
{
  name: 'Ion Bomber',
    size: 60,
    x: 5,
    power: 12,
    armor: 4,
    shield: 1,
  startAmnt:0,
  endAmnt:0
},
{
  name: 'Corvette',
    size: 20,
    x: 1,
    power: 4,
    armor: 4,
    shield: 0,
  startAmnt:0,
  endAmnt:0
},
{
  name: 'Recycler',
    size: 30,
    x: 1,
    power: 2,
    armor: 2,
    shield: 0,
  startAmnt:0,
  endAmnt:0
},
{
  name: 'Destroyer',
    size: 40,
    x: 3,
    power: 8,
    armor: 8,
    shield: 0,
  startAmnt:0,
  endAmnt:0
}
,
{
  name: 'Frigate',
    size: 80,
    x: 2,
    power: 12,
    armor: 12,
    shield: 0,
  startAmnt:0,
  endAmnt:0
}
,
 {
  name: 'Ion Frigate',
    size: 120,
    x: 5,
    power: 14,
    armor: 12,
    shield: 1,
   startAmnt:0,
   endAmnt:0
},
{
  name: 'Scout Ship',
    size: 40,
    x: 1,
    power: 1,
    armor: 2,
    shield: 0,
  startAmnt:0,
  endAmnt:0
}
,
 {
  name: 'Outpost Ship',
    size: 100,
    x: 1,
    power: 2,
    armor: 4,
    shield: 0,
   startAmnt:0,
   endAmnt:0
}
,
{
  name: 'Cruiser',
    size: 200,
    x: 3,
    power: 24,
    armor: 24,
    shield: 2,
  startAmnt:0,
  endAmnt:0
}
,
 {
  name: 'Carrier',
    size: 400,
    x: 2,
    power: 12,
    armor: 24,
    shield: 2,
   startAmnt:0,
   endAmnt:0
}
,
 {
  name: 'Heavy Cruiser',
    size: 500,
    x: 3,
    power: 48,
    armor: 48,
    shield: 4,
   startAmnt:0,
   endAmnt:0
}
,
{
  name: 'Battleship',
    size: 2000,
    x: 5,
    power: 168,
    armor: 128,
    shield: 10,
  startAmnt:0,
  endAmnt:0
}
,
{
  name: 'Fleet Carrier',
    size: 2500,
    x: 5,
    power: 64,
    armor: 96,
    shield: 8,
  startAmnt:0,
  endAmnt:0
},
{
  name: 'Dreadnought',
    size: 10000,
    x: 6,
    power: 756,
    armor: 512,
    shield: 20,
  startAmnt:0,
  endAmnt:0
}
,
{
  name: 'Titan',
    size: 50000,
    x: 7,
    power: 3402,
    armor: 2048,
    shield: 30,
  startAmnt:0,
  endAmnt:0
}
,
{
  name: 'Leviathan',
    size: 200000,
    x: 6,
    power: 10000,
    armor: 6600,
    shield: 40,
  startAmnt:0,
  endAmnt:0
}
,
{
  name: 'Death Star',
    size: 500000,
    x: 7,
    power: 25500,
    armor: 13500,
    shield: 60,
    startAmnt:0,
    endAmnt:0
}
  ]

  defenderFleet=  [
    {
      name: 'Fighter',
      key:'fighter',
      size: 5,
      x: 1,
      armor: 2,
      power: 2,
      shield: 0,
      startAmnt:0,
      endAmnt:0

    },
    {
      name: 'Bomber',
      size: 10,
      x: 2,
      power: 4,
      armor: 2,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Heavy Bomber',
      size: 30,
      x: 3,
      power: 10,
      armor: 4,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Ion Bomber',
      size: 60,
      x: 5,
      power: 12,
      armor: 4,
      shield: 1,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Corvette',
      size: 20,
      x: 1,
      power: 4,
      armor: 4,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Recycler',
      size: 30,
      x: 1,
      power: 2,
      armor: 2,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Destroyer',
      size: 40,
      x: 3,
      power: 8,
      armor: 8,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Frigate',
      size: 80,
      x: 2,
      power: 12,
      armor: 12,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Ion Frigate',
      size: 120,
      x: 5,
      power: 14,
      armor: 12,
      shield: 1,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Scout Ship',
      size: 40,
      x: 1,
      power: 1,
      armor: 2,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Outpost Ship',
      size: 100,
      x: 1,
      power: 2,
      armor: 4,
      shield: 0,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Cruiser',
      size: 200,
      x: 3,
      power: 24,
      armor: 24,
      shield: 2,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Carrier',
      size: 400,
      x: 2,
      power: 12,
      armor: 24,
      shield: 2,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Heavy Cruiser',
      size: 500,
      x: 3,
      power: 48,
      armor: 48,
      shield: 4,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Battleship',
      size: 2000,
      x: 5,
      power: 168,
      armor: 128,
      shield: 10,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Fleet Carrier',
      size: 2500,
      x: 5,
      power: 64,
      armor: 96,
      shield: 8,
      startAmnt:0,
      endAmnt:0
    },
    {
      name: 'Dreadnought',
      size: 10000,
      x: 6,
      power: 756,
      armor: 512,
      shield: 20,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Titan',
      size: 50000,
      x: 7,
      power: 3402,
      armor: 2048,
      shield: 30,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Leviathan',
      size: 200000,
      x: 6,
      power: 10000,
      armor: 6600,
      shield: 40,
      startAmnt:0,
      endAmnt:0
    }
      ,
    {
      name: 'Death Star',
      size: 500000,
      x: 7,
      power: 25500,
      armor: 13500,
      shield: 60,
      startAmnt:0,
      endAmnt:0
    }
  ]
}
