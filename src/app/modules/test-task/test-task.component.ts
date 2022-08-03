import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { sampleData } from 'src/app/shared/dataSource';

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss']
})
export class TestTaskComponent implements OnInit {

  public data: Object[] | undefined = sampleData;
  public sortSettings!: SortSettingsModel;
  public dataManager!: DataManager;
  public editSettings!: EditSettingsModel;
  public toolbar!: string[];
  public numericParams!: Object;
  public commands!: Object[];

  constructor() { }

  ngOnInit(): void {
    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskdID', direction: 'Descending' },
      ],
    };

    this.dataManager = new DataManager({
      url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
    });

    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row',
    };

    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    this.numericParams = {params: {format: 'n'}}

    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

  onRightClick($event: any) {
    alert('right click')
    console.log($event);
    
    return false
  }
}
