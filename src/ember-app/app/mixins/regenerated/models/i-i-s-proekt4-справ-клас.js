import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  классы: DS.attr('string')
});

export let ValidationRules = {
  классы: {
    descriptionKey: 'models.i-i-s-proekt4-справ-клас.validations.классы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправКласE', 'i-i-s-proekt4-справ-клас', {
    классы: attr('Классы', { index: 0 })
  });

  modelClass.defineProjection('СправКласL', 'i-i-s-proekt4-справ-клас', {
    классы: attr('Классы', { index: 0 })
  });
};
