import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf) && this.loginNaoCadastrado(aluno.loginGit)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }
   loginNaoCadastrado(login: string): boolean {
     return !this.alunos.find(a => a.loginGit == login);
   }

   remover (cpf: string): boolean{
     var temp = this.alunos.length;
     this.alunos = this.alunos.filter (a => a.cpf != cpf);
     if (temp != this.alunos.length){
       return true;
     }
     return false;
   }

    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}