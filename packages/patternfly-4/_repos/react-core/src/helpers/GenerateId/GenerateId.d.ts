import { ComponentClass, ReactNode } from 'react';

export interface GenerateIdProps {
  prefix?: string;
  children(id: string): ReactNode;
}

declare const GenerateId: ComponentClass<GenerateId>;

export default GenerateId;
