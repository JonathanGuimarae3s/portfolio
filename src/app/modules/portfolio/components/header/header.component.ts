import { Component } from '@angular/core';
import { AnimationsComponent } from "../animations/animations.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AnimationsComponent]
})
export class HeaderComponent {

}
