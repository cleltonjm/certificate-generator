import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { ItemCertifiedComponent } from "../../components/item-certified/item-certified.component";

@Component({
  selector: 'app-certificades',
  imports: [SecondaryButtonComponent, ItemCertifiedComponent],
  templateUrl: './certificades.component.html',
  styleUrl: './certificades.component.css'
})
export class CertificadesComponent {

}
