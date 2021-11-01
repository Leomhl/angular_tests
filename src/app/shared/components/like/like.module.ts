import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FontAwesomeModule
  ],
  exports: [],
  providers: [UniqueIdService]
})
export class LikeModule {}
