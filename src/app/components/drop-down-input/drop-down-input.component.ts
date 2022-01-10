import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down-input',
  templateUrl: './drop-down-input.component.html',
  styleUrls: ['./drop-down-input.component.scss'],
})
export class DropDownInputComponent implements OnInit {
  @Input() label: string;
  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange(option) {
    // alert(option);
    this.onSelect.emit(option);
  }
}
