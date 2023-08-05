import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-kkc01-p01',
  templateUrl: './kkc01-p01.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class Kkc01P01Component implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  constructor() { }

  ngOnInit() {
    this.getdate()
  }

    //   Function แสดงวันที่
    newdate = new Date()
    day: any
    month: any
    year: any
    getdate() {
      let date = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "ม.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
      this.day = this.newdate.getDate()
      this.month = date[this.newdate.getMonth()]
      this.year = this.newdate.getFullYear() + 543
    }

}
