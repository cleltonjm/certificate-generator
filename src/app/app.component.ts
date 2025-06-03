import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { CertificadesComponent } from "./pages/certificades/certificades.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BaseUiComponent,
    CertificadesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
