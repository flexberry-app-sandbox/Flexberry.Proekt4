import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОСотр: DS.attr('string'),
  справДол: DS.belongsTo('i-i-s-proekt4-справ-дол', { inverse: null, async: false })
});

export let ValidationRules = {
  фИОСотр: {
    descriptionKey: 'models.i-i-s-proekt4-справ-сотр.validations.фИОСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справДол: {
    descriptionKey: 'models.i-i-s-proekt4-справ-сотр.validations.справДол.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправСотрE', 'i-i-s-proekt4-справ-сотр', {
    фИОСотр: attr('Сотрудник', { index: 0 }),
    справДол: belongsTo('i-i-s-proekt4-справ-дол', 'Должность', {
      должность: attr('Должность', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('СправСотрL', 'i-i-s-proekt4-справ-сотр', {
    фИОСотр: attr('Сотрудник', { index: 0 }),
    справДол: belongsTo('i-i-s-proekt4-справ-дол', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
