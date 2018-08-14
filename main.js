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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-one/question-one.component */ "./src/app/question-one/question-one.component.ts");
/* harmony import */ var _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-two/question-two.component */ "./src/app/question-two/question-two.component.ts");
/* harmony import */ var _question_three_question_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-three/question-three.component */ "./src/app/question-three/question-three.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _gif_gif_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gif/gif.component */ "./src/app/gif/gif.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'question-one', component: _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_2__["QuestionOneComponent"] },
    { path: 'question-two', component: _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_3__["QuestionTwoComponent"] },
    { path: 'question-three', component: _question_three_question_three_component__WEBPACK_IMPORTED_MODULE_4__["QuestionThreeComponent"] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"] },
    { path: 'gif', component: _gif_gif_component__WEBPACK_IMPORTED_MODULE_7__["GifComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-one/question-one.component */ "./src/app/question-one/question-one.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question-two/question-two.component */ "./src/app/question-two/question-two.component.ts");
/* harmony import */ var _question_three_question_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-three/question-three.component */ "./src/app/question-three/question-three.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _gif_gif_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gif/gif.component */ "./src/app/gif/gif.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
                _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_3__["QuestionOneComponent"],
                _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_6__["QuestionTwoComponent"],
                _question_three_question_three_component__WEBPACK_IMPORTED_MODULE_7__["QuestionThreeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"],
                _gif_gif_component__WEBPACK_IMPORTED_MODULE_12__["GifComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["StorageServiceModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gif/gif.component.css":
/*!***************************************!*\
  !*** ./src/app/gif/gif.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: rgb(224, 94, 133);\n    border: none;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 12px;\n    cursor: pointer;\n}\n\n.button1 {\n    background-color: rgb(70, 137, 238);\n    border: none;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.inp {\n    width: 30%;\n    padding: 12px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}"

/***/ }),

/***/ "./src/app/gif/gif.component.html":
/*!****************************************!*\
  !*** ./src/app/gif/gif.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{title}}\n  </h1>\n  \n  <input name=\"search\" #searchTerm class=\"inp\">\n  \n  <button (click)=\"performSearch(searchTerm)\" class=\"button1\">Search</button>\n  <nav>\n      <a routerLink=\"\">\n        <button class=\"button\"  name=\"button\">To the main page</button>\n      </a>\n    </nav>\n  <br>\n  \n  <div *ngFor=\"let g of giphies\">\n      <img src=\"{{g.images.original.url}}\">\n  </div>\n"

/***/ }),

/***/ "./src/app/gif/gif.component.ts":
/*!**************************************!*\
  !*** ./src/app/gif/gif.component.ts ***!
  \**************************************/
/*! exports provided: GifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifComponent", function() { return GifComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GifComponent = /** @class */ (function () {
    function GifComponent(http) {
        this.title = 'Welcome to GiphySearch';
        this.link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
        this.random = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&q=';
        this.limit = '&limit=30';
        this.tag = 'fail';
        this.giphies = [];
        this.http = http;
    }
    GifComponent.prototype.performSearch = function (searchTerm) {
        var _this = this;
        var apiLink = this.link + searchTerm.value + this.limit;
        this.http.request(apiLink)
            .subscribe(function (res) {
            _this.giphies = res.json().data;
            console.log(_this.giphies);
        });
    };
    GifComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gif',
            template: __webpack_require__(/*! ./gif.component.html */ "./src/app/gif/gif.component.html"),
            styles: [__webpack_require__(/*! ./gif.component.css */ "./src/app/gif/gif.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GifComponent);
    return GifComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: relative;\n    font-family: Arial;\n}\n\n.text-block {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    margin: 0 auto;\n    bottom: 60px;\n    right: 60px;\n    background-color: black;\n    opacity: 0.8;\n    text-align: center;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    \n}\n\n.title {\n    font-family: Lato;\n    padding: 10px 0 20px 0;\n  }\n\n.label {\n    display: block;\n  }\n\n.answers{\n    font-family: Lato;\n    font-size: 20px;\n  }\n\n.button {\n    background-color: rgb(243, 236, 236);\n    border: none;\n    color: black;\n    padding: 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 12px;\n}\n\n.column{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div (mousedown)=\"randomGif(searchTerm)\">\n  <img src=\"/assets/main.jpg\" alt=\"Nature\" style=\"width:100%;\">\n  <div class=\"text-block\">\n    <div class=\"title\">\n      <h1>What cheese are you?</h1>\n    </div>\n\n    <nav>\n      <a routerLink=\"/question-one\">\n        <button class=\"button\">Start Quiz!</button>\n      </a>\n    </nav>\n    <div class=\"title\">\n      <h1>Or just search for some nice GIFs:</h1>\n    </div>\n    <nav>\n      <a routerLink=\"/gif\">\n        <button class=\"button\">I want a GIF!</button>\n      </a>\n    </nav>\n\n\n    \n\n    <img style=\" height: 230px;\" src=\"{{link.images.original.url}}\">\n</div>\n\n\n    <br>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    // random = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&q=';
    // tag = 'fail';
    // http: Http;
    // giphy = [];
    function HomeComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.link = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';
        this.tag = 'fail';
        this.orders = [
            { id: 1, name: 'answer 1' },
            { id: 2, name: 'answer 2' },
            { id: 3, name: 'answer 3' },
            { id: 4, name: 'answer 4' }
        ];
        this.http = http;
        var controls = this.orders.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false); });
        // controls[0].setValue(true);
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](controls, minSelectedCheckboxes(1))
        });
    }
    HomeComponent.prototype.submit = function () {
        var _this = this;
        var selectedOrderIds = this.form.value.orders
            .map(function (v, i) { return v ? _this.orders[i].id : null; })
            .filter(function (v) { return v !== null; });
        console.log(selectedOrderIds);
    };
    HomeComponent.prototype.randomGif = function (searchTerm) {
        var _this = this;
        var apiLink = this.link + this.tag;
        this.http.request(apiLink)
            .subscribe(function (res) {
            _this.link = res.json().data;
            console.log(_this.link);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], HomeComponent);
    return HomeComponent;
}());

function minSelectedCheckboxes(min) {
    if (min === void 0) { min = 1; }
    var validator = function (formArray) {
        var totalSelected = formArray.controls
            .map(function (control) { return control.value; })
            .reduce(function (prev, next) { return next ? prev + next : prev; }, 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ }),

/***/ "./src/app/question-one/question-one.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-one/question-one.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: relative;\n    font-family: Arial;\n}\n\n.text-block {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    margin: 0 auto;\n    bottom: 100px;\n    right: 100px;\n    background-color: black;\n    opacity: 0.8;\n    text-align: center;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 12px;\n}\n\n.title {\n    font-family: Lato;\n    padding: 20px 0 10px 0;\n   \n  }\n\n.label {\n    display: block;\n  }\n\n.answers{\n    font-family: Lato;\n    font-size: 20px;\n    text-align: left;\n  }\n\n.button {\n    background-color: rgb(243, 236, 236);\n    border: none;\n    color: black;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 12px;\n}\n\n.column{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/question-one/question-one.component.html":
/*!**********************************************************!*\
  !*** ./src/app/question-one/question-one.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"/assets/main.jpg\" alt=\"Nature\" style=\"width:100%;\">\n  <div class=\"text-block\">\n    <div class=\"title\">\n      <h1>What kind of wine do you prefer?</h1>\n    </div>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <div class=\"answers\">\n        <ul formArrayName=\"orders\" *ngFor=\"let order of form['controls'].orders['controls']; let i = index\">\n          <input type=\"checkbox\" [formControlName]=\"i\"> {{orders[i].name}}\n        </ul>\n      </div>\n      <div *ngIf=\"!form.valid\">At least one order must be selected</div>\n      <br>\n      <div class=\"column\">\n        <button [disabled]=\"!form.valid\" class=\"button\" *ngIf=\"isVisible\" name=\"button\" (click)=\"submit()\">Submit</button>\n        <nav>\n          <a routerLink=\"/question-two\">\n            <button [disabled]=\"!form.valid\" class=\"button\" *ngIf=\"!isVisible\" name=\"button\">Next</button>\n          </a>\n        </nav>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-one/question-one.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-one/question-one.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionOneComponent", function() { return QuestionOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionOneComponent = /** @class */ (function () {
    function QuestionOneComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isVisible = true;
        this.orders = [
            { id: 1, name: 'Merlot' },
            { id: 2, name: 'Pinot Grigio' },
            { id: 3, name: 'Sauvignon Blanc' },
            { id: 4, name: 'Chardonnay' }
        ];
        var controls = this.orders.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false); });
        // controls[0].setValue(true);
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](controls, minSelectedCheckboxes(1))
        });
    }
    QuestionOneComponent.prototype.submit = function () {
        var _this = this;
        var selectedOrderIds = this.form.value.orders
            .map(function (v, i) { return v ? _this.orders[i].id : null; })
            .filter(function (v) { return v !== null; });
        this.isVisible = !this.isVisible;
        console.log(selectedOrderIds);
    };
    QuestionOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-one',
            template: __webpack_require__(/*! ./question-one.component.html */ "./src/app/question-one/question-one.component.html"),
            styles: [__webpack_require__(/*! ./question-one.component.css */ "./src/app/question-one/question-one.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], QuestionOneComponent);
    return QuestionOneComponent;
}());

function minSelectedCheckboxes(min) {
    if (min === void 0) { min = 1; }
    var validator = function (formArray) {
        var totalSelected = formArray.controls
            .map(function (control) { return control.value; })
            .reduce(function (prev, next) { return next ? prev + next : prev; }, 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ }),

/***/ "./src/app/question-three/question-three.component.css":
/*!*************************************************************!*\
  !*** ./src/app/question-three/question-three.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: relative;\n    font-family: Arial;\n}\n\n.text-block {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    margin: 0 auto;\n    bottom: 100px;\n    right: 100px;\n    background-color: black;\n    opacity: 0.8;\n    text-align: center;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 12px;\n}\n\n.title {\n    font-family: Lato;\n    padding: 20px 0 10px 0;\n  }\n\n.label {\n    display: block;\n  }\n\n.answers{\n    font-family: Lato;\n    font-size: 20px;\n    text-align: left;\n  }\n\n.button {\n    background-color: rgb(243, 236, 236);\n    border: none;\n    color: black;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 12px;\n}\n\n.column{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n}\n\n.mat-radio-outer-circle {\n    box-sizing: border-box;\n    height: 20px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: border-color ease 280ms;\n    width: 20px;\n    border-width: 2px;\n    border-style: none !important;\n    border-radius: 0 !important;\n}\n\n.example-radio-group {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    font-family: Lato;\n    font-size: 20px;\n    text-align: left;\n   \n\n  }\n\n.example-radio-button {\n    margin: 10px 0 10px 0;\n  }\n\n.example-selected-value {\n    margin: 15px 0;\n  }"

/***/ }),

/***/ "./src/app/question-three/question-three.component.html":
/*!**************************************************************!*\
  !*** ./src/app/question-three/question-three.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"/assets/main.jpg\" alt=\"Nature\" style=\"width:100%;\">\n  <div class=\"text-block\">\n    <div class=\"title\">\n      <h1>What kind of food do you like?</h1>\n    </div>\n\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteFood\">\n      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let food of foods\" [value]=\"food\">\n        {{food}}\n      </mat-radio-button>\n    </mat-radio-group>\n    <button class=\"button\" *ngIf=\"isVisible\" name=\"button\" (click)=\"submit()\">Submit</button>\n    <nav>\n      <a routerLink=\"/result\">\n        <button class=\"button\" *ngIf=\"!isVisible\" name=\"button\">Next</button>\n      </a>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-three/question-three.component.ts":
/*!************************************************************!*\
  !*** ./src/app/question-three/question-three.component.ts ***!
  \************************************************************/
/*! exports provided: QuestionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionThreeComponent", function() { return QuestionThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
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



var QuestionThreeComponent = /** @class */ (function () {
    function QuestionThreeComponent(storage) {
        this.storage = storage;
        this.isVisible = true;
        this.foods = ['Pizza', 'Cheesecake', 'Fondue', 'Cheeseburger'];
    }
    QuestionThreeComponent.prototype.submit = function () {
        this.isVisible = !this.isVisible;
        if (this.favoriteFood === 'Pizza') {
            this.result = 'Parmegano';
            console.log(this.result);
        }
        else if (this.favoriteFood === 'Cheesecake') {
            this.result = 'Blue cheese';
            console.log(this.result);
        }
        else if (this.favoriteFood === 'Fondue') {
            this.result = 'Emmental';
            console.log(this.result);
        }
        else {
            this.result = 'Chedder';
            console.log(this.result);
        }
        sessionStorage.setItem('key', this.result);
        sessionStorage.getItem('key');
        console.log(this.favoriteFood);
    };
    QuestionThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-three',
            template: __webpack_require__(/*! ./question-three.component.html */ "./src/app/question-three/question-three.component.html"),
            styles: [__webpack_require__(/*! ./question-three.component.css */ "./src/app/question-three/question-three.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"]])
    ], QuestionThreeComponent);
    return QuestionThreeComponent;
}());



/***/ }),

/***/ "./src/app/question-two/question-two.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-two/question-two.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: relative;\n    font-family: Arial;\n}\n\n.text-block {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    margin: 0 auto;\n    bottom: 100px;\n    right: 100px;\n    background-color: black;\n    opacity: 0.8;\n    text-align: center;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 12px;\n}\n\n.title {\n    font-family: Lato;\n    padding: 20px 0 10px 0;\n    \n  }\n\n.label {\n    display: block;\n  }\n\n.answers{\n    font-family: Lato;\n    font-size: 20px;\n    text-align: left;\n  }\n\n.button {\n    background-color: rgb(243, 236, 236);\n    border: none;\n    color: black;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 12px;\n}\n\n.column{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/question-two/question-two.component.html":
/*!**********************************************************!*\
  !*** ./src/app/question-two/question-two.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <img src=\"/assets/main.jpg\" alt=\"Nature\" style=\"width:100%;\">\n    <div class=\"text-block\">\n      <div class=\"title\">\n      <h1>Which country do you prefer?</h1>\n    </div>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <div class=\"answers\">\n        <ul formArrayName=\"orders\" *ngFor=\"let order of form['controls'].orders['controls']; let i = index\">\n          <input type=\"checkbox\" [formControlName]=\"i\">\n          {{orders[i].name}}\n        </ul>\n      </div>\n        <div *ngIf=\"!form.valid\">At least one order must be selected</div>\n        <br>\n        <div class=\"column\">\n        <button [disabled]=\"!form.valid\" class=\"button\" *ngIf=\"isVisible\" name=\"button\" (click)=\"submit()\">Submit</button>\n        <nav>\n            <a routerLink=\"/question-three\">\n            <button [disabled]=\"!form.valid\" class=\"button\" *ngIf=\"!isVisible\" name=\"button\">Next</button>\n            </a>\n        </nav>\n      </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/question-two/question-two.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-two/question-two.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTwoComponent", function() { return QuestionTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionTwoComponent = /** @class */ (function () {
    function QuestionTwoComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isVisible = true;
        this.orders = [
            { id: 1, name: 'Sweeden' },
            { id: 2, name: 'Russia' },
            { id: 3, name: 'The Netherlands' },
            { id: 4, name: 'France' }
        ];
        var controls = this.orders.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false); });
        // controls[0].setValue(true);
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](controls, minSelectedCheckboxes(1))
        });
    }
    QuestionTwoComponent.prototype.submit = function () {
        var _this = this;
        var selectedOrderIds = this.form.value.orders
            .map(function (v, i) { return v ? _this.orders[i].id : null; })
            .filter(function (v) { return v !== null; });
        this.isVisible = !this.isVisible;
        console.log(selectedOrderIds);
    };
    QuestionTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-two',
            template: __webpack_require__(/*! ./question-two.component.html */ "./src/app/question-two/question-two.component.html"),
            styles: [__webpack_require__(/*! ./question-two.component.css */ "./src/app/question-two/question-two.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], QuestionTwoComponent);
    return QuestionTwoComponent;
}());

function minSelectedCheckboxes(min) {
    if (min === void 0) { min = 1; }
    var validator = function (formArray) {
        var totalSelected = formArray.controls
            .map(function (control) { return control.value; })
            .reduce(function (prev, next) { return next ? prev + next : prev; }, 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: relative;\n    font-family: Arial;\n}\n\n.text-block {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); \n    margin: 0 auto;\n    bottom: 20px;\n    right: 900px;\n    background-color: black;\n    opacity: 0.8;\n    text-align: center;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.title {\n    font-family: Lato;\n    padding: 20px 0 10px 0;\n  }\n\n.label {\n    display: block;\n  }\n\n.answers{\n    font-family: Lato;\n    font-size: 20px;\n  }\n\n.button {\n    background-color: rgb(243, 236, 236);\n    border: none;\n    color: black;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 12px;\n}\n\n.column{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n}\n\n.example-selected-value{\n    padding-top: 20px;\n    padding-bottom: 20px;\n}"

/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <img src=\"/assets/result.png\" alt=\"Nature\" style=\"width:100%;\">\n    <div class=\"text-block\">\n        <div class=\"example-selected-value\">Your favorite food is: <br><br> <b> {{anw}}</b></div>\n      <nav>\n        <a routerLink=\"\">\n          <button class=\"button\"  name=\"button\">To the main page</button>\n        </a>\n      </nav>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.anw = sessionStorage.getItem('key');
        console.log(this.anw);
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rumiantsevaiuliia/quiz-gif copy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map