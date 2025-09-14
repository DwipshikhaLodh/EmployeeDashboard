import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../../shared/component/macro/Sidebar/sidebar.component";
import { Topbar } from "../../shared/component/macro/Topbar/topbar.component";
import { TopNavbar } from "../../shared/component/macro/TopNavbar/topnavbar.component";

@Component({
    selector: 'ed-mainlayout-wrapper',
    templateUrl: 'main-layout.component.html',
    styleUrl: 'main-layout.component.css',
    imports: [RouterOutlet, Sidebar, Topbar, TopNavbar]
})

export class MainLayout{
    
}