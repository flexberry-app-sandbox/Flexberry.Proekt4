import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt4-справ-род', 'Unit | Model | i-i-s-proekt4-справ-род', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt4-карт-доступ',
    'model:i-i-s-proekt4-справ-дол',
    'model:i-i-s-proekt4-справ-клас',
    'model:i-i-s-proekt4-справ-род',
    'model:i-i-s-proekt4-справ-сотр',
    'model:i-i-s-proekt4-справ-учен',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
