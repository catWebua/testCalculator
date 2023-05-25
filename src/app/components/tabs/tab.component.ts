import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabComponent {
  @Input() title!: string;
  active = false;
}
