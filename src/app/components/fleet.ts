/**
 * Created by TheTower on 5/18/2016.
 */
import {Component} from "@angular/core";
import {FleetService} from "../services/fleetService";

@Component({
  selector:'fleet',
  providers: [FleetService],
  template:`
<div class="panel panel-primary">
  <div class="panel-heading ">
  Fleet
  </div>

  <div class="panel-body">
    <div class="row">
      <div class="col-sm-3">
          <h5>Unit</h5>
      </div>
      <div class="col-sm-2">
          <h5>Quantity</h5>
      </div>
      <div class="col-sm-4">
          <h5>
              Power / Armor / Shield
          </h5>
      </div>
      <div class="col-sm-2">
          <h5>Remaining</h5>
      </div>
  </div>
  <div class="row" *ngFor="#fleet of fleetService.attackerFleet">
    <div class="col-sm-3">
        <h5>{{fleet.name}}</h5>
    </div>
    <div class="col-sm-2">
        <input type="number" value="{{fleet.startAmnt}}">
    </div>
    <div class="col-sm-4">
        <h5>
            {{fleet.power}} / {{fleet.armor}} / {{fleet.shield}}
        </h5>
    </div>
    <div class="col-sm-2">
        <h5>{{fleet.endAmnt}}</h5>
    </div>
  </div>
</div>
</div>
`
})

export class Fleet{
  constructor(public fleetService:FleetService){

  }
}
