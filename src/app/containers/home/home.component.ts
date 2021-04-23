import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
    selector: 'dz-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    private user;
    // private isPlayingVideo = false;
    public personalInfo: Array<any>;
    public personalInfoLeft: Array<any>;
    public personalInfoRight: Array<any>;
    public backendSkills: Array<any>;
    public frontendSkills: Array<any>;
    public graphicSkills: Array<any>;
    public cmsSkills: Array<any>;
    public opensourceProjects: Array<any>;

    public version: string = version;

    constructor() { }

    ngOnInit() {
        // FONT AWESOME 4
        this.personalInfo = [
            { icon: 'fa fa-map-marker', text: 'Trieste, Italy' },
            { icon: 'fa fa-linkedin', text: '/in/danielzotti', link: 'https://www.linkedin.com/in/danielzotti' },
            { icon: 'fa fa-github', text: '/danielzotti', link: 'https://github.com/danielzotti' },
            { icon: 'fa fa-gitlab', text: '/danielzotti', link: 'https://gitlab.com/danielzotti' },
            { icon: 'fa fa-facebook', text: '/daniel.dada.zotti', link: 'https://www.facebook.com/daniel.dada.zotti' },
            { icon: 'fa fa-youtube-play', text: '/c/danielzotti', link: 'https://www.youtube.com/c/danielzotti' },
            { icon: 'fa fa-twitter', text: '@daniel_zotti', link: 'https://twitter.com/daniel_zotti' },
            { icon: 'fa fa-instagram', text: '@daniel_zotti', link: 'https://www.instagram.com/daniel_zotti' },
        ];
        // FONT AWESOME 5
        // this.personalInfo = [
        //     { icon: 'fas fa-calendar', text: '16/04/1987' },
        //     { icon: 'fas fa-map-marker', text: 'Trieste, Italy' },
        //     { icon: 'fab fa-linkedin', text: '/in/danielzotti', link: 'https://www.linkedin.com/in/danielzotti' },
        //     { icon: 'fab fa-github', text: '/danielzotti', link: 'https://github.com/danielzotti' },
        //     { icon: 'fab fa-gitlab', text: '/danielzotti', link: 'https://gitlab.com/danielzotti' },
        //     { icon: 'fab fa-facebook', text: '/daniel.dada.zotti', link: 'https://www.facebook.com/daniel.dada.zotti' },
        //     { icon: 'fab fa-youtube', text: '/c/danielzotti', link: 'https://www.youtube.com/c/danielzotti' },
        //     { icon: 'fab fa-twitter', text: '@daniel_zotti', link: 'https://twitter.com/daniel_zotti' },
        //     { icon: 'fab fa-instagram', text: '@daniel_zotti', link: 'https://www.instagram.com/daniel_zotti' },
        // ];
        this.backendSkills = [
            { name: 'Linux', image: 'linux', value: 4 },
            { name: 'NodeJs', image: 'nodejs', value: 2 },
            { name: 'Apache', image: 'apache', value: 2 },
            { name: 'MongoDB', image: 'mongodb', value: 2 },
            { name: 'SQL', image: 'sql', value: 3 },
            { name: 'PHP', image: 'php', value: 3 },
            { name: 'Java', image: 'java', value: 2 },
            { name: 'C#', image: 'csharp', value: 4 },
        ];
        this.frontendSkills = [
            { name: 'HTML5', image: 'html5', value: 5 },
            { name: 'CSS3', image: 'css3', value: 5 },
            { name: 'JavaScript', image: 'javascript', value: 5 },
            { name: 'Sass', image: 'sass', value: 5 },
            { name: 'Bootstrap', image: 'bootstrap', value: 5 },
            { name: 'TypeScript', image: 'typescript', value: 3 },
            { name: 'JQuery', image: 'jquery', value: 5 },
            { name: 'AngularJS and Angular2', image: 'angular', value: 5 },
        ];
        this.cmsSkills = [
            { name: 'Umbraco', image: 'umbraco', value: 5 },
            { name: 'Drupal', image: 'drupal', value: 3 },
        ];
        this.graphicSkills = [
            { name: 'Adobe Premiere Pro', image: 'adobe-premierepro', value: 4 },
            { name: 'Adobe After Effects', image: 'adobe-aftereffects', value: 3 },
            { name: 'Adobe Photoshop', image: 'adobe-photoshop', value: 3 },
            { name: 'Adobe Illustrator', image: 'adobe-illustrator', value: 4 },
            { name: 'Adobe InDesign', image: 'adobe-indesign', value: 2 },
        ];
        this.opensourceProjects = [
            {
                name: 'ng-filemanager',
                description: 'Fully customizable multiple file manager for Angular with >= IE10 browser support!',
                url: 'https://github.com/danielzotti/ng-filemanager',
                image: 'assets/images/npm.png'
            },
            {
                name: 'ng-textarea-autoresize', 
                description: 'A special Angular directive that autoresizes a textarea based on the content',
                url: 'https://github.com/danielzotti/ng-textarea-autoresize',
                image: 'assets/images/npm.png'
            },
            {
                name: 'ng-input-number-18n',
                description: 'Angular directive which manages numbers',
                url: 'https://github.com/danielzotti/ng-input-number-i18n',
                image: 'assets/images/github.png'
            },
            {
                name: 'ngrx-crud-snippets',
                description: 'VS code snippets for NgRx CRUD entity',
                url: 'https://github.com/danielzotti/ngrx-crud-snippets',
                image: 'assets/images/github.png'
            },
            {
                name: 'chrome-notepad',
                description: 'A simple notepad for chrome extension',
                url: 'https://github.com/danielzotti/chrome-notepad',
                image: 'assets/images/github.png'
            },
            {
                name: 'angular-ngrx-scaffold',
                description: 'Scaffold of an Angular + NgRx app',
                url: 'https://github.com/danielzotti/angular-ngrx-scaffold',
                image: 'assets/images/github.png'
            },
            {
                name: 'google-maps-manager',
                description: 'An simple library to manage Google Maps API',
                url: 'https://github.com/danielzotti/google-maps-manager',
                image: 'assets/images/github.png'
            },
            {
                name: 'OTHER',
                isInverse: true,
                description: 'View all my other projects',
                url: 'https://github.com/danielzotti?tab=repositories',
                image: 'assets/images/github.png'
            },
            // { name: 'Adobe Photoshop', description: 'adobe-photoshop', url: 3 },
            // { name: 'Adobe Illustrator', description: 'adobe-illustrator', url: 4 },
            // { name: 'Adobe InDesign', description: 'adobe-indesign', url: 2 },
        ];

        const halfInfoCount = Math.ceil(this.personalInfo.length / 2);
        this.personalInfoRight = this.personalInfo.slice();
        this.personalInfoLeft = this.personalInfoRight.splice(0, halfInfoCount);
    }
}
