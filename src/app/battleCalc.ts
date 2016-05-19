import {Component} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';



import {Attacker} from "./components/attacker"
import {Defender} from "./components/defender"

import {Results} from "./components/results"


//main calc container
@Component({
  selector: 'battle-calc',
  directives: [Attacker, Defender, Results],
  template:`

<h1>Astro Empires Battle Calculator</h1>
<div class="row">
  <div class="col-lg-6">
    <attacker></attacker>
  </div>
  <div class="lg-6">
    <defender></defender>
  
  </div>
</div>

<div class="row">
    <result></result>

</div>`
})

export class BattleCalc{}

