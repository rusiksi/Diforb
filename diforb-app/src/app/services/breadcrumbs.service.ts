import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BreadcrumbsService {

    private subject = new Subject<any>();

    public state = this.subject.asObservable();

    constructor() { }

    change(breadConfig) {
        this.subject.next(breadConfig)
    }
    
}