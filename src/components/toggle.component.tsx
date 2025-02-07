import { Switch } from '@headlessui/react';
import { Text } from './text.component';

interface ToggleProps {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    leftText?: string;
    rightText?: string;
}

export const Toggle = ({ leftText, rightText, enabled, setEnabled }: ToggleProps) => {
    return (
        <div className="flex items-center gap-2">
            {leftText && <Text level='2'>{leftText}</Text>}
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-foreground' : 'bg-primary'}
                    relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
                        inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
            {rightText && <Text level='2'>{rightText}</Text>}
        </div>
    );
}