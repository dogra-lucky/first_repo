import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CouterComponent {
  count= 0
  addReduceCount(data:string){
    data==="add"?this.count++:this.count--;

  }

}
