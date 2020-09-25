import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'dz-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

    @Input()
    public icon: string = null;

    @Input()
    public text: string = null;

    @Input()
    public link: string = null;

    ngOnInit() {
    }
}
