import { Component, Output, EventEmitter } from '@angular/core';
import { Award } from 'src/app/awards/award';
import { NgForm } from '@angular/forms';

@Component ({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css']
})
export class AwardCreateComponent {
  enteredTitle = '';
  enteredDate = new Date();
  enteredDescription = '';

  @Output() awardCreated = new EventEmitter<Award>();

  onAddAward(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const award: Award = {
      title: form.value.title,
      date: form.value.date,
      description: form.value.description
    };
    this.awardCreated.emit(award);
  }
}
