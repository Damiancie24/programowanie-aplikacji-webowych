import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First-Program damiana';


  todoValue: string;
  list: Todo[];

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void{
    this.list = [];
    this.todoValue = '';
  }

  addItem(): void{
    if (this.todoValue !== ''){
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }
  deleteItem(id: number): void{
    this.list = this.list.filter(item => item.id !== id);
  }

}
