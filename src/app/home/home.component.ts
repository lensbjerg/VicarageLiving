import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-home',
    imports: [TranslocoModule, UpperCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
/*
TODO:
- cookie for saving chosen language -> cookie > browser lang > english
- bottom cutoff on mobile for instagram iframe
*/

}
