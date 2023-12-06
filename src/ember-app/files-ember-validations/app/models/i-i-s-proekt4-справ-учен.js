import {
  defineNamespace,
  defineProjections,
  Model as СправУченMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-справ-учен';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправУченMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
