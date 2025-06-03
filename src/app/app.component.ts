import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "./components/secondary-button/secondary-button.component";
import { ItemCertifiedComponent } from "./components/item-certified/item-certified.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, 
    PrimaryButtonComponent, 
    SecondaryButtonComponent, 
    ItemCertifiedComponent, 
    BaseUiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
