import {
    componentWrapperDecorator,
    Story,
} from '@storybook/angular';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta } from '@storybook/angular/types-6-0';
import {
    ButtonComponent,
    LARGE,
    LINK,
    MEDIUM,
    PRIMARY,
    SECONDARY,
    SMALL,
} from './button.component';

export default {
    title: 'Aphrodite/Atoms/Buttons/Button/States',
    component: ButtonComponent,
    parameters: {
        viewport: {
            viewports: MINIMAL_VIEWPORTS,
            // to better see the changes with the ng-input "size"
            defaultViewport: 'modalViewCart',
        },
        docs: {
            description: {
                component:
                    'Here are all the states of the `<h-button>` and the code to get them',
            },
        },
    },
    decorators: [
        componentWrapperDecorator(ButtonComponent, ({ args }) => ({ ...args })),
    ],
} as Meta;

const template: Story = (args) => ({
    template: `${args.buttonText}`,
});

const buttonTextPrimary = 'Button Primary';
const buttonTextSecondary = 'Button Secondary';
const buttonTextLink = 'Button Link';

// Default

export const Default = template.bind({});
Default.args = {
    buttonText: buttonTextPrimary,
};
Default.parameters = {
    docs: {
        description: {
            story: 'This state is to show what the <h-button> looks like when no input is set',
        },
        source: {
            code: `
<h-button [name]="'button-name'"
          [id]="'button-id'"
          [dataTestId]="'${buttonTextPrimary}'"
          i18n="@@my.key.translate">
    ${buttonTextPrimary}
</h-button>
            `,
            language: 'html',
            type: 'auto',
        },
    },
    zeplinLink:
        'https://app.zeplin.io/styleguide/606dd7ee991137523a495c5b/components?coid=627be0aeb5ba5403b4b112ce',
};

// Enabled

export const PrimaryEnabledSmall = template.bind({});
PrimaryEnabledSmall.args = {
    buttonText: buttonTextPrimary,
    size: SMALL,
};
PrimaryEnabledSmall.parameters = {
    docs: {
        source: {
            code: `
<h-button [appearance]="'${PRIMARY}'"
          [size]="'${SMALL}'"
          [name]="'button-name'"
          [loading]="false"
          [disabled]="false"
          [type]="'button'"
          [id]="'button-id'"
          [dataTestId]="'${buttonTextPrimary}'"
          i18n="@@my.key.translate">
    ${buttonTextPrimary}
</h-button>
            `,
            language: 'html',
            type: 'auto',
        },
    },
    zeplinLink:
        'https://app.zeplin.io/styleguide/606dd7ee991137523a495c5b/components?coid=627be0b34cc05bbebb19b037',
};

export const PrimaryEnabledMedium = template.bind({});
PrimaryEnabledMedium.args = {
    buttonText: buttonTextPrimary,
    size: MEDIUM,
};
PrimaryEnabledMedium.parameters = {
    docs: {
        source: {
            code: `
<h-button [appearance]="'${PRIMARY}'"
          [size]="'${MEDIUM}'"
          [name]="'button-name'"
          [loading]="false"
          [disabled]="false"
          [type]="'button'"
          [id]="'button-id'"
          [dataTestId]="'${buttonTextPrimary}'"
          i18n="@@my.key.translate">
    ${buttonTextPrimary}
</h-button>
            `,
            language: 'html',
            type: 'auto',
        },
    },
    zeplinLink:
        'https://app.zeplin.io/styleguide/606dd7ee991137523a495c5b/components?coid=627be0b27f61b804d4355da9',
};

export const PrimaryEnabledLarge = template.bind({});
PrimaryEnabledLarge.args = {
    buttonText: buttonTextPrimary,
    size: LARGE,
};
PrimaryEnabledLarge.parameters = {
    docs: {
        source: {
            code: `
<h-button [appearance]="'${PRIMARY}'"
          [size]="'${LARGE}'"
          [name]="'button-name'"
          [loading]="false"
          [disabled]="false"
          [type]="'button'"
          [id]="'button-id'"
          [dataTestId]="'${buttonTextPrimary}'"
          i18n="@@my.key.translate">
    ${buttonTextPrimary}
</h-button>
            `,
            language: 'html',
            type: 'auto',
        },
    },
    zeplinLink:
        'https://app.zeplin.io/styleguide/606dd7ee991137523a495c5b/components?coid=627be0aeb5ba5403b4b112ce',
};

export const SecondaryEnabledSmall = template.bind({});
SecondaryEnabledSmall.args = {
    buttonText: buttonTextSecondary,
    size: SMALL,
    appearance: SECONDARY,
};

export const SecondaryEnabledMedium = template.bind({});
SecondaryEnabledMedium.args = {
    buttonText: buttonTextSecondary,
    size: MEDIUM,
    appearance: SECONDARY,
};

export const SecondaryEnabledLarge = template.bind({});
SecondaryEnabledLarge.args = {
    buttonText: buttonTextSecondary,
    size: LARGE,
    appearance: SECONDARY,
};

export const LinkEnabledSmall = template.bind({});
LinkEnabledSmall.args = {
    buttonText: buttonTextLink,
    size: SMALL,
    appearance: LINK,
};

export const LinkEnabledMedium = template.bind({});
LinkEnabledMedium.args = {
    buttonText: buttonTextLink,
    size: MEDIUM,
    appearance: LINK,
};

export const LinkEnabledLarge = template.bind({});
LinkEnabledLarge.args = {
    buttonText: buttonTextLink,
    size: LARGE,
    appearance: LINK,
};

// Disabled

export const PrimaryDisabledSmall = template.bind({});
PrimaryDisabledSmall.args = {
    buttonText: buttonTextPrimary,
    size: SMALL,
    disabled: true,
};

export const PrimaryDisabledMedium = template.bind({});
PrimaryDisabledMedium.args = {
    buttonText: buttonTextPrimary,
    size: MEDIUM,
    disabled: true,
};

export const PrimaryDisabledLarge = template.bind({});
PrimaryDisabledLarge.args = {
    buttonText: buttonTextPrimary,
    size: LARGE,
    disabled: true,
};

export const SecondaryDisabledSmall = template.bind({});
SecondaryDisabledSmall.args = {
    buttonText: buttonTextSecondary,
    size: SMALL,
    appearance: SECONDARY,
    disabled: true,
};

export const SecondaryDisabledMedium = template.bind({});
SecondaryDisabledMedium.args = {
    buttonText: buttonTextSecondary,
    size: MEDIUM,
    appearance: SECONDARY,
    disabled: true,
};

export const SecondaryDisabledLarge = template.bind({});
SecondaryDisabledLarge.args = {
    buttonText: buttonTextSecondary,
    size: LARGE,
    appearance: SECONDARY,
    disabled: true,
};

export const LinkDisabledSmall = template.bind({});
LinkDisabledSmall.args = {
    buttonText: buttonTextLink,
    size: SMALL,
    appearance: LINK,
    disabled: true,
};

export const LinkDisabledMedium = template.bind({});
LinkDisabledMedium.args = {
    buttonText: buttonTextLink,
    size: MEDIUM,
    appearance: LINK,
    disabled: true,
};

export const LinkDisabledLarge = template.bind({});
LinkDisabledLarge.args = {
    buttonText: buttonTextLink,
    size: LARGE,
    appearance: LINK,
    disabled: true,
};

// Loading

export const PrimaryLoadingSmall = template.bind({});
PrimaryLoadingSmall.args = {
    buttonText: buttonTextPrimary,
    size: SMALL,
    loading: true,
};

export const PrimaryLoadingMedium = template.bind({});
PrimaryLoadingMedium.args = {
    buttonText: buttonTextPrimary,
    size: MEDIUM,
    loading: true,
};

export const PrimaryLoadingLarge = template.bind({});
PrimaryLoadingLarge.args = {
    buttonText: buttonTextPrimary,
    size: LARGE,
    loading: true,
};

export const SecondaryLoadingSmall = template.bind({});
SecondaryLoadingSmall.args = {
    buttonText: buttonTextSecondary,
    size: SMALL,
    appearance: SECONDARY,
    loading: true,
};

export const SecondaryLoadingMedium = template.bind({});
SecondaryLoadingMedium.args = {
    buttonText: buttonTextSecondary,
    size: MEDIUM,
    appearance: SECONDARY,
    loading: true,
};

export const SecondaryLoadingLarge = template.bind({});
SecondaryLoadingLarge.args = {
    buttonText: buttonTextSecondary,
    size: LARGE,
    appearance: SECONDARY,
    loading: true,
};

export const LinkLoadingSmall = template.bind({});
LinkLoadingSmall.args = {
    buttonText: buttonTextLink,
    size: SMALL,
    appearance: LINK,
    loading: true,
};

export const LinkLoadingMedium = template.bind({});
LinkLoadingMedium.args = {
    buttonText: buttonTextLink,
    size: MEDIUM,
    appearance: LINK,
    loading: true,
};

export const LinkLoadingLarge = template.bind({});
LinkLoadingLarge.args = {
    buttonText: buttonTextLink,
    size: LARGE,
    appearance: LINK,
    loading: true,
};
