import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'ed-topnavbar-wrapper',
    templateUrl: 'topnavbar.component.html',
    styleUrl: 'topnavbar.component.css',
    imports: [RouterLink, RouterLinkActive, MatIconModule]
})

export class TopNavbar{
}