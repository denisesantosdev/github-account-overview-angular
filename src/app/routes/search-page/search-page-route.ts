import { Route } from "@angular/router";
import { SearchPageComponent } from "./search-page.component";

const HomeRoutes: Route[] = [
    { path: '', component: SearchPageComponent, pathMatch: 'full' },
]

export default HomeRoutes