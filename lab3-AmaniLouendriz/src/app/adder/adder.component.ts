import { Component, inject } from '@angular/core';
import { ItemEntry } from './item-entry';
import {FormsModule} from '@angular/forms'
import { NotificationService } from '../notification.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-adder',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './adder.component.html',
  styleUrl: './adder.component.css'
})
export class AdderComponent {
  item:ItemEntry = new ItemEntry(1,''); // id and name of the item
  validationMessage: string = '';
  regex: RegExp = /([a-z]|[A-Z]|[0-9])+/
  notificationService: NotificationService = inject(NotificationService); // 1 instance of the notification service

  select(item:ItemEntry):void {
    //console.log("new item in select in adder: ",item);
    this.notificationService.selectionChanged(item);// notify the service that a new entry was added
  }

  // add button in the html calls this function
  addElement():void {
    const newItem = new ItemEntry(this.item.id++,this.item.name);
    this.validationMessage = '';
    if (this.item.name.length >=2 && this.regex.test(this.item.name)) {
      //console.log('new item is: ',this.name);
      // then notify that a new item was added
      this.select(newItem);
      // reset the input to null
      this.item.name = '';
    } else if (this.item.name.length <2) {
      this.validationMessage = 'The item should be at least two characters long';
    } else if (!this.regex.test(this.item.name)) {
      this.validationMessage= 'The item shouldnt contain special characters, operators or spaces';
    }
  }
}
