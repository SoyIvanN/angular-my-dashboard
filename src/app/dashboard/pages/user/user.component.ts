import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
//import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[CommonModule, TitleComponent],
  template: `
  <app-title [title]="titleLabel()" />

  @if( user() ) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name">
    </section>
    <div>
      <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
      <p>{{user()!.email}}</p>
    </div>
  }@else {
    <p>Usuario no encontrado</p>
  }
  `
})

export default class UserComponent {

  private route = inject( ActivatedRoute );

  private usersService = inject( UsersService );

  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.usersService.getUserById( id ) )
    )
  )

  public titleLabel = computed( () => {
    if (this.user()){
      return `User - ${this.user()!.first_name}`
    }
    return 'Información del usuario'
  })

}
