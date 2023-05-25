import {Component, OnInit, Type} from '@angular/core';
import {CalculatorComponent} from "../calculator/calculator.component";

interface Tab {
  title: string;
  content: any;
  active: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [];
  activeTab: Tab | undefined;

  ngOnInit() {
    this.tabs = [
      { title: 'Lorem1', content: CalculatorComponent, active: true },
      { title: 'Lorem2', content: 'Lorem2', active: false },
      { title: 'Lorem3', content: 'Lorem3', active: false },
      { title: 'Lorem4', content: 'Lorem4', active: false }
    ];

    this.activeTab = this.tabs.find(tab => tab.active);
  }

  selectTab(tab: Tab) {
    this.tabs.forEach(tab => (tab.active = false));
    tab.active = true;
    this.activeTab = tab;
  }

  isComponent(content: any): boolean {
    return content instanceof Type;
  }
}
