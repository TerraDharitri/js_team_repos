import { FieldDefinition } from '@terradharitrisdk-core/out';
import { UserInterfaceType } from 'types';

export interface EndpointDefinitionListType extends UserInterfaceType {
  definitions: FieldDefinition[];
}
