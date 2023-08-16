import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app-routes";

export const appRoutingModules = RouterModule.forRoot(APP_ROUTES,{
    useHash: true,
    paramsInheritanceStrategy: 'always',
});