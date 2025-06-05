import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certified',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certified.component.html',
  styleUrl: './item-certified.component.css'
})
export class ItemCertifiedComponent {
  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', 2]);
  }
}
