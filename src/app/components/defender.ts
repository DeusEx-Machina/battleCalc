/**
 * Created by TheTower on 5/18/2016.
 */
import {Component} from "@angular/core";
import {Technology} from "./tech"
import {Fleet} from "./fleet"


@Component({
  selector:'defender',
  directives: [Technology, Fleet],
  template:`

<div class="col-lg-6">
<h2>Defender</h2>
<div class="row">
 <div class="col-lg-12">
    <technology></technology>
  </div>
</div>
<div class="row">
  <div class="col-lg-12">
    <fleet></fleet>
  </div>
</div>
</div>`
})

export class Defender{}
