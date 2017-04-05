export interface IField {
    label: string;
    type: string;
    key: string;
    hint?: string;
    options?: any;
    fields?: Array<IField>
};

export interface IGenericField<T> extends IField {
    options: T;
}