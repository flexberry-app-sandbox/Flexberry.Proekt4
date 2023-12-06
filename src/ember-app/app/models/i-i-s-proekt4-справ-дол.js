import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправДолMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-справ-дол';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправДолMixin, Validations, {
});

defineProjections(Model);

export default Model;
