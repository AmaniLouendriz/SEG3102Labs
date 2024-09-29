import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ItemEntry } from '../adder/item-entry';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-main-list',
  standalone: true,
  imports: [NgIf,NgFor,ListElementComponent,NgClass],
  //providers: [NotificationService],
  templateUrl: './main-list.component.html',
  styleUrl: './main-list.component.css'
})

export class MainListComponent implements OnInit,OnDestroy {
  constructor() {}
  items:ItemEntry[] = [];

  subscription:Subscription | undefined;
  notificationService = inject(NotificationService);

  // ngOnInit is called after initialization of component props
  ngOnInit(): void {
      this.subscription = this.notificationService.currentSelectedElement.subscribe((newItem) => {
        //console.log("in main list component class subscription : ",newItem);
        if (newItem) {
          this.items = [newItem, ...this.items];
        }
      });

      // console.log("the items in main list are: ",this.items);
  }

  debug():void {
    console.log("the items are: ",this.items);
  }
  
  deleteElementFromArray(item:ItemEntry) {
    //console.log("I am in the parent");
    this.items = this.items.filter((element)=>element.id != item.id);
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}
