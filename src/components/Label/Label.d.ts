import ComponentBase,
{
  ComponentBaseInstance,
  ComponentBaseProps
} from '../../base/ComponentBase';

export interface LabelProps extends ComponentBaseProps {
  text?: string;
  style?: React.CSSProperties;
  textAlign?: string;
}

// Commented-Tslint: An interface declaring no members is equivalent to its supertype.

// export interface LabelInstance extends ComponentBaseInstance {
// }

export default class Label extends ComponentBase<LabelProps, ComponentBaseInstance> { }
