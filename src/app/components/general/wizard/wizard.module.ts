import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './components/wizard/wizard.component';
import { PageComponent } from './components/page/page.component';
import { ContentComponent } from './components/content/content.component';
import { WizardStateService } from './shared/services/wizard-state.service';
import { NtsFormsModule } from '../forms/forms.module';

@NgModule({
  declarations: [WizardComponent, PageComponent, ContentComponent],
  imports: [CommonModule, NtsFormsModule],
  providers: [WizardStateService],
  exports: [WizardComponent],
})
export class NtsWizardModule {}
