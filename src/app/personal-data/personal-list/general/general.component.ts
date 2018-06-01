import { Component, OnInit, NgModule } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { GlobalState } from '../../../shared/global.state';
import { ConfirmDeleteDialogComponent } from '../../../theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { GeneralDialogComponent } from './general-dialog/general-dialog.component';
import { GeneralService} from '../../../shared/services/general.service';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  public rows = [];
  public id;
  public form: FormGroup;
  constructor(
    private _state: GlobalState,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private generalService:GeneralService,

  ) { this.id = this.activatedroute.snapshot.params['personalId']; }
  ngOnInit() {
    this.generalService.getGenById(this.id).subscribe(result => {
      this.rows = result;
    });
  }
  dateShow(date) {
    return String(date).substr(0, 10)
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(GeneralDialogComponent, {
      width: '750px',
      data: { personId: this.id  }
    });

    dialogRef.afterClosed().subscribe(resultAllDialog => {
      if (resultAllDialog !== undefined) {
        this.generalService.addGen(resultAllDialog)
          .mergeMap(() => this.generalService.getGenById(this.id))
          .subscribe((valueFromDatabse) => {
            this.rows = valueFromDatabse;
          })
      }
    });
  }
  openEditDialog(row): void {
    const dialogRef = this.dialog.open(GeneralDialogComponent, {
        width: '750px',
        data: {
          genDate: row.genDate,
          genTime: row.genTime,
          genSymptoms: row.genSymptoms,
          genPresentHistory: row.genPresentHistory,
          genPastHistory: row.genPastHistory,
        }
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.generalService.updateGen(row._id, result)
          .mergeMap(() => this.generalService.getGenById(this.id))
          .subscribe((results) => {
            this.rows = results;
          });
        }
    });
}
  confirmDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
        content:  'ข้อมูลที่ถูกลบจะไม่สามารถกู้คืนได้ !'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        this.generalService.deleteGen(row._id)
          .mergeMap(() => this.generalService.getGenById(this.id))
          .subscribe((results) => {
            this.rows = results;
          });
      }
    });
  }

}
