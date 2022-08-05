import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TestTaskService } from '../services/test-task.service';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  dataSource: any[]= [];
  columns: any[] = [];
  config: any = {};
  contextMenuItems: any =[];
  @ViewChild('testTask')
  
  public treeGridObj!: TreeGridComponent;
  constructor(private taskService: TestTaskService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.contextMenuItems = [
      { text: 'AddCol', target: '.e-headercelldiv', id: 'addCol' },
      { text: 'EditCol', target: '.e-headercelldiv', id: 'editCol' },
      { text: 'ViewCol', target: '.e-headercelldiv', id: 'viewCol' },
      { text: 'DelCol', target: '.e-headercelldiv', id: 'delCol' },
      { text: 'ChooseCol', target: '.e-headercelldiv', id: 'chooseCol' },
      { text: 'FreezeCol', target: '.e-headercelldiv', id: 'freezeCol' },
      { text: 'FilterCol', target: '.e-headercelldiv', id: 'filterCol' },
      { text: 'MultiSort', target: '.e-headercelldiv', id: 'multiSort' },

      { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
      { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
    ];

    this.taskService.getCurrentState().subscribe(res => {
      this.dataSource = res.data.dataSource;
      this.columns = res.data.columns;
      this.config =res.data.config;
      this.socketService.listen('addCol').subscribe(col => {
        this.columns = [...this.columns, col]
      })
    })
  }

  
  onDataBound() {
    this.treeGridObj.autoFitColumns([]);
  }

  //contextMenu
  contextMenuClick(args: MenuEventArgs): void {
    if(args.item.id === 'addCol') {
      this.addColumn();
    }
  }

  addColumn() { 
    this.columns = [...this.columns, {
      field: 'taskId',
      headerText: 'test'
    }]

    this.socketService.emit('addCol',{
      field: 'taskId',
      headerText: 'test'
    })
    
  } 

  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
    // console.log(arg);
  }
  
}
