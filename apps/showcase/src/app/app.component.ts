import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Observable, of} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
    standalone: true,
    imports: [RouterModule, NgIf, AsyncPipe],
    selector: 'mobi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public test$?: Observable<string>;

    ngOnInit() {
        this.test$ = of('test');
    }
}
