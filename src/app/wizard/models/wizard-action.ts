export enum WizardAction {
    Prev = 1,
  Next = 2,
  End = 3
  }
  
  export namespace WizardAction {
  
    export function values() {
      return Object.keys(WizardAction).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
  }