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
import { DialogUtility } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-task-demo',
  templateUrl: './task-demo.component.html',
  styleUrls: ['./task-demo.component.scss'],
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
  dialogObj: any;

  public loading: boolean = false;

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
      { text: 'AddCol', target: '.e-headercell', id: 'addCol' },
      { text: 'EditCol', target: '.e-headercell', id: 'editCol' },
      { text: 'ViewCol', target: '.e-headercell', id: 'viewCol' },
      { text: 'DelCol', target: '.e-headercell', id: 'delCol' },
      { text: 'ChooseCol', target: '.e-headercell', id: 'chooseCol' },
      { text: 'FreezeCol', target: '.e-headercell', id: 'freezeCol' },
      { text: 'FilterCol', target: '.e-headercell', id: 'filterCol' },
      { text: 'MultiSort', target: '.e-headercell', id: 'multiSort' },

      { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
      { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
    ];
    this.pager = { pageSize: 8 };
  }

  onDataBound($event: any) {
    this.treeGridObj.autoFitColumns([]);
  }

  //contextMenu
  contextMenuClick(args: MenuEventArgs): void {
    this.treeGridObj.getColumnByField('taskID');
    if (args.item.id === 'addCol') {
      this.addColumn();
    }
  }

  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
    console.log(arg);
  }

  addColumn() {
    this.dialogObj = DialogUtility.confirm({
      title: ' Add Column',
      content: 'add',
      okButton: { text: 'Save', click: this.saveClick.bind(this) },
      cancelButton: { text: 'Cancel', click: this.cancelClick.bind(this) },
      showCloseIcon: true,
      closeOnEscape: true,
      animationSettings: { effect: 'Zoom' },
    });
    return this.dialogObj;
  }

  saveClick() {
    alert('ok');
  }
  cancelClick() {
    this.dialogObj.hide();
  }
}
