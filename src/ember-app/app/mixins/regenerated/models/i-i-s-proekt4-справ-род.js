import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОРод: DS.attr('string')
});

export let ValidationRules = {
  фИОРод: {
    descriptionKey: 'models.i-i-s-proekt4-справ-род.validations.фИОРод.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправРодE', 'i-i-s-proekt4-справ-род', {
    фИОРод: attr('Ф и о род', { index: 0 })
  });

  modelClass.defineProjection('СправРодL', 'i-i-s-proekt4-справ-род', {
    фИОРод: attr('Ф и о род', { index: 0 })
  });
};
