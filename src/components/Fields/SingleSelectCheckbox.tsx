import * as React from 'react';
import { IField } from '../../data'

interface IState {}

interface IProps {
    field: IField;
}

export default class SingleSelectCheckbox extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const { label } = this.props.field.options ? this.props.field.options : null;
        return (
            <div>
                <label>{label}</label><br />
            </div>
        );
    }
}