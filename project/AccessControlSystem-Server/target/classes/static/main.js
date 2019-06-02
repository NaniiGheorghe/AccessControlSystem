(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/components/access-management/access-management.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/access-management/access-management.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-width-table {\n  width: 100%;\n}\n\n\n.full-width-table {\n  width: auto;\n  height: 100%;\n  margin-right: 2%;\n  margin-left: 17%;\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n\n\n.create-delete-buttons button,\n.create-delete-buttons a {\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Nlc3MtbWFuYWdlbWVudC9hY2Nlc3MtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY2Vzcy1tYW5hZ2VtZW50L2FjY2Vzcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zaWRlLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBtYXJnaW4tbGVmdDogMTclO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbnMgYnV0dG9uLFxuLmNyZWF0ZS1kZWxldGUtYnV0dG9ucyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/access-management/access-management.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/access-management/access-management.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width-table\">\n  <mat-grid-list [cols]=\"2\" rowHeight=\"90px\">\n    <mat-grid-tile>\n      <h1 class=\"align-start text-color align-top\">Access Management</h1>\n    </mat-grid-tile>\n    <mat-grid-tile>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <div class=\"create-delete-buttons align-start\">\n        <button mat-raised-button color=\"primary\" (click)=\"openCreateDialog()\">Create</button>\n        <button *ngIf=\"selection.hasValue()\" mat-raised-button color=\"warn\" (click)=\"deleteSelected()\">Delete</button>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <form class=\"align-end form-style\">\n        <mat-form-field class=\"full-width-input\">\n          <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\" type=\"text\"/>\n        </mat-form-field>\n      </form>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <div class=\"mat-elevation-z8\" (scroll)=\"row\">\n    <table mat-table class=\"inside-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n      <!-- Checkbox Column -->\n      <ng-container matColumnDef=\"checkBox\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? (selection.toggle(row) && displyButton()) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <!-- First name Column -->\n      <ng-container matColumnDef=\"firstNameLastName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>First name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.user.firstName + \" \" + row.user.lastName}}</td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Position</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.user.position}}</td>\n      </ng-container>\n\n      <!-- Departament Column -->\n      <ng-container matColumnDef=\"departament\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Departament</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.user.departament}}</td>\n      </ng-container>\n\n      <!-- Default working room Column -->\n      <ng-container matColumnDef=\"defaultWorkingRoom\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Default room</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.user.defaultWorkingRoom}}</td>\n      </ng-container>\n\n      <!-- Accesible Room -->\n      <ng-container matColumnDef=\"accessibleRoom\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Room</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.accessibleRoom}}</td>\n      </ng-container>\n\n      <!-- Door lock Id-->\n      <ng-container matColumnDef=\"doorLock\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Door Id</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.accessibleRoomDoorLock.name}}</td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator\n                   [length]=\"dataSource.data.length\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"20\"\n                   [pageSizeOptions]=\"[20, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/access-management/access-management.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/access-management/access-management.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AccessManagementComponent, DialogOverviewCreateAcMn1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessManagementComponent", function() { return AccessManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewCreateAcMn1", function() { return DialogOverviewCreateAcMn1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/UserService */ "./src/app/services/UserService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Room */ "./src/app/models/Room.ts");
/* harmony import */ var _services_RoomService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/RoomService */ "./src/app/services/RoomService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_DoorLockService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/DoorLockService */ "./src/app/services/DoorLockService.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_AccessService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/AccessService */ "./src/app/services/AccessService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var AccessManagementComponent = /** @class */ (function () {
    function AccessManagementComponent(spinnerService, messageService, accessService, userService, dialog, toastr) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.messageService = messageService;
        this.accessService = accessService;
        this.userService = userService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.accesses = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.accesses);
        this.displayedColumns = ['checkBox', 'firstNameLastName', 'position', 'departament', 'defaultWorkingRoom', 'accessibleRoom', 'doorLock'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](true, []);
        this.messageService.listen().subscribe(function (event) {
            if (event == 'accessManagement') {
                _this.loadAllAccesses();
            }
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    AccessManagementComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AccessManagementComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.filteredData.forEach(function (row) { return _this.selection.select(row); });
    };
    AccessManagementComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    AccessManagementComponent.prototype.ngOnInit = function () {
    };
    AccessManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    AccessManagementComponent.prototype.loadAllAccesses = function () {
        var _this = this;
        this.subscriptionAction = this.accessService.getAllAccesses().subscribe(function (access) {
            _this.dataSource.data = access;
            var events = document.getElementById('accessManagement');
            events.style.display = 'block';
            if (_this.spinnerService.isShowing()) {
                _this.spinnerService.hide();
            }
        });
    };
    AccessManagementComponent.prototype.openCreateDialog = function () {
        var _this = this;
        this.userService.getAllEmployees().subscribe(function (employees) {
            var dialogRef = _this.dialog.open(DialogOverviewCreateAcMn1, {
                width: '400px',
                data: { 'data': employees }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.loadAllAccesses();
            });
        });
    };
    AccessManagementComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selection.selected.length > 0) {
            var access = this.selection.selected[0];
            this.accessService.removeAnAccess(access.user.id, access.accessibleRoomDoorLock.id)
                .pipe()
                .subscribe(function (data) {
                _this.toastr.success("Access removed successfully for user ["
                    + access.user.firstName + " " + access.user.lastName + "] to room ["
                    + access.accessibleRoom + "], door [" + access.accessibleRoomDoorLock.name + "]");
                _this.selection.deselect(access);
                _this.deleteSelected();
            }, function (error) {
                _this.toastr.error("Something went wrong!");
                _this.loadAllAccesses();
            });
        }
        this.loadAllAccesses();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AccessManagementComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AccessManagementComponent.prototype, "sort", void 0);
    AccessManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-management',
            template: __webpack_require__(/*! ./access-management.component.html */ "./src/app/components/access-management/access-management.component.html"),
            styles: [__webpack_require__(/*! ./access-management.component.css */ "./src/app/components/access-management/access-management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_SpinnerService__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _services_MessageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _services_AccessService__WEBPACK_IMPORTED_MODULE_13__["AccessService"],
            _services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], AccessManagementComponent);
    return AccessManagementComponent;
}());

var DialogOverviewCreateAcMn1 = /** @class */ (function () {
    function DialogOverviewCreateAcMn1(dialog, dialogRef, data, roomService, accessService, toastr, doorLockService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.roomService = roomService;
        this.accessService = accessService;
        this.toastr = toastr;
        this.doorLockService = doorLockService;
        this.selectFormControlEmp = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.selectFormControlRoom = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.selectFormControlDoor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.allRooms = [];
        this.allDoors = [];
        this.userHasAccessToAllRooms = false;
    }
    DialogOverviewCreateAcMn1.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewCreateAcMn1.prototype.loadAllRooms = function (event) {
        var _this = this;
        this.userHasAccessToAllRooms = false;
        console.log(event.source.value);
        if (event.source.value instanceof _models_User__WEBPACK_IMPORTED_MODULE_12__["User"]) {
            this.roomService.getInaccesibleRoomsForEmployee(event.source.value.id).subscribe(function (rooms) {
                if (rooms.length == 0) {
                    _this.userHasAccessToAllRooms = true;
                }
                else {
                    _this.allRooms = rooms;
                }
            });
        }
    };
    DialogOverviewCreateAcMn1.prototype.loadDoorLocks = function (event) {
        var _this = this;
        if (event.source.value instanceof _models_Room__WEBPACK_IMPORTED_MODULE_6__["Room"]) {
            this.doorLockService.getInaccessibleDoorLocks(this.selectedEmployee.id, event.source.value.id).subscribe(function (response) {
                _this.allDoors = response;
            });
        }
    };
    DialogOverviewCreateAcMn1.prototype.onOkClick = function () {
        var _this = this;
        this.accessService.registerNewAccess(this.selectedEmployee.id, this.selectedDoor.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (data) {
            _this.toastr.success("Access registered successfully for user ["
                + _this.selectedEmployee.firstName + " " + _this.selectedEmployee.lastName + "] to room ["
                + _this.selectedRoom.name + "], door [" + _this.selectedDoor.name + "]");
            _this.dialogRef.close();
        }, function (error) {
            _this.toastr.error("Something went wrong!");
            _this.dialogRef.close();
        });
    };
    DialogOverviewCreateAcMn1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-create-acmn',
            template: __webpack_require__(/*! ./dialog-overview-create-acmn-1.html */ "./src/app/components/access-management/dialog-overview-create-acmn-1.html"),
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_RoomService__WEBPACK_IMPORTED_MODULE_7__["RoomService"],
            _services_AccessService__WEBPACK_IMPORTED_MODULE_13__["AccessService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _services_DoorLockService__WEBPACK_IMPORTED_MODULE_10__["DoorLockService"]])
    ], DialogOverviewCreateAcMn1);
    return DialogOverviewCreateAcMn1;
}());



/***/ }),

/***/ "./src/app/components/access-management/dialog-overview-create-acmn-1.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/access-management/dialog-overview-create-acmn-1.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Give access to a person.</h1>\r\n<div mat-dialog-content>\r\n  <p></p>\r\n  <mat-form-field id=\"selectUser\" style=\"width: 350px\">\r\n    <mat-select placeholder=\"Select User\" [(ngModel)]=\"selectedEmployee\" [formControl]=\"selectFormControlEmp\" (selectionChange)=\"loadAllRooms($event)\" required>\r\n      <mat-option>--</mat-option>\r\n      <mat-option *ngFor=\"let employee of data.data\" [value]=\"employee\">\r\n        {{employee.firstName}} {{employee.lastName}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-error *ngIf=\"selectFormControlEmp.hasError('required')\">Please choose an user</mat-error>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"!userHasAccessToAllRooms\">\r\n<div mat-dialog-content>\r\n  <p></p>\r\n  <mat-form-field id=\"selectRoom\" style=\"width: 350px\">\r\n    <mat-select placeholder=\"Select Room\" [(ngModel)]=\"selectedRoom\" [formControl]=\"selectFormControlRoom\" (selectionChange)=\"loadDoorLocks($event)\" required>\r\n      <mat-option>--</mat-option>\r\n      <mat-option *ngFor=\"let room of allRooms\" [value]=\"room\">\r\n        {{room.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-error *ngIf=\"selectFormControlRoom.hasError('required')\">Please choose the room</mat-error>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-content>\r\n  <p></p>\r\n  <mat-form-field id=\"selectDoor\" style=\"width: 350px\">\r\n    <mat-select placeholder=\"Select Door\" [(ngModel)]=\"selectedDoor\" [formControl]=\"selectFormControlDoor\" required>\r\n      <mat-option>--</mat-option>\r\n      <mat-option *ngFor=\"let door of allDoors\" [value]=\"door\">\r\n        {{door.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-error *ngIf=\"selectFormControlDoor.hasError('required')\">Please choose the door</mat-error>\r\n  </mat-form-field>\r\n</div>\r\n</div>\r\n<div *ngIf=\"userHasAccessToAllRooms\" class=\"green\">\r\n  This user already has access to all rooms.\r\n</div>\r\n\r\n<p></p>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button cdkFocusInitial (click)=\"onOkClick()\">Ok</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/app.component.css":
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-menu-panel {\r\n  min-width: 35px;\r\n  max-width: 280px;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  max-height: calc(100vh - 48px);\r\n  border-radius: 2px;\r\n  outline: 0;\r\n  background: transparent;\r\n  padding-left: 10px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWVudS1wYW5lbCB7XHJcbiAgbWluLXdpZHRoOiAzNXB4O1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AccessControlSystem-Client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app.module.ts":
/*!******************************************!*\
  !*** ./src/app/components/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _event_table_event_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-table/event-table.component */ "./src/app/components/event-table/event-table.component.ts");
/* harmony import */ var _access_management_access_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./access-management/access-management.component */ "./src/app/components/access-management/access-management.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _services_ActionService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/ActionService */ "./src/app/services/ActionService.ts");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _login_login_componenet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.componenet */ "./src/app/components/login/login.componenet.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./room/room.component */ "./src/app/components/room/room.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.routing */ "./src/app/components/app.routing.ts");
/* harmony import */ var _services_AuthentiticationService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/AuthentiticationService */ "./src/app/services/AuthentiticationService.ts");
/* harmony import */ var _services_AlertService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/AlertService */ "./src/app/services/AlertService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _upload_component_upload_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./upload-component/upload.component */ "./src/app/components/upload-component/upload.component.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _user_create_employee_dialog_overview_create_employee__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/create-employee/dialog-overview-create-employee */ "./src/app/components/user/create-employee/dialog-overview-create-employee.ts");
/* harmony import */ var _user_create_user_dialog_overview_create_user__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/create-user/dialog-overview-create-user */ "./src/app/components/user/create-user/dialog-overview-create-user.ts");
/* harmony import */ var _user_add_finger_print_dialog_overview_add_finger_print__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/add-finger-print/dialog-overview-add-finger-print */ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.ts");
/* harmony import */ var _services_ScannerService__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../services/ScannerService */ "./src/app/services/ScannerService.ts");
/* harmony import */ var _main_nav_account_dialog_accout_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main-nav/account-dialog/accout-dialog */ "./src/app/components/main-nav/account-dialog/accout-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"],
                _event_table_event_table_component__WEBPACK_IMPORTED_MODULE_7__["EventTableComponent"],
                _access_management_access_management_component__WEBPACK_IMPORTED_MODULE_8__["AccessManagementComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
                _login_login_componenet__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_20__["RoomComponent"],
                _upload_component_upload_component__WEBPACK_IMPORTED_MODULE_26__["UploadComponent"],
                _access_management_access_management_component__WEBPACK_IMPORTED_MODULE_8__["DialogOverviewCreateAcMn1"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_20__["DialogOverviewCreateRoom"],
                _user_create_employee_dialog_overview_create_employee__WEBPACK_IMPORTED_MODULE_28__["DialogOverviewCreateEmployee"],
                _user_create_user_dialog_overview_create_user__WEBPACK_IMPORTED_MODULE_29__["DialogOverviewCreateUser"],
                _user_add_finger_print_dialog_overview_add_finger_print__WEBPACK_IMPORTED_MODULE_30__["DialogOverviewAddFingerPrint"],
                _main_nav_account_dialog_accout_dialog__WEBPACK_IMPORTED_MODULE_32__["AccoutDialog"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_17__["CookieModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["PortalModule"]
            ],
            entryComponents: [_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_8__["DialogOverviewCreateAcMn1"], _room_room_component__WEBPACK_IMPORTED_MODULE_20__["DialogOverviewCreateRoom"], _user_create_employee_dialog_overview_create_employee__WEBPACK_IMPORTED_MODULE_28__["DialogOverviewCreateEmployee"], _user_create_user_dialog_overview_create_user__WEBPACK_IMPORTED_MODULE_29__["DialogOverviewCreateUser"], _user_add_finger_print_dialog_overview_add_finger_print__WEBPACK_IMPORTED_MODULE_30__["DialogOverviewAddFingerPrint"], _main_nav_account_dialog_accout_dialog__WEBPACK_IMPORTED_MODULE_32__["AccoutDialog"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]],
            providers: [_services_ActionService__WEBPACK_IMPORTED_MODULE_13__["ActionService"], _services_MessageService__WEBPACK_IMPORTED_MODULE_12__["MessageService"], _services_SpinnerService__WEBPACK_IMPORTED_MODULE_14__["SpinnerService"], _services_AuthentiticationService__WEBPACK_IMPORTED_MODULE_23__["AuthenticationService"], _services_AlertService__WEBPACK_IMPORTED_MODULE_24__["AlertService"], _services_ScannerService__WEBPACK_IMPORTED_MODULE_31__["ScannerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/components/app.routing.ts ***!
  \*******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _login_login_componenet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.componenet */ "./src/app/components/login/login.componenet.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"] },
    { path: 'login', component: _login_login_componenet__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/event-table/event-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/event-table/event-table.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-width-table {\n  width: 100%;\n}\n\n.full-width-table {\n  width: auto;\n  height: 100%;\n  margin-right: 2%;\n  margin-left: 17%;\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC10YWJsZS9ldmVudC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50LXRhYmxlL2V2ZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zaWRlLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/event-table/event-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/event-table/event-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width-table\">\n  <mat-grid-list [cols]=\"2\" rowHeight=\"65px\">\n    <mat-grid-tile >\n      <h1 class=\"align-start text-color\">Actions</h1>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <form class=\"align-end form-style\">\n        <mat-form-field class=\"full-width-input\">\n          <input  matInput placeholder=\"Search\"  (keyup)=\"applyFilter($event.target.value)\" type=\"text\"/>\n        </mat-form-field>\n      </form>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div class=\"mat-elevation-z8\" (scroll)=\"row\">\n\n    <table mat-table class=\"inside-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n      <!-- Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"employeeName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>User name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.employee}}</td>\n      </ng-container>\n\n      <!-- Office Room Column -->\n      <ng-container matColumnDef=\"officeRoom\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Office Room</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.officeRoom}}</td>\n      </ng-container>\n\n      <!-- Direction Column -->\n      <ng-container matColumnDef=\"direction\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Direction</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.direction}}</td>\n      </ng-container>\n\n      <!-- Time Column -->\n      <ng-container matColumnDef=\"time\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Time</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.time}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator\n                   [length]=\"dataSource.data.length\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"20\"\n                   [pageSizeOptions]=\"[20, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/event-table/event-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/event-table/event-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTableComponent", function() { return EventTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _services_ActionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ActionService */ "./src/app/services/ActionService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventTableComponent = /** @class */ (function () {
    function EventTableComponent(spinnerService, messageService, actionService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.messageService = messageService;
        this.actionService = actionService;
        this.actions = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.actions);
        this.displayedColumns = ['id', 'employeeName', 'officeRoom', 'direction', 'time'];
        this.messageService.listen().subscribe(function (event) {
            if (event == 'action') {
                _this.loadAllActions();
            }
        });
    }
    EventTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    EventTableComponent.prototype.ngOnInit = function () {
    };
    EventTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    EventTableComponent.prototype.loadAllActions = function () {
        var _this = this;
        this.subscriptionAction = this.actionService.getAllActions().subscribe(function (actions) {
            _this.dataSource.data = actions;
            var events = document.getElementById('events');
            events.style.display = 'block';
            if (_this.spinnerService.isShowing()) {
                _this.spinnerService.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], EventTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], EventTableComponent.prototype, "sort", void 0);
    EventTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-table',
            template: __webpack_require__(/*! ./event-table.component.html */ "./src/app/components/event-table/event-table.component.html"),
            styles: [__webpack_require__(/*! ./event-table.component.css */ "./src/app/components/event-table/event-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            _services_MessageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_ActionService__WEBPACK_IMPORTED_MODULE_4__["ActionService"]])
    ], EventTableComponent);
    return EventTableComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.componenet.html":
/*!********************************************************!*\
  !*** ./src/app/components/login/login.componenet.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 offset-sm-3\">\r\n        <img src=\"../../../assets/logo.png\" height=\"300px\">\r\n        <br><br>\r\n        <h2>Login</h2>\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input id=\"usernameLoginInput\" type=\"text\" formControlName=\"username\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"/>\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input id=\"passwordLoginInput\" type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/>\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button id=\"loginButtonLoginPage\" [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img style=\"margin-left: 10px\" *ngIf=\"loading\"\r\n                 src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n          </div>\r\n          <div *ngIf=\"wrongUsernameOrPass\" class=\"error-color\">Wrong username or password. Try again ;)\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- credits -->\r\n<div class=\"text-center\">\r\n  <p>\r\n    <a href=\"http://ACS.com\" target=\"_top\">Access Control System in an Office</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.componenet.ts":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.componenet.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_AuthentiticationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/AuthentiticationService */ "./src/app/services/AuthentiticationService.ts");
/* harmony import */ var _services_AlertService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/AlertService */ "./src/app/services/AlertService.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService, zone, cookiesService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.zone = zone;
        this.cookiesService = cookiesService;
        this.loading = false;
        this.submitted = false;
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.wrongUsernameOrPass = false;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            var exp = new Date(2040, 12, 21);
            var cookieOptions = { expires: exp };
            _this.cookiesService.put('token', data, cookieOptions);
            _this.zone.run(function () { return _this.router.navigateByUrl(""); });
        }, function (error) {
            _this.wrongUsernameOrPass = true;
            _this.alertService.error('Authentitication error');
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.componenet.html */ "./src/app/components/login/login.componenet.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_AuthentiticationService__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_AlertService__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main-nav/account-dialog/accout-dialog.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/main-nav/account-dialog/accout-dialog.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-blue-icon {\r\n  margin-left: 40%;\r\n  width: 23px;\r\n  height: 23px;\r\n}\r\n\r\n.align-top {\r\n  position: absolute;\r\n  top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9hY2NvdW50LWRpYWxvZy9hY2NvdXQtZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXYvYWNjb3VudC1kaWFsb2cvYWNjb3V0LWRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1ibHVlLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4uYWxpZ24tdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/main-nav/account-dialog/accout-dialog.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/main-nav/account-dialog/accout-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #EEEEEE\">\r\n  <mat-list style=\"text-align: center;\">\r\n    <mat-list-item >\r\n      <div style=\"text-align: center\">\r\n        Signed in as\r\n        <b style=\"text-align: center\">Gicu Nanii</b>\r\n      </div>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n  </mat-list>\r\n</div>\r\n\r\n<mat-list style=\"text-align: center;\">\r\n  <mat-list-item>\r\n    <button mat-raised-button style=\"width: 100%\">Account</button>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <button mat-raised-button style=\"width: 100%\">Privacy</button>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <button mat-raised-button style=\"width: 100%; background-color: #DC3545\" (click)='signOut();'>Sign out</button>\r\n  </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./src/app/components/main-nav/account-dialog/accout-dialog.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/main-nav/account-dialog/accout-dialog.ts ***!
  \*********************************************************************/
/*! exports provided: AccoutDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccoutDialog", function() { return AccoutDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccoutDialog = /** @class */ (function () {
    function AccoutDialog(zone, router, cookiesService, dialogRef) {
        this.zone = zone;
        this.router = router;
        this.cookiesService = cookiesService;
        this.dialogRef = dialogRef;
    }
    AccoutDialog.prototype.signOut = function () {
        var _this = this;
        this.cookiesService.remove('token');
        this.zone.run(function () { return _this.router.navigateByUrl("login"); });
        this.dialogRef.close();
    };
    AccoutDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account-dialog',
            template: __webpack_require__(/*! ./accout-dialog.html */ "./src/app/components/main-nav/account-dialog/accout-dialog.html"),
            styles: [__webpack_require__(/*! ./accout-dialog.css */ "./src/app/components/main-nav/account-dialog/accout-dialog.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], AccoutDialog);
    return AccoutDialog;
}());



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #drawer class=\"sidenav\"\n               [fixedInViewport]=\"true\"\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n               [opened]=\"!(isHandset$ | async)\">\n    <mat-nav-list>\n      <mat-button-toggle-group [vertical]=\"true\" class=\"mat-button-toggle-group\" value=\"default\">\n        <mat-button-toggle class=\"menu-button\" (click)='loadAccessManagementComponent();' value=\"default\">Access\n          Management\n        </mat-button-toggle>\n        <mat-button-toggle id=\"userMenuButton\" class=\"menu-button\" (click)='loadUserComponent();'>Users</mat-button-toggle>\n        <mat-button-toggle class=\"menu-button\" (click)='loadRoomsComponent();'>Rooms</mat-button-toggle>\n        <mat-button-toggle class=\"menu-button\" (click)='loadEventsComponent();'>Actions</mat-button-toggle>\n        <mat-button-toggle class=\"menu-button\" (click)='loadReportsComponent();'>Reports</mat-button-toggle>\n      </mat-button-toggle-group>\n    </mat-nav-list>\n  </mat-sidenav>\n</mat-sidenav-container>\n\n<mat-sidenav-container>\n  <mat-sidenav-content class=\"orange\">\n    <mat-toolbar color=\"primary\" class=\"access-constrol-system\">\n      <mat-grid-list [cols]=\"7\" rowHeight=\"100%\">\n        <mat-grid-tile class=\"center\">\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            class=\"fa fa-bars\"\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\">Menu</mat-icon>\n          </button>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"5\">\n          <span class=\"center\">Access Control System</span>\n        </mat-grid-tile>\n        <mat-grid-tile style=\"margin-left: 30px\">\n          <i class=\"large material-icons\" style=\"margin: 15px\" >notifications</i>\n          <i class=\"large material-icons\" style=\"margin: 15px\">settings</i>\n          <i class=\"material-icons\" style=\"margin: 15px\" (click)='openAccoutDialog();'>account_circle</i>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-toolbar>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<app-spinner></app-spinner>\n\n<app-access-management id=\"accessManagement\"></app-access-management>\n<app-user id=\"users\"></app-user>\n<app-room id=\"rooms\"></app-room>\n<app-event-table id=\"events\"></app-event-table>\n<app-report id=\"reports\"></app-report>\n"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 15%;\n  margin-top: 35px;\n  background: gainsboro; }\n\n.mat-toolbar.mat-primary {\n  height: 35px; }\n\n.menu-button {\n  text-align: center;\n  width: 100%;\n  border: none;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: small; }\n\n.mat-button-toggle-group {\n  width: 100%;\n  border: none;\n  margin: 0;\n  border-radius: 0;\n  padding: 0; }\n\n.mat-button-toggle {\n  background-color: gainsboro;\n  border: 1px; }\n\n.mat-button-toggle-checked {\n  background-color: darkorange;\n  color: white;\n  border: 0;\n  border-radius: 0;\n  padding: 0; }\n\n.mat-nav-list {\n  margin: 0;\n  padding: 0; }\n\n.mat-button-toggle-login-logout-group {\n  align-content: end;\n  border: none;\n  margin: 0;\n  border-radius: 0;\n  padding: 0; }\n\n.login-logout-icons {\n  text-align: center;\n  width: 100%;\n  border: none;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: small; }\n\n.access-constrol-system {\n  font-size: medium;\n  display: inline-block;\n  margin: 0;\n  position: fixed; }\n\nmat-sidenav-content {\n  margin-left: 0 !important;\n  flex: 1 1 auto; }\n\n.information-icon {\n  margin-left: 10%;\n  width: 23px;\n  height: 23px; }\n\n.setting-icon {\n  margin-left: 10%;\n  width: 23px;\n  height: 23px; }\n\n.account-icon {\n  color: #EFA023;\n  margin-left: 40%;\n  width: 23px;\n  height: 23px; }\n\n.button-icon {\n  background-color: #3F51B5; }\n\n.custom-dialog-container {\n  padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9EOlxccGVyc29uYWxcXEFDU1xcQWNjZXNzQ29udHJvbFN5c3RlbVxccHJvamVjdFxcQWNjZXNzQ29udHJvbFN5c3RlbS1DbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW4tbmF2XFxtYWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7O0FBR2I7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUlaO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBT2pCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWVudS1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIGJvcmRlcjogMXB4O1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xuXG59XG5cbi5tYXQtbmF2LWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1sb2dpbi1sb2dvdXQtZ3JvdXAge1xuICBhbGlnbi1jb250ZW50OiBlbmQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9naW4tbG9nb3V0LWljb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5hY2Nlc3MtY29uc3Ryb2wtc3lzdGVtIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5maXhlZCB7XG4gIC8vcG9zaXRpb246IGZpeGVkO1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5pbmZvcm1hdGlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLnNldHRpbmctaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbi5hY2NvdW50LWljb24ge1xuICBjb2xvcjogI0VGQTAyMztcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLmJ1dHRvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbn1cblxuLmN1c3RvbS1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50Oztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _services_AuthentiticationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/AuthentiticationService */ "./src/app/services/AuthentiticationService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _account_dialog_accout_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-dialog/accout-dialog */ "./src/app/components/main-nav/account-dialog/accout-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, messageService, spinnerService, authentiticationService, zone, router, dialog, cookiesService) {
        this.breakpointObserver = breakpointObserver;
        this.messageService = messageService;
        this.spinnerService = spinnerService;
        this.authentiticationService = authentiticationService;
        this.zone = zone;
        this.router = router;
        this.dialog = dialog;
        this.cookiesService = cookiesService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authentiticationService.isAuthentiticated()
            .pipe()
            .subscribe(function (data) {
            console.log('Token is valid.');
            _this.loadAccessManagementComponent();
        }, function (error) {
            console.log('Token is invalid - ' + error);
            _this.cookiesService.remove('token');
            _this.zone.run(function () { return _this.router.navigateByUrl("login"); });
        });
    };
    MainNavComponent.prototype.loadAccessManagementComponent = function () {
        this.hideAll();
        this.spinnerService.show();
        this.messageService.notify('accessManagement');
    };
    MainNavComponent.prototype.loadUserComponent = function () {
        this.hideAll();
        this.spinnerService.show();
        this.messageService.notify('users');
    };
    MainNavComponent.prototype.loadRoomsComponent = function () {
        this.hideAll();
        this.spinnerService.show();
        this.messageService.notify('rooms');
    };
    MainNavComponent.prototype.loadEventsComponent = function () {
        this.hideAll();
        this.spinnerService.show();
        this.messageService.notify('action');
    };
    MainNavComponent.prototype.loadReportsComponent = function () {
        this.hideAll();
        this.spinnerService.show();
        this.messageService.notify('reports');
    };
    MainNavComponent.prototype.hideAll = function () {
        var accessManagement = document.getElementById('accessManagement');
        var users = document.getElementById('users');
        var reports = document.getElementById('reports');
        var events = document.getElementById('events');
        var rooms = document.getElementById('rooms');
        accessManagement.style.display = 'none';
        reports.style.display = 'none';
        events.style.display = 'none';
        users.style.display = 'none';
        rooms.style.display = 'none';
    };
    MainNavComponent.prototype.openAccoutDialog = function () {
        this.dialog.open(_account_dialog_accout_dialog__WEBPACK_IMPORTED_MODULE_9__["AccoutDialog"], {
            width: '280px',
            height: '220px',
            position: { top: '50px', right: '10px' },
            panelClass: 'custom-dialog-container'
        });
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/components/main-nav/main-nav.component.html"),
            providers: [ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/components/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_MessageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_SpinnerService__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _services_AuthentiticationService__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/report/report.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/report/report.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-width-table {\n  width: 100%;\n}\n\n\n.full-width-table {\n  width: auto;\n  height: 100%;\n  margin-right: 2%;\n  margin-left: 17%;\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNpZGUtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1sZWZ0OiAxNyU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/report/report.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/report/report.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width-table\">\n  <mat-grid-list [cols]=\"2\" rowHeight=\"65px\">\n    <mat-grid-tile >\n      <h1 class=\"align-start text-color\">Reports</h1>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <form class=\"align-end form-style\">\n        <mat-form-field class=\"full-width-input\">\n          <input  matInput placeholder=\"Search\"  (keyup)=\"applyFilter($event.target.value)\" type=\"text\"/>\n        </mat-form-field>\n      </form>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div class=\"mat-elevation-z8\" (scroll)=\"row\">\n    <table mat-table class=\"inside-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n      <!-- Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- User Name Column -->\n      <ng-container matColumnDef=\"employeeName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>User name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.employeeName}}</td>\n      </ng-container>\n\n\n      <!-- Departament Column -->\n      <ng-container matColumnDef=\"departament\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Departament</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.departament}}</td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Position</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.position}}</td>\n      </ng-container>\n\n\n      <!-- Month Column -->\n      <ng-container matColumnDef=\"month\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Month</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.month}}</td>\n      </ng-container>\n\n      <!-- Worked Hours Column -->\n      <ng-container matColumnDef=\"workedHours\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Worked Hours</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.workedHours}}</td>\n      </ng-container>\n\n      <!-- Moves Column -->\n      <ng-container matColumnDef=\"moves\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Moves</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.moves}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator\n                   [length]=\"dataSource.data.length\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"20\"\n                   [pageSizeOptions]=\"[20, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _services_ReportService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ReportService */ "./src/app/services/ReportService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportComponent = /** @class */ (function () {
    function ReportComponent(spinnerService, messageService, reportService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.messageService = messageService;
        this.reportService = reportService;
        this.reports = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reports);
        this.displayedColumns = ['id', 'employeeName', 'departament', 'position', 'month', 'workedHours', 'moves'];
        this.messageService.listen().subscribe(function (event) {
            if (event == 'reports') {
                _this.loadAllReports();
            }
        });
    }
    ReportComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ReportComponent.prototype.loadAllReports = function () {
        var _this = this;
        this.subscriptionAction = this.reportService.getAllReports().subscribe(function (reports) {
            _this.dataSource.data = reports;
            var events = document.getElementById('reports');
            events.style.display = 'block';
            if (_this.spinnerService.isShowing()) {
                _this.spinnerService.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReportComponent.prototype, "sort", void 0);
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/components/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/components/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            _services_MessageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_ReportService__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/components/room/dialog-overview-create-room.html":
/*!******************************************************************!*\
  !*** ./src/app/components/room/dialog-overview-create-room.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create a new room.</h1>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field style=\"width: 350px\">\r\n    <input matInput [(ngModel)]=\"room.name\" placeholder=\"Room name\">\r\n  </mat-form-field>\r\n  <mat-form-field style=\"width: 350px\">\r\n    <input matInput [(ngModel)]=\"door.name\" placeholder=\"Door identifier\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"roomNameAlreadyExist\" class=\"green\">\r\n  This room name already exist;\r\n</div>\r\n<div *ngIf=\"doorIdentifierAlreadyExist\" class=\"green\">\r\n  This door identifier name already exist;\r\n</div>\r\n\r\n<p></p>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button cdkFocusInitial (click)=\"onOkClick()\">Ok</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/room/room.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/room/room.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-width-table {\n  width: 100%;\n}\n\n\n.full-width-table {\n  width: auto;\n  height: 100%;\n  margin-right: 2%;\n  margin-left: 17%;\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n\n\n.create-delete-buttons button,\n.create-delete-buttons a {\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb29tL3Jvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7O0FBR0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb29tL3Jvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNpZGUtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1sZWZ0OiAxNyU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuXG4uY3JlYXRlLWRlbGV0ZS1idXR0b25zIGJ1dHRvbixcbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbnMgYSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/room/room.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/room/room.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width-table\">\n  <mat-grid-list [cols]=\"2\" rowHeight=\"90px\">\n    <mat-grid-tile>\n      <h1 class=\"align-start text-color align-top\">Rooms</h1>\n    </mat-grid-tile>\n    <mat-grid-tile>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <div class=\"create-delete-buttons align-start\">\n        <button mat-raised-button color=\"primary\" (click)=\"openCreateDialog()\">Create</button>\n        <button *ngIf=\"selection.hasValue()\" mat-raised-button color=\"warn\" (click)=\"deleteSelected()\">Delete</button>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <form class=\"align-end form-style\">\n        <mat-form-field class=\"full-width-input\">\n          <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\" type=\"text\"/>\n        </mat-form-field>\n      </form>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n  <div class=\"mat-elevation-z8\" (scroll)=\"row\">\n    <table mat-table class=\"inside-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n      <!-- Checkbox Column -->\n      <ng-container matColumnDef=\"checkBox\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? (selection.toggle(row) && displyButton()) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <!-- Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- Room Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n      </ng-container>\n\n      <!-- Door Column -->\n      <ng-container matColumnDef=\"doorLocks\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Doors</th>\n        <td mat-cell *matCellDef=\"let row  \">{{row.doorNames}}</td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator\n                   [length]=\"dataSource.data.length\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"20\"\n                   [pageSizeOptions]=\"[20, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/room/room.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent, DialogOverviewCreateRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewCreateRoom", function() { return DialogOverviewCreateRoom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _models_Room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Room */ "./src/app/models/Room.ts");
/* harmony import */ var _services_RoomService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/RoomService */ "./src/app/services/RoomService.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _models_DoorLock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/DoorLock */ "./src/app/models/DoorLock.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_DoorLockService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/DoorLockService */ "./src/app/services/DoorLockService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var RoomComponent = /** @class */ (function () {
    function RoomComponent(spinnerService, messageService, roomService, toastr, dialog) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.messageService = messageService;
        this.roomService = roomService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.reports = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reports);
        this.displayedColumns = ['checkBox', 'id', 'name', 'doorLocks'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.messageService.listen().subscribe(function (event) {
            if (event == 'rooms') {
                _this.loadAllRooms();
            }
        });
    }
    RoomComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    RoomComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    RoomComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.filteredData.forEach(function (row) { return _this.selection.select(row); });
    };
    RoomComponent.prototype.loadAllRooms = function () {
        var _this = this;
        this.subscriptionAction = this.roomService.getAllRooms().subscribe(function (room) {
            _this.dataSource.data = room;
            var events = document.getElementById('rooms');
            events.style.display = 'block';
            if (_this.spinnerService.isShowing()) {
                _this.spinnerService.hide();
            }
        });
    };
    RoomComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewCreateRoom, {
            width: '400px',
            data: { 'data': 'data' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.loadAllRooms();
        });
    };
    RoomComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selection.selected.length > 0) {
            var room = this.selection.selected[0];
            this.roomService.deleteRoom(room.id)
                .pipe()
                .subscribe(function (data) {
                _this.toastr.success("Room ["
                    + room.name + "] was removed sucessfully!");
                _this.selection.deselect(room);
                _this.deleteSelected();
            }, function (error) {
                _this.toastr.error("Something went wrong!");
                _this.loadAllRooms();
            });
        }
        this.loadAllRooms();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RoomComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], RoomComponent.prototype, "sort", void 0);
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/components/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [_services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            _services_MessageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_RoomService__WEBPACK_IMPORTED_MODULE_5__["RoomService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], RoomComponent);
    return RoomComponent;
}());

var DialogOverviewCreateRoom = /** @class */ (function () {
    function DialogOverviewCreateRoom(dialog, dialogRef, data, roomService, toastr, doorLockService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.roomService = roomService;
        this.toastr = toastr;
        this.doorLockService = doorLockService;
        this.room = new _models_Room__WEBPACK_IMPORTED_MODULE_4__["Room"](undefined, undefined, undefined, undefined);
        this.door = new _models_DoorLock__WEBPACK_IMPORTED_MODULE_7__["DoorLock"](undefined, undefined, undefined);
        this.doorIdentifierAlreadyExist = false;
        this.roomNameAlreadyExist = false;
    }
    DialogOverviewCreateRoom.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewCreateRoom.prototype.onOkClick = function () {
        var _this = this;
        this.roomService.createRoom(this.room.name, this.door.name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
            .subscribe(function (data) {
            _this.toastr.success("The combination room ["
                + _this.room.name + "] - door [" + _this.door.name + "] was created sucessfully.");
            _this.dialogRef.close();
        }, function (error) {
            if (error == null) {
                _this.toastr.error("Something went wrong!");
            }
            else {
                _this.toastr.error(JSON.parse(JSON.stringify(error)).error);
            }
            _this.dialogRef.close();
        });
    };
    DialogOverviewCreateRoom = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-create-room',
            template: __webpack_require__(/*! ./dialog-overview-create-room.html */ "./src/app/components/room/dialog-overview-create-room.html"),
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_RoomService__WEBPACK_IMPORTED_MODULE_5__["RoomService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _services_DoorLockService__WEBPACK_IMPORTED_MODULE_9__["DoorLockService"]])
    ], DialogOverviewCreateRoom);
    return DialogOverviewCreateRoom;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-view {\r\n  margin-left: 50%;\r\n  margin-top: 20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItdmlldyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"center-view\" >\n  <mat-spinner mode=\"indeterminate\" color=\"accent\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.visible = true;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerStateChanged = this.spinnerService.spinnerState
            .subscribe(function (state) {
            _this.visible = state.show;
        });
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.spinnerStateChanged.unsubscribe();
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/components/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [_services_SpinnerService__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-component/upload.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/upload-component/upload.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-style{\r\n  margin: 10px;\r\n}\r\n\r\n.loadImage{\r\n  background: #5CCC6E;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtY29tcG9uZW50L3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtY29tcG9uZW50L3VwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1zdHlsZXtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5sb2FkSW1hZ2V7XHJcbiAgYmFja2dyb3VuZDogIzVDQ0M2RTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/upload-component/upload.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-component/upload.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1px solid gray;\">\r\n  <input style=\"display: none;\" class=\"loadImage\" #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\">\r\n  <img [src]=\"imgURL\" width=\"350\" style=\"max-height:250px; max-width:250px\" *ngIf=\"imgURL\" (click)=\"file.click()\">\r\n  <button (click)=\"file.click()\" *ngIf=\"!imgURL\">\r\n    <img src=\"../../../assets/user-blue-icon.png\" height=\"256\" class=\"account-icon\"/>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/upload-component/upload.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upload-component/upload.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
    }
    UploadComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            'selector': 'input-file',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/components/upload-component/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/components/upload-component/upload.component.css")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-blue-icon {\r\n  margin-left: 40%;\r\n  width: 23px;\r\n  height: 23px;\r\n}\r\n\r\n.align-top {\r\n  position: absolute;\r\n  top: 5px;\r\n}\r\n\r\n.scan-image{\r\n  width : 270px;\r\n  margin-right: 40px;\r\n  margin-left: 40px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.completed-scan{\r\n  width : 270px;\r\n  margin-right: 100px;\r\n  margin-left: 100px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.mat-raised-button {\r\n  margin-left: 75px;\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2FkZC1maW5nZXItcHJpbnQvZGlhbG9nLW92ZXJ2aWV3LWFkZC1maW5nZXItcHJpbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUdBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9hZGQtZmluZ2VyLXByaW50L2RpYWxvZy1vdmVydmlldy1hZGQtZmluZ2VyLXByaW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWJsdWUtaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuXHJcbi5hbGlnbi10b3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxufVxyXG5cclxuXHJcbi5zY2FuLWltYWdle1xyXG4gIHdpZHRoIDogMjcwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtc2NhbntcclxuICB3aWR0aCA6IDI3MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!NFCKeyTypeSelected && !fingerPrintTypeSelected\">\r\n  <h1 mat-dialog-title>Please select key type</h1>\r\n</div>\r\n<div *ngIf=\"fingerPrintTypeSelected && selectFormControlRoom.hasError('required') && !successfullyRegistered\">\r\n  <h1 mat-dialog-title>Please select a scanner</h1>\r\n</div>\r\n<div *ngIf=\"fingerPrintTypeSelected && !selectFormControlRoom.hasError('required') && !successfullyRegistered\">\r\n  <h1 mat-dialog-title>Please scan your finger</h1>\r\n</div>\r\n<div *ngIf=\"successfullyRegistered\">\r\n  <h1 mat-dialog-title>Please Confirm User creation</h1>\r\n</div>\r\n\r\n\r\n<div mat-dialog-content>\r\n\r\n  <mat-form-field style=\"width: 350px\">\r\n    <mat-select id=\"createUserSelectKeyType\" placeholder=\"Select Key Type\" [(ngModel)]=\"selectedKeyType\"\r\n                (selectionChange)=\"displyKeyInputType($event)\" required>\r\n      <mat-option *ngFor=\"let keyType of allKeyTypes\" [value]=\"keyType\">\r\n        {{keyType}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <p></p>\r\n\r\n  <div *ngIf=\"fingerPrintTypeSelected\">\r\n    <mat-form-field style=\"width: 350px\">\r\n      <mat-select placeholder=\"Select Room\" [(ngModel)]=\"selectedScanner\" [formControl]=\"selectFormControlRoom\"\r\n                  (selectionChange)=\"displyScanners($event)\"  required>\r\n        <mat-option>--</mat-option>\r\n        <mat-option *ngFor=\"let scanner of allScanners\" [value]=\"scanner\">\r\n          {{scanner.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"selectFormControlRoom.hasError('required')\">Please choose the room</mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"NFCKeyTypeSelected\">\r\n    <mat-form-field style=\"height: auto; min-width: 350px\">\r\n      <input id=\"createUserNFCkeyInput\" matInput [(ngModel)]=\"NFCKeyId\" placeholder=\"Key ID\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div *ngIf=\"fingerPrintTypeSelected\">\r\n    <div *ngIf=\"!selectFormControlRoom.hasError('required')\" style=\"margin-top: 20px; margin-bottom:15px\"\r\n         (click)=\"onTestFingerClick()\">\r\n\r\n      <div *ngIf=\"!successfullyRegistered\">\r\n        <h5 align=\"middle\">Please put your finger on scanner.</h5>\r\n\r\n        <img *ngIf=\"nothingScanned\" src=\"../../../../assets/1.png\" class=\"scan-image\"/>\r\n\r\n        <img *ngIf=\"firstScanGif\" src=\"../../../../assets/1.gif\" class=\"scan-image\"/>\r\n\r\n        <img *ngIf=\"secondScan\" src=\"../../../../assets/2.png\" class=\"scan-image\"/>\r\n        <img *ngIf=\"secondScanGif\" src=\"../../../../assets/2.gif\" class=\"scan-image\"/>\r\n\r\n        <img *ngIf=\"thirdScan\" src=\"../../../../assets/3.png\" class=\"scan-image\"/>\r\n        <img *ngIf=\"thirdScanGif\" src=\"../../../../assets/3.gif\" class=\"scan-image\"/>\r\n\r\n        <img *ngIf=\"fourthScan\" src=\"../../../../assets/4.png\" class=\"scan-image\"/>\r\n        <img *ngIf=\"fourthScanGif\" src=\"../../../../assets/4.gif\" class=\"scan-image\"/>\r\n      </div>\r\n\r\n      <div *ngIf=\"successfullyRegistered\">\r\n        <h5 align=\"middle\">Sucessfully register new finger print</h5>\r\n        <img src=\"../../../../assets/scan_finger_step_4.png\" class=\"completed-scan\"/>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div *ngIf=\"successfullyRegistered\" style=\"margin-top: 30px;\">\r\n  <mat-form-field style=\"height: auto; width: 200px\">\r\n    <input id=\"createUserKeyNameInput\" matInput [(ngModel)]=\"fingerPrintName\" placeholder=\"Name\">\r\n  </mat-form-field>\r\n  <button id=\"createUserOkButton\" mat-raised-button color=\"primary\" (click)=\"onOkClick()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogOverviewAddFingerPrint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewAddFingerPrint", function() { return DialogOverviewAddFingerPrint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/UserService */ "./src/app/services/UserService.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_Key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/Key */ "./src/app/models/Key.ts");
/* harmony import */ var _services_ScannerService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/ScannerService */ "./src/app/services/ScannerService.ts");
/* harmony import */ var _models_ScannerType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/ScannerType */ "./src/app/models/ScannerType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var DialogOverviewAddFingerPrint = /** @class */ (function () {
    function DialogOverviewAddFingerPrint(dialog, dialogRef, employeeData, employeeService, toastr, scannerService) {
        var _this = this;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.employeeData = employeeData;
        this.employeeService = employeeService;
        this.toastr = toastr;
        this.scannerService = scannerService;
        this.selectFormControlRoom = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.allKeyTypes = ['Finger Print', 'NFC Key'];
        this.allScanners = [];
        this.keys = [];
        this.keyValues = [];
        this.nothingScanned = true;
        this.firstScanGif = false;
        this.secondScan = false;
        this.secondScanGif = false;
        this.thirdScanGif = false;
        this.thirdScan = false;
        this.fourthScan = false;
        this.fourthScanGif = false;
        this.successfullyRegistered = false;
        this.fingerPrintTypeSelected = false;
        this.NFCKeyTypeSelected = false;
        this.scannerService.getAllScannersByType(_models_ScannerType__WEBPACK_IMPORTED_MODULE_8__["ScannerTypeEnum"].FINGERPRINT_SCANNER).subscribe(function (scanners) {
            _this.allScanners = scanners;
        });
    }
    DialogOverviewAddFingerPrint.prototype.onTestFingerClick = function () {
        var _this = this;
        if (this.nothingScanned) {
            this.nothingScanned = false;
            this.firstScanGif = true;
            setTimeout(function () {
                _this.resetAllFrames();
                _this.secondScan = true;
            }, 2000);
        }
        if (this.secondScan) {
            this.secondScan = false;
            this.secondScanGif = true;
            setTimeout(function () {
                _this.resetAllFrames();
                _this.thirdScan = true;
            }, 2000);
        }
        if (this.thirdScan) {
            this.thirdScan = false;
            this.thirdScanGif = true;
            setTimeout(function () {
                _this.resetAllFrames();
                _this.fourthScan = true;
            }, 2000);
        }
        if (this.fourthScan) {
            this.fourthScan = false;
            this.fourthScanGif = true;
            setTimeout(function () {
                _this.resetAllFrames();
                _this.successfullyRegistered = true;
            }, 2000);
        }
    };
    DialogOverviewAddFingerPrint.prototype.resetAllFrames = function () {
        this.nothingScanned = false;
        this.firstScanGif = false;
        this.secondScan = false;
        this.secondScanGif = false;
        this.thirdScanGif = false;
        this.thirdScan = false;
        this.fourthScan = false;
        this.fourthScanGif = false;
        this.successfullyRegistered = false;
    };
    DialogOverviewAddFingerPrint.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewAddFingerPrint.prototype.onOkClick = function () {
        var _this = this;
        var newKet;
        if (this.NFCKeyTypeSelected) {
            newKet = new _models_Key__WEBPACK_IMPORTED_MODULE_6__["Key"](null, this.fingerPrintName, this.NFCKeyId, null, null, null, this.selectedKeyType);
            this.keys.push(newKet);
        }
        else if (this.fingerPrintTypeSelected) {
            if (this.keyValues.length == 4) {
                var newKet_1 = new _models_Key__WEBPACK_IMPORTED_MODULE_6__["Key"](null, this.fingerPrintName, this.keyValues[0].toString(), this.keyValues[0].toString(), this.keyValues[0].toString(), this.keyValues[0].toString(), this.selectedKeyType);
                this.keys.push(newKet_1);
            }
            else {
                console.log("Not 4 times the finger was scanned.");
            }
        }
        this.employeeData.employee.keys = this.keys;
        this.employeeService.createNewUser(this.employeeData.employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.toastr.success("A new user was created successfully");
            _this.dialogRef.close();
        }, function (error) {
            _this.toastr.error("Something went wrong!");
            _this.dialogRef.close();
        });
    };
    DialogOverviewAddFingerPrint.prototype.displyKeyInputType = function ($event) {
        console.log($event.source.value == 'Finger Print');
        if ($event.source.value == 'Finger Print') {
            this.fingerPrintTypeSelected = true;
            this.NFCKeyTypeSelected = false;
            this.successfullyRegistered = false;
        }
        else if ($event.source.value == 'NFC Key') {
            this.NFCKeyTypeSelected = true;
            this.fingerPrintTypeSelected = false;
            this.successfullyRegistered = true;
        }
    };
    DialogOverviewAddFingerPrint.prototype.displyScanners = function ($event) {
        this.switchToScannerMode();
    };
    DialogOverviewAddFingerPrint.prototype.switchToScannerMode = function () {
        var _this = this;
        console.log("Selected scanner " + this.selectedScanner.name);
        var scannerId = this.selectedScanner.name;
        this.scannerService.switchScannerToRegistarationMode(scannerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.scannerService.waitForScannerEvent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                console.log("Received keyValue" + data);
                _this.nothingScanned = false;
                _this.firstScanGif = true;
                setTimeout(function () {
                    _this.resetAllFrames();
                    _this.secondScan = true;
                }, 2000);
                _this.addKey(data);
                _this.scannerService.waitForScannerEvent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (data) {
                    console.log("Received keyValue" + data);
                    _this.secondScan = false;
                    _this.secondScanGif = true;
                    setTimeout(function () {
                        _this.resetAllFrames();
                        _this.thirdScan = true;
                    }, 2000);
                    _this.addKey(data);
                    _this.scannerService.waitForScannerEvent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        console.log("Received keyValue" + data);
                        _this.thirdScan = false;
                        _this.thirdScanGif = true;
                        setTimeout(function () {
                            _this.resetAllFrames();
                            _this.fourthScan = true;
                        }, 2000);
                        _this.addKey(data);
                        _this.scannerService.switchScannerBackToInitialMode(scannerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                            .subscribe(function (data) {
                            console.log("Received keyValue" + data);
                            _this.fourthScan = false;
                            _this.fourthScanGif = true;
                            setTimeout(function () {
                                _this.resetAllFrames();
                                _this.successfullyRegistered = true;
                            }, 2000);
                            _this.addKey(data);
                            console.log("Switched scanner to scanning mode!");
                        }, function (error) {
                            _this.toastr.error("Time out!");
                            _this.switchBackToScannningMode(scannerId);
                            _this.dialogRef.close();
                        });
                    }, function (error) {
                        _this.toastr.error("Time out!");
                        _this.switchBackToScannningMode(scannerId);
                        _this.dialogRef.close();
                    });
                }, function (error) {
                    _this.toastr.error("Time out!");
                    _this.switchBackToScannningMode(scannerId);
                    _this.dialogRef.close();
                });
            }, function (error) {
                _this.toastr.error("Time out!");
                _this.switchBackToScannningMode(scannerId);
                _this.dialogRef.close();
            });
        }, function (error) {
            _this.toastr.error("Something went wrong with scanner!");
            _this.dialogRef.close();
            _this.switchBackToScannningMode(scannerId);
        });
    };
    DialogOverviewAddFingerPrint.prototype.switchBackToScannningMode = function (scanner) {
        this.scannerService.switchScannerBackToScanningMode(scanner).subscribe(function (data) {
            console.log("Switched scanner to scanning mode!");
        });
    };
    DialogOverviewAddFingerPrint.prototype.addKey = function (number) {
        this.keyValues.push(number);
    };
    DialogOverviewAddFingerPrint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-create-user',
            template: __webpack_require__(/*! ./dialog-overview-add-finger-print.html */ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-add-finger-print.css */ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_ScannerService__WEBPACK_IMPORTED_MODULE_7__["ScannerService"]])
    ], DialogOverviewAddFingerPrint);
    return DialogOverviewAddFingerPrint;
}());



/***/ }),

/***/ "./src/app/components/user/create-employee/dialog-overview-create-employee.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user/create-employee/dialog-overview-create-employee.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-blue-icon {\r\n  margin-left: 40%;\r\n  width: 23px;\r\n  height: 23px;\r\n}\r\n\r\n.align-top {\r\n  position: absolute;\r\n  top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS1lbXBsb3llZS9kaWFsb2ctb3ZlcnZpZXctY3JlYXRlLWVtcGxveWVlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9jcmVhdGUtZW1wbG95ZWUvZGlhbG9nLW92ZXJ2aWV3LWNyZWF0ZS1lbXBsb3llZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1ibHVlLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4uYWxpZ24tdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/create-employee/dialog-overview-create-employee.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/create-employee/dialog-overview-create-employee.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create a new user.</h1>\r\n<div>\r\n  <mat-dialog-content style=\"margin-bottom: 50px\">\r\n\r\n    <mat-grid-list [cols]=\"2\" style=\"margin-top: 20px; margin-left: 20px; margin-right: 20px\">\r\n      <mat-grid-tile style=\"height: auto;\">\r\n        <div mat-dialog-content style=\"height: auto;\">\r\n\r\n          <mat-form-field style=\"height: auto; width: 300px;\">\r\n            <input id=\"createUserFirstNameInput\" matInput [(ngModel)]=\"firstName\" placeholder=\"First name\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"height: auto; width: 300px\">\r\n            <input id=\"createUserLastNameInput\" matInput [(ngModel)]=\"lastName\" placeholder=\"Last name\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"height: auto; width: 300px\">\r\n            <input id=\"createUserDepartmentInput\" matInput [(ngModel)]=\"department\" placeholder=\"Departament\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"height: auto; width: 300px\">\r\n            <input id=\"createUserPositionInput\" matInput [(ngModel)]=\"position\" placeholder=\"Position\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"height: auto; width: 300px\">\r\n            <mat-select id=\"createUserRoleDropDown\" placeholder=\"Role\" [(ngModel)]=\"selectedRole\">\r\n              <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\r\n                {{role.viewValue}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"height: auto; width: 300px\">\r\n            <mat-select id=\"createUserRoomDropDown\" placeholder=\"Select Room\" [(ngModel)]=\"workingRoom\">\r\n              <mat-option *ngFor=\"let room of allRooms\" [value]=\"room\">\r\n                {{room.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile style=\"height: auto;\">\r\n        <input-file class=\"align-top\"></input-file>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n    <div *ngIf=\"dispalyErrorMessage\" class=\"red-color\">\r\n      {{errorMessage.toString()}}\r\n    </div>\r\n\r\n  </mat-dialog-content>\r\n\r\n  <div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n    <button id=\"createUserOkButton\" mat-button cdkFocusInitial (click)=\"onOkClick()\">Ok</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/create-employee/dialog-overview-create-employee.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/user/create-employee/dialog-overview-create-employee.ts ***!
  \************************************************************************************/
/*! exports provided: DialogOverviewCreateEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewCreateEmployee", function() { return DialogOverviewCreateEmployee; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_RoomService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/RoomService */ "./src/app/services/RoomService.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _create_user_dialog_overview_create_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-user/dialog-overview-create-user */ "./src/app/components/user/create-user/dialog-overview-create-user.ts");
/* harmony import */ var _upload_component_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../upload-component/upload.component */ "./src/app/components/upload-component/upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogOverviewCreateEmployee = /** @class */ (function () {
    function DialogOverviewCreateEmployee(dialog, dialogRef, roomService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.roomService = roomService;
        this.roles = [
            { value: 0, viewValue: 'Operator' },
            { value: 1, viewValue: 'Administrator' }
        ];
        this.allRooms = [];
        this.firstName = null;
        this.lastName = null;
        this.department = null;
        this.position = null;
        this.selectedRole = null;
        this.errorMessage = null;
        this.dispalyErrorMessage = false;
        this.loadAllRooms();
    }
    DialogOverviewCreateEmployee.prototype.loadAllRooms = function () {
        var _this = this;
        this.roomService.getAllRooms().subscribe(function (rooms) {
            _this.allRooms = rooms;
        });
    };
    DialogOverviewCreateEmployee.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewCreateEmployee.prototype.onOkClick = function () {
        console.log('Image' + this.uploadComponent.imagePath);
        var emplyee = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"](null, null, null, this.firstName, this.lastName, this.selectedRole.value, this.position, this.department, this.workingRoom.name, null, this.uploadComponent.imgURL);
        this.dialog.open(_create_user_dialog_overview_create_user__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewCreateUser"], {
            width: '400px',
            data: { 'employee': emplyee }
        });
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_upload_component_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]),
        __metadata("design:type", Object)
    ], DialogOverviewCreateEmployee.prototype, "uploadComponent", void 0);
    DialogOverviewCreateEmployee = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-create-user',
            template: __webpack_require__(/*! ./dialog-overview-create-employee.html */ "./src/app/components/user/create-employee/dialog-overview-create-employee.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-create-employee.css */ "./src/app/components/user/create-employee/dialog-overview-create-employee.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_RoomService__WEBPACK_IMPORTED_MODULE_2__["RoomService"]])
    ], DialogOverviewCreateEmployee);
    return DialogOverviewCreateEmployee;
}());



/***/ }),

/***/ "./src/app/components/user/create-user/dialog-overview-create-user.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user/create-user/dialog-overview-create-user.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-blue-icon {\r\n  margin-left: 40%;\r\n  width: 23px;\r\n  height: 23px;\r\n}\r\n\r\n.align-top {\r\n  position: absolute;\r\n  top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS11c2VyL2RpYWxvZy1vdmVydmlldy1jcmVhdGUtdXNlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvY3JlYXRlLXVzZXIvZGlhbG9nLW92ZXJ2aWV3LWNyZWF0ZS11c2VyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWJsdWUtaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuXHJcbi5hbGlnbi10b3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/create-user/dialog-overview-create-user.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/create-user/dialog-overview-create-user.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add user credentials.</h1>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field style=\"width: 350px\">\r\n    <input id=\"createUserUsernameInput\" matInput [(ngModel)]=\"userName\" placeholder=\"Username\">\r\n  </mat-form-field>\r\n  <mat-form-field style=\"width: 350px\">\r\n    <input id=\"createUserPassInput\" matInput type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n  </mat-form-field>\r\n  <mat-form-field style=\"width: 350px\">\r\n    <input id=\"createUserConfPassInput\" matInput type=\"password\" [(ngModel)]=\"confirmedPassword\" placeholder=\"Confirm password\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"dispalyErrorMessage\" class=\"red-color\">\r\n  {{errorMessage.toString()}}\r\n</div>\r\n\r\n<p></p>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button id=\"createUserConfPassButton\" mat-button cdkFocusInitial (click)=\"onOkClick()\">Ok</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/create-user/dialog-overview-create-user.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/create-user/dialog-overview-create-user.ts ***!
  \****************************************************************************/
/*! exports provided: DialogOverviewCreateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewCreateUser", function() { return DialogOverviewCreateUser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/UserService */ "./src/app/services/UserService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _add_finger_print_dialog_overview_add_finger_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-finger-print/dialog-overview-add-finger-print */ "./src/app/components/user/add-finger-print/dialog-overview-add-finger-print.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DialogOverviewCreateUser = /** @class */ (function () {
    function DialogOverviewCreateUser(dialog, dialogRef, employeeData, employeeService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.employeeData = employeeData;
        this.employeeService = employeeService;
        this.userName = null;
        this.password = null;
        this.confirmedPassword = null;
        this.errorMessage = null;
        this.dispalyErrorMessage = false;
    }
    DialogOverviewCreateUser.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewCreateUser.prototype.onOkClick = function () {
        var _this = this;
        this.employeeService.isValidUsername(this.userName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            if (data == true) {
                if (_this.password == _this.confirmedPassword) {
                    _this.employeeData.employee.username = _this.userName;
                    _this.employeeData.employee.password = _this.password;
                    _this.dialog.open(_add_finger_print_dialog_overview_add_finger_print__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewAddFingerPrint"], {
                        data: { 'employee': _this.employeeData.employee }
                    });
                    _this.dialogRef.close();
                }
                else {
                    _this.dispalyErrorMessage = true;
                    _this.errorMessage = "The password doesn't match.";
                }
            }
            else {
                _this.dispalyErrorMessage = true;
                _this.errorMessage = "This username is already used.";
            }
        }, function (error) {
            _this.dispalyErrorMessage = true;
            _this.errorMessage = error;
        });
    };
    DialogOverviewCreateUser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-create-user',
            template: __webpack_require__(/*! ./dialog-overview-create-user.html */ "./src/app/components/user/create-user/dialog-overview-create-user.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-create-user.css */ "./src/app/components/user/create-user/dialog-overview-create-user.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DialogOverviewCreateUser);
    return DialogOverviewCreateUser;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-width-table {\n  width: 100%;\n}\n\n\n.full-width-table {\n  width: auto;\n  height: 100%;\n  margin-right: 2%;\n  margin-left: 17%;\n  margin-top: 4%;\n  margin-bottom: 2%;\n}\n\n\n.create-delete-buttons button,\n.create-delete-buttons a {\n  margin-right: 8px;\n}\n\n\n.app-class .mat-list-item {\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zaWRlLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBtYXJnaW4tbGVmdDogMTclO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbnMgYnV0dG9uLFxuLmNyZWF0ZS1kZWxldGUtYnV0dG9ucyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cblxuLmFwcC1jbGFzcyAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width-table\">\n\n  <mat-grid-list [cols]=\"2\" rowHeight=\"90px\">\n    <mat-grid-tile>\n      <h1 class=\"align-start text-color align-top\">Users</h1>\n    </mat-grid-tile>\n    <mat-grid-tile>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <div class=\"create-delete-buttons align-start\">\n        <button id=\"userCreateButton\" mat-raised-button color=\"primary\" (click)=\"openCreateDialog()\">Create</button>\n        <button id=\"userDeleteButton\" *ngIf=\"selection.hasValue()\" mat-raised-button color=\"warn\" (click)=\"deleteSelected()\">Delete</button>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <form class=\"align-end form-style\">\n        <mat-form-field class=\"full-width-input\">\n          <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\" type=\"text\"/>\n        </mat-form-field>\n      </form>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <div class=\"mat-elevation-z8\" (scroll)=\"row\">\n    <table mat-table class=\"inside-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n      <!-- Checkbox Column -->\n      <ng-container matColumnDef=\"checkBox\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? (selection.toggle(row) && displyButton()) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <!-- Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- First name Column -->\n      <ng-container matColumnDef=\"firstName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>First name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.firstName}}</td>\n      </ng-container>\n\n      <!-- First name Column -->\n      <ng-container matColumnDef=\"lastName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Last name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.lastName}}</td>\n      </ng-container>\n\n      <!-- Role Column -->\n      <ng-container matColumnDef=\"userGroup\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Role</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.usergroup}}</td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Position</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.position}}</td>\n      </ng-container>\n\n      <!-- Departament Column -->\n      <ng-container matColumnDef=\"departament\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Departament</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.departament}}</td>\n      </ng-container>\n\n      <!-- Default working room Column -->\n      <ng-container matColumnDef=\"defaultWorkingRoom\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Default working room</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.defaultWorkingRoom}}</td>\n      </ng-container>\n\n      <!-- Key Type Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Image</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <img [src]=\"row.image\" style=\"max-height:90px; max-width:90px; margin: 5px\" *ngIf=\"row.image\"></td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator\n                   [length]=\"dataSource.data.length\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"20\"\n                   [pageSizeOptions]=\"[20, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/SpinnerService */ "./src/app/services/SpinnerService.ts");
/* harmony import */ var _services_MessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/MessageService */ "./src/app/services/MessageService.ts");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/UserService */ "./src/app/services/UserService.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _create_employee_dialog_overview_create_employee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-employee/dialog-overview-create-employee */ "./src/app/components/user/create-employee/dialog-overview-create-employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = /** @class */ (function () {
    function UserComponent(spinnerService, messageService, employeeService, dialog, toastr) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.messageService = messageService;
        this.employeeService = employeeService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.employees = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.employees);
        this.displayedColumns = ['checkBox', 'id', 'firstName', 'lastName', 'userGroup', 'position', 'departament', 'defaultWorkingRoom', 'image'];
        this.messageService.listen().subscribe(function (event) {
            if (event == 'users') {
                _this.loadAllEmployees();
            }
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.filteredData.forEach(function (row) { return _this.selection.select(row); });
    };
    UserComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    UserComponent.prototype.loadAllEmployees = function () {
        var _this = this;
        this.subscriptionAction = this.employeeService.getAllEmployees().subscribe(function (employees) {
            console.log(employees);
            _this.dataSource.data = employees;
            var events = document.getElementById('users');
            events.style.display = 'block';
            if (_this.spinnerService.isShowing()) {
                _this.spinnerService.hide();
            }
        });
    };
    UserComponent.prototype.openCreateDialog = function () {
        var _this = this;
        this.employeeService.getAllEmployees().subscribe(function (employees) {
            var dialogRef = _this.dialog.open(_create_employee_dialog_overview_create_employee__WEBPACK_IMPORTED_MODULE_7__["DialogOverviewCreateEmployee"], {
                width: '800px',
                height: '600px',
                data: { 'data': employees }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.loadAllEmployees();
            });
        });
    };
    UserComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selection.selected.length > 0) {
            var employee = this.selection.selected[0];
            this.employeeService.removeUser(employee.id)
                .pipe()
                .subscribe(function (data) {
                _this.toastr.success("User [" + employee.firstName + " " + employee.lastName + "] was removed successfully!");
                _this.selection.deselect(employee);
                _this.deleteSelected();
            }, function (error) {
                _this.toastr.error("Something went wrong!");
                _this.loadAllEmployees();
            });
        }
        this.loadAllEmployees();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserComponent.prototype, "sort", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_SpinnerService__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            _services_MessageService__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/models/Access.ts":
/*!**********************************!*\
  !*** ./src/app/models/Access.ts ***!
  \**********************************/
/*! exports provided: Access */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Access", function() { return Access; });
var Access = /** @class */ (function () {
    function Access(user, accessibleRoom, accessibleRoomDoorLock) {
        this.user = user;
        this.accessibleRoom = accessibleRoom;
        this.accessibleRoomDoorLock = accessibleRoomDoorLock;
    }
    return Access;
}());



/***/ }),

/***/ "./src/app/models/Action.ts":
/*!**********************************!*\
  !*** ./src/app/models/Action.ts ***!
  \**********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = /** @class */ (function () {
    function Action(id, employee, direction, officeRoom, doorLock, gendate) {
        this.id = id;
        this.employee = employee;
        this.direction = direction;
        this.officeRoom = officeRoom;
        this.doorLock = doorLock;
        this.gendate = gendate;
    }
    return Action;
}());



/***/ }),

/***/ "./src/app/models/DoorLock.ts":
/*!************************************!*\
  !*** ./src/app/models/DoorLock.ts ***!
  \************************************/
/*! exports provided: DoorLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorLock", function() { return DoorLock; });
var DoorLock = /** @class */ (function () {
    function DoorLock(id, name, scanner) {
        this.id = id;
        this.name = name;
        this.scanner = scanner;
    }
    return DoorLock;
}());



/***/ }),

/***/ "./src/app/models/Key.ts":
/*!*******************************!*\
  !*** ./src/app/models/Key.ts ***!
  \*******************************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
var Key = /** @class */ (function () {
    function Key(id, keyName, keyValue, keyValue2, keyValue3, keyValue4, keyType) {
        this.id = id;
        this._keyName = keyName;
        this.keyValue = keyValue;
        this.keyValue2 = keyValue2;
        this.keyValue3 = keyValue3;
        this.keyValue4 = keyValue4;
        this.keyType = keyType;
    }
    Key.prototype.setKeyName = function (fingerPrintName) {
        this._keyName = fingerPrintName;
    };
    return Key;
}());



/***/ }),

/***/ "./src/app/models/Report.ts":
/*!**********************************!*\
  !*** ./src/app/models/Report.ts ***!
  \**********************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
var Report = /** @class */ (function () {
    function Report(id, employeeName, usergroup, workingRoom, position, departament, month, workedHours, moves) {
        this.id = id;
        this.employeeName = employeeName;
        this.usergroup = usergroup;
        this.workingRoom = workingRoom;
        this.position = position;
        this.departament = departament;
        this.month = month;
        this.workedHours = workedHours;
        this.moves = moves;
    }
    return Report;
}());



/***/ }),

/***/ "./src/app/models/Room.ts":
/*!********************************!*\
  !*** ./src/app/models/Room.ts ***!
  \********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
var Room = /** @class */ (function () {
    function Room(id, name, doorLocks, doorNames) {
        this.id = id;
        this.name = name;
        this.doorLocks = doorLocks;
        this.doorNames = doorNames;
    }
    Room.prototype.getName = function () {
        return this.name;
    };
    return Room;
}());



/***/ }),

/***/ "./src/app/models/Scanner.ts":
/*!***********************************!*\
  !*** ./src/app/models/Scanner.ts ***!
  \***********************************/
/*! exports provided: Scanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scanner", function() { return Scanner; });
var Scanner = /** @class */ (function () {
    function Scanner(id, name, scannerType) {
        this.id = id;
        this.name = name;
        this.scannerType = scannerType;
    }
    return Scanner;
}());



/***/ }),

/***/ "./src/app/models/ScannerType.ts":
/*!***************************************!*\
  !*** ./src/app/models/ScannerType.ts ***!
  \***************************************/
/*! exports provided: ScannerTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerTypeEnum", function() { return ScannerTypeEnum; });
var ScannerTypeEnum;
(function (ScannerTypeEnum) {
    ScannerTypeEnum[ScannerTypeEnum["FINGERPRINT_SCANNER"] = 0] = "FINGERPRINT_SCANNER";
    ScannerTypeEnum[ScannerTypeEnum["ELECTRONIC_KEY_SCANNER"] = 1] = "ELECTRONIC_KEY_SCANNER";
})(ScannerTypeEnum || (ScannerTypeEnum = {}));


/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, username, password, firstName, lastName, usergroup, position, departament, defaultWorkingRoom, keys, image) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.usergroup = usergroup;
        this.position = position;
        this.departament = departament;
        this.defaultWorkingRoom = defaultWorkingRoom;
        this.keys = keys;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/AccessService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/AccessService.ts ***!
  \*******************************************/
/*! exports provided: AccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessService", function() { return AccessService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _models_Access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Access */ "./src/app/models/Access.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccessService = /** @class */ (function () {
    function AccessService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    AccessService.prototype.getAllAccesses = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var actions = [];
        return this.http.get('http://localhost:8080/administrator/api/v1/employee/list/access', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                actions.push(new _models_Access__WEBPACK_IMPORTED_MODULE_5__["Access"](new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"](JSON.parse(JSON.stringify(entry)).userDTO.id, JSON.parse(JSON.stringify(entry)).userDTO.username, JSON.parse(JSON.stringify(entry)).userDTO.password, JSON.parse(JSON.stringify(entry)).userDTO.firstName, JSON.parse(JSON.stringify(entry)).userDTO.lastName, JSON.parse(JSON.stringify(entry)).userDTO.usergroup, JSON.parse(JSON.stringify(entry)).userDTO.position, JSON.parse(JSON.stringify(entry)).userDTO.departament, JSON.parse(JSON.stringify(entry)).userDTO.defaultWorkingRoom, JSON.parse(JSON.stringify(entry)).userDTO.keys, JSON.parse(JSON.stringify(entry)).userDTO.image), JSON.parse(JSON.stringify(entry)).accessibleRoom, JSON.parse(JSON.stringify(entry)).accessibleRoomDoorLock));
            }
            return actions;
        }));
    };
    AccessService.prototype.registerNewAccess = function (employeeId, doorLockId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var path = "http://localhost:8080/administrator/api/v1/employee/give_access/" + employeeId + '/' + doorLockId + '/';
        console.log(path);
        return this.http.post(path, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return 'Ok';
        }));
    };
    AccessService.prototype.removeAnAccess = function (employeeId, doorLockId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var path = "http://localhost:8080/administrator/api/v1/employee/remove_access/" + employeeId + '/' + doorLockId + '/';
        console.log(path);
        return this.http.post(path, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return 'Ok';
        }));
    };
    AccessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], AccessService);
    return AccessService;
}());



/***/ }),

/***/ "./src/app/services/ActionService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ActionService.ts ***!
  \*******************************************/
/*! exports provided: ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return ActionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Action */ "./src/app/models/Action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionService = /** @class */ (function () {
    function ActionService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    ActionService.prototype.getAllActions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var actions = [];
        return this.http.get('http://localhost:8080/user/api/v1/action/list/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                actions.push(new _models_Action__WEBPACK_IMPORTED_MODULE_2__["Action"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).employee, JSON.parse(JSON.stringify(entry)).direction, JSON.parse(JSON.stringify(entry)).officeRoom, JSON.parse(JSON.stringify(entry)).doorLock, JSON.parse(JSON.stringify(entry)).gendate));
            }
            return actions;
        }));
    };
    ActionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ActionService);
    return ActionService;
}());



/***/ }),

/***/ "./src/app/services/AlertService.ts":
/*!******************************************!*\
  !*** ./src/app/services/AlertService.ts ***!
  \******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/AuthentiticationService.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/AuthentiticationService.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("http://localhost:8080/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            console.log('Server returned a new Token - ' + JSON.parse(JSON.stringify(user)).token);
            return JSON.parse(JSON.stringify(user)).token;
        }));
    };
    AuthenticationService.prototype.logout = function () {
    };
    AuthenticationService.prototype.isAuthentiticated = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        return this.http.get("http://localhost:8080/users/validateToken", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return 'Ok';
        }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/DoorLockService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/DoorLockService.ts ***!
  \*********************************************/
/*! exports provided: DoorLockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorLockService", function() { return DoorLockService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _models_DoorLock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/DoorLock */ "./src/app/models/DoorLock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoorLockService = /** @class */ (function () {
    function DoorLockService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    DoorLockService.prototype.getInaccessibleDoorLocks = function (employeeId, roomId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var doors = [];
        return this.http.get('http://localhost:8080/administrator/api/v1/officeroom/inaccesible_doorLocks/' + employeeId + '/' + roomId + '/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                doors.push(new _models_DoorLock__WEBPACK_IMPORTED_MODULE_4__["DoorLock"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).name, null));
            }
            return doors;
        }));
    };
    DoorLockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], DoorLockService);
    return DoorLockService;
}());



/***/ }),

/***/ "./src/app/services/MessageService.ts":
/*!********************************************!*\
  !*** ./src/app/services/MessageService.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.listener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    MessageService.prototype.listen = function () {
        return this.listener.asObservable();
    };
    MessageService.prototype.notify = function (event) {
        this.listener.next(event);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/ReportService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ReportService.ts ***!
  \*******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Report */ "./src/app/models/Report.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportService = /** @class */ (function () {
    function ReportService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    ReportService.prototype.getAllReports = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var reports = [];
        return this.http.get('http://localhost:8080/administrator/api/v1/employee/list/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                reports.push(new _models_Report__WEBPACK_IMPORTED_MODULE_3__["Report"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).firstName + " " + JSON.parse(JSON.stringify(entry)).lastName, JSON.parse(JSON.stringify(entry)).usergroup, JSON.parse(JSON.stringify(entry)).workingRoom, JSON.parse(JSON.stringify(entry)).position, JSON.parse(JSON.stringify(entry)).departament, 'January', 145, 2));
            }
            return reports;
        }));
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/services/RoomService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/RoomService.ts ***!
  \*****************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _models_Room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Room */ "./src/app/models/Room.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomService = /** @class */ (function () {
    function RoomService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    RoomService.prototype.getAllRooms = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var rooms = [];
        return this.http.get('http://localhost:8080/user/api/v1/officeroom/list/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                var doorNames = [];
                for (var _a = 0, _b = JSON.parse(JSON.stringify(entry)).doorLocks; _a < _b.length; _a++) {
                    var name_1 = _b[_a];
                    doorNames.push(name_1.name);
                }
                rooms.push(new _models_Room__WEBPACK_IMPORTED_MODULE_4__["Room"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).name, JSON.parse(JSON.stringify(entry)).doorLocks, doorNames));
            }
            return rooms;
        }));
    };
    RoomService.prototype.getInaccesibleRoomsForEmployee = function (employeeId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var rooms = [];
        return this.http.get('http://localhost:8080/user/api/v1/officeroom/inaccesible_rooms/' + employeeId + '/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                var entry = response_2[_i];
                rooms.push(new _models_Room__WEBPACK_IMPORTED_MODULE_4__["Room"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).name, JSON.parse(JSON.stringify(entry)).doorLocks, JSON.parse(JSON.stringify(entry)).doorLocks.name));
            }
            return rooms;
        }));
    };
    RoomService.prototype.deleteRoom = function (roomId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var rooms = [];
        return this.http.post('http://localhost:8080/administrator/api/v1/officeroom/delete/' + roomId + '/', {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return 'Ok';
        }));
    };
    RoomService.prototype.createRoom = function (roomName, doorIdentifier) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        console.log('http://localhost:8080/administrator/api/v1/officeroom/' + roomName + '/' + doorIdentifier + '/');
        return this.http.post('http://localhost:8080/administrator/api/v1/officeroom/' + roomName + '/' + doorIdentifier + '/', {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    RoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/services/ScannerService.ts":
/*!********************************************!*\
  !*** ./src/app/services/ScannerService.ts ***!
  \********************************************/
/*! exports provided: ScannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerService", function() { return ScannerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _models_Scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Scanner */ "./src/app/models/Scanner.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScannerService = /** @class */ (function () {
    function ScannerService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    ScannerService.prototype.getAllScanners = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var scanners = [];
        return this.http.get('http://localhost:8080/administrator/api/v1/scanner/list/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                scanners.push(new _models_Scanner__WEBPACK_IMPORTED_MODULE_4__["Scanner"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).name, JSON.parse(JSON.stringify(entry)).scannerType));
            }
            return scanners;
        }));
    };
    ScannerService.prototype.getAllScannersByType = function (scannerType) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var scanners = [];
        return this.http.get('http://localhost:8080/administrator/api/v1/scanner/list/byType/' + scannerType.valueOf() + "/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                var entry = response_2[_i];
                scanners.push(new _models_Scanner__WEBPACK_IMPORTED_MODULE_4__["Scanner"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).name, JSON.parse(JSON.stringify(entry)).scannerType));
            }
            return scanners;
        }));
    };
    ScannerService.prototype.switchScannerToRegistarationMode = function (scannerId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var url = 'http://localhost:8080/administrator/api/v1/scanner/switchMode/registration/' + scannerId + '/';
        console.log(url);
        return this.http.post('http://localhost:8080/administrator/api/v1/scanner/switchMode/registration/' + scannerId + '/', {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    ScannerService.prototype.waitForScannerEvent = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        return this.http.post('http://localhost:8080/administrator/api/v1/scanner/waitForScan', {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    ScannerService.prototype.switchScannerBackToInitialMode = function (scannerId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var url = 'http://localhost:8080/administrator/api/v1/scanner/switchMode/scanning/' + scannerId + '/';
        console.log(url);
        return this.http.post(url, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    ScannerService.prototype.switchScannerBackToScanningMode = function (scannerId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var url = 'http://localhost:8080/administrator/api/v1/scanner/switchMode/scanning/hard/' + scannerId + '/';
        console.log(url);
        return this.http.post(url, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    ScannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ScannerService);
    return ScannerService;
}());



/***/ }),

/***/ "./src/app/services/SpinnerService.ts":
/*!********************************************!*\
  !*** ./src/app/services/SpinnerService.ts ***!
  \********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isProgressShowing = false;
        this.spinnerState = this.spinnerSubject.asObservable();
    }
    SpinnerService.prototype.show = function () {
        console.log('Spinner show');
        this.isProgressShowing = true;
        this.spinnerSubject.next({ show: true });
    };
    SpinnerService.prototype.hide = function () {
        this.isProgressShowing = false;
        this.spinnerSubject.next({ show: false });
    };
    SpinnerService.prototype.isShowing = function () {
        return this.isProgressShowing;
    };
    SpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/services/UserService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/UserService.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
    }
    UserService.prototype.getAllEmployees = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        console.log(this.cookiesService.get('token'));
        var actions = [];
        return this.http.get('http://localhost:8080/administrator/api/v1/employee/list/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var entry = response_1[_i];
                actions.push(new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"](JSON.parse(JSON.stringify(entry)).id, JSON.parse(JSON.stringify(entry)).username, JSON.parse(JSON.stringify(entry)).password, JSON.parse(JSON.stringify(entry)).firstName, JSON.parse(JSON.stringify(entry)).lastName, JSON.parse(JSON.stringify(entry)).usergroup, JSON.parse(JSON.stringify(entry)).position, JSON.parse(JSON.stringify(entry)).departament, JSON.parse(JSON.stringify(entry)).defaultWorkingRoom, JSON.parse(JSON.stringify(entry)).keys, JSON.parse(JSON.stringify(entry)).image));
            }
            return actions;
        }));
    };
    UserService.prototype.isValidUsername = function (username) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var path = "http://localhost:8080/administrator/api/v1/employee/isValid/" + username + '/';
        console.log(path);
        return this.http.get(path, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.createNewUser = function (emp) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var path = 'http://localhost:8080/administrator/api/v1/employee';
        console.log('Tring to persist User ' + JSON.stringify(emp));
        return this.http.post(path, emp, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.removeUser = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookiesService.get('token')
            })
        };
        var path = 'http://localhost:8080/administrator/api/v1/employee/remove/' + id + '/';
        console.log('Tring to remove User ' + JSON.stringify(id));
        return this.http.post(path, null, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/app.module */ "./src/app/components/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\personal\ACS\AccessControlSystem\project\AccessControlSystem-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map