import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';

import { ClickOutsideInterface } from 'projects/click-outside-lib/src/lib/click-outside-interface';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {

    @Output()
    clickedOutside = new EventEmitter<ClickOutsideInterface>();

    private readonly NATIVE_ELEMENT: HTMLElement;

    private unregister$ = new Subject<void>();

    constructor(elementRef: ElementRef<HTMLElement>,
                @Inject(DOCUMENT) private document: Document) {
        this.NATIVE_ELEMENT = elementRef.nativeElement;
    }

    ngOnInit(): void {
        this.registerDocumentClick();
    }

    ngOnDestroy(): void {
        this.unregister$.next();
        this.unregister$.complete();
    }

    private registerDocumentClick(): void {
        fromEvent(this.document, 'click')
            .pipe(
                takeUntil(this.unregister$)
            )
            .subscribe((event: MouseEvent) => {
                const target = event.target as Node;

                if (this.isDescendant(this.NATIVE_ELEMENT, target)) {
                    this.emit(true, target);
                } else {
                    this.emit(false, target);
                }
            });
    }

    private isDescendant(parent: Node, child: Node): boolean {
        let node = child;

        while (node !== null) {
            if (parent === node) {
                return true;
            } else {
                node = node.parentNode;
            }
        }

        return false;
    }

    private emit(value: boolean, target: Node): void {
        this.clickedOutside.emit({ value, target });
    }

}
