import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatTableModule, MatButtonModule],
})
export class MaterialModule {}
