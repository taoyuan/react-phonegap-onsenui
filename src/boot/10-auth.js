"use strict";

import sagas from "services/Auth/sagas";

export default function () {
  this.injectSagas(sagas);
}
