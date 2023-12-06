import {
  defineNamespace,
  defineProjections,
  Model as СправКласMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-справ-клас';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправКласMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
