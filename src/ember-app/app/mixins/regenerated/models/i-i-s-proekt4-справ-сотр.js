import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кабинет: DS.attr('string'),
  фИОСотр: DS.attr('string'),
  справДол: DS.belongsTo('i-i-s-proekt4-справ-дол', { inverse: null, async: false })
});

export let ValidationRules = {
  кабинет: {
    descriptionKey: 'models.i-i-s-proekt4-справ-сотр.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
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
      должность: attr('Нет', { index: 2 })
    }, { index: 1 }),
    кабинет: attr('Кабинет', { index: 3 })
  });

  modelClass.defineProjection('СправСотрL', 'i-i-s-proekt4-справ-сотр', {
    фИОСотр: attr('Сотрудник', { index: 0 }),
    справДол: belongsTo('i-i-s-proekt4-справ-дол', 'Нет', {
      должность: attr('Нет', { index: 1 })
    }, { index: -1, hidden: true }),
    кабинет: attr('Кабинет', { index: 2 })
  });
};
