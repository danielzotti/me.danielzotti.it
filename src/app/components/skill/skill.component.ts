import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'dz-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {

    @Input()
    public image: string = null;

    @Input()
    public value: string = null;

    @Input()
    public name: string = null;

    ngOnInit() {
    }
}
