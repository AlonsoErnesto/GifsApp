//modules_node
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




//components
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
 
})
export class SharedModule { }
