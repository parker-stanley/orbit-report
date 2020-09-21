import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  types: string[];

  constructor() {
    this.types = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
   }

  ngOnInit() {
  }

  count(satelliteType:string){
    let count = 0;
    if (satelliteType.toLowerCase() == 'total'){
      count = this.satellites.length;
      return count;
    } else {
      for (let i = 0; i < this.satellites.length; i++){
          if(this.satellites[i].type.toLowerCase() === satelliteType.toLowerCase()){
            count++ ; 
          }
      }
    }
    return count;
}

}
