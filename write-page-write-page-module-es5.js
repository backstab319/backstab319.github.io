function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["write-page-write-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppChatPageWritePageWritePagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications/chat-web-app/chat-page'></ion-back-button>\n    </ion-buttons>\n    <ion-title>write-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>Compose Message</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Please enter the message that you want to send to</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n\n            <form #messageForm='ngForm' (ngSubmit)=\"messageFormProcessor(messageForm)\">\n              <ion-list lines='none'>\n                <ion-item>\n                  <ion-label position='floating'>Write a message</ion-label>\n                  <ion-textarea\n                  ngModel\n                  #message=ngModel\n                  name='message'\n                  clearInput\n                  required\n                  ></ion-textarea>\n                </ion-item>\n                <ion-item *ngIf='message.invalid && message.touched'>\n                  <ion-label><p><ion-text color='danger'>You cannot leave an empty message</ion-text></p></ion-label>\n                </ion-item>\n              </ion-list>\n              <ion-buttons slot='start'>\n                <ion-button type='submit' color='primary'>\n                  <ion-icon name=\"send\" slot='icon-only'></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </form>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/write-page/write-page-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/write-page/write-page-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: WritePagePageRoutingModule */

  /***/
  function srcAppApplicationsChatWebAppChatPageWritePageWritePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritePagePageRoutingModule", function () {
      return WritePagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _write_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./write-page.page */
    "./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.ts");

    var routes = [{
      path: '',
      component: _write_page_page__WEBPACK_IMPORTED_MODULE_3__["WritePagePage"]
    }];

    var WritePagePageRoutingModule = function WritePagePageRoutingModule() {
      _classCallCheck(this, WritePagePageRoutingModule);
    };

    WritePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WritePagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/write-page/write-page.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/write-page/write-page.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: WritePagePageModule */

  /***/
  function srcAppApplicationsChatWebAppChatPageWritePageWritePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritePagePageModule", function () {
      return WritePagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _write_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./write-page-routing.module */
    "./src/app/applications/chat-web-app/chat-page/write-page/write-page-routing.module.ts");
    /* harmony import */


    var _write_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./write-page.page */
    "./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.ts");

    var WritePagePageModule = function WritePagePageModule() {
      _classCallCheck(this, WritePagePageModule);
    };

    WritePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _write_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["WritePagePageRoutingModule"]],
      declarations: [_write_page_page__WEBPACK_IMPORTED_MODULE_6__["WritePagePage"]]
    })], WritePagePageModule);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppChatPageWritePageWritePagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL3dyaXRlLXBhZ2Uvd3JpdGUtcGFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: WritePagePage */

  /***/
  function srcAppApplicationsChatWebAppChatPageWritePageWritePagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritePagePage", function () {
      return WritePagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./write.service */
    "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts");
    /* harmony import */


    var _username_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var WritePagePage =
    /*#__PURE__*/
    function () {
      function WritePagePage(writeSrv, usernameSrv, toastCtl) {
        _classCallCheck(this, WritePagePage);

        this.writeSrv = writeSrv;
        this.usernameSrv = usernameSrv;
        this.toastCtl = toastCtl;

        this.messageValidator = function (message) {
          return message.length > 1;
        };
      }

      _createClass(WritePagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "messageFormProcessor",
        value: function messageFormProcessor(messageFormData) {
          if (this.messageValidator(messageFormData.value.message)) {
            // Fetch Date and time
            var date = new Date();
            this.message = {
              receiverName: this.writeSrv.getReceiverDetails().receiverName,
              senderName: this.usernameSrv.getUsername(),
              messageBody: messageFormData.value.message,
              messageDate: date.toLocaleDateString(),
              messageTime: date.toLocaleTimeString()
            };
            this.writeSrv.sendMessage(this.message);
            this.messageSent();
          } else {
            return;
          }

          messageFormData.resetForm();
        } // Show a toast when message is sent

      }, {
        key: "messageSent",
        value: function messageSent() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var sent;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtl.create({
                      message: 'Message sent successfully!',
                      duration: 1000,
                      color: 'primary'
                    });

                  case 2:
                    sent = _context.sent;
                    sent.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return WritePagePage;
    }();

    WritePagePage.ctorParameters = function () {
      return [{
        type: _write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"]
      }, {
        type: _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    WritePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-write-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./write-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./write-page.page.scss */
      "./src/app/applications/chat-web-app/chat-page/write-page/write-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"], _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], WritePagePage);
    /***/
  }
}]);
//# sourceMappingURL=write-page-write-page-module-es5.js.map