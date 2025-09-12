import { Component } from "@angular/core";
import { DashboardHome } from "../../shared/component/macro/DashboardHome/dashboard-home.component";

@Component({
    selector: 'ed-homepage-wrapper',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [DashboardHome]
})

export class HomePage{
}