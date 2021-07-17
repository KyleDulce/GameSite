(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kylej\Documents\server\websites\GameSite\client\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1OMX":
/*!*****************************************************************************!*\
  !*** ./src/app/components/games/cardgames/red-flags/red-flags.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RedFlagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedFlagsComponent", function() { return RedFlagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_components_dialogs_GameDialogs_single_input_dialog_single_input_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/dialogs/GameDialogs/single-input-dialog/single-input-dialog.component */ "e16k");
/* harmony import */ var src_app_components_dialogs_GameDialogs_spec_or_play_spec_or_play_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dialogs/GameDialogs/spec-or-play/spec-or-play.component */ "siLS");
/* harmony import */ var src_app_components_dialogs_GameDialogs_spectator_join_spectator_join_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/dialogs/GameDialogs/spectator-join/spectator-join.component */ "rP4V");
/* harmony import */ var src_app_services_game_gamerequests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/game/gamerequests.service */ "xJH3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















const _c0 = function (a0) { return { "selectedCard": a0 }; };
function RedFlagsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, p_r5.highlight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Points: ", p_r5.points, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.status);
} }
function RedFlagsComponent_div_7_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RedFlagsComponent_div_7_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RedFlagsComponent_div_7_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " value must be greater than or equal to 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RedFlagsComponent_div_7_mat_checkbox_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RedFlagsComponent_div_7_mat_checkbox_15_Template_mat_checkbox_ngModelChange_0_listener($event) { const deck_r10 = ctx.$implicit; return deck_r10.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deck_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", deck_r10.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deck_r10.text, " ");
} }
function RedFlagsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Winning Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedFlagsComponent_div_7_mat_error_5_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RedFlagsComponent_div_7_mat_error_6_Template, 4, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RedFlagsComponent_div_7_mat_error_7_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RedFlagsComponent_div_7_Template_mat_checkbox_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hideNamesCheck = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hide Names? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Avaliable Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RedFlagsComponent_div_7_mat_checkbox_15_Template, 2, 2, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedFlagsComponent_div_7_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.startButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.points.hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.points.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.points.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.hideNamesCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.avaliableDecks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.canStart);
} }
function RedFlagsComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Find a date for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.currentDater);
} }
function RedFlagsComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ruin the date revealed to you");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RedFlagsComponent_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is choosing the best date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.currentDater);
} }
function RedFlagsComponent_div_8_div_7_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tc_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tc_r19.playername);
} }
function RedFlagsComponent_div_8_div_7_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedFlagsComponent_div_8_div_7_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const tc_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.submitDate(tc_r19.pid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RedFlagsComponent_div_8_div_7_td_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tcp_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tcp_r29.content);
} }
function RedFlagsComponent_div_8_div_7_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RedFlagsComponent_div_8_div_7_td_7_span_3_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tc_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.showTableCards || tc_r19.pid == ctx_r22.playerId && ctx_r22.perkSelection || tc_r19.pid == ctx_r22.responsibilitypid && !ctx_r22.perkSelection);
} }
function RedFlagsComponent_div_8_div_7_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tc_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tc_r19.flagsbyname);
} }
function RedFlagsComponent_div_8_div_7_td_9_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tcf_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tcf_r35.content);
} }
function RedFlagsComponent_div_8_div_7_td_9_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RedFlagsComponent_div_8_div_7_td_9_button_1_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tc_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.showTableCards || tc_r19.flagspid == ctx_r37.playerId);
} }
function RedFlagsComponent_div_8_div_7_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RedFlagsComponent_div_8_div_7_td_9_button_1_Template, 3, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tc_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tc_r19.flags.length > 0);
} }
function RedFlagsComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedFlagsComponent_div_8_div_7_p_5_Template, 3, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RedFlagsComponent_div_8_div_7_button_6_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RedFlagsComponent_div_8_div_7_td_7_Template, 4, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RedFlagsComponent_div_8_div_7_td_8_Template, 4, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RedFlagsComponent_div_8_div_7_td_9_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tc_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.hideNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.isCurrentDater && ctx_r18.showTableCards && ctx_r18.canChose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tc_r19.perks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tc_r19.flags.length > 0 && ctx_r18.showTableCards && !ctx_r18.hideNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tc_r19.flags);
} }
function RedFlagsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RedFlagsComponent_div_8_span_2_Template, 4, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RedFlagsComponent_div_8_span_3_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RedFlagsComponent_div_8_span_4_Template, 4, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RedFlagsComponent_div_8_div_7_Template, 11, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.playersselecting && ctx_r2.perkSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.playersselecting && !ctx_r2.perkSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.playersselecting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tableCards);
} }
function RedFlagsComponent_table_10_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedFlagsComponent_table_10_td_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const i_r45 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.chooseCardPerk(i_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r44 = ctx.$implicit;
    const i_r45 = ctx.index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r42.selectedPerk == i_r45));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r44.content, " ");
} }
function RedFlagsComponent_table_10_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedFlagsComponent_table_10_td_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const j_r49 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.chooseCardFlag(j_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r48 = ctx.$implicit;
    const j_r49 = ctx.index;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r43.selectedFlag == j_r49));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r48.content, " ");
} }
function RedFlagsComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedFlagsComponent_table_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.submitSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedFlagsComponent_table_10_td_5_Template, 4, 4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RedFlagsComponent_table_10_td_6_Template, 4, 4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.perks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.flags);
} }
function RedFlagsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You are finding your dream date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RedFlagsComponent {
    constructor(gr, route, matdialog) {
        this.gr = gr;
        this.route = route;
        this.matdialog = matdialog;
        this.avaliableDecks = [
            { text: "Base Deck", checked: true },
            { text: "Test Deck", checked: false },
            { text: "Custom Dirty Deck", checked: false },
            { text: "Ang's Deck", checked: false },
            { text: "Tortino's Deck", checked: false }
        ];
        this.playerId = 0;
        this.responsibilitypid = 0;
        this.currentDater = "player not found";
        this.isCurrentDater = false;
        this.inprogress = false;
        this.canStart = false;
        this.playersselecting = true;
        this.canChose = false;
        this.hideNames = false;
        this.perkSelection = true;
        this.perks = [];
        this.flags = [];
        this.selectedPerk = -1;
        this.selectedFlag = -1;
        this.showTableCards = true;
        this.hideNamesCheck = false;
        this.points = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
        ]);
        this.createFunctions();
        var self = this;
        this.route.queryParams
            .subscribe(params => {
            this.roomId = params.r;
        });
        if (!this.gr.setup(this.roomId)) {
            this.gr.requestJoinDetails(function (data) {
                if (data) {
                    //send specorplay
                    var ref = matdialog.open(src_app_components_dialogs_GameDialogs_spec_or_play_spec_or_play_component__WEBPACK_IMPORTED_MODULE_4__["SpecOrPlayComponent"], { data: false });
                    ref.afterClosed().subscribe(result => {
                        if (result) {
                            //they want to play
                            console.log("play");
                            self.gr.requestJoin(function (result) {
                                if (result.success) {
                                    self.playerId = result.pid;
                                    self.gr.setStorage(self.playerId);
                                    self.gr.sendData({
                                        rid: self.roomId,
                                        type: "INFOCHANGE",
                                        pid: self.playerId,
                                        name: localStorage.getItem(src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].LOCAL_USERNAME_STORE)
                                    });
                                    self.gr.startWatchPrivate(self.onPrivateUpdate);
                                    self.gr.requestPrivateUpdate(self.playerId);
                                }
                                else {
                                    console.log("failed");
                                    matdialog.open(src_app_components_dialogs_GameDialogs_spectator_join_spectator_join_component__WEBPACK_IMPORTED_MODULE_5__["SpectatorJoinComponent"]);
                                }
                                self.gr.startWatch(self.onGameUpdate);
                                self.gr.requestUpdate();
                            });
                        }
                        else {
                            //they dont want to play
                            console.log("Spec");
                            self.gr.startWatch(self.onGameUpdate);
                            self.gr.requestUpdate();
                        }
                    });
                }
                else {
                    //tell spec only
                    self.gr.startWatch(self.onGameUpdate);
                    self.gr.requestUpdate();
                    matdialog.open(src_app_components_dialogs_GameDialogs_spectator_join_spectator_join_component__WEBPACK_IMPORTED_MODULE_5__["SpectatorJoinComponent"]);
                }
            });
        }
        else {
            this.playerId = this.gr.getPid();
            this.gr.startWatch(this.onGameUpdate);
            this.gr.sendData({
                rid: self.roomId,
                type: "SOCKETCHANGE",
                pid: self.playerId
            });
            this.gr.startWatchPrivate(this.onPrivateUpdate);
            this.gr.requestUpdate();
            this.gr.requestPrivateUpdate(this.playerId);
            console.log("play");
        }
    }
    createFunctions() {
        var self = this;
        this.onGameUpdate = function (data) {
            self.players = data.players;
            //TODO CHANGE
            self.canStart = self.players.length >= 1;
            self.inprogress = data.progress;
            self.isCurrentDater = self.playerId == data.currentDaterId;
            self.currentDater = data.currentDaterName;
            self.tableCards = data.GameTableCards;
            self.playersselecting = data.playersselecting;
            self.perkSelection = data.perkSelection;
            self.showTableCards = data.showcards;
            self.canChose = data.canChoose;
            self.hideNames = data.hideNames;
        };
        this.onPrivateUpdate = function (data) {
            console.log("private");
            self.perks = data.perks;
            self.flags = data.flags;
            self.responsibilitypid = data.responsibility;
        };
    }
    startButton() {
        if (this.points.invalid) {
            this.points.markAsTouched();
            return;
        }
        if (!this.anyDeckSelected()) {
            alert("You must select at least 1 Deck");
            return;
        }
        if (this.players.length < 3) {
            alert("Not enough players: min 3");
            return;
        }
        this.gr.sendData({
            rid: this.roomId,
            type: "GAMESTART",
            points: this.points.value,
            decks: this.getDeckData(),
            hideNames: this.hideNamesCheck
        });
    }
    anyDeckSelected() {
        for (let d of this.avaliableDecks) {
            if (d.checked) {
                return true;
            }
        }
        return false;
    }
    getDeckData() {
        var decks = [];
        for (let d of this.avaliableDecks) {
            if (d.checked) {
                decks.push(d.text);
            }
        }
        return decks;
    }
    chooseCardPerk(index) {
        if (this.playersselecting && this.perkSelection) {
            this.selectedPerk = index;
        }
    }
    chooseCardFlag(index) {
        if (this.playersselecting && !this.perkSelection) {
            this.selectedFlag = index;
        }
    }
    submitSelection() {
        if (this.playersselecting && !(this.selectedPerk == -1 && this.selectedFlag == -1)) {
            var card = (this.perkSelection) ? this.perks[this.selectedPerk] : this.flags[this.selectedFlag];
            var self = this;
            if (card.content.indexOf("_____") > -1) {
                const dialogRef = this.matdialog.open(src_app_components_dialogs_GameDialogs_single_input_dialog_single_input_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SingleInputDialogComponent"], { data: { title: "Fill in the Blank of your card", output: "", cancel: true } });
                dialogRef.afterClosed().subscribe((result) => {
                    if (!result.cancel) {
                        if (result.output == null || result.output == undefined) {
                            result.output = "";
                        }
                        self.sendSelection(result.output);
                    }
                });
            }
            else {
                this.sendSelection("");
            }
        }
    }
    sendSelection(data) {
        this.gr.sendData({
            rid: this.roomId,
            type: "CARDSELECTION",
            pid: this.playerId,
            card: (this.perkSelection) ? this.selectedPerk : this.selectedFlag,
            cdata: data
        });
        this.selectedFlag = -1;
        this.selectedPerk = -1;
    }
    submitDate(pid) {
        this.gr.sendData({
            rid: this.roomId,
            type: "WINNERCHOOSE",
            winner: pid
        });
        this.canChose = false;
    }
}
RedFlagsComponent.ɵfac = function RedFlagsComponent_Factory(t) { return new (t || RedFlagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_gamerequests_service__WEBPACK_IMPORTED_MODULE_6__["GamerequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
RedFlagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedFlagsComponent, selectors: [["app-red-flags"]], decls: 12, vars: 5, consts: [["id", "topArea"], ["id", "PlayerArea"], [2, "padding-top", "0"], ["id", "GameHeader"], [4, "ngFor", "ngForOf"], ["id", "CardArea"], ["id", "AdminArea", 4, "ngIf"], ["id", "gameArea", 4, "ngIf"], ["id", "HandArea"], ["style", "height: 100%; width: 100%;", 4, "ngIf"], ["id", "HandWaitDates", 4, "ngIf"], [1, "playernames", 3, "ngClass"], [1, "nameholder"], [1, "leftName"], [1, "rightStatus"], ["id", "AdminArea"], [2, "margin", "auto", "display", "block", "width", "150px", "padding-top", "5%"], ["matInput", "", "placeholder", "E.g 5", "required", "", 3, "formControl"], [4, "ngIf"], [2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["style", "margin-left: 10px;", 3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], ["id", "startButton", "mat-raised-button", "", 2, "background-color", "orange", 3, "disabled", "click"], ["id", "gameArea"], ["class", "cardrow", 4, "ngFor", "ngForOf"], [1, "cardrow"], [1, "cardholder"], ["class", "TableNameLeft", 4, "ngIf"], ["mat-raised-button", "", "style", "background-color: orange;", 3, "click", 4, "ngIf"], [1, "TableNameLeft"], ["mat-raised-button", "", 2, "background-color", "orange", 3, "click"], [2, "border", "none", "background-color", "transparent"], [1, "card", "whitec"], ["style", "border: none; background-color: transparent;", 4, "ngIf"], [1, "card", "redc"], [2, "height", "100%", "width", "100%"], [1, "handElement"], ["mat-raised-button", "", 2, "background-color", "orange", "display", "block", "margin", "auto", 3, "click"], [2, "border", "none", "background-color", "transparent", 3, "click"], [1, "card", "whitec", 3, "ngClass"], [1, "card", "redc", 3, "ngClass"], ["id", "HandWaitDates"]], template: function RedFlagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedFlagsComponent_div_5_Template, 11, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RedFlagsComponent_div_7_Template, 18, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RedFlagsComponent_div_8_Template, 8, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RedFlagsComponent_table_10_Template, 7, 2, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RedFlagsComponent_div_11_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inprogress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inprogress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inprogress && !ctx.isCurrentDater && ctx.playerId != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inprogress && ctx.isCurrentDater);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: ["#topArea[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n\r\n    height: 60%; \r\n}\r\n\r\n#PlayerArea[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: grey;\r\n\r\n    float: left;\r\n\r\n    width: 22%;\r\n    height: 100%;\r\n\r\n    overflow: auto;\r\n}\r\n\r\n.playernames[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.nameholder[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.leftName[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n.rightStatus[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: right;\r\n\r\n    height: 100%;\r\n}\r\n\r\n#CardArea[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: grey;\r\n\r\n    float: right;\r\n\r\n    width: 75%;\r\n    height: 100%;\r\n\r\n    overflow: auto;\r\n}\r\n\r\n#HandArea[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: grey;\r\n\r\n    bottom: 0px;\r\n    margin-top: 1%;\r\n    height: 30%;\r\n\r\n    overflow: auto;\r\n}\r\n\r\n#AdminArea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50%;\r\n}\r\n\r\n#startButton[_ngcontent-%COMP%] {\r\n    margin: 10% auto auto auto;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n#gameArea[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n#GameHeader[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n\r\n    border-bottom: solid;\r\n    border-color: gray;\r\n    border-width: 2px;\r\n\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#handElement[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    vertical-align: middle;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    margin: auto auto auto auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 115px;\r\n    height: 150px;\r\n    padding: 5px 5px 5px 5px;\r\n\r\n    font-family: 'Varela Round', sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: gray;\r\n    border-radius: 8px;\r\n\r\n    box-shadow: 3px 3px 1px grey;\r\n}\r\n\r\n.redc[_ngcontent-%COMP%] {\r\n    background-color: #eb1c2c;\r\n    color: white\r\n}\r\n\r\n.whitec[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: #eb1c2c\r\n}\r\n\r\n.selectedCard[_ngcontent-%COMP%] {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    text-align: center;\r\n}\r\n\r\n.cardrow[_ngcontent-%COMP%] {\r\n    height: 200px!important;\r\n}\r\n\r\n.TableNameLeft[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZC1mbGFncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixXQUFXOztJQUVYLFVBQVU7SUFDVixZQUFZOztJQUVaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZOztJQUVaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEIsWUFBWTs7SUFFWixVQUFVO0lBQ1YsWUFBWTs7SUFFWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVzs7SUFFWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7SUFFakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3Qjs7SUFFeEIsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoicmVkLWZsYWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3RvcEFyZWEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG5cclxuICAgIGhlaWdodDogNjAlOyBcclxufVxyXG5cclxuI1BsYXllckFyZWEge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG5cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wbGF5ZXJuYW1lcyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5uYW1laG9sZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGVmdE5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnJpZ2h0U3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI0NhcmRBcmVhIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4jSGFuZEFyZWEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG5cclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuXHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNBZG1pbkFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuI3N0YXJ0QnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTAlIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jZ2FtZUFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNHYW1lSGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNoYW5kRWxlbWVudCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbnRkID4gKiB7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMXB4IGdyZXk7XHJcbn1cclxuXHJcbi5yZWRjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjFjMmM7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLndoaXRlYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjZWIxYzJjXHJcbn1cclxuXHJcbi5zZWxlY3RlZENhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkcm93IHtcclxuICAgIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uVGFibGVOYW1lTGVmdCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedFlagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-red-flags',
                templateUrl: './red-flags.component.html',
                styleUrls: ['./red-flags.component.css']
            }]
    }], function () { return [{ type: src_app_services_game_gamerequests_service__WEBPACK_IMPORTED_MODULE_6__["GamerequestsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "2N/y":
/*!******************************************************************************************!*\
  !*** ./src/app/components/dialogs/changepp/change-ppdialog/change-ppdialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChangePPDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePPDialogComponent", function() { return ChangePPDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/pppics/PpPic */ "2kQe");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function ChangePPDialogComponent_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ChangePPDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.validPpPics = src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_2__["PpPic"].validPpPics;
    }
    onCancel() {
        this.data.Cancelled = true;
        this.dialogRef.close(this.data);
    }
}
ChangePPDialogComponent.ɵfac = function ChangePPDialogComponent_Factory(t) { return new (t || ChangePPDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ChangePPDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePPDialogComponent, selectors: [["app-change-ppdialog"]], decls: 10, vars: 3, consts: [["mat-dialog-title", ""], ["aria-label", "Select an option", 1, "wrapper", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 3, "click"], ["id", "Change", "mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], [3, "value"], [3, "src"]], template: function ChangePPDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Profile Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePPDialogComponent_Template_mat_radio_group_ngModelChange_3_listener($event) { return ctx.data.NewPP = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePPDialogComponent_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePPDialogComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.NewPP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validPpPics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioButton"]], styles: ["img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;;\r\n    margin: auto auto auto auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 10px;\r\n    grid-auto-rows: 100px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#Change[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wcGRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJjaGFuZ2UtcHBkaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4OztcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jQ2hhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePPDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-ppdialog',
                templateUrl: './change-ppdialog.component.html',
                styleUrls: ['./change-ppdialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "2kQe":
/*!****************************************!*\
  !*** ./src/app/models/pppics/PpPic.ts ***!
  \****************************************/
/*! exports provided: PpPic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PpPic", function() { return PpPic; });
class PpPic {
}
PpPic.validPpPics = ["assets/IllegalPage/clown.png", "assets/IllegalPage/cry.png", "assets/IllegalPage/inconnu.png"];


/***/ }),

/***/ "52ZH":
/*!***********************************************************************!*\
  !*** ./src/app/components/games/cardgames/tycoon/tycoon.component.ts ***!
  \***********************************************************************/
/*! exports provided: TycoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TycoonComponent", function() { return TycoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TycoonComponent {
    constructor() { }
}
TycoonComponent.ɵfac = function TycoonComponent_Factory(t) { return new (t || TycoonComponent)(); };
TycoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TycoonComponent, selectors: [["app-tycoon"]], decls: 2, vars: 0, template: function TycoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tycoon works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eWNvb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TycoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tycoon',
                templateUrl: './tycoon.component.html',
                styleUrls: ['./tycoon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9lPf":
/*!***************************************!*\
  !*** ./src/app/models/games/Games.ts ***!
  \***************************************/
/*! exports provided: Games */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Games", function() { return Games; });
/* harmony import */ var src_app_components_games_cardgames_red_flags_red_flags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/games/cardgames/red-flags/red-flags.component */ "1OMX");
/* harmony import */ var src_app_components_games_cardgames_tycoon_tycoon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/games/cardgames/tycoon/tycoon.component */ "52ZH");
/* harmony import */ var src_app_components_games_cardgames_poker_poker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/games/cardgames/poker/poker.component */ "uomt");



class Games {
    static getGameStringArray() {
        return Games.gameStr;
    }
    static getGameCompFromString(text) {
        for (var x = 0; x < this.gameStr.length; x++) {
            if (this.gameStr[x] == text) {
                return this.gameComp[x];
            }
        }
        console.log("returning from text");
        return null;
    }
}
Games.gameStr = ["Red Flags", "Tycoon", "Poker"];
Games.gameComp = [src_app_components_games_cardgames_red_flags_red_flags_component__WEBPACK_IMPORTED_MODULE_0__["RedFlagsComponent"], src_app_components_games_cardgames_tycoon_tycoon_component__WEBPACK_IMPORTED_MODULE_1__["TycoonComponent"], src_app_components_games_cardgames_poker_poker_component__WEBPACK_IMPORTED_MODULE_2__["PokerComponent"]];


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "FuFN":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dialogs/GameDialogs/confirm-leave/confirm-leave.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConfirmLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmLeaveComponent", function() { return ConfirmLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmLeaveComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ConfirmLeaveComponent.ɵfac = function ConfirmLeaveComponent_Factory(t) { return new (t || ConfirmLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmLeaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmLeaveComponent, selectors: [["app-confirm-leave"]], decls: 7, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["id", "Leave", "mat-button", "", 3, "mat-dialog-close"]], template: function ConfirmLeaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to leave?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["#Leave[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tbGVhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoiY29uZmlybS1sZWF2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNMZWF2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmLeaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-leave',
                templateUrl: './confirm-leave.component.html',
                styleUrls: ['./confirm-leave.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "MCKW":
/*!**********************************************!*\
  !*** ./src/app/directives/game.directive.ts ***!
  \**********************************************/
/*! exports provided: GameDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDirective", function() { return GameDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
GameDirective.ɵfac = function GameDirective_Factory(t) { return new (t || GameDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
GameDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GameDirective, selectors: [["", "appGame", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appGame]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "NQPq":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dialogs/failed-to-send-request/failed-to-send-request.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FailedToSendRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedToSendRequestComponent", function() { return FailedToSendRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class FailedToSendRequestComponent {
    constructor(data) {
        this.data = data;
    }
}
FailedToSendRequestComponent.ɵfac = function FailedToSendRequestComponent_Factory(t) { return new (t || FailedToSendRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
FailedToSendRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FailedToSendRequestComponent, selectors: [["app-failed-to-send-request"]], decls: 9, vars: 1, consts: [["mat-dialog-title", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function FailedToSendRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opps something went wrong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Unexpected request failed:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["button[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhaWxlZC10by1zZW5kLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJmYWlsZWQtdG8tc2VuZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FailedToSendRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-failed-to-send-request',
                templateUrl: './failed-to-send-request.component.html',
                styleUrls: ['./failed-to-send-request.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dialogs/change-name/change-name.component */ "tkyf");
/* harmony import */ var _components_dialogs_invalid_name_invalid_name_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialogs/invalid-name/invalid-name.component */ "XdlW");
/* harmony import */ var src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/pppics/PpPic */ "2kQe");
/* harmony import */ var _components_dialogs_changepp_change_ppdialog_change_ppdialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dialogs/changepp/change-ppdialog/change-ppdialog.component */ "2N/y");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");











class AppComponent {
    constructor(matDialog, ref, router) {
        this.matDialog = matDialog;
        this.ref = ref;
        this.router = router;
        this.title = 'Kyle\'s Game Site';
        this.pp_pic = "assets/IllegalPage/cry.png";
        this.inputpp = 0;
        var str = localStorage.getItem(AppComponent.LOCAL_USERNAME_STORE);
        var ppstr = localStorage.getItem(AppComponent.LOCAL_PP_STORE);
        if (str == null || str == "undefined" || ppstr == null || ppstr == "undefined") {
            console.log("Null User, generating");
            this.UserName = "Guest" + Math.floor(Math.random() * Math.floor(10000));
            localStorage.setItem(AppComponent.LOCAL_USERNAME_STORE, this.UserName);
            this.inputpp = 0;
            this.pp_pic = src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_3__["PpPic"].validPpPics[0];
            localStorage.setItem(AppComponent.LOCAL_PP_STORE, "0");
            //ref.detectChanges();
        }
        else {
            console.log("Name is " + str);
            this.UserName = str;
            this.inputpp = parseInt(ppstr);
            this.pp_pic = src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_3__["PpPic"].validPpPics[this.inputpp];
        }
    }
    changeNameButton() {
        const dialogRef = this.matDialog.open(_components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_1__["ChangeNameComponent"], { data: { OldName: this.UserName, NewName: this.inputField, Cancelled: false } });
        dialogRef.afterClosed().subscribe(result => {
            if (!result.Cancelled) {
                this.inputField = result.NewName;
                this.changeName();
            }
        });
    }
    changePpButton() {
        const dialogRef = this.matDialog.open(_components_dialogs_changepp_change_ppdialog_change_ppdialog_component__WEBPACK_IMPORTED_MODULE_4__["ChangePPDialogComponent"], { data: { NewPP: this.inputpp, Cancelled: false } });
        dialogRef.afterClosed().subscribe(result => {
            if (!result.Cancelled) {
                this.inputpp = result.NewPP;
                this.changePp();
                this.ref.detectChanges();
            }
        });
    }
    changeName() {
        if (this.inputField != null && this.inputField != "undefined" && this.inputField != '') {
            this.UserName = this.inputField;
            this.inputField = '';
            localStorage.setItem(AppComponent.LOCAL_USERNAME_STORE, this.UserName);
        }
        else {
            this.matDialog.open(_components_dialogs_invalid_name_invalid_name_component__WEBPACK_IMPORTED_MODULE_2__["InvalidNameComponent"]);
        }
    }
    changePp() {
        if (this.inputpp != null && this.inputpp >= 0) {
            console.log("changed to " + this.inputpp);
            this.pp_pic = src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_3__["PpPic"].validPpPics[this.inputpp];
            localStorage.setItem(AppComponent.LOCAL_PP_STORE, this.inputpp.toString());
        }
    }
}
AppComponent.LOCAL_USERNAME_STORE = "GSUser";
AppComponent.LOCAL_PP_STORE = "GSPfp";
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 3, consts: [["type", "image", "id", "Logo", "src", "assets/global/Logo.png", "routerLink", "/"], ["id", "ButtonArea"], ["id", "RoomButton", "routerLink", "/rooms", "mat-raised-button", ""], ["id", "RoomButton", "routerLink", "/create", "mat-raised-button", ""], ["id", "RoomButton", "routerLink", "/external/restaurant", "mat-raised-button", ""], ["id", "Login-Group"], [1, "login-comp"], ["type", "button", "id", "CNButton", 1, "login-comp", 3, "matMenuTriggerFor"], [3, "src"], ["xPosition", "before"], ["Avatar", "matMenu"], ["mat-menu-item", "", 3, "click"], ["id", "routerContents"], ["id", "router"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Restaurant World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.changeNameButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Change Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { return ctx.changePpButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Change PP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Logged In as: ", ctx.UserName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pp_pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px 0px 0px 0px;\r\n\r\n    height: 80px;\r\n    width: 100%;\r\n\r\n    background-color: white;\r\n    box-shadow: 3px 3px 1px grey;\r\n}\r\n#HeadTop[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    width: 100%;    \r\n}\r\n\r\n#Logo[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    width: 142px;\r\n    margin-left: 15px;\r\n    float:left;\r\n}\r\n\r\n#ButtonArea[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    display: flex;\r\n    float: left;\r\n\r\n    height: 80px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-left: 50px;\r\n}\r\n#RoomButton[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    background-color: orange;\r\n    width: 140px;\r\n    text-align: center;\r\n}\r\n\r\n#Login-Group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: absolute;\r\n    right:0px;\r\n    top: 0px;\r\n\r\n    height: 80px;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-right: 15px;\r\n}\r\n#Login-Group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    align-self: center;\r\n}\r\n\r\n.login-comp[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n#CNButton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background-color: transparent;\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0 0 0 0;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\nbutton[_ngcontent-%COMP%]:focus {\r\n    outline-style: none;\r\n}\r\n#CNButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    margin: auto auto auto auto;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n}\r\n#routerContents[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    top:80px;\r\n    bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7QUFDZDtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsdUJBQXVCOztJQUV2QixZQUFZO0lBQ1osV0FBVzs7SUFFWCx1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUEsT0FBTztBQUVQO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBRUEsVUFBVTtBQUNWO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXOztJQUVYLFlBQVk7SUFDWiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjs7SUFFbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQSxhQUFhO0FBQ2I7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFROztJQUVSLFlBQVk7O0lBRVosdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBRUE7Ozs7R0FJRztBQUVIO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTWFpbiBIZWFkZXIqL1xyXG5oZWFkZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG5cclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxcHggZ3JleTtcclxufVxyXG5cclxuI0hlYWRUb3Age1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG59XHJcblxyXG4vKkxvZ28qL1xyXG5cclxuI0xvZ28ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4vKkJ1dHRvbnMqL1xyXG4jQnV0dG9uQXJlYSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbiNSb29tQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKkxvZ2luIEFyZWEqL1xyXG4jTG9naW4tR3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjBweDtcclxuICAgIHRvcDogMHB4O1xyXG5cclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4jTG9naW4tR3JvdXAgKiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qICNDaGFuZ2VOYW1lRmllbGQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0gKi9cclxuXHJcbi5sb2dpbi1jb21wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jQ05CdXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI0NOQnV0dG9uIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4jcm91dGVyQ29udGVudHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6ODBweDtcclxuICAgIGJvdHRvbTogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "TiHW":
/*!*******************************************************************!*\
  !*** ./src/app/components/illegal-page/illegal-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: IllegalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllegalPageComponent", function() { return IllegalPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IllegalPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
IllegalPageComponent.ɵfac = function IllegalPageComponent_Factory(t) { return new (t || IllegalPageComponent)(); };
IllegalPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllegalPageComponent, selectors: [["app-illegal-page"]], decls: 5, vars: 0, consts: [["src", "assets/IllegalPage/cry.png"]], template: function IllegalPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OPPSIE PAGE NOT FOUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We are sorry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 50px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight: 350;\r\n    font-size: 50px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n    height: 400px;\r\n    width: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlsbGVnYWwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoiaWxsZWdhbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IllegalPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-illegal-page',
                templateUrl: './illegal-page.component.html',
                styleUrls: ['./illegal-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XdlW":
/*!***************************************************************************!*\
  !*** ./src/app/components/dialogs/invalid-name/invalid-name.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvalidNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidNameComponent", function() { return InvalidNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class InvalidNameComponent {
    constructor() { }
    ngOnInit() {
    }
}
InvalidNameComponent.ɵfac = function InvalidNameComponent_Factory(t) { return new (t || InvalidNameComponent)(); };
InvalidNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvalidNameComponent, selectors: [["app-invalid-name"]], decls: 7, vars: 0, consts: [["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function InvalidNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The name you put cannot be blank or undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZhbGlkLW5hbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvalidNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invalid-name',
                templateUrl: './invalid-name.component.html',
                styleUrls: ['./invalid-name.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/test-page/test-page.component */ "cWoD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_dialogs_invalid_name_invalid_name_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dialogs/invalid-name/invalid-name.component */ "XdlW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_games_cardgames_red_flags_red_flags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/games/cardgames/red-flags/red-flags.component */ "1OMX");
/* harmony import */ var _components_illegal_page_illegal_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/illegal-page/illegal-page.component */ "TiHW");
/* harmony import */ var _components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dialogs/change-name/change-name.component */ "tkyf");
/* harmony import */ var _components_games_room_selector_room_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/games/room-selector/room-selector.component */ "p3C0");
/* harmony import */ var _components_games_room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/games/room-creator/room-creator.component */ "oXSD");
/* harmony import */ var _components_games_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/games/game-page/game-page.component */ "t8kW");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _components_dialogs_changepp_change_ppdialog_change_ppdialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dialogs/changepp/change-ppdialog/change-ppdialog.component */ "2N/y");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _components_dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dialogs/failed-to-send-request/failed-to-send-request.component */ "NQPq");
/* harmony import */ var _directives_game_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/game.directive */ "MCKW");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _components_dialogs_GameDialogs_spectator_join_spectator_join_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dialogs/GameDialogs/spectator-join/spectator-join.component */ "rP4V");
/* harmony import */ var _components_dialogs_GameDialogs_spec_or_play_spec_or_play_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dialogs/GameDialogs/spec-or-play/spec-or-play.component */ "siLS");
/* harmony import */ var _components_dialogs_GameDialogs_confirm_leave_confirm_leave_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dialogs/GameDialogs/confirm-leave/confirm-leave.component */ "FuFN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _components_dialogs_GameDialogs_single_input_dialog_single_input_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dialogs/GameDialogs/single-input-dialog/single-input-dialog.component */ "e16k");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_games_cardgames_tycoon_tycoon_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/games/cardgames/tycoon/tycoon.component */ "52ZH");
/* harmony import */ var _components_games_cardgames_poker_poker_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/games/cardgames/poker/poker.component */ "uomt");
/* harmony import */ var _components_redirect_page_redirect_page_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/redirect-page/redirect-page.component */ "m1AO");










































const config = {
    url: "http://" + window.location.hostname + ":3000", options: {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    }
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_20__["SocketIoModule"].forRoot(config),
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        _components_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_5__["TestPageComponent"],
        _components_dialogs_invalid_name_invalid_name_component__WEBPACK_IMPORTED_MODULE_12__["InvalidNameComponent"],
        _components_games_cardgames_red_flags_red_flags_component__WEBPACK_IMPORTED_MODULE_14__["RedFlagsComponent"],
        _components_illegal_page_illegal_page_component__WEBPACK_IMPORTED_MODULE_15__["IllegalPageComponent"],
        _components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_16__["ChangeNameComponent"],
        _components_games_room_selector_room_selector_component__WEBPACK_IMPORTED_MODULE_17__["RoomSelectorComponent"],
        _components_games_room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_18__["RoomCreatorComponent"],
        _components_games_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_19__["GamePageComponent"],
        _components_dialogs_changepp_change_ppdialog_change_ppdialog_component__WEBPACK_IMPORTED_MODULE_23__["ChangePPDialogComponent"],
        _components_dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_25__["FailedToSendRequestComponent"],
        _directives_game_directive__WEBPACK_IMPORTED_MODULE_26__["GameDirective"],
        _components_dialogs_GameDialogs_spectator_join_spectator_join_component__WEBPACK_IMPORTED_MODULE_29__["SpectatorJoinComponent"],
        _components_dialogs_GameDialogs_spec_or_play_spec_or_play_component__WEBPACK_IMPORTED_MODULE_30__["SpecOrPlayComponent"],
        _components_dialogs_GameDialogs_confirm_leave_confirm_leave_component__WEBPACK_IMPORTED_MODULE_31__["ConfirmLeaveComponent"],
        _components_dialogs_GameDialogs_single_input_dialog_single_input_dialog_component__WEBPACK_IMPORTED_MODULE_35__["SingleInputDialogComponent"],
        _components_games_cardgames_tycoon_tycoon_component__WEBPACK_IMPORTED_MODULE_37__["TycoonComponent"],
        _components_games_cardgames_poker_poker_component__WEBPACK_IMPORTED_MODULE_38__["PokerComponent"],
        _components_redirect_page_redirect_page_component__WEBPACK_IMPORTED_MODULE_39__["RedirectPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_20__["SocketIoModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                    _components_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_5__["TestPageComponent"],
                    _components_dialogs_invalid_name_invalid_name_component__WEBPACK_IMPORTED_MODULE_12__["InvalidNameComponent"],
                    _components_games_cardgames_red_flags_red_flags_component__WEBPACK_IMPORTED_MODULE_14__["RedFlagsComponent"],
                    _components_illegal_page_illegal_page_component__WEBPACK_IMPORTED_MODULE_15__["IllegalPageComponent"],
                    _components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_16__["ChangeNameComponent"],
                    _components_games_room_selector_room_selector_component__WEBPACK_IMPORTED_MODULE_17__["RoomSelectorComponent"],
                    _components_games_room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_18__["RoomCreatorComponent"],
                    _components_games_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_19__["GamePageComponent"],
                    _components_dialogs_changepp_change_ppdialog_change_ppdialog_component__WEBPACK_IMPORTED_MODULE_23__["ChangePPDialogComponent"],
                    _components_dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_25__["FailedToSendRequestComponent"],
                    _directives_game_directive__WEBPACK_IMPORTED_MODULE_26__["GameDirective"],
                    _components_dialogs_GameDialogs_spectator_join_spectator_join_component__WEBPACK_IMPORTED_MODULE_29__["SpectatorJoinComponent"],
                    _components_dialogs_GameDialogs_spec_or_play_spec_or_play_component__WEBPACK_IMPORTED_MODULE_30__["SpecOrPlayComponent"],
                    _components_dialogs_GameDialogs_confirm_leave_confirm_leave_component__WEBPACK_IMPORTED_MODULE_31__["ConfirmLeaveComponent"],
                    _components_dialogs_GameDialogs_single_input_dialog_single_input_dialog_component__WEBPACK_IMPORTED_MODULE_35__["SingleInputDialogComponent"],
                    _components_games_cardgames_tycoon_tycoon_component__WEBPACK_IMPORTED_MODULE_37__["TycoonComponent"],
                    _components_games_cardgames_poker_poker_component__WEBPACK_IMPORTED_MODULE_38__["PokerComponent"],
                    _components_redirect_page_redirect_page_component__WEBPACK_IMPORTED_MODULE_39__["RedirectPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_20__["SocketIoModule"].forRoot(config),
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomePageComponent {
    constructor() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 8, vars: 0, consts: [["id", "ImgContainer"], ["src", "assets/home/thumbs.jpg"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Kassie's Lounge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The place where things always go wrong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Any complaints can go to the trash can");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 50px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 30px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    border-radius: 80%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n    height: 400px;\r\n    width: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cWoD":
/*!*************************************************************!*\
  !*** ./src/app/components/test-page/test-page.component.ts ***!
  \*************************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestPageComponent.ɵfac = function TestPageComponent_Factory(t) { return new (t || TestPageComponent)(); };
TestPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestPageComponent, selectors: [["app-test-page"]], decls: 2, vars: 0, template: function TestPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-page',
                templateUrl: './test-page.component.html',
                styleUrls: ['./test-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "e16k":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dialogs/GameDialogs/single-input-dialog/single-input-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SingleInputDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleInputDialogComponent", function() { return SingleInputDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function SingleInputDialogComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleInputDialogComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.data.output = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class SingleInputDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCancel() {
        this.data.cancel = true;
        this.dialogRef.close(this.data);
    }
    onSubmit() {
        this.data.cancel = false;
        this.dialogRef.close(this.data);
    }
}
SingleInputDialogComponent.ɵfac = function SingleInputDialogComponent_Factory(t) { return new (t || SingleInputDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
SingleInputDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleInputDialogComponent, selectors: [["app-single-input-dialog"]], decls: 13, vars: 5, consts: [["mat-dialog-title", ""], ["matInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 3, "click"], ["id", "Change", "mat-button", "", "cdkFocusInitial", "", 3, "click"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function SingleInputDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Name Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingleInputDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.output = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SingleInputDialogComponent_button_7_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleInputDialogComponent_Template_button_click_9_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleInputDialogComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.output)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.output);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleInputDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-input-dialog',
                templateUrl: './single-input-dialog.component.html',
                styleUrls: ['./single-input-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "jU0p":
/*!*********************************************!*\
  !*** ./src/app/services/sockets.service.ts ***!
  \*********************************************/
/*! exports provided: SocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsService", function() { return SocketsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");



class SocketsService {
    constructor(socket) {
        this.socket = socket;
    }
    sendMessage(channel, data) {
        this.socket.emit(channel, data);
    }
    setlistener(channel, clbk) {
        this.socket.on(channel, result => {
            clbk(result);
        });
    }
    removelistener(channel) {
        this.socket.removeListener(channel);
    }
}
SocketsService.ɵfac = function SocketsService_Factory(t) { return new (t || SocketsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
SocketsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketsService, factory: SocketsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ }),

/***/ "m1AO":
/*!*********************************************************************!*\
  !*** ./src/app/components/redirect-page/redirect-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RedirectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectPageComponent", function() { return RedirectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RedirectPageComponent {
    constructor() { }
    ngOnInit() {
        window.location.reload();
    }
}
RedirectPageComponent.ɵfac = function RedirectPageComponent_Factory(t) { return new (t || RedirectPageComponent)(); };
RedirectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedirectPageComponent, selectors: [["app-redirect-page"]], decls: 2, vars: 0, template: function RedirectPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "redirect-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedirectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-redirect-page',
                templateUrl: './redirect-page.component.html',
                styleUrls: ['./redirect-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oXSD":
/*!*************************************************************************!*\
  !*** ./src/app/components/games/room-creator/room-creator.component.ts ***!
  \*************************************************************************/
/*! exports provided: RoomCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCreatorComponent", function() { return RoomCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_games_Games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/games/Games */ "9lPf");
/* harmony import */ var _dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/failed-to-send-request/failed-to-send-request.component */ "NQPq");
/* harmony import */ var src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sockets.service */ "jU0p");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
















function RoomCreatorComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", g_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r6);
} }
function RoomCreatorComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "required*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomCreatorComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Max value of 20 is only accepted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomCreatorComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomCreatorComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomCreatorComponent_mat_spinner_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 9);
} }
class RoomCreatorComponent {
    constructor(sockets, dialog, router) {
        this.sockets = sockets;
        this.dialog = dialog;
        this.router = router;
        this.gameOptions = src_app_models_games_Games__WEBPACK_IMPORTED_MODULE_2__["Games"].getGameStringArray();
        this.gametype = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.maxPlayers = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
        ]);
        this.sentRequest = false;
    }
    buttonClick() {
        console.log(this.gametype.value);
        if (this.gametype.invalid || this.maxPlayers.invalid) {
            console.log("Invalid input");
            this.gametype.markAsTouched();
            this.maxPlayers.markAsTouched();
            return;
        }
        //send request
        this.sentRequest = true;
        var reqId = Math.floor(Math.random() * Math.floor(1000000));
        this.sockets.sendMessage("createroom", {
            game: this.gametype.value,
            max: this.maxPlayers.value,
            tempId: reqId
        });
        var self = this;
        this.sockets.setlistener("roomres" + reqId, function (data) {
            if (!data.success) {
                const dialogref = self.dialog.open(_dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_3__["FailedToSendRequestComponent"], { data: "Server denied request due to: " + data.error });
                dialogref.afterClosed().subscribe(result => {
                    self.router.navigate(['']);
                });
            }
            else {
                self.router.navigate(['game'], {
                    queryParams: {
                        r: data.id
                    }
                });
            }
        });
    }
}
RoomCreatorComponent.ɵfac = function RoomCreatorComponent_Factory(t) { return new (t || RoomCreatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RoomCreatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomCreatorComponent, selectors: [["app-room-creator"]], decls: 22, vars: 11, consts: [["id", "CreationSettings"], ["appearance", "fill"], [3, "formControl", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Ex. 5", 3, "formControl", "disabled"], ["mat-raised-button", "", 3, "disabled", "click"], ["style", "margin-left: 5%!important;margin-top: 40px!important;", 4, "ngIf"], [3, "value"], [2, "margin-left", "5%!important", "margin-top", "40px!important"]], template: function RoomCreatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomCreatorComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomCreatorComponent_mat_error_8_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Max Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Max value of 20 only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomCreatorComponent_mat_error_16_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomCreatorComponent_mat_error_17_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoomCreatorComponent_mat_error_18_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomCreatorComponent_Template_button_click_19_listener() { return ctx.buttonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Create Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoomCreatorComponent_mat_spinner_21_Template, 1, 0, "mat-spinner", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.gametype)("disabled", ctx.sentRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxPlayers.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.maxPlayers)("disabled", ctx.sentRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxPlayers.hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxPlayers.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxPlayers.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sentRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sentRequest);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: ["#CreationSettings[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    margin-left: 5%;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    background-color: orange;\r\n    margin-left: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tY3JlYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25CIiwiZmlsZSI6InJvb20tY3JlYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNDcmVhdGlvblNldHRpbmdzIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomCreatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-creator',
                templateUrl: './room-creator.component.html',
                styleUrls: ['./room-creator.component.css']
            }]
    }], function () { return [{ type: src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "p3C0":
/*!***************************************************************************!*\
  !*** ./src/app/components/games/room-selector/room-selector.component.ts ***!
  \***************************************************************************/
/*! exports provided: RoomSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomSelectorComponent", function() { return RoomSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../room-creator/room-creator.component */ "oXSD");
/* harmony import */ var src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sockets.service */ "jU0p");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function RoomSelectorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sorry!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomSelectorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trying to load results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomSelectorComponent_div_9_tr_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Game Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomSelectorComponent_div_9_tr_13_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Waiting to start...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "thtrue": a0, "thfalse": a1 }; };
function RoomSelectorComponent_div_9_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomSelectorComponent_div_9_tr_13_span_8_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomSelectorComponent_div_9_tr_13_span_9_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomSelectorComponent_div_9_tr_13_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const r_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.joinRoom(r_r4.roomId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Join Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.roomId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.roomType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", r_r4.numPlayers, "/", r_r4.maxPlayers, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, r_r4.inProgress, !r_r4.inProgress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r4.inProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !r_r4.inProgress);
} }
function RoomSelectorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Room Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RoomSelectorComponent_div_9_tr_13_Template, 13, 10, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.entries);
} }
class RoomSelectorComponent {
    constructor(socketServe, matDialog, router) {
        this.socketServe = socketServe;
        this.matDialog = matDialog;
        this.router = router;
        this.results = -1;
        var self = this;
        this.entries = [];
        socketServe.setlistener("rooms", function (result) {
            self.entries = result;
            self.results = result.length;
            self.socketServe.removelistener("rooms");
        });
        socketServe.sendMessage("getRooms", null);
    }
    joinRoom(id) {
        console.log("Trying to join room " + id);
        this.router.navigate(["game"], {
            queryParams: {
                r: id
            }
        });
    }
    CreateRoomDialog() {
        this.matDialog.open(_room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_1__["RoomCreatorComponent"]);
    }
}
RoomSelectorComponent.ɵfac = function RoomSelectorComponent_Factory(t) { return new (t || RoomSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_2__["SocketsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RoomSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomSelectorComponent, selectors: [["app-room-selector"]], decls: 10, vars: 4, consts: [["id", "ResultBar"], ["id", "buttonContainer"], ["id", "createButton", "mat-mini-fab", "", 3, "click"], ["class", "NoResultElement", 4, "ngIf"], ["id", "ResultBlockContainer", 4, "ngIf"], [1, "NoResultElement"], ["id", "NRText"], ["id", "NoResultImg", "src", "assets/IllegalPage/clown.png"], ["id", "ResultBlockContainer"], [1, "Resultblock"], [1, "Header"], ["class", "resultElement", 4, "ngFor", "ngForOf"], [1, "resultElement"], [3, "ngClass"], [4, "ngIf"], ["mat-raised-button", "", 1, "JoinButton", 3, "click"]], template: function RoomSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomSelectorComponent_Template_button_click_4_listener() { return ctx.CreateRoomDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomSelectorComponent_div_7_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomSelectorComponent_div_8_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomSelectorComponent_div_9_Template, 14, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Found ", ctx.results, " results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results == -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results > 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: ["#ResultBar[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    box-shadow: 1px 1px 1px grey;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n\r\n    height: 50px;\r\n\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n}\r\n\r\n#ResultBar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    float:left;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 50px;\r\n}\r\n\r\n#buttonContainer[_ngcontent-%COMP%] {\r\n    float:right;\r\n    height: 50px;\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n\r\n#createButton[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\r\n\r\n#createButton[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.NoResultElement[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.NoResultElement[_ngcontent-%COMP%]    > #NRText[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    display: flex;\r\n    margin-top: 50px;\r\n}\r\n\r\n.NoResultElement[_ngcontent-%COMP%]    > #NRText[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 50px;\r\n    margin: 0 0 0 0;\r\n    text-align: center;\r\n}\r\n\r\n#NoResultImg[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    height: 350px;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    display: flex;\r\n    margin-top: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.Resultblock[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n}\r\n\r\ntr.Header[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid gray;\r\n    height: 40px;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n}\r\n\r\n.thtrue[_ngcontent-%COMP%] {\r\n    color: #cc3300\r\n}\r\n\r\n.thfalse[_ngcontent-%COMP%] {\r\n    color: green\r\n}\r\n\r\n.JoinButton[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsWUFBWTs7SUFFWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDViwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUM7SUFDRywrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJyb29tLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjUmVzdWx0QmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGdyZXk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jUmVzdWx0QmFyIHAge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI2J1dHRvbkNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNjcmVhdGVCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4jY3JlYXRlQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uTm9SZXN1bHRFbGVtZW50IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLk5vUmVzdWx0RWxlbWVudCA+ICNOUlRleHQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uTm9SZXN1bHRFbGVtZW50ID4gI05SVGV4dCA+IHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jTm9SZXN1bHRJbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uUmVzdWx0YmxvY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbnRyLkhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuIHRoIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udGh0cnVlIHtcclxuICAgIGNvbG9yOiAjY2MzMzAwXHJcbn1cclxuXHJcbi50aGZhbHNlIHtcclxuICAgIGNvbG9yOiBncmVlblxyXG59XHJcblxyXG4uSm9pbkJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-selector',
                templateUrl: './room-selector.component.html',
                styleUrls: ['./room-selector.component.css']
            }]
    }], function () { return [{ type: src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_2__["SocketsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "r3u2":
/*!*****************************************!*\
  !*** ./src/app/datastructures/Queue.ts ***!
  \*****************************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
class Queue {
    constructor() {
        this.data = [];
    }
    addbeginning(v) {
        this.data.unshift(v);
    }
    addEnd(v) {
        this.data.push(v);
    }
    peekBeginning() {
        return this.data[0];
    }
    peekEnd() {
        return this.data[this.data.length - 1];
    }
    popBeginning() {
        return this.data.shift();
    }
    popEnd() {
        return this.data.pop();
    }
    size() {
        return this.data.length;
    }
}


/***/ }),

/***/ "rP4V":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dialogs/GameDialogs/spectator-join/spectator-join.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpectatorJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpectatorJoinComponent", function() { return SpectatorJoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class SpectatorJoinComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpectatorJoinComponent.ɵfac = function SpectatorJoinComponent_Factory(t) { return new (t || SpectatorJoinComponent)(); };
SpectatorJoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpectatorJoinComponent, selectors: [["app-spectator-join"]], decls: 7, vars: 0, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function SpectatorJoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spectator!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You joined the game as a spectator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjdGF0b3Itam9pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpectatorJoinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spectator-join',
                templateUrl: './spectator-join.component.html',
                styleUrls: ['./spectator-join.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "siLS":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dialogs/GameDialogs/spec-or-play/spec-or-play.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SpecOrPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecOrPlayComponent", function() { return SpecOrPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class SpecOrPlayComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
SpecOrPlayComponent.ɵfac = function SpecOrPlayComponent_Factory(t) { return new (t || SpecOrPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
SpecOrPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecOrPlayComponent, selectors: [["app-spec-or-play"]], decls: 6, vars: 2, consts: [["mat-dialog-title", ""], ["id", "spec", "mat-button", "", 3, "mat-dialog-close"], ["id", "play", "mat-button", "", 3, "mat-dialog-close"]], template: function SpecOrPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join as Spectator or Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Spectate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["button[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\r\n\r\n#spec[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n#play[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMtb3ItcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcGVjLW9yLXBsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4jc3BlYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jcGxheSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecOrPlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spec-or-play',
                templateUrl: './spec-or-play.component.html',
                styleUrls: ['./spec-or-play.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "t8kW":
/*!*******************************************************************!*\
  !*** ./src/app/components/games/game-page/game-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: GamePageComponent, ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageComponent", function() { return GamePageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_datastructures_Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/datastructures/Queue */ "r3u2");
/* harmony import */ var src_app_directives_game_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/game.directive */ "MCKW");
/* harmony import */ var src_app_models_games_Games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/games/Games */ "9lPf");
/* harmony import */ var src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/pppics/PpPic */ "2kQe");
/* harmony import */ var _dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/failed-to-send-request/failed-to-send-request.component */ "NQPq");
/* harmony import */ var _dialogs_GameDialogs_confirm_leave_confirm_leave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/GameDialogs/confirm-leave/confirm-leave.component */ "FuFN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sockets.service */ "jU0p");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_game_gamerequests_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/game/gamerequests.service */ "xJH3");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");






















const _c0 = ["drawer"];
const _c1 = ["chatCom"];
function GamePageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.allowedPpPicsArray[m_r4.pp], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", m_r4.name, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r4.msg);
} }
function GamePageComponent_ng_template_17_Template(rf, ctx) { }
const _c2 = function () { return { standalone: true }; };
class GamePageComponent {
    constructor(route, factoryResolver, socket, router, dialog, gr) {
        this.route = route;
        this.factoryResolver = factoryResolver;
        this.socket = socket;
        this.router = router;
        this.dialog = dialog;
        this.gr = gr;
        this.allowedPpPicsArray = src_app_models_pppics_PpPic__WEBPACK_IMPORTED_MODULE_5__["PpPic"].validPpPics;
        this.hidden = true;
        this.chatUnread = 0;
        this.route.queryParams
            .subscribe(params => {
            this.roomId = params.r;
        });
        var self = this;
        socket.sendMessage("GET roomData", this.roomId);
        socket.setlistener("RoomInfo", function (result) {
            if (result.success) {
                self.addGameElement(src_app_models_games_Games__WEBPACK_IMPORTED_MODULE_4__["Games"].getGameCompFromString(result.roomType));
            }
            else {
                dialog.open(_dialogs_failed_to_send_request_failed_to_send_request_component__WEBPACK_IMPORTED_MODULE_6__["FailedToSendRequestComponent"], { data: "Room cannot be found" });
                router.navigate([""]);
            }
            socket.removelistener("RoomInfo");
        });
        this.chatMsgs = new src_app_datastructures_Queue__WEBPACK_IMPORTED_MODULE_2__["Queue"]();
        socket.setlistener("chat" + this.roomId.toString(), function (data) {
            self.chatMsgs.addEnd(data);
            if (self.chatMsgs.size() > GamePageComponent.MAX_MSGS) {
                self.chatMsgs.popBeginning();
            }
            if (!self.chatNav.opened) {
                self.chatUnread++;
                self.hidden = false;
                console.log("Unread");
            }
            setTimeout(function () {
                self.chatComp.nativeElement.scrollTop = self.chatComp.nativeElement.scrollHeight;
            }, 10);
        });
    }
    addGameElement(component) {
        console.log("adding component");
        const factory = this.factoryResolver.resolveComponentFactory(component);
        const viewContainerRef = this.appGame.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(factory);
    }
    sendChatMsg() {
        if (this.textBoxData != null || this.textBoxData != undefined) {
            this.textBoxData = this.textBoxData.trim();
            if (this.textBoxData != "") {
                var pppic = localStorage.getItem(src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].LOCAL_PP_STORE);
                var nameVal = localStorage.getItem(src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].LOCAL_USERNAME_STORE);
                console.log("sent");
                this.socket.sendMessage("POST chat", { rid: this.roomId, pp: pppic, name: nameVal, msg: this.textBoxData });
                this.textBoxData = "";
            }
        }
    }
    leaveGame() {
        this.dialog.open(_dialogs_GameDialogs_confirm_leave_confirm_leave_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmLeaveComponent"], { data: false }).afterClosed().subscribe(result => {
            if (result) {
                this.gr.promptLeaveGame(this.gr.getPid());
                this.router.navigate([""]);
            }
        });
    }
    toggleChat() {
        this.chatNav.toggle();
        this.hidden = true;
        if (this.chatUnread > 0) {
            setTimeout(function () {
                this.chatComp.nativeElement.scrollTop = this.chatComp.nativeElement.scrollHeight;
            }, 10);
        }
        this.chatUnread = 0;
    }
    onKeydownText(event) {
        event.preventDefault();
    }
}
GamePageComponent.MAX_MSGS = 100;
GamePageComponent.ɵfac = function GamePageComponent_Factory(t) { return new (t || GamePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_9__["SocketsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_gamerequests_service__WEBPACK_IMPORTED_MODULE_11__["GamerequestsService"])); };
GamePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamePageComponent, selectors: [["app-game-page"]], viewQuery: function GamePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_directives_game_directive__WEBPACK_IMPORTED_MODULE_3__["GameDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appGame = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatNav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatComp = _t.first);
    } }, hostAttrs: [1, "GamePage"], decls: 18, vars: 6, consts: [["autosize", "", 2, "background-color", "white"], ["id", "drawButtonLeft", "mat-raised-button", "", 3, "click"], ["mode", "side", "position", "end", "id", "ChatBox"], ["drawer", ""], ["id", "chatArea"], ["chatCom", ""], ["class", "textmsg", 4, "ngFor", "ngForOf"], ["id", "chatform", 3, "keydown.enter"], ["id", "textareachat"], ["matInput", "", "placeholder", "Send a Message", 2, "resize", "none", "background-color", "#ebebeb", "height", "50px", 3, "ngModel", "ngModelOptions", "keydown.enter", "ngModelChange"], ["mat-raised-button", "", 1, "orangeButton", 3, "click"], ["id", "drawButtonRight", "mat-icon-button", "", 3, "click"], ["matBadgeColor", "warn", 1, "whiteicon", 3, "matBadge", "matBadgeHidden", "matBadgeChange", "matBadgeHiddenChange"], ["id", "GameArea"], ["appGame", ""], [1, "textmsg"], [3, "src"]], template: function GamePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamePageComponent_Template_button_click_1_listener() { return ctx.leaveGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leave Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GamePageComponent_div_7_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function GamePageComponent_Template_form_keydown_enter_8_listener() { return ctx.sendChatMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function GamePageComponent_Template_textarea_keydown_enter_10_listener($event) { return ctx.onKeydownText($event); })("ngModelChange", function GamePageComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.textBoxData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamePageComponent_Template_button_click_11_listener() { return ctx.sendChatMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamePageComponent_Template_button_click_13_listener() { return ctx.toggleChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matBadgeChange", function GamePageComponent_Template_mat_icon_matBadgeChange_14_listener($event) { return ctx.chatUnread = $event; })("matBadgeHiddenChange", function GamePageComponent_Template_mat_icon_matBadgeHiddenChange_14_listener($event) { return ctx.hidden = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GamePageComponent_ng_template_17_Template, 0, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatMsgs.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBoxData)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.chatUnread)("matBadgeHidden", ctx.hidden);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatDrawerContainer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadge"], src_app_directives_game_directive__WEBPACK_IMPORTED_MODULE_3__["GameDirective"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n}\r\n\r\n#GameArea[_ngcontent-%COMP%] {\r\n    \r\n    height: 96%;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    margin-top: 15px;\r\n}\r\n\r\n#chatArea[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    padding-bottom: 100px;\r\n    overflow: auto;\r\n    top: 0;\r\n    bottom: 25%;\r\n    width: 95%;\r\n}\r\n\r\n#ChatBox[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0px;\r\n    top: 85px;\r\n    bottom: 0px;\r\n    width: 20%; \r\n    overflow: hidden;\r\n}\r\n\r\n#chatform[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;;\r\n    padding-bottom: 20px;\r\n    width: 90%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#textareachat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n}\r\n\r\n.orangeButton[_ngcontent-%COMP%]{\r\n    background-color: orange;\r\n    float: right;\r\n    height: 25px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    line-height: 10px;\r\n}\r\n\r\n#drawButtonLeft[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    float: left;\r\n    margin-left: 15px;\r\n    margin-top: 5px;\r\n    background-color: orange;\r\n}\r\n\r\n#drawButtonRight[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    float: right;\r\n    margin-right: 15px;\r\n    margin-top: 5px;\r\n    background-color: orange;\r\n}\r\n\r\n.textmsg[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n.textmsg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.textmsg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    vertical-align: middle;\r\n}\r\n\r\n.textmsg[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    vertical-align: middle;\r\n}\r\n\r\nmat-drawer-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    top:0;\r\n    bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLE1BQU07SUFDTixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsVUFBVTs7SUFFVixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxLQUFLO0lBQ0wsU0FBUztBQUNiIiwiZmlsZSI6ImdhbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4jR2FtZUFyZWEge1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuI2NoYXRBcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDI1JTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbiNDaGF0Qm94IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDg1cHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAyMCU7IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2NoYXRmb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDs7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jdGV4dGFyZWFjaGF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5vcmFuZ2VCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNkcmF3QnV0dG9uTGVmdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbiNkcmF3QnV0dG9uUmlnaHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi50ZXh0bXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRleHRtc2cgaW1nIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnRleHRtc2cgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50ZXh0bXNnIHN0cm9uZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-page',
                templateUrl: './game-page.component.html',
                styleUrls: ['./game-page.component.css'],
                host: {
                    class: 'GamePage'
                }
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_9__["SocketsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: src_app_services_game_gamerequests_service__WEBPACK_IMPORTED_MODULE_11__["GamerequestsService"] }]; }, { appGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_directives_game_directive__WEBPACK_IMPORTED_MODULE_3__["GameDirective"], {
                    static: true
                }]
        }], chatNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["drawer"]
        }], chatComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chatCom"]
        }] }); })();
class ChatMessage {
}


/***/ }),

/***/ "tkyf":
/*!*************************************************************************!*\
  !*** ./src/app/components/dialogs/change-name/change-name.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangeNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNameComponent", function() { return ChangeNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function ChangeNameComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeNameComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.data.NewName = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class ChangeNameComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = 'ChangeName';
    }
    onCancel() {
        this.data.Cancelled = true;
        this.dialogRef.close(this.data);
    }
}
ChangeNameComponent.ɵfac = function ChangeNameComponent_Factory(t) { return new (t || ChangeNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ChangeNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeNameComponent, selectors: [["app-change-name"]], decls: 13, vars: 5, consts: [["mat-dialog-title", ""], ["id", "ChangeNameField"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 3, "click"], ["id", "Change", "mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function ChangeNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Name Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangeNameComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.NewName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChangeNameComponent_button_7_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeNameComponent_Template_button_click_9_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.NewName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.NewName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["#ChangeNameField[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n#Change[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1uYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJjaGFuZ2UtbmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0NoYW5nZU5hbWVGaWVsZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI0NoYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-name',
                templateUrl: './change-name.component.html',
                styleUrls: ['./change-name.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "uomt":
/*!*********************************************************************!*\
  !*** ./src/app/components/games/cardgames/poker/poker.component.ts ***!
  \*********************************************************************/
/*! exports provided: PokerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerComponent", function() { return PokerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




const _c0 = function (a0) { return { "turn": a0 }; };
function PokerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, p_r6.turn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", p_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Balance: ", p_r6.curBal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bet: ", p_r6.curBet, " ");
} }
function PokerComponent_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.getCardImgSrcShow(c_r8.card, c_r8.shouldShow), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Jackpot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "$9999");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokerComponent_div_2_img_6_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.centerCards);
} }
function PokerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} }
function PokerComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Raise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r3.currentBet, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r3.playerBet, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r3.newBet, "");
} }
function PokerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Its not your turn to bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.getCardImgSrc(c_r9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PokerComponent {
    constructor() {
        this.players = [
            { name: "Player", curBal: 500, curBet: 500, turn: true },
            { name: "Player", curBal: 500, curBet: 500, turn: false },
            { name: "Player", curBal: 500, curBet: 500, turn: false },
            { name: "Player", curBal: 500, curBet: 500, turn: false },
        ];
        this.cards = [
            { suit: "D", value: 3 },
            { suit: "S", value: 10 },
            { suit: "C", value: 13 },
            { suit: "H", value: 1 },
            { suit: "D", value: 7 }
        ];
        this.centerCards = [
            { card: { suit: "D", value: 3 }, shouldShow: true },
            { card: { suit: "S", value: 10 }, shouldShow: false },
            { card: { suit: "C", value: 13 }, shouldShow: true },
            { card: { suit: "H", value: 1 }, shouldShow: true },
            { card: { suit: "D", value: 7 }, shouldShow: false }
        ];
        this.currentBet = 5;
        this.playerBet = 5;
        this.newBet = 5;
        this.isBetting = true;
        this.started = true;
    }
    getCardImgSrc(c) {
        return "assets/games/traddeck/" + c.value.toString() + c.suit + ".png";
    }
    getCardImgSrcShow(c, show) {
        if (show) {
            return this.getCardImgSrc(c);
        }
        else {
            return "assets/games/traddeck/red_back.png";
        }
    }
}
PokerComponent.ɵfac = function PokerComponent_Factory(t) { return new (t || PokerComponent)(); };
PokerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokerComponent, selectors: [["app-poker"]], decls: 11, vars: 6, consts: [["id", "PlayerArea"], ["class", "playerListing", 3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "CenterArea", 4, "ngIf"], ["id", "HandArea"], ["id", "BetArea", 4, "ngIf"], ["id", "Hand"], [3, "src", 4, "ngFor", "ngForOf"], [1, "playerListing", 3, "ngClass"], ["id", "CenterArea"], ["id", "DealtCards"], [3, "src"], ["id", "BetArea"], [1, "colRow"], [1, "colDisp"], [1, "fillfull"], [1, "moneyVal"], ["mat-raised-button", "", 1, "HandButton"], ["mat-raised-button", "", 1, "betButton"]], template: function PokerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokerComponent_div_1_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokerComponent_div_2_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokerComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokerComponent_table_5_Template, 46, 3, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokerComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokerComponent_img_10_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.started);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.started);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["#PlayerArea[_ngcontent-%COMP%] {\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-top: 10px;\r\n    height: 100px;\r\n    border-style: solid;\r\n    border-width: 3px;\r\n\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n\r\n    white-space: nowrap;\r\n}\r\n\r\n.playerListing[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-right-color: black;\r\n\r\n    height: 100px;\r\n    width: 150px;\r\n\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    align-items: center;\r\n}\r\n\r\n.turn[_ngcontent-%COMP%] {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Varela Round', sans-serif;\r\n    line-height: 20px;\r\n}\r\n\r\n#CenterArea[_ngcontent-%COMP%] {\r\n    display: block;\r\n\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n\r\n    height: 50%;\r\n\r\n    border-style: solid;\r\n    border-width: 3px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-family: 'Varela Round', sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 1000;\r\n}\r\n\r\n#DealtCards[_ngcontent-%COMP%] {\r\n    margin: auto auto auto auto;\r\n    height: 122px;\r\n    width: 600px;\r\n    text-align: center;\r\n}\r\n\r\n#HandArea[_ngcontent-%COMP%] {\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 10px;\r\n    height: 140px;\r\n    border-style: solid;\r\n    border-width: 3px;\r\n\r\n    bottom: 0px;\r\n\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n\r\n    white-space: nowrap;\r\n}\r\n\r\n#BetArea[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n\r\n    width: 55%;\r\n    height: 100%;\r\n\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n\r\n    white-space: nowrap;\r\n\r\n    overflow-x: auto;\r\n}\r\n\r\n#Hand[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n\r\n    width: 45%;\r\n    height: 100%;\r\n\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n\r\n    white-space: nowrap;\r\n\r\n    overflow-x: auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n    margin-left: 20px;\r\n    margin-top: 5px;\r\n\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.colRow[_ngcontent-%COMP%] {\r\n    position: static;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.colDisp[_ngcontent-%COMP%] {\r\n    min-width: 20%;\r\n    height: 100%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 3px 3px 3px 3px;\r\n}\r\n\r\n.moneyVal[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.HandButton[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: orange;\r\n    margin: auto auto 3px auto;\r\n}\r\n\r\n.betButton[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background-color: orange;\r\n    margin-left: 3px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.fillfull[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7O0lBRWpCLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7O0lBRXJCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXOztJQUVYLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCOztJQUVsQixVQUFVO0lBQ1YsWUFBWTs7SUFFWix5QkFBeUI7SUFDekIsdUJBQXVCOztJQUV2QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7O0lBRWxCLFVBQVU7SUFDVixZQUFZOztJQUVaLHdCQUF3QjtJQUN4QixzQkFBc0I7O0lBRXRCLG1CQUFtQjs7SUFFbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InBva2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI1BsYXllckFyZWEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG5cclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnBsYXllckxpc3Rpbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnR1cm4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuI0NlbnRlckFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGhlaWdodDogNTAlO1xyXG5cclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbn1cclxuXHJcbiNEZWFsdENhcmRzIHtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGhlaWdodDogMTIycHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNIYW5kQXJlYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcblxyXG4gICAgYm90dG9tOiAwcHg7XHJcblxyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNCZXRBcmVhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbiNIYW5kIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY29sUm93IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbERpc3Age1xyXG4gICAgbWluLXdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogM3B4IDNweCAzcHggM3B4O1xyXG59XHJcblxyXG4ubW9uZXlWYWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uSGFuZEJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDNweCBhdXRvO1xyXG59XHJcblxyXG4uYmV0QnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5maWxsZnVsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poker',
                templateUrl: './poker.component.html',
                styleUrls: ['./poker.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dialogs/change-name/change-name.component */ "tkyf");
/* harmony import */ var _components_games_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/games/game-page/game-page.component */ "t8kW");
/* harmony import */ var _components_games_room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/games/room-creator/room-creator.component */ "oXSD");
/* harmony import */ var _components_games_room_selector_room_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/games/room-selector/room-selector.component */ "p3C0");
/* harmony import */ var _components_illegal_page_illegal_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/illegal-page/illegal-page.component */ "TiHW");
/* harmony import */ var _components_redirect_page_redirect_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/redirect-page/redirect-page.component */ "m1AO");











const routes = [
    { path: "", component: src_app_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: "rooms", component: _components_games_room_selector_room_selector_component__WEBPACK_IMPORTED_MODULE_6__["RoomSelectorComponent"] },
    { path: "create", component: _components_games_room_creator_room_creator_component__WEBPACK_IMPORTED_MODULE_5__["RoomCreatorComponent"] },
    { path: "game", component: _components_games_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__["GamePageComponent"] },
    { path: "debug/testpage", component: _components_dialogs_change_name_change_name_component__WEBPACK_IMPORTED_MODULE_3__["ChangeNameComponent"] },
    { path: "external/**", component: _components_redirect_page_redirect_page_component__WEBPACK_IMPORTED_MODULE_8__["RedirectPageComponent"] },
    { path: "**", component: _components_illegal_page_illegal_page_component__WEBPACK_IMPORTED_MODULE_7__["IllegalPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xJH3":
/*!*******************************************************!*\
  !*** ./src/app/services/game/gamerequests.service.ts ***!
  \*******************************************************/
/*! exports provided: GamerequestsService, LocalStorageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamerequestsService", function() { return GamerequestsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageData", function() { return LocalStorageData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sockets.service */ "jU0p");



class GamerequestsService {
    constructor(socket) {
        this.socket = socket;
        this.LOCALSTORAGE_GAME_ID_STORE = "GameSiteRoomData";
    }
    //true if should instant join
    //false if should send a request
    setup(roomId) {
        this.roomId = roomId;
        this.localStorageData = JSON.parse(localStorage.getItem(this.LOCALSTORAGE_GAME_ID_STORE));
        return (this.localStorageData != null && this.localStorageData.roomid == roomId);
    }
    setStorage(pid) {
        this.localStorageData = { roomid: this.roomId, playerid: pid };
        localStorage.setItem(this.LOCALSTORAGE_GAME_ID_STORE, JSON.stringify(this.localStorageData));
    }
    getPid() {
        return this.localStorageData.playerid;
    }
    //true if can send join request
    //false if cannot send join request
    requestJoinDetails(clbk) {
        var self = this;
        this.socket.sendMessage("POST JoinDetails", this.roomId);
        this.socket.setlistener("RoomDetails", function (response) {
            self.socket.removelistener("RoomDetails");
            clbk(response);
        });
    }
    requestJoin(clbk) {
        var self = this;
        this.socket.sendMessage("POST JoinGame", this.roomId);
        this.socket.setlistener("JoinRequestResponse", function (response) {
            self.socket.removelistener("JoinRequestResponse");
            clbk(response);
        });
    }
    promptLeaveGame(pid) {
        this.socket.sendMessage("HandleLeave", { roomId: this.roomId, playerId: pid });
        this.localStorageData = null;
        localStorage.setItem(this.LOCALSTORAGE_GAME_ID_STORE, null);
    }
    startWatch(clbk) {
        this.socket.setlistener("GameChannel" + this.roomId.toString(), clbk);
    }
    requestUpdate() {
        this.socket.sendMessage("POST EmitGameUpdate", this.roomId);
    }
    sendData(data) {
        this.socket.sendMessage("POST gamedata", data);
    }
    requestPrivateUpdate(pid) {
        console.log("request");
        this.socket.sendMessage("POST EmitPrivateUpdate", { rid: this.roomId, pid: pid });
    }
    startWatchPrivate(clbk) {
        this.socket.setlistener("PrivateData", clbk);
    }
}
GamerequestsService.ɵfac = function GamerequestsService_Factory(t) { return new (t || GamerequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sockets_service__WEBPACK_IMPORTED_MODULE_1__["SocketsService"])); };
GamerequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GamerequestsService, factory: GamerequestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamerequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _sockets_service__WEBPACK_IMPORTED_MODULE_1__["SocketsService"] }]; }, null); })();
class LocalStorageData {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map