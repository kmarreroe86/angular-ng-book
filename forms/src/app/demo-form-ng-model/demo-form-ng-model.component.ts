import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})
export class DemoFormNgModelComponent implements OnInit {

  myForm2: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm2 = fb.group({
      'productName': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: FormGroup): void {
    console.log('you submitted value: ', value);
  }

}
