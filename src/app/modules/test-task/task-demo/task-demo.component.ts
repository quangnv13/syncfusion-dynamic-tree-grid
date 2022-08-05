import { Component, OnInit, ViewChild } from '@angular/core';
import {
  EditSettingsModel,
  SortSettingsModel,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { column, sampleData } from 'src/app/shared/dataSource';

import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';


@Component({
  selector: 'app-task-demo',
  templateUrl: './task-demo.component.html',
  styleUrls: ['./task-demo.component.scss']
})
export class TaskDemoComponent implements OnInit {
  public data: Object[] | undefined = sampleData;
  public column = column;
  public sortSettings!: SortSettingsModel;
  public dataManager!: DataManager;
  public editSettings!: EditSettingsModel;
  public toolbar!: string[];
  public numericParams!: Object;
  public commands!: Object[];

  public pager!: Object;
  public contextMenuItems!: Object[];

  public pageSettings!: Object;
  public filterSettings!: Object;
  @ViewChild('testTask')
  public treeGridObj!: TreeGridComponent;

  constructor() {}

  ngOnInit(): void {
    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskdID', direction: 'Descending' },
      ],
    };
    this.filterSettings = { type: 'Menu' };

    this.pageSettings = { pageSize: 30 };

    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row',
    };

    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    this.numericParams = { params: { format: 'n' } };

    this.commands = [
      {
        type: 'Edit',
        buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' },
      },
      {
        type: 'Delete',
        buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' },
      },
      {
        type: 'Save',
        buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' },
      },
      {
        type: 'Cancel',
        buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' },
      },
    ];

    this.contextMenuItems = [
      { text: 'AddCol', target: '.e-headertext', id: 'addCol' },
      { text: 'EditCol', target: '.e-headertext', id: 'editCol' },
      { text: 'ViewCol', target: '.e-headertext', id: 'viewCol' },
      { text: 'DelCol', target: '.e-headertext', id: 'delCol' },
      { text: 'ChooseCol', target: '.e-headertext', id: 'chooseCol' },
      { text: 'FreezeCol', target: '.e-headertext', id: 'freezeCol' },
      { text: 'FilterCol', target: '.e-headertext', id: 'filterCol' },
      { text: 'MultiSort', target: '.e-headertext', id: 'multiSort' },

      { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
      { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
    ];
    this.pager = { pageSize: 8 };
  }

  onRightClick($event: any) {
    alert('right click');
    console.log($event);

    return false;
  }
  onDataBound($event: any) {
    this.treeGridObj.autoFitColumns([]);
  }

  //contextMenu
  contextMenuClick(args: MenuEventArgs): void {
    this.treeGridObj.getColumnByField('taskID');
    // thi
  }

  changeOrder() { 
  } 

  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
    console.log(arg);
  }
}
