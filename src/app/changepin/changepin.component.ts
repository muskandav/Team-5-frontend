import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
export class ChangepinComponent implements OnInit {

  

  constructor(
    public frmGroup: FormGroup,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createPinForm();
  }
  createPinForm() {
    this.frmGroup = this.fb.group({
      frmOldPin: new FormControl(''),
      frmNewPin: new FormControl(''),
      frmNewPinConfirm: new FormControl(''),
    })
  }

  OnSubmit(): void {
    const oldPin = this.frmGroup.get('frmOldPin')?.value;
    const newPin = this.frmGroup.get('frmNewPin')?.value;
    const newPinConfirm = this.frmGroup.get('frmNewPinConfirm')?.value;
  }
  

}
