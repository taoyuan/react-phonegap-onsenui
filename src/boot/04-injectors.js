import {getAsyncInjectors} from '../utils/asyncInjectors';

export default function () {
  const {injectReducer, injectSagas} = getAsyncInjectors(this.store);
  this.injectReducer = injectReducer;
  this.injectSagas = injectSagas;
}
