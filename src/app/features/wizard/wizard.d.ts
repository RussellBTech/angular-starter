declare namespace Wizard {
  export type Transition = 'next' | 'prev' | 'goto';
  export type ContentType = 'formField' | 'html' | 'feature' | 'row';
  export type ContentArray = FormField | Html | Row | Feature;

  export interface State {
    /** ID of active section */
    sectionActiveId: string | null;
    /** ID of active route */
    routeActiveId: string | null;
    /** The route history of the users flow through the current section */
    routePath: string[];
    /** The status of each section in this wizard flow */
    status: Record<string, SectionStatus>;
    /** For arrays, keep track of which index to pull the model from */
    arrayIndexes: Record<string, number>;
  }

  export interface SectionStatus {
    /** Is this the currently active section */
    active: boolean;
    /** Has this section been completed */
    completed: boolean;
    /** Date this section was completed */
    completedDate: Date | null;
    /** Last currently visited page */
    routeLast: string | null;
    /** Has this section been started */
    started: boolean;
    /** Date this section was started */
    startedDate: Date | null;
  }

  export interface Section {
    /** Human readable section title */
    title: string;
    /** Distinct unique ID or GUID for this page */
    id: string;
    /** URL safe string for use in routing. If not supplied, ID will be used*/
    slug?: string;
    /** ID of initial starting route */
    routeStart: string;
    settings: {
      /** Are all previous sections required to be complete before this section is accessible? */
      previousRequired?: boolean;
      /** Is this the last section in the wizard flow. Used to notify the parent that */
      // isLast?: boolean;
    };
    /** Any custom data needed by this page */
    data?: any | null;
    /** Mark this section as the last one in the wizard flow */
    wizardComplete?: true;
    routes: Route[];
    pages: Page[];
  }

  export interface SectionControl extends Section {
    sectionNextId: string | null;
    sectionPreviousId: string | null;
    slug: string; // Not undefined, will be autogenerated if not supplied
    routes: Record<string, Wizard.RouteControl>;
    pages: Record<string, Wizard.PageControl>;
    src: Section;
  }

  export interface Page {
    /** Distinct unique ID or GUID for this page. If not supplied, will be generated from title */
    id: string;
     /** Human readable page title */
     title?: string;
    /** URL safe string for use in routing. If not supplied, ID will be used*/
    slug?: string;
    /** Data is used to store page information not used by the wizard */
    data?: Record<string, any>;
    /** Page settings */
    settings?: {
      /** Should this page hide the section title and remove the extra padding */
      fullScreen?: boolean;
      /** Show the back button */
      backButtonVisible?: boolean;
      /** Show the next button */
      nextButtonVisible?: boolean;
      /** Can the parent perform a save action after this load exits */
      canSave?: boolean;
    };

    events?: Events;
    content: ContentArray[];

    titleShort?: string;
    /** Should the title be visible on the page? Title is used for things like analytics */
    titleShow?: boolean;
    /** An ID to populate the ariaDescribedBy attribute. Another element on the page needs to have an ID that corresponds */
    ariaDescribedById?: string;
    /** Use a custom validator for this page */
    validator?: PageValidator;
    /** Is this the last page in the section, go to next section */
    // isLastPage?: boolean;
    // content: (FormField | Html | Feature | Buttons | ContentColumns)[];
    /** Show the back button */
    showButtonBack?: boolean;
    /** Show the next button */
    showButtonNext?: boolean;
    /** Actions apply transformations to data or emit actions to parent to perform */
    actions?: Action[];
    fullscreen?: boolean;
  }

  export interface PageControl extends Page {
    slug: string; // Not undefined, will be autogenerated if not supplied
    controlsById: { [key: string]: AbstractControl };
    controls: AbstractControl[];
    // Control Statuses
    valid: boolean;
    validControls: boolean;
    invalid: boolean;
    // Methods
    controlsMarkAsTouched();
  }

  export interface Events {
    onInit?: Function;
    onDestroy?: Function;
    // Need to do the following items on next/back:
    // True - default behavior
    // False - prevent page transition
    // stateChange - Override default behavior with the statechange enum
    onNext?: Function;
    onPrevious?: Function;
  }

  export type Route = MarkRequired<RouteSrc, 'routeNext'> | MarkRequired<RouteSrc, 'sectionComplete'>;

  export interface RouteControl extends RouteSrc {
    routeNext?: string;
  }

  /**
   * Content Types
   */

  export interface Content {
    /** Type of content */
    type: ContentType;
    /** Data is used to store page information not used by the wizard */
    data?: any | null;
    /** Any css classes to apply */
    classes?: string;
    /** Is this type of content hidden to the user */
    hidden?: boolean | [];
  }

  export interface Html extends Content {
    type: 'html';
    html: string;
  }

  export interface Feature extends Content {
    type: 'feature';
    featureId: string;
  }

  export interface Row extends Content {
    type: 'row';
    columns: Column[];
  }

  export interface Column {
    columnSize: number;
    content: ContentArray[];
  }

  export interface FormField extends Content {
    type: 'formField';
    /** Field or property in the loan model */
    field: string;
    formFieldType:
      | 'text'
      | 'number'
      | 'select'
      | 'textarea'
      | 'checkbox'
      | 'buttonGroup'
      | 'toggle'
      | 'iconGroup'
      | 'currency'
      | 'phoneNumber'
      | 'email'
      | 'date'
      | 'autoComplete'
      | 'ssn'
      | 'autoCompleteAddress'
      | 'mapAutoCompleteCity'
      | 'mapAutoCompleteZip';
    placeholder?: string;
    hint?: string;
    tooltip?: string;
    prefix?: string;
    suffix?: string;
    minlength?: number;
    maxlength?: number;

    /** If a select or button group. This is only for fixed properties, alterntnatively use datafields */
    formFieldData?: FormFieldData[];
    /** If a select or button group, use this data from inside the dataField input */
    dataField?: string;
    /** Format to pass to the pipe for custom control */
    format?: string;
    validators?: Validators | null;

    disabled?: boolean;
    /** Should this formfield be a standalone formcontrol instead of being part of the parent formgroup */
    // standalone?: boolean;
    /** Show the error message if error */
    // showError?: boolean;
    // errorCustom?: string;
  }

  export interface Validators {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
  }
}

// Don't want these exported in the namespace

interface RouteSrc {
   /** Unique ID for this route */
   id: string;
   /** ID of the page to display when this route is active */
   pageId: string;
   /** A string of the next route if linear or a rulegroup array if the next route is dynamic */
   routeNext?: string | any[];
   /** If this is the last route in the section */
   sectionComplete?: true;
}

// Don't export these from the namespace
interface RouteSrc {
  /** Unique ID for this route */
  id: string;
  /** ID of the page to display when this route is active */
  pageId: string;
  /** A string of the next route if linear or a rulegroup array if the next route is dynamic */
  routeNext?: string | any[];
  /** If this is the last route in the section */
  sectionComplete?: true;
}


/**
 * Marks keys in RS as required
 */
type MarkRequired<T extends Record<any, any>, RS extends keyof T> = Required<Pick<T, RS>> & Pick<T, Exclude<keyof T, RS>>;
// type SomeDataHelper = MarkRequired<SomeData, 'propA'> | MarkRequired<SomeData, 'propB'>;