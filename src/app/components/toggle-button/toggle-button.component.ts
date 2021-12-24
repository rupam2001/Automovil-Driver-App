import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  @Input() title: string;
  @Input() isChecked: boolean = false;

  @Output() onToggleEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onClick(checked: boolean) {
    this.onToggleEvent.emit();
    setTimeout(() => {
      this.isChecked = false;
    }, 2000);
    // alert(checked);
  }
}
