import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'dz-project-box',
    templateUrl: './project-box.component.html',
    styleUrls: ['./project-box.component.scss'],
})
export class ProjectBoxComponent implements OnInit {

    @Input()
    public url: string = null;

    @Input()
    public description: string = null;

    @Input()
    public name: string = null;

    @Input()
    public image: string = null;

    @Input()
    public isInverse = false;

    ngOnInit() {
    }
}
