import { Component } from '@angular/core';
import { ItemCertifiedComponent } from "../../components/item-certified/item-certified.component";
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificades',
  imports: [ItemCertifiedComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificades.component.html',
  styleUrl: './certificades.component.css'
})
export class CertificadesComponent {}
