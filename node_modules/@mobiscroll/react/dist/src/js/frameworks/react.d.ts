import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IMobiscroll as _IMobiscroll } from '../core/mobiscroll';
import { MbscCalendarOptions } from '../presets/calendar';
import { MbscDatetimeOptions } from '../presets/datetimebase';
import { MbscCardOptions } from '../classes/cards';
import { MbscColorOptions } from '../classes/color';
import { MbscEventcalendarOptions } from '../presets/eventcalendar';
import { MbscFormOptions } from '../classes/forms';
import { MbscImageOptions } from '../presets/image';
import { MbscListviewOptions } from '../classes/listview';
import { MbscMeasurementOptions } from '../presets/measurement';
import { MbscTemperatureOptions } from '../presets/temperature';
import { MbscMassOptions } from '../presets/mass';
import { MbscForceOptions } from '../presets/force';
import { MbscSpeedOptions } from '../presets/speed';
import { MbscDistanceOptions } from '../presets/distance';
import { MbscNavOptions } from '../classes/navigation';
import { MbscNumberOptions } from '../presets/number';
import { MbscNumpadOptions, MbscNumpadDecimalOptions, MbscNumpadDateOptions, MbscNumpadTimeOptions, MbscNumpadTimespanOptions } from '../classes/numpad';
import { MbscOptionlistOptions } from '../classes/optionlist';
import { MbscPageOptions } from '../classes/page';
import { MbscPopupOptions } from '../classes/popup';
import { MbscRangeOptions } from '../presets/range';
import { MbscScrollerOptions } from '../classes/scroller';
import { MbscScrollViewOptions } from '../classes/scrollview';
import { MbscSelectOptions } from '../presets/select';
import { MbscTimerOptions } from '../presets/timer';
import { MbscTimespanOptions } from '../presets/timespan';
import { MbscTreelistOptions } from '../presets/treelist';

/**
 * Generic base types for use later
 * --------------------------------
 */

/**
 * Base type for the Components
 * Enabes to define an interface property as "new"-able.
 */
interface MbscComponent<BaseOptionType, AdditionalPropTypes = {}> extends Component<BaseOptionType | AdditionalPropTypes> {
    new(): Component<BaseOptionType | AdditionalPropTypes>;
}

interface InputPassThroughProps {
    className?: string;
    placeholder?: string;
    type?: string;
}

interface InputBaseComponent<BaseOptionType, AdditionalPropTypes = {}> extends MbscComponent<BaseOptionType | InputPassThroughProps, AdditionalPropTypes> { }

/**
 * Base prop-type for a generic value
 */
type ValuePropType<V> = { value?: V };

/** 
 * Prop type for components that accept date as value prop
 */
type MbscDateType = string | Date | object;
type DateValueProp = ValuePropType<MbscDateType>;

/** 
 * Prop type for components that accept number as value prop
 */
type NumberValueType = ValuePropType<number>;

/** 
 * Prop type for components that accept anything as value prop
 */
type AnyValueProp = ValuePropType<any>;

/**
 * Prop type for components that accept string as value prop
 */
type StringValueProp = ValuePropType<string>;

/**
 * Prop type for components that accept className as prop type
 */
interface ClassNameProp {
    className?: string;
}

interface CardsAdditionalProps extends React.HTMLAttributes<HTMLElement> {
    collapsible?: boolean;
    open?: boolean;
}

interface EventcalendarProps {
    data: Array<any>;
    className?: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    valid?: boolean;
    color?: string;
    presetName?: string;
    inputStyle?: string;
    labelStyle?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    valid?: boolean;
    errorMessage?: string;
    icon?: string;
    iconAlign?: string;
    passwordToggle?: boolean;
    iconShow?: string;
    iconHide?: string;
    iconUpload?: string;
    dropdown?: boolean;
    inputStyle?: string;
    labelStyle?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    valid?: boolean;
    errorMessage?: string;
    icon?: string;
    iconAlign?: string;
    inputStyle?: string;
    labelStyle?: string;
}

interface DropdownProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    valid?: boolean;
    errorMessage?: string;
    icon?: string;
    iconAlign?: string;
    inputStyle?: string;
    labelStyle?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    flat?: boolean;
    block?: boolean;
    outline?: boolean;
    icon?: string;
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: string;
    inputStyle?: string;
}

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: string;
    inputStyle?: string;
}

interface SegmentedProps extends RadioProps {
    multiSelect?: boolean;
    icon?: string;
}

interface FormBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: string;
    labelStyle?: string;
    inputStyle?: string;
}

interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {
    'data-icon'?: string;
    'data-icon-align'?: string;
    val?: 'left' | 'right';
    disabled?: boolean;
    color?: string;
    inputStyle?: string;
    labelStyle?: string;
}

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    highlight?: boolean;
    live?: boolean;
    stepLabels?: Array<number>;
    'data-icon'?: string;
    tooltip?: boolean;
    val?: 'left' | 'right';
    // value?: number | Array<number>;
    color?: string;
    inputStyle?: string;
    labelStyle?: string;
}

interface RatingProps extends React.InputHTMLAttributes<HTMLInputElement> {
    val?: 'left' | 'right';
    template?: string;
    empty?: string;
    filled?: string;
    value?: number;
    color?: string;
    inputStyle?: string;
    labelStyle?: string;
}

interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
    collapsible?: boolean;
    open?: boolean;
    inset?: boolean;
}

type ImageProps = ClassNameProp | StringValueProp;

interface ListviewProps {
    className?: string;
    dataKeyField?: string;
    itemType: any;
    itemProps?: any;
    data: Array<any>;
}

interface NavProps extends ClassNameProp {
    replace?: boolean;
}

interface NavItemProps {
    selected?: boolean;
    disabled?: boolean;
    icon?: string;
    id?: string | number;
    to?: string | object;
    onClick?: any;
    replace?: boolean;
    isActive?: any;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    location?: string | object;
}

type NumpadValueProp = ValuePropType<number | string | Date>;
type NumpadProps = NumpadValueProp | MbscNumpadOptions | MbscNumpadDecimalOptions | MbscNumpadDateOptions | MbscNumpadTimeOptions | MbscNumpadTimespanOptions;

interface OptionlistItemProps {
    selected?: boolean;
    disabled?: boolean;
    icon?: string;
    id?: string | number;
    onClick?: any;
}

interface PopupProps extends ClassNameProp {
    style?: React.CSSProperties
}

interface RangeProps extends ValuePropType<MbscDateType[]> {
    readOnly?: boolean;
    disabled?: boolean;
}

type RangeChildProps = ValuePropType<MbscDateType> | React.InputHTMLAttributes<HTMLInputElement>;

type TreelistProps = ClassNameProp | StringValueProp;

/**
 * Interface definitions
 * ---------------------
 */

export interface CalendarComponent extends InputBaseComponent<MbscCalendarOptions, DateValueProp> { }
export interface CardComponent extends MbscComponent<MbscCardOptions, CardsAdditionalProps> { }
export interface CardHeaderComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface CardContentComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface CardFooterComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface CardTitleComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface CardSubtitleComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface ColorComponent extends InputBaseComponent<MbscColorOptions, StringValueProp> { }
export interface DatetimeComponent extends InputBaseComponent<MbscDatetimeOptions, DateValueProp> { }
export interface EventcalendarComponent extends MbscComponent<MbscEventcalendarOptions, EventcalendarProps> { }
export interface FormComponent extends MbscComponent<MbscFormOptions, React.FormHTMLAttributes<HTMLFormElement>> { }
export interface LabelComponent extends MbscComponent<LabelProps> { }
export interface InputComponent extends MbscComponent<MbscFormOptions, InputProps> { }
export interface TextAreaComponent extends MbscComponent<MbscFormOptions, TextAreaProps> { }
export interface DropdownComponent extends MbscComponent<MbscFormOptions, DropdownProps> { }
export interface ButtonComponent extends MbscComponent<MbscFormOptions, ButtonProps> { }
export interface CheckboxComponent extends MbscComponent<MbscFormOptions, CheckboxProps> { }
export interface RadioComponent extends MbscComponent<MbscFormOptions, RadioProps> { }
export interface SegmentedComponent extends MbscComponent<MbscFormOptions, SegmentedProps> { }
export interface SwitchComponent extends MbscComponent<MbscFormOptions, FormBaseProps> { }
export interface StepperComponent extends MbscComponent<MbscFormOptions, FormBaseProps> { }
export interface ProgressComponent extends MbscComponent<MbscFormOptions, ProgressProps> { }
export interface SliderComponent extends MbscComponent<MbscFormOptions, SliderProps> { }
export interface RatingComponent extends MbscComponent<MbscFormOptions, RatingProps> { }
export interface FormGroupComponent extends MbscComponent<FormGroupProps> { }
export interface FormGroupTitleComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface FormGroupContentComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface AccordionComponent extends MbscComponent<React.HTMLAttributes<HTMLElement>> { }
export interface ImageComponent extends MbscComponent<MbscImageOptions, ImageProps> { }
export interface ListviewComponent extends MbscComponent<MbscListviewOptions, ListviewProps> { }
export interface MeasurementComponent extends InputBaseComponent<MbscMeasurementOptions, StringValueProp> { }
export interface TemperatureComponent extends InputBaseComponent<MbscTemperatureOptions, StringValueProp> { }
export interface MassComponent extends InputBaseComponent<MbscMassOptions, StringValueProp> { }
export interface ForceComponent extends InputBaseComponent<MbscForceOptions, StringValueProp> { }
export interface SpeedComponent extends InputBaseComponent<MbscSpeedOptions, StringValueProp> { }
export interface DistanceComponent extends InputBaseComponent<MbscDistanceOptions, StringValueProp> { }
export interface NavComponent extends MbscComponent<MbscNavOptions, NavProps> { }
export interface NavItemComponent extends MbscComponent<NavItemProps> { }
export interface NumberComponent extends InputBaseComponent<MbscNumberOptions, NumberValueType> { }
export interface NumpadComponent extends InputBaseComponent<NumpadProps> { }
export interface OptionlistComponent extends MbscComponent<MbscOptionlistOptions> { }
export interface OptionlistItemComponent extends MbscComponent<OptionlistItemProps> { }
export interface PageComponent extends MbscComponent<MbscPageOptions, React.HTMLAttributes<HTMLElement>> { }
export interface PopupComponent extends MbscComponent<MbscPopupOptions, PopupProps> { }
export interface RangeComponent extends InputBaseComponent<MbscRangeOptions, RangeProps> { }
export interface RangeStartComponent extends InputBaseComponent<RangeChildProps> { }
export interface RangeEndComponent extends RangeStartComponent { }
export interface ScrollerComponent extends InputBaseComponent<MbscScrollerOptions, AnyValueProp> { }
export interface ScrollviewComponent extends MbscComponent<MbscScrollViewOptions, ClassNameProp> { }
export interface SelectComponent extends InputBaseComponent<MbscSelectOptions, StringValueProp> { }
export interface TimerComponent extends InputBaseComponent<MbscTimerOptions, NumberValueType> { }
export interface TimespanComponent extends InputBaseComponent<MbscTimespanOptions, StringValueProp> { }
export interface TreelistComponent extends MbscComponent<MbscTreelistOptions, TreelistProps> { }

/**
 * Const definitions
 * -----------------
 * Enable the following syntax: import { Calendar } from '@mobiscroll/react'
 */

export const Calendar: CalendarComponent;
export const Card: CardComponent;
export const CardHeader: CardHeaderComponent;
export const CardContent: CardContentComponent;
export const CardFooter: CardFooterComponent;
export const CardTitle: CardTitleComponent;
export const CardSubtitle: CardSubtitleComponent;
export const Color: ColorComponent;
export const Datetime: DatetimeComponent;
export const Date: DatetimeComponent;
export const Time: DatetimeComponent;
export const Eventcalendar: EventcalendarComponent;
export const Form: FormComponent;
export const Label: LabelComponent;
export const Input: InputComponent;
export const Textarea: TextAreaComponent;
export const Dropdown: DropdownComponent;
export const Button: ButtonComponent;
export const Checkbox: CheckboxComponent;
export const Radio: RadioComponent;
export const Segmented: SegmentedComponent;
export const Switch: SwitchComponent;
export const Stepper: StepperComponent;
export const Progress: ProgressComponent;
export const Slider: SliderComponent;
export const Rating: RatingComponent;
export const FormGroup: FormGroupComponent;
export const FormGroupTitle: FormGroupTitleComponent;
export const FormGroupContent: FormGroupContentComponent;
export const Accordion: AccordionComponent;
export const Image: ImageComponent;
export const Listview: ListviewComponent;
export const Measurement: MeasurementComponent;
export const Temperature: TemperatureComponent;
export const Mass: MassComponent;
export const Force: ForceComponent;
export const Speed: SpeedComponent;
export const Distance: DistanceComponent;
export const Nav: NavComponent;
export const BottomNav: NavComponent;
export const HamburgerNav: NavComponent;
export const TabNav: NavComponent;
export const NavItem: NavItemComponent;
export const Number: NumberComponent;
export const Numpad: NumpadComponent;
export const Optionlist: OptionlistComponent;
export const OptionItem: OptionlistItemComponent;
export const Page: PageComponent;
export const Popup: PopupComponent;
export const Range: RangeComponent;
export const RangeStart: RangeStartComponent;
export const RangeEnd: RangeEndComponent;
export const Scroller: ScrollerComponent;
export const ScrollView: ScrollviewComponent;
export const Select: SelectComponent;
export const Timer: TimerComponent;
export const Timespan: TimespanComponent;
export const Treelist: TreelistComponent;

/**
 * Namespace definitions
 * ---------------------
 * Enable the use of components under the mobiscroll namespace:
 * Ex.: <mobiscroll.Calendar />
 */

export interface IMobiscroll extends _IMobiscroll {
    Calendar: CalendarComponent;
    Card: CardComponent;
    CardHeader: CardHeaderComponent;
    CardContent: CardContentComponent;
    CardFooter: CardFooterComponent;
    CardTitle: CardTitleComponent;
    CardSubtitle: CardSubtitleComponent;
    Color: ColorComponent;
    Datetime: DatetimeComponent;
    Date: DatetimeComponent;
    Time: DatetimeComponent;
    Eventcalendar: EventcalendarComponent;
    Form: FormComponent;
    Label: LabelComponent;
    Input: InputComponent;
    Textarea: TextAreaComponent;
    Dropdown: DropdownComponent;
    Button: ButtonComponent;
    Checkbox: CheckboxComponent;
    Radio: RadioComponent;
    Segmented: SegmentedComponent;
    Switch: SwitchComponent;
    Stepper: StepperComponent;
    Progress: ProgressComponent;
    Slider: SliderComponent;
    Rating: RatingComponent;
    FormGroup: FormGroupComponent;
    FormGroupTitle: FormGroupTitleComponent;
    FormGroupContent: FormGroupContentComponent;
    Accordion: AccordionComponent;
    Image: ImageComponent;
    Listview: ListviewComponent;
    Measurement: MeasurementComponent;
    Temperature: TemperatureComponent;
    Mass: MassComponent;
    Force: ForceComponent;
    Speed: SpeedComponent;
    Distance: DistanceComponent;
    Nav: NavComponent;
    BottomNav: NavComponent;
    HamburgerNav: NavComponent;
    TabNav: NavComponent;
    NavItem: NavItemComponent;
    Number: NumberComponent;
    Numpad: NumpadComponent;
    Optionlist: OptionlistComponent;
    OptionItem: OptionlistItemComponent;
    Page: PageComponent;
    Popup: PopupComponent;
    Range: RangeComponent;
    RangeStart: RangeStartComponent;
    RangeEnd: RangeEndComponent;
    Scroller: ScrollerComponent;
    ScrollView: ScrollviewComponent;
    Select: SelectComponent;
    Timer: TimerComponent;
    Timespan: TimespanComponent;
    Treelist: TreelistComponent;
}

export const mobiscroll: IMobiscroll;
export as namespace mobiscroll;
export default mobiscroll;