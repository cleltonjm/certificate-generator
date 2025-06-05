import { Routes } from '@angular/router';
import { CertificadesComponent } from './pages/certificades/certificades.component';
import { CertificateFormComponent } from './pages/certificate-form/certificate-form.component';
import { CertificateComponent } from './pages/certificate/certificate.component';

export const routes: Routes = [
    {
        path: "",
        component: CertificadesComponent
    },
    {
        path: "certificados/novo",
        component: CertificateFormComponent
    },
    {
        path: "certificados/:id",
        component: CertificateComponent
    }
];
