import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../theme/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './personal-data.routing';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

//component
import { PersonalDataComponent } from './personal-data.component'
import { PersonalListComponent } from './personal-list/personal-list.component'
import { PhysicalComponent } from './personal-list/physical/physical.component';
import { GeneralComponent } from './personal-list/general/general.component';
import { SummaryComponent } from './personal-list/summary/summary.component';
import { PersonalComponent } from './personal/personal.component';
import { FollowComponent } from './follow/follow.component';
import { CertificateComponent } from './certificate/certificate.component';

//dialog
import { PhysicalDialogComponent } from './personal-list/physical/physical-dialog/physical-dialog.component';
import { GeneralDialogComponent } from './personal-list/general/general-dialog/general-dialog.component';
import { SummaryDialogComponent } from './personal-list/summary/summary-dialog/summary-dialog.component';
import { PersonalDialogComponent } from './personal/personal-dialog/personal-dialog.component';
import { FollowDialogComponent } from './follow/follow-dialog/follow-dialog.component';
import { CertificateDialogComponent } from './certificate/certificate-dialog/certificate-dialog.component';
import { PhysicalDetailDialogComponent} from './personal-list/physical/physical-dialog-detail/physical-dialog-detail.component'
import { SummaryDetailDialogComponent} from './personal-list/summary/summary-dialog-detail/summary-dialog-detail.component';
import { FollowDetailDialogComponent} from './follow/follow-dialog-detail/follow-dialog-detail.component';
import { CertificateDetailDialogComponent } from './certificate/certificate-dialog-detail/certificate-dialog-detail.component';


//service
import { PersonalService } from '../shared/services/personal.service';
import { PhysicalService } from '../shared/services/physical.service';
import { GeneralService } from '../shared/services/general.service';
import { FollowService } from '../shared/services/follow.service';
import { CertificateService } from '../shared/services/certificate.service';
import { DrugService } from '../shared/services/drug.service';
import { TreatmentService } from '../shared/services/treatment.service';
import { DiseaseService } from '../shared/services/disease.service';
import { SummaryService } from '../shared/services/summary.service';
import { TreaterService } from '../shared/services/treater.service';
import { OfficerService} from '../shared/services/officer.service';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    MenuModule,
    HttpClientModule,
    NgxMaterialTimepickerModule.forRoot(),
  ],
  //เขียน2ไฟล์(component,dialog)
  declarations: [
    PersonalListComponent,
    PersonalDataComponent,
    PhysicalComponent,
    PhysicalDialogComponent,
    PhysicalDetailDialogComponent,
    GeneralComponent,
    GeneralDialogComponent,
    SummaryComponent,
    SummaryDialogComponent,
    SummaryDetailDialogComponent,
    PersonalComponent,
    PersonalDialogComponent,
    FollowComponent,
    FollowDialogComponent,
    FollowDetailDialogComponent,
    CertificateComponent,
    CertificateDialogComponent,
    CertificateDetailDialogComponent,
  ],
  //dialog
  entryComponents: [
    PhysicalDialogComponent,
    GeneralDialogComponent,
    SummaryDialogComponent,
    PersonalDialogComponent,
    FollowDialogComponent,
    CertificateDialogComponent,
    PhysicalDetailDialogComponent,
    SummaryDetailDialogComponent,
    FollowDetailDialogComponent,
    CertificateDetailDialogComponent,
  ],
  providers: [
    PersonalService,
    PhysicalService,
    GeneralService,
    FollowService, ,
    CertificateService,
    DrugService,
    TreatmentService,
    DiseaseService,
    SummaryService,
    TreaterService,
    OfficerService,
  ],
})

export class PersonalDataModule { }
