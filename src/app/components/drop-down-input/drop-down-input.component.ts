import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-input',
  templateUrl: './drop-down-input.component.html',
  styleUrls: ['./drop-down-input.component.scss'],
})
export class DropDownInputComponent implements OnInit {
  @Input() label: string;
  @Input() options: string[] = [];
  @Input() selectedOption: string = 'hello';
  constructor() {}

  ngOnInit() {}

  onChange(event) {
    this.selectedOption = event.target.value;
  }
}
