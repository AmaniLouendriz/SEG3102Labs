import { Component, inject, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { ItemEntry } from '../../adder/item-entry';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../notification.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-element',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './list-element.component.html',
  styleUrl: './list-element.component.css'
})
export class ListElementComponent {
  @Input() 
  item:ItemEntry = new ItemEntry(1,'');
  @Output() fireDelete: EventEmitter<ItemEntry> = new EventEmitter();
  
  subscription: Subscription | undefined;
  notificationService= inject(NotificationService);
  modifyEnabled: boolean = false;
  regex: RegExp = /([a-z]|[A-Z]|[0-9])+/

  validationMessage: string = '';

  getName(): string {
    return `${this.item!.name}`;
  }

  modify():void {
    this.modifyEnabled = true;
  }

  save():void {
    this.validationMessage = '';
    if (this.item.name.length <2) {
      this.validationMessage = 'The item should be at least two characters long';
    } else if (!this.regex.test(this.item.name)) {
      this.validationMessage= 'The item shouldnt contain special characters, operators or spaces';
    } else {
      this.modifyEnabled = false;
    }
  }

  delete():void {
    //console.log("I am delete being clicked");
    //console.log("before deleting ",this.item);
    this.fireDelete.emit(this.item);
  }

}
