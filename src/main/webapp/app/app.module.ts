import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MentorMatchMakingSharedModule } from 'app/shared/shared.module';
import { MentorMatchMakingCoreModule } from 'app/core/core.module';
import { MentorMatchMakingAppRoutingModule } from './app-routing.module';
import { MentorMatchMakingHomeModule } from './home/home.module';
import { MentorMatchMakingEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MentorMatchMakingSharedModule,
    MentorMatchMakingCoreModule,
    MentorMatchMakingHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MentorMatchMakingEntityModule,
    MentorMatchMakingAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MentorMatchMakingAppModule {}
