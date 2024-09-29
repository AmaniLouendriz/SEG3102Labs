import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemEntry } from './adder/item-entry';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor() {};

  // Observable for selected elements
  selectedElement = new BehaviorSubject<ItemEntry|null>(null);
  currentSelectedElement = this.selectedElement.asObservable();

  // quand la fonction selectionChanged est appelee,le behaviorSubject est utilisee pour transmettre des objets ItemEntry
  public selectionChanged(item:ItemEntry):void {
    // multicast item
    this.selectedElement.next(item);
    //console.log('selection changed',item);
  }

}