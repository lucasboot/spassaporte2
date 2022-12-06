import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  creditos: number
  valoresDB: any[] = ['Pegar Voucher', 'R$ 22,50','R$ 17,50', 'R$ 40,00', 'R$ 30,00', 'R$ 22,50', 'R$ 32,50', 'R$ 60,00', 'R$ 50,00', 'R$ 75,00', 'R$ 40,00', 'R$ 60,00', 'R$ 75,00', 'R$ 45,00']
  valoresNormais: any[] = ['R$ 22,50','R$ 17,50', 'R$ 40,00', 'R$ 30,00', 'R$ 22,50', 'R$ 32,50', 'R$ 60,00', 'R$ 50,00', 'R$ 75,00', 'R$ 40,00', 'R$ 60,00', 'R$ 75,00', 'R$ 45,00']
  numeral: number[] = [0, 22.50, 17.50, 40.00, 30.00, 22.50, 32.50, 60.00, 50.00, 75.00, 40.00, 60.00, 75.00, 45.00]

  constructor(private authServ: AuthService, private router: Router) {
    this.creditos = 200
   }

  ngOnInit(): void {

    if(!(this.authServ.usr == 'teste01' && this.authServ.pwd == '1234')){
      this.router.navigate(['login'])
    }
    if(this.authServ.used){
      //this.creditos = this.authServ.credits

    }

  }
  getVoucher(numb: number){
    if (window.confirm("Você confirma a solicitação do voucher deste serviço?")) {
      if(this.authServ.credits > 0 && this.authServ.credits > this.numeral[numb]){
        this.authServ.credits = this.creditos -  this.numeral[numb]
      this.creditos = this.authServ.credits
      this.authServ.used = true
      window.confirm("Voucher gerado! Os detalhes foram enviados para o seu e-mail\nCódigo do Voucher: " + this.defineVoucher(numb))
      }
    }
    console.log(numb)
  }
  logout(){
    this.authServ.usr = ''
    this.authServ.pwd = ''
    this.router.navigate(['login'])
  }
  defineVoucher(id:number){
    switch (id) {
      case 1:
        return 'bcZvCAY'
        break;
        case 2:
        return 'xWAAxeD'
        break;
        case 3:
          return 'PH4gCyn'

        break;
        case 4:
          return 'Lwd0Wkq'
        break;
        case 5:
          return 'ht2ZqDO'
        break;
        case 6:
          return 'iDHDgzo'
        break;
        case 7:
          return 'Jq1OSGM'
        break;
        case 8:
          return 'MqIA8Op'
        break;
        case 9:
          return 'ohFY0iP'
        break;
        case 10:
          return '9S897xF'
        break;
        case 11:
          return 'aDhBmbn'
        break;
        case 12:
        return 'UY1KfsR'
        break;
        case 13:
          return 'Mg6mdWR'
        break;

      default:
        return 'Mg6mdWR'
        break;
    }
  }
  onMouseEnter(id: number){
    this.valoresNormais[id-1] = this.valoresDB[0]
  }
  onMouseOut(id: number){
    this.valoresNormais[id-1] = this.valoresDB[id]
  }
}
