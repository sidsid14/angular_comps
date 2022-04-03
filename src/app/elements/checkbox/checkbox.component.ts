import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;
  petsData = [
    { value: 'Dogs', name: 'Dogs' },
    { value: 'Cat', name: 'Cat' },
    { value: 'Reptiles', name: 'Reptiles' },
    { value: 'Other', name: 'Other' },
    { value: 'None', name: 'None' },
  ];

  get petsFormArray() {
    return this.form.controls['pets'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      pets: new FormArray([]),
    });
    this.addCheckboxes();
  }

  addCheckboxes() {
    this.petsData.forEach(() => {
      this.petsFormArray.push(new FormControl(false));
    });
  }

  ngOnInit(): void {}

  submit() {
    const selectedPets = this.form.value.pets
      .map((checked: any, i: any) => (checked ? this.petsData[i].value : null))
      .filter((v: any) => v !== null);

    console.log(selectedPets);
  }
}
