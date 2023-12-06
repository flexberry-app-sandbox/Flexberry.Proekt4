import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt4',
          title: 'Proekt4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
