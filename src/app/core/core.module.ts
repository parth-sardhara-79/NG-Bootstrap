import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [DatepickerComponent, DropdownComponent, ModalComponent, CarouselComponent, TimepickerComponent, AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  exports:[DatepickerComponent, DropdownComponent, ModalComponent, CarouselComponent, TimepickerComponent,AlertComponent]
})
export class CoreModule { }
