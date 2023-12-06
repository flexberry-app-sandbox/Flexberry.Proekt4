import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-proekt4-справ-дол.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправДолE', 'i-i-s-proekt4-справ-дол', {
    должность: attr('Должность', { index: 0 })
  });

  modelClass.defineProjection('СправДолL', 'i-i-s-proekt4-справ-дол', {
    должность: attr('Должность', { index: 0 })
  });
};
