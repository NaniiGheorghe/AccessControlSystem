import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';

// TODO: Replace this with your own data model type
export interface AccessManagementItem {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  departament: string;
  defaultWorkingRoom: string;
  keyType: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: AccessManagementItem[] = [
  {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  }, {
    id: 1, firstName: 'Nanii', lastName: 'Gicu', departament: 'DEV Office',
    defaultWorkingRoom: 'Service Office', position: 'Developer', keyType: 'Electronic'
  },
];

/**
 * Data source for the AccessManagement view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AccessManagementDataSource extends DataSource<AccessManagementItem> {
  data: AccessManagementItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AccessManagementItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: AccessManagementItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: AccessManagementItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'firstName':
          return compare(a.firstName, b.firstName, isAsc);
        case 'keyType':
          return compare(a.keyType, b.keyType, isAsc);
        case 'defaultWorkingRoom':
          return compare(a.defaultWorkingRoom, b.defaultWorkingRoom, isAsc);
        case 'departament':
          return compare(a.departament, b.departament, isAsc);
        case 'position':
          return compare(a.position, b.position, isAsc);
        case 'lastName':
          return compare(a.lastName, b.lastName, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
