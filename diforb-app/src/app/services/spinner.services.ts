import { Subject, Observable } from 'rxjs';
import { SpinnerStateInterface } from '@app/shared/models/spinnerState';

export class SpinnerService {

    // private static instance: SpinnerService;
    private loaderSubject = new Subject<SpinnerStateInterface>();

    public loaderState = this.loaderSubject.asObservable();

    constructor() {
        // if (SpinnerService.instance) {
        //     return SpinnerService.instance;
        // }
        // SpinnerService.instance = this;
    }

    public show = (): void => {
        this.loaderSubject.next({ show: true });
    }

    public hide = (): void => {
        this.loaderSubject.next({ show: false });
    }
}