import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправУченMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-справ-учен';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправУченMixin, Validations, {
});

defineProjections(Model);

export default Model;
