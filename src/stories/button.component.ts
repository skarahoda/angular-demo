import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewChild,
} from '@angular/core';

export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export type ButtonSize = typeof SMALL | typeof MEDIUM | typeof LARGE;

export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const LINK = 'link';
export type ButtonAppearance = typeof PRIMARY | typeof SECONDARY | typeof LINK;

export const BUTTON = 'button';
export const SUBMIT = 'submit';
export type HtmlAttributeType = typeof BUTTON | typeof SUBMIT;

/**
 * This component implements the Hermes button.
 * Usage:
 * ```
 *  <h-button [appearance]="'secondary'"
 *            [size]="'small'"
 *            [name]="'button-name'"
 *            [loading]="false"
 *            [disabled]="false"
 *            [doesDomButtonNeedToBeFocused]="false"
 *            [type]="'button'"
 *            [id]="'button-id'"
 *            [describedBy]="'button description'""
 *            [labelledBy]="'button-label'"
 *            [trayTargetId]="'button-tray-target-id'"
 *            (pressed)="pressed()"
 *            [dataTestId]="'My Button'"
 *            i18n="@@my.key.translate">
 *      My Button
 *  </h-button>
 * ```
 *
 */
@Component({
    selector: 'h-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.css'],
})
export class ButtonComponent implements OnChanges {
    @Input()
    public type: HtmlAttributeType = BUTTON;

    @Input()
    public id: string | undefined;

    @Input()
    public appearance: ButtonAppearance = PRIMARY;

    @Input()
    public name: string | undefined;

    @Input()
    public loading = false;

    @Input()
    public disabled = false;

    @Input()
    public describedBy?: string;

    @Input()
    public labelledBy?: string;

    /**
     * For automated tests
     */
    @Input()
    public dataTestId?: string;

    /**
     * When provided, the button will have aria attributes to open the tray
     *
     * @see aria-dialog pattern.
     */
    @Input()
    public trayTargetId: string | undefined;

    @Input()
    public size: ButtonSize = LARGE;

    @Input()
    public doesDomButtonNeedToBeFocused = false;

    @Output()
    public pressed: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild('button')
    public button!: ElementRef<HTMLButtonElement>;

    constructor() {}

    public ngOnChanges(): void {
        if (
            this.doesDomButtonNeedToBeFocused &&
            this.button
        ) {
            this.button.nativeElement.focus();
        }
    }
}
