import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { AddDbzCharacterComponent } from './components/add-dbz-character/add-dbz-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, ListDbzComponent, AddDbzCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent, AddDbzCharacterComponent],
})
export class DbzModule {}
