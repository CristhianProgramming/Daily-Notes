import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dragtable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragtable.component.html',
  styleUrl: './dragtable.component.scss'
})
export class DragtableComponent implements OnInit {
  ngOnInit(): void {
    this.verticalP = this.position.x;
    this.horizontalP = this.position.y ;
  }
  @Input({required:true}) id = '';
  @Input() position = { x : 0 , y : 0};
  @Input() colorTask = 'aquamarine'
  @Output() setPosition = new EventEmitter();
  @Output() deleteTask = new EventEmitter();
  
  private startX = 0
  private startY = 0
  public verticalP =  0;
  public horizontalP =  0;
  public isDragtable = false;

  onMouseDown(event: MouseEvent): void {
    this.isDragtable = true;
    this.startX = event.clientX - this.horizontalP;
    this.startY = event.clientY - this.verticalP;
    event.preventDefault(); 
  }

  onMove = (event : any) => {
    if (this.isDragtable) {
    this.verticalP = event.pageY - this.startY;
    this.horizontalP = event.pageX - this.startX;
      this.setPosition.emit({id:this.id,top:this.verticalP,left:this.horizontalP})
    }
  }

}
