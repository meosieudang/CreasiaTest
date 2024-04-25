import { AccountStateProps } from './account';

export interface DefaultRootStateProps {
    account: AccountStateProps;

}

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};
