import { Component, DoCheck, OnInit } from '@angular/core';
import { DragtableComponent } from "../dragtable/dragtable.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [DragtableComponent, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements DoCheck, OnInit {
  task_ispector = 0;
  task: any[] = []
  name = new FormControl('')
  colorP = new FormControl('')

  ngOnInit(): void {
    const taskImport = localStorage.getItem('task');
    if (taskImport) {
      this.task = JSON.parse(taskImport)
    }
  }

  ngDoCheck(): void {
    if (this.task.length !== this.task_ispector) {
      localStorage.setItem('task', JSON.stringify(this.task))
      this.task_ispector = this.task.length;
    }
  }

  addTask = (evento: any) => {
    evento.preventDefault()
    if (this.name.value) {
      this.task.push({ id: window.crypto.randomUUID(), text: this.name.value, position: { x: 300, y: 100 }, color: this.colorP.value || 'aquamarine' })
    }
    this.colorP.reset()
    this.name.reset()
  }

  deleteTask = (event: any) => {
    this.task = this.task.filter((v: any) => {
      return v.id !== event.id
    })
  }

  setPosition(evnto: any) {
    this.task.find((v: any) => {
      return v.id === evnto.id
    }).position = { x: evnto.top, y: evnto.left }
    localStorage.setItem('task', JSON.stringify(this.task))
  }
}
