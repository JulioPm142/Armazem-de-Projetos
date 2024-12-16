export interface LoginParams {
    token: string;
    writeToken: (token: string) => void;
    logout: () => void;
}