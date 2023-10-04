import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css'],
  standalone: true,

  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ApplyloanComponent {
  constructor(private fb:FormBuilder){}
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
    Email:['', Validators.required]
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  Enquiry:FormGroup;
  ThirdFormGroup:FormGroup;

}
