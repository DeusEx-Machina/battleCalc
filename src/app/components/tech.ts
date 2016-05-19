/**
 * Created by TheTower on 5/18/2016.
 */
import {Component} from "@angular/core";
import {TechService} from "../services/techService";

@Component({
  selector: 'technology',
  providers: [TechService],
  template: `
<div class="panel panel-primary">
  <div class="panel-heading ">
    Tech
  </div>

  <div class="panel-body">
    <div class="col-sm-4">
        <h5>Tech</h5>
    </div>
    <div class="col-sm-6">
        <h5>Level</h5>
    </div>
    <div class="col-sm-2">
        <h5>Modifier</h5>
    </div>
    <div class="row" *ngFor="#tech of techService.attackerTech">
      <div class="col-sm-4">
        <label for="" class="control-label">{{tech.name}}</label>
      </div>
      <div class="col-sm-5">
        <input type="number" id="" class="form-control tech-input"
                       ng-model=""/>
        </div>
      <div class="col-sm-3">
          <h6 class="align-right">{{ calcModifier(tech.level) | percent }}</h6>
      </div>           
    </div>
  </div>
</div>
`
})

export class Technology {
  constructor(public techService:TechService) {

  }

  calcModifier(level:number):number {
    return level * 1.05;
  }
}
