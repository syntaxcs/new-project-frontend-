import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../shared/global.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public _menus = [
    
    {
      title: 'ข้อมูลพื้นฐาน',
      name: 'manage-basic',
      items:
        [
          {
            icon: 'assets/images/worldwide.png',
            title: 'เพิ่มข้อมูลโรค/หัตถการ',
            url: '/basic-data/disease'
          },
          {
            icon: 'assets/images/pain (1).png',
            title: 'เพิ่มข้อมูลวิธีการรักษา',
            url: '/basic-data/remedy'
          },
          {
            icon: 'assets/images/pills (1).png',
            title: 'เพิ่มข้อมูลยา',
            url: '/basic-data/drug'
          },
          {
            icon: 'assets/images/doctor.png',
            title: 'เพิ่มข้อมูลผู้รักษา',
            url: '/basic-data/treater'
          },
        ]
    },
    {
      title: 'ข้อมูลผู้ป่วย',
      name: 'manage-basic',
      items:
        [
          {
            icon: 'assets/images/patient (1).png',
            title: 'การรักษา',
            url: '/basic-data/personal'
          },
          {
            icon: 'assets/images/medical-history (1).png',
            title: 'ใบรับรองแพทย์',
            url: '/basic-data/disease'
          },
          {
            icon: 'assets/images/calendar (1).png',
            title: 'การนัดหมาย',
            url: '/basic-data/follow'
          },
        ]
    },
    {
      title: 'ข้อมูลรายงาน',
      name: 'manage-basic',
      items:
        [
          {
            icon: 'assets/images/computer (1).png',
            title: 'แบบบันทึกรายงานสรุป',
            url: '/basic-data/disease'
          },
        ]
        },
  ];

  constructor(
    private _state: GlobalState,
  ) { }

  ngOnInit() {
    this._state.notifyDataChanged('[Breadcrumbs] changed', [{ title: 'หน้าแรก' }]);
  }
  get menus() {
    return this._menus;
  }
}