import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proekt4.caption'),
          title: i18n.t('forms.application.sitemap.proekt4.title'),
          children: [{
            link: 'i-i-s-proekt4-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.proekt4.i-i-s-proekt4-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt4.i-i-s-proekt4-справ-сотр-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})