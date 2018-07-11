export interface MenuItem {

    readonly items: MenuItem[];
    readonly label: string;
    readonly onAction?: () => void;

}