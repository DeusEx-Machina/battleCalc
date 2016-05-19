/**
 * Created by TheTower on 5/18/2016.
 */
import {Component} from "@angular/core";

@Component({
  selector:'result',
  template:`
<div class="panel panel-primary" style="text-align: center; background-color: inherit">
            <div class="panel-heading">
                <h2>Battle Report</h2>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-4">
                        <p>{{results.attackerLosses}}</p>
                    </div>
                    <div class="col-xs-4">
                        <p>Total Cost of units Destroyed</p>
                    </div>
                    <div class="col-xs-4">
                        <p>{{results.defenderLosses}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <p>{{results.attackerXP}}</p>
                    </div>
                    <div class="col-xs-4">
                        <p>Estimated Experience</p>
                    </div>
                    <div class="col-xs-4">
                        <p>{{results.defenderXP}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4"></div>
                    <div class="col-xs-4">
                        <p>Estimated Debris</p>
                    </div>
                    <div class="col-xs-4"></div>
                </div>
                <div class="row">
                    <div class="col-xs-4"></div>
                    <div class="col-xs-4">
                        <p>Profit</p>
                    </div>
                    <div class="col-xs-4"></div>
                </div>

            </div>
        </div>
`


})
export class Results{}
