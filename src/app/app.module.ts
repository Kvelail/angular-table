import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableComponent } from './components/table/table.component';
import { TheadComponent } from './components/table/thead/thead.component';
import { TbodyComponent } from './components/table/tbody/tbody.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        TableComponent,
        TheadComponent,
        TbodyComponent,
    ],
    imports: [BrowserModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
