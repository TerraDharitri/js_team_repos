import {
  Code,
  Type,
  EndpointDefinition,
  EndpointParameterDefinition
} from '@terradharitri/sdk-core/out';
import { FormikProps } from 'formik';
import { UserInterfaceType } from 'types';

export interface FormikAbiType {
  [key: string]: FormikAbiType | FormikAbiType[] | string[] | string | Code;
}

export interface RecursiveContainerUIType extends UserInterfaceType {
  config: FormikAbiType;
  prefix: string;
  endpoint: EndpointDefinition;
  formik?: FormikProps<FormikAbiType>;
}

export interface InputListUIType extends UserInterfaceType {
  endpoint: EndpointDefinition;
  formik?: FormikProps<FormikAbiType>;
  input?: EndpointParameterDefinition[];
  excludedKeys?: string[];
}

export interface InputUIType extends UserInterfaceType {
  name: string;
  type?: Type;
  formik?: FormikProps<FormikAbiType>;
  defaultValue?: string;
  children?: React.ReactNode;
}
