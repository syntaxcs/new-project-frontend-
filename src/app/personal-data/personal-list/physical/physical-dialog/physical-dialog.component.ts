import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-physical-dialog',
  templateUrl: './physical-dialog.component.html',
  styleUrls: ['./physical-dialog.component.css']
})
export class PhysicalDialogComponent implements OnInit {
  public form: FormGroup;
  date: Date;
  startDate: any;
  brithDay: Date;
  public level = ['ระดับ 1', 'ระดับ 2', 'ระดับ 3', 'ระดับ 4', 'ระดับ 5', 'ระดับ 6', 'ระดับ 7', 'ระดับ 8', 'ระดับ 9', 'ระดับ 10'];
  public bodyparth = ['ศีรษะ', 'ต้นคอ', 'บ่า', 'ไหล่', 'หลัง-เอว'
    , 'ขา-เท้า', 'ข้อเท้า', 'เข่า', 'ข้อศอก', 'ข้อมือ-ข้อนิ้ว', 'อ่อนเเรงข้างซ้าย', 'อ่อนแรงข้างขวา', 'อ่อนแรงทั้งสองข้าง'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PhysicalDialogComponent>,
  ) {
    if (this.data.date !== undefined) {
      this.date = new Date(this.data.date);
      this.date.setDate(this.date.getDate()-1);
    }
    if (this.data.time !== undefined) {
      this.brithDay = this.data.time
    }
  }
  ngOnInit() {
    this.form = this.formBuilder.group({});
  }
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
  onSave() {
    const value = this.form.value;
    value.personId = this.data.personId
    value.date = this.date;
    value.date.setDate(this.date.getDate()+1);
    value.time = this.brithDay;
    this.dialogRef.close(value);
  }

  
  BMI() {
    if(this.form.value.phyWeight !== null && this.form.value.phyHeight !== null){
      return String(this.form.value.phyWeight / Math.pow(this.form.value.phyHeight, 2)*10000).substr(0, 5);
    } else {
      return 0;
    }

  }
}
