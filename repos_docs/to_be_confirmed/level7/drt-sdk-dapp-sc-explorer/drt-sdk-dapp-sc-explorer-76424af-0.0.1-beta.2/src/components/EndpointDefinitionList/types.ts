import { FieldDefinition } from '@terradharitri/sdk-core/out';
import { UserInterfaceType } from 'types';

export interface EndpointDefinitionListType extends UserInterfaceType {
  definitions: FieldDefinition[];
}
