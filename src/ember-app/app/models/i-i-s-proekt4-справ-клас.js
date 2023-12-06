import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправКласMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-справ-клас';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправКласMixin, Validations, {
});

defineProjections(Model);

export default Model;
