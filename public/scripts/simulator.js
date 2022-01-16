export const projects = {
  1 : {
    name: 'Droionic',
    legalName: 'Drones y tecnología SpA',
    interestRate: 0.09,
  }
}

export class User {
  constructor() {
    this._capital = 0; /*Dinero disponible para invertir*/
    this._equity = 0; /*Patrimonio y suma total de lo invertido + retornos*/
    this._projects = [];
  }

  get capital() {
    return this._capital;
  }

  get equity() {
    return this._equity;
  }

  /*Dinero que deposita el usuario a la cuenta*/
  setDeposit (amount) {
    this._capital = this._capital + amount;
  }

  /*Extrae dinero a la cuenta desde capital*/
  setWithdrawal(amount) {
    this._capital = this._capital - amount;
  }

  get projects() {
    return this._projects;
  }

  setInvest(projectID, amount) {
    if (amount <= this._capital && Object.keys(projects).includes(`${projectID}`)) {
      this._projects.push({
        projectID: projectID,
        amount: amount
      });

      this._capital = this._capital - amount;

    } else {
      console.log('Error en la inversión');
    }
  } /*Se extrae dinero de capital*/

  closeInvest(projectID) {
    const isIDValid = this._projects.map((project) => {
      return project.projectID
    }).includes(projectID)

    if (isIDValid) {
      let amount = this._projects.filter( (project) => {
        project.projectID === projectID;
      })['amount']
      this._projects = this._projects.filter(
        (project) => project.projectID !== projectID
      )
      this._capital = this._capital + this.projects
    } else {
      console.log('El proyecto no existe');
    }

  } /*Se agrega dinero a capital*/
  getReturns(projectID = "all") {} /*Obtiene los rendimientos totales o por proyecto*/

}
