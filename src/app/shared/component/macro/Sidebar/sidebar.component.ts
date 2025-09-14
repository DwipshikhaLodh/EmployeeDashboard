import { Component, signal } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeService } from "../../../../core/services/ThemeService/theme.service";

@Component({
    selector: 'ed-sidebar-wrapper',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.css',
    imports: [MatIconModule, RouterLink, RouterLinkActive]
})

export class Sidebar{
    route = signal('')
    
    constructor(private router: Router, public themeService: ThemeService){
        this.route.set(router.url)
    }

    gotohome(){
        this.router.navigate(['/dashboard'])
    }

    gotoemployees(){
        this.router.navigate(['/dashboard/employees'])
    }
}