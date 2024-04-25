export interface AccountStateProps {
    error: undefined | string | null;
    user: {
        id_employee: number;
        name_employee: string;
        position: string;
        dob: Date;
        gender: number;
        id: string
        email: string;
        phone_number: number | null;
        address: string;
        username: string
        pass: string
    } | null;
}
