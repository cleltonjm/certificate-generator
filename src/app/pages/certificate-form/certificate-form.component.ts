import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {

}
