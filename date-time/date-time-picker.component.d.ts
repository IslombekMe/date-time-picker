import { ChangeDetectorRef, EventEmitter, InjectionToken, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { BlockScrollStrategy, Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { OwlDateTime, PickerMode, PickerType, SelectMode } from './date-time.class';
import { OwlDialogService } from '../dialog';
export declare const OWL_DTPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
export declare function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => BlockScrollStrategy;
export declare const OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
export declare class OwlDateTimeComponent<T> extends OwlDateTime<T> implements OnInit, OnDestroy {
    private overlay;
    private viewContainerRef;
    private dialogService;
    private ngZone;
    protected changeDetector: ChangeDetectorRef;
    protected dateTimeAdapter: DateTimeAdapter<T>;
    private defaultScrollStrategy;
    protected dateTimeFormats: OwlDateTimeFormats;
    private document;
    backdropClass: string | string[];
    panelClass: string | string[];
    private _startAt;
    startAt: T | null;
    private _pickerType;
    pickerType: PickerType;
    _pickerMode: PickerMode;
    pickerMode: PickerMode;
    private _disabled;
    disabled: boolean;
    private _opened;
    opened: boolean;
    scrollStrategy: ScrollStrategy;
    afterPickerClosed: EventEmitter<any>;
    afterPickerOpen: EventEmitter<any>;
    yearSelected: EventEmitter<T>;
    monthSelected: EventEmitter<T>;
    confirmSelectedChange: EventEmitter<T | T[]>;
    disabledChange: EventEmitter<boolean>;
    private pickerContainerPortal;
    private pickerContainer;
    private popupRef;
    private dialogRef;
    private dtInputSub;
    private hidePickerStreamSub;
    private confirmSelectedStreamSub;
    private pickerOpenedStreamSub;
    private focusedElementBeforeOpen;
    private _dtInput;
    readonly dtInput: OwlDateTimeInputDirective<T>;
    private _selected;
    selected: T | null;
    private _selecteds;
    selecteds: T[];
    readonly minDateTime: T | null;
    readonly maxDateTime: T | null;
    readonly dateTimeFilter: (date: T | null) => boolean;
    readonly selectMode: SelectMode;
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: OwlDialogService, ngZone: NgZone, changeDetector: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, defaultScrollStrategy: () => ScrollStrategy, dateTimeFormats: OwlDateTimeFormats, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerInput(input: OwlDateTimeInputDirective<T>): void;
    open(): void;
    select(date: T[] | T): void;
    selectYear(normalizedYear: T): void;
    selectMonth(normalizedMonth: T): void;
    close(): void;
    confirmSelect(event?: any): void;
    private openAsDialog;
    private openAsPopup;
    private createPopup;
    private createPopupPositionStrategy;
}
