import { Story } from '@storybook/angular';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta } from '@storybook/angular/types-6-0';
import {
    BUTTON,
    ButtonComponent,
    LARGE,
    LINK,
    MEDIUM,
    PRIMARY,
    SECONDARY,
    SMALL,
    SUBMIT,
} from './button.component';

export default {
    title: 'Aphrodite/Atoms/Buttons/Button/Sandbox',
    component: ButtonComponent,
    parameters: {
        viewport: {
            viewports: MINIMAL_VIEWPORTS,
            // to see the changes with the input "size" in Zelpin
            defaultViewport: 'modalViewCart',
        },
    },
    argTypes: {
        size: {
            options: [SMALL, MEDIUM, LARGE],
            control: { type: 'radio' },
        },
        appearance: {
            options: [PRIMARY, SECONDARY, LINK],
            control: { type: 'radio' },
        },
        type: {
            options: [BUTTON, SUBMIT],
            control: { type: 'select' },
        },
        pressed: { action: 'pressed' },
    },
} as Meta;

const template: Story = (args) => ({
    template: `<h-button (pressed)="pressed($event)">${args.buttonText}</h-button>`,
    props: {
        ...args,
    },
});

export const SandboxButton = template.bind({});
SandboxButton.args = {
    buttonText: 'Button Sandbox',
    size: LARGE,
    appearance: PRIMARY,
    name: 'button-name',
    loading: false,
    disabled: false,
    doesDomButtonNeedToBeFocused: false,
    type: BUTTON,
    id: 'button-id',
    describedBy: 'button description',
    labelledBy: 'button-label',
    dataTestId: 'button-data-test-id',
    trayTargetId: 'button-tray-target-id',
};
SandboxButton.parameters = {
    docs: {
        source: {
            code: `
<h-button [name]="'button-name'"
          [id]="'button-id'"
          [dataTestId]="Button"
          i18n="@@my.key.translate">
        Button
</h-button>
            `,
            language: 'html',
            type: 'auto',
        },
    },
    zeplinLink:
        'https://app.zeplin.io/styleguide/606dd7ee991137523a495c5b/components?coid=627be0aeb5ba5403b4b112ce',
};
