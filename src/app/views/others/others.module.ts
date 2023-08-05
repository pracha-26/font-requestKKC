import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MatTableModule } from '@angular/material/table';


//import_component
import { HomeComponent } from "./home/home.component";
import { OthersRoutes } from "./others.routing";
import { QueryKkc01Component } from "./query-kkc01/query-kkc01.component";
import { Kkc01P01Component } from "./query-kkc01/kkc01-p01/kkc01-p01.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild(OthersRoutes),
  ],
  declarations: [
    HomeComponent,
    QueryKkc01Component,
    Kkc01P01Component,

  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class OthersModule {}

