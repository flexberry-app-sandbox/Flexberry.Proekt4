import { Serializer as СправУченSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt4-справ-учен';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправУченSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
