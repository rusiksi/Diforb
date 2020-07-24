import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'auth-start',
    template: `
        <form class="form">
            <p>
                <i class="icon-diforb-logo-slogan"></i>
            </p>
            <div class="button button__facebook">
                <i class="icon-facebook"></i>
                <span>Sign in with facebook</span>
            </div>
            <div class="button button__google">
                <i class="icon-google"></i>
                <span>Sign in with google</span>
            </div>
            <div> - or - </div>
            <div class="button button__login">
                <span>Login</span>
            </div> 
            <div>
                <span>Don't have an account yet?</span>
                <span>Create</span>
            </div>
            <div class="button button__watch">
                <i class="icon-play"></i>
                <span>Watch video</span>
            </div>
        </form>
    `,
    styleUrls: ['start.component.scss']
})

export class StartComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}