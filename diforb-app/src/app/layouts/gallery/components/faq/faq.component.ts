import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';
import { gsap, Power1, Back, TweenMax } from 'gsap';

@Component({
    selector: 'app-faq',
    template: `
        <ul>
            <li *ngFor="let item of items; let show = false;">
                <div class="question" (click)="show = !show">
                    <i [ngClass]="{'icon-chevron-down': !show, 'icon-chevron-up': show}"></i>
                    <span>{{item.question}}</span>
                </div>
                <div class="answer" [style.fontSize.px]="show?14:0">{{item.answer}}</div>
            </li>
        </ul>
    `
})

export class FaqComponent implements OnInit {

    // private gsap = gsap.timeline();

    public items = [
        {
            id: 'q-1',
            question: 'What is Diforb and what can it do?',
            answer: 'Diforb is a set of convenient tools which can help you to create unique sound effects and process different sounds. At present, our sound  libraries can give you a chance to make a variety of unmatchable sound effects. '
        },
        {
            id: 'q-2',
            question: 'Where can I use sounds, made with the help of  Diforb libraries?',
            answer: 'These sounds can be used in any media projects such as games, ads presentations, applications, video blogs and others. You can not sell these sounds or set them free on any other recourses. You can get more particular information in “ License Agreement” paragraph.'
        },
        {
            id: 'q-3',
            question: 'Can I use these sounds in any commercial projects?',
            answer: 'You can use them both for commercial and noncommercial projects.'
        },
        {
            id: 'q-4',
            question: 'Can I have any problems with copyrights in future?',
            answer: 'All sound libraries and sounds entitlements are Diforb`s ownership. If you follow “License Agreement”, you will have no problems with copyrights.'
        },
        {
            id: 'q-5',
            question: 'What is Pitch function for?',
            answer: 'Pitch function can be used to lower or raise any sound key, to make a sound shorter ( when raising a key) or longer ( when lowering a key). This function is not active in some libraries to optimize sound combinations.'
        },
        {
            id: 'q-6',
            question: 'What can be Reverb used for?',
            answer: 'Reverb is indoor sound simulation effect. It generates sound reflections from the chosen virtual room walls. You can use three presets for different locations situated according to the increasing of their  locations size – Room, Hall, Stadium. Reverb fader gives you an opportunity to control the amount of reverberation you want to mix into your sound. We recommend you to use this effect if you have to replace the sound into any specific space or increase the volume of the sound or its value.'
        },
        {
            id: 'q-7',
            question: 'I was tuning up the sound in the library and found myself stuck. How can I come back to Diforb library settings?',
            answer: 'To do it you should reload the library page in your browser. In a short time, a special button will be worked out for such situations.'
        }
    ];

    constructor(
        private breadcrumbs: BreadcrumbsService
    ) {
        breadcrumbs.change({ 
            breadcrumbs: 'Popular questions',
            icon: 'icon-info' 
        })
    }

    ngOnInit() { }
}