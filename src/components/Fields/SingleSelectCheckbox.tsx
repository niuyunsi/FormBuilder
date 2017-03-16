import * as React from 'react';
import { IField } from '../../data';

interface IState {
    checkedBox: Array<any>;
    otherOptTextFieldValue: string;
}

interface IProps {
    field: IField;
}

export default class SingleSelectCheckbox extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            checkedBox: [],
            otherOptTextFieldValue: '',
        };
        this.otherOptTextFieldValueOnChange = this.otherOptTextFieldValueOnChange.bind(this);
    }

    public render() {
        const { label, checkboxOpts, otherOpt } = this.props.field.options ? this.props.field.options : null;
        return (
            <div>
                <label>{label}</label><br />
                {checkboxOpts && this.renderOpts(checkboxOpts)}
                {otherOpt && this.renderOtherOpt(otherOpt)}
            </div>
        );
    }

    private renderOpts(checkboxOpts: Array<any>) {
        return checkboxOpts.map(
            (opt) => {
                const checked = this.state.checkedBox.indexOf(opt) === -1 ? false : true;
                return (
                    <div>
                        <input type='checkbox' checked={checked} onChange={this.checkboxOnChange.bind(this, opt)}/>{opt}
                    </div>
                )
            }
        )
    }

    private checkboxOnChange(opt: string) {
        const isSelected = this.state.checkedBox.indexOf(opt) === -1 ? false : true;
        if (isSelected) {
            this.setState({
                checkedBox: [],
            } as IState)
        } else {
            this.setState({
                checkedBox: [opt],
            } as IState)
        }
    }

    private renderOtherOpt(otherOpt: any) {
        const { label, hint } = otherOpt;
        const checked = this.state.checkedBox.indexOf('Other') === -1 ? false : true;
        return (
            <div>
                <input type='checkbox' checked={checked} onChange={this.checkboxOnChange.bind(this, 'Other')} />{label}<br />
                <input type='text' placeholder={hint} value={this.state.otherOptTextFieldValue} onChange={this.otherOptTextFieldValueOnChange} />
            </div>
        )
    }

    private otherOptTextFieldValueOnChange(event: any) {
        this.setState({
            otherOptTextFieldValue: event.target.value,
        } as IState);
    }
}