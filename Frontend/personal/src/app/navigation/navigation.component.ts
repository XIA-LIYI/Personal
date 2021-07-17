import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDrawerComponent, DxButtonModule, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;

  isDrawerOpen: Boolean = true;
  navigation: any[] = [
    { id: 1, text: "Inbox", icon: "message", path: "inbox" },
    { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
    { id: 3, text: "Trash", icon: "trash", path: "trash" },
    { id: 4, text: "Spam", icon: "mention", path: "spam" }
  ];

  buttonOptions: any = {
    icon: "menu",
    onClick: () => {
        this.isDrawerOpen = !this.isDrawerOpen;
    }
} 

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(e) {
    console.log(e);
  }



}
