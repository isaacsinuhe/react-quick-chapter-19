import * as React from 'react'
import { EventLikeObject } from './password';

export interface PasswordInputProps { 
    name: string
    visible: boolean
    value: string
    onChange: (event: React.FormEvent<HTMLInputElement> | EventLikeObject) => void
}
export interface PasswordInputState {}
class PasswordInput extends React.Component <PasswordInputProps, PasswordInputState> {
    render() {
        return (
            <input 
                className="form-control"
                type={this.props.visible ? 'text' : 'password'}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}

export default PasswordInput