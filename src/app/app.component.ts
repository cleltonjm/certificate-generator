import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { CertificadesComponent } from "./pages/certificades/certificades.component";
import { CertificateFormComponent } from "./pages/certificate-form/certificate-form.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BaseUiComponent,
    CertificadesComponent,
    CertificateFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
