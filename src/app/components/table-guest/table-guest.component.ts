import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'guest-table',
  styleUrls: ['table-guest.component.css'],
  templateUrl: 'table-guest.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TableGuest implements AfterViewInit {
  @Input() elementData: Guest[] = [];
  @Output() elementDataChange: EventEmitter<any[]> = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'document', 'number'];
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Guest>(this.elementData);


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Guest>(this.elementData);
    this.dataSource.paginator = this.paginator;
  }

  updateTable(dados: Guest[] | undefined) {
    console.log('Tabela atualizada!');
    // this.elementDataChange.emit(this.elementData);
    this.dataSource = new MatTableDataSource<Guest>(dados);

  }
}

export interface Guest {
  name: string;
  document: string;
  number: string;
}
