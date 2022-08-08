import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TestTaskService } from '../services/test-task.service';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { SocketService } from 'src/app/shared/services/socket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TaskComponent implements OnInit {
  dataSource: any[] = [];
  columns: any[] = [];
  config: any = {};
  contextMenuItems: any = [];
  public loading: boolean = true;
  @ViewChild('testTask') treeGridObj!: TreeGridComponent;
  constructor(
    private taskService: TestTaskService,
    private socketService: SocketService,
    private toast: ToastrService
  ) {}

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

    this.taskService.getCurrentState().subscribe((res) => {
      this.dataSource = res.data.dataSource;
      this.columns = res.data.columns;
      this.config = res.data.config;
      this.loading = false;
      this.socketService.listen('addCol').subscribe((col: any) => {
        this.dataSource.map((v) => Object.assign(v, { [col.field]: null }));
        this.columns.push(col);
      });
    });
  }

  onDataBound() {
    this.treeGridObj.autoFitColumns([]);
  }

  //contextMenu
  contextMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'addCol') {
      this.addColumn();
    }
  }

  addColumn() {
    this.socketService.emit(
      'addCol',
      {
        field: 'taskId5',
        headerText: 'task5',
      },
      (err) => {
        console.log(err);
        if (!err) {
          this.dataSource.map((v) => Object.assign(v, { taskId5: null }));
          this.columns.push({
            field: 'taskId5',
            headerText: 'task5',
          });
          console.log(this.dataSource);
        } else {
          this.toast.error(err.message);
        }
      }
    );
  }

  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
    // console.log(arg);
  }
}
