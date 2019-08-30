import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{Anika} from '../anika'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchInfo = new Anika("","","","","","","","");

  @Output() getName = new EventEmitter<Anika>();

  searchFor(data){
      this.getName.emit(data.value.find);
      console.log(data.value.find)
      data.reset();
  }


constructor() { }

ngOnInit() {
}

}
