import { ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../backend.service';
import { NgbdModalContent } from '../home-comments/home-comments.component';
import { ModalErrorComponent } from '../modal-error/modal-error.component';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContactComponent implements OnInit, DoCheck {

  btnDisabled: boolean = false;
  formName = '';
  formEmail = '';
  formComment = '';

  txtEnviar = 'Enviar';
  @ViewChild('content') content: NgbdModalContent;

  constructor(
    private backendService: BackendService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  clickContact() {
    if(this.btnDisabled) {
      return;
    }

    if(!this.formComment) {
      this.alternativeOpen('Atenção', 'Preencha uma observação.');
      return;
    }
    if(!this.formName) {
      this.alternativeOpen('Atenção', 'Preencha seu nome.');
      return;
    }
    if(!this.formEmail) {
      this.alternativeOpen('Atenção', 'Preencha um e-mail.');
      return;
    }

    // this.txtEnviar = 'Enviando...'
    // this.btnDisabled = !this.btnDisabled;

    this.toggleButton();

    let campos = {
      name: this.formName,
      email: this.formEmail,
      content: this.formComment
    };

    this.backendService.postContact(campos).then((res: any) => {
      const returned = res.data || {};
      
      if(!returned.ok) {
        this.alternativeOpen('Opa meu a-migo', returned.message || '');
        this.toggleButton();
        //this.btnDisabled = false;
        return;
      }

      this.alternativeOpen('Feitooo!', 'Solicitação feita com sucesso, aguarde novas instruções.');

      this.formComment = '';
      this.formName = '';
      this.formEmail = '';

       this.toggleButton();
//      this.btnDisabled = false;
    }).catch(err => {
      this.alternativeOpen('Opa meu consagrado...', 'Parece que a solicitação não rolou OK, reveja seus preenchimentos e/ou tente novamente mais tarde.');
      this.toggleButton();
    });
  }

  alternativeOpen(title, contText) {
    const modalRef = this.modalService.open(ModalErrorComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.contentText = contText;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    })
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;

    if(this.btnDisabled) {
      this.txtEnviar = 'Enviando...';
    } else {
      this.txtEnviar = 'Enviar';
    }
  }

  ngDoCheck() {
    
  }
}
