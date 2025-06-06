import { Component, OnInit } from '@angular/core';
import { ItemCertifiedComponent } from "../../components/item-certified/item-certified.component";
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificades',
  imports: [ItemCertifiedComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificades.component.html',
  styleUrl: './certificades.component.css'
})
export class CertificadesComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}
