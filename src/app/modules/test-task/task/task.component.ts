import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TestTaskService } from '../services/test-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  dataSource: any[]= [];
  columns: any[] = [];
  config: any = {};
  @ViewChild('testTask')
  
  public treeGridObj!: TreeGridComponent;
  constructor(private taskService: TestTaskService) { }

  ngOnInit(): void {
    this.taskService.getCurrentState().subscribe(res => {
      this.dataSource = res.data.dataSource;
      this.columns = res.data.columns;
      this.config =res.data.config;
      console.log(res.data)
    })
  }

  
  onDataBound($event: any) {
    // this.treeGridObj.
  }

}
