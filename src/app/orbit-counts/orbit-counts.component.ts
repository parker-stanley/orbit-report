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
    satelliteType.toLowerCase();
    if (satelliteType == 'total'){
      count = this.satellites.length;
      return count;
    } else {
      for (let i = 0; i < this.satellites.length; i++){
        console.log(this.satellites.length)
        this.satellites[i].type.toLowerCase();
        satelliteType.toLowerCase();
          if(this.satellites[i].type === satelliteType){
            count++ ; 
          }
      }
    }
    return count;
}

}
