import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ThemeService{
    darkMode = signal(false)

    toggleMode(){
        this.darkMode.update((prev) => !prev)
        console.log(this.darkMode());
        
    }
}