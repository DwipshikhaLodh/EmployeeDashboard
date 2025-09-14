import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ThemeService } from "../../../../core/services/ThemeService/theme.service";

@Component({
    selector: 'ed-topbar-wrapper',
    templateUrl: 'topbar.component.html',
    styleUrl: 'topbar.component.css',
    imports: [MatIconModule, MatIconModule, CommonModule]
})

export class Topbar{
    constructor(public themeService: ThemeService){
    }
    
    toggleMode(){
        this.themeService.toggleMode()
    }
}