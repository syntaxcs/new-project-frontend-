import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../theme/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './basic-data.routing';

//component
import { BasicDataComponent } from './basic-data.component';
import { DiseaseComponent } from './disease/disease.component';
import { TreaterComponent } from './treater/treater.component';
import { DrugComponent } from './drug/drug.component';
import { FollowComponent } from './follow/follow.component';
import { PersonalComponent } from './personal/personal.component';

import { DiseaseDialogComponent } from './disease/disease-dialog/disease-dialog.component';
import { TreaterDialogComponent } from './treater/treater-dialog/treater-dialog.component';
import { DrugDialogComponent } from './drug/drug-dialog/drug-dialog.component';
import { FollowDialogComponent } from './follow/follow-dialog/follow-dialog.component';
import { PersonalDialogComponent } from './personal/personal-dialog/personal-dialog.component';


//service
import { DiseaseService } from '../shared/services/disease.service'; 
import { TreaterService } from '../shared/services/treater.service';
import { DrugService } from '../shared/services/drug.service';
import { FollowService } from '../shared/services/follow.service';
import { PersonalService } from '../shared/services/personal.service';


@NgModule({
    imports: [
        SharedModule,
        routing,
        MenuModule,
        HttpClientModule,
    ],
    declarations: [
        BasicDataComponent,
        DiseaseComponent,
        DiseaseDialogComponent,
        TreaterComponent,
        TreaterDialogComponent,
        DrugComponent,
        DrugDialogComponent,
        FollowComponent,
        FollowDialogComponent,
        PersonalComponent,
        PersonalDialogComponent
    ],
    entryComponents: [
        DiseaseDialogComponent,
        TreaterDialogComponent,
        DrugDialogComponent,
        FollowDialogComponent,
        PersonalDialogComponent
    ],
    providers: [
        DiseaseService,
        TreaterService,
        DrugService,
        FollowService,
        PersonalService
    ],
})
export class BasicDataModule {
}