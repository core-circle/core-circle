export interface PropItem {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
}

export interface PropsTableProps {
  data?: PropItem[];
  propsData?: PropItem[];
}
