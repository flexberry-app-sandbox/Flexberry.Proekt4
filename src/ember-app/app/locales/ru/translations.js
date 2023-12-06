import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt4КартДоступLForm from './forms/i-i-s-proekt4-карт-доступ-l';
import IISProekt4СправДолLForm from './forms/i-i-s-proekt4-справ-дол-l';
import IISProekt4СправКласLForm from './forms/i-i-s-proekt4-справ-клас-l';
import IISProekt4СправРодLForm from './forms/i-i-s-proekt4-справ-род-l';
import IISProekt4СправСотрLForm from './forms/i-i-s-proekt4-справ-сотр-l';
import IISProekt4СправУченLForm from './forms/i-i-s-proekt4-справ-учен-l';
import IISProekt4СправДолEForm from './forms/i-i-s-proekt4-справ-дол-e';
import IISProekt4СправКласEForm from './forms/i-i-s-proekt4-справ-клас-e';
import IISProekt4СправРодEForm from './forms/i-i-s-proekt4-справ-род-e';
import IISProekt4СправСотрEForm from './forms/i-i-s-proekt4-справ-сотр-e';
import IISProekt4СправУченEForm from './forms/i-i-s-proekt4-справ-учен-e';
import IISProekt4КартДоступModel from './models/i-i-s-proekt4-карт-доступ';
import IISProekt4СправДолModel from './models/i-i-s-proekt4-справ-дол';
import IISProekt4СправКласModel from './models/i-i-s-proekt4-справ-клас';
import IISProekt4СправРодModel from './models/i-i-s-proekt4-справ-род';
import IISProekt4СправСотрModel from './models/i-i-s-proekt4-справ-сотр';
import IISProekt4СправУченModel from './models/i-i-s-proekt4-справ-учен';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt4-карт-доступ': IISProekt4КартДоступModel,
    'i-i-s-proekt4-справ-дол': IISProekt4СправДолModel,
    'i-i-s-proekt4-справ-клас': IISProekt4СправКласModel,
    'i-i-s-proekt4-справ-род': IISProekt4СправРодModel,
    'i-i-s-proekt4-справ-сотр': IISProekt4СправСотрModel,
    'i-i-s-proekt4-справ-учен': IISProekt4СправУченModel
  },

  'application-name': 'Proekt4',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt4',
          title: 'Proekt4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proekt4: {
          caption: 'Proekt4',
          title: 'Proekt4',
          'i-i-s-proekt4-справ-сотр-l': {
            caption: 'СправСотрL',
            title: 'Справ сотр L'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt4-карт-доступ-l': IISProekt4КартДоступLForm,
    'i-i-s-proekt4-справ-дол-l': IISProekt4СправДолLForm,
    'i-i-s-proekt4-справ-клас-l': IISProekt4СправКласLForm,
    'i-i-s-proekt4-справ-род-l': IISProekt4СправРодLForm,
    'i-i-s-proekt4-справ-сотр-l': IISProekt4СправСотрLForm,
    'i-i-s-proekt4-справ-учен-l': IISProekt4СправУченLForm,
    'i-i-s-proekt4-справ-дол-e': IISProekt4СправДолEForm,
    'i-i-s-proekt4-справ-клас-e': IISProekt4СправКласEForm,
    'i-i-s-proekt4-справ-род-e': IISProekt4СправРодEForm,
    'i-i-s-proekt4-справ-сотр-e': IISProekt4СправСотрEForm,
    'i-i-s-proekt4-справ-учен-e': IISProekt4СправУченEForm
  },

});

export default translations;
