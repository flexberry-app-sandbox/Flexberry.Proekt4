import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt4-справ-клас', 'Unit | Serializer | i-i-s-proekt4-справ-клас', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt4-справ-клас',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
