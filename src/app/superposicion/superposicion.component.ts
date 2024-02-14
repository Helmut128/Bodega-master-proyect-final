import { Component  } from '@angular/core';

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-superposicion',
  standalone: true,
  imports: [],
  templateUrl: './superposicion.component.html',
  styleUrl: './superposicion.component.css'
})
export class SuperposicionComponent  {

  private droppables: ElementRef[] = [];
  private lastDragged: ElementRef | null = null;
  private overlapThreshold: string = '0%';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('drag', ['$event'])
  onDrag(event: any) {
    this.lastDragged = event.target;
    this.droppables.forEach((droppable) => {
      if (this.hitTest(droppable, this.overlapThreshold)) {
        this.renderer.addClass(droppable.nativeElement, 'highlight');
      } else {
        this.renderer.removeClass(droppable.nativeElement, 'highlight');
      }
    });
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: any) {
    this.droppables.forEach((droppable) => {
      if (this.hitTest(droppable, this.overlapThreshold)) {
        this.test();
      }
    });
  }

  test() {
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;

    this.droppables.forEach((droppable) => {
      const rect = droppable.nativeElement.getBoundingClientRect();
      minX = Math.min(minX, rect.left);
      minY = Math.min(minY, rect.top);
      maxX = Math.max(maxX, rect.right);
      maxY = Math.max(maxY, rect.bottom);
    });

    const lastDraggedRect = this.lastDragged!.nativeElement.getBoundingClientRect();

    const leftDiff = lastDraggedRect.left - minX;
    const rightDiff = maxX - lastDraggedRect.right;
    const topDiff = lastDraggedRect.top - minY;
    const bottomDiff = maxY - lastDraggedRect.bottom;

    let moveX = 0;
    let moveY = 0;

    if (leftDiff < rightDiff && leftDiff < Math.abs(topDiff) && leftDiff < Math.abs(bottomDiff)) {
      moveX = leftDiff;
    } else if (rightDiff < leftDiff && rightDiff < Math.abs(topDiff) && rightDiff < Math.abs(bottomDiff)) {
      moveX = -rightDiff;
    } else if (topDiff < bottomDiff && topDiff < Math.abs(leftDiff) && topDiff < Math.abs(rightDiff)) {
      moveY = topDiff;
    } else {
      moveY = -bottomDiff;
    }

    if (moveX !== 0 || moveY !== 0) {
      this.renderer.setStyle(this.lastDragged!.nativeElement, 'transform', `translate(${moveX}px, ${moveY}px)`);
    }
  }

  ngOnInit() {
    const draggableElements = this.el.nativeElement.querySelectorAll('.droppable');
    if (draggableElements.length > 0) {
      this.lastDragged = new ElementRef(draggableElements[0]); // Assign to first draggable element
    }
  }

  onDragStart(event: DragEvent) {
    this.lastDragged = new ElementRef(event.target);
  }

  hitTest(element: ElementRef, overlapThreshold: string): boolean {

    
    const rect1 = this.lastDragged?.nativeElement?.getBoundingClientRect();
    const rect2 = element.nativeElement.getBoundingClientRect();

    const overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
    const overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));

    const area1 = rect1.width * rect1.height;
    const area2 = rect2.width * rect2.height;

    const combinedArea = area1 + area2;
    const overlapArea = overlapX * overlapY;

    const overlapPercent = (overlapArea / combinedArea) * 100;

    return overlapPercent >= parseFloat(overlapThreshold);
  }

}