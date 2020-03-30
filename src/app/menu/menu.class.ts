
export class Menu {
    
    display: string;
    mainRoute: string;
    baseRoute: string;
    tooltip: string;

    constructor(display: string, mainRoute: string, baseRoute: string, tooltip: string) {
        this.display = display;
        this.mainRoute = mainRoute;
        this.baseRoute = baseRoute;
        this.tooltip = tooltip;
    }

}
