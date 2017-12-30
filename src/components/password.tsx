import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import generatePassword from '../utils/generate-password'

import rules, { Rule } from '../utils/rules'

import PasswordGenerate from './password-generate'
import PasswordInfo from './password-info'
import PasswordInput from './password-input'
import PasswordVisibility from './password-visibility'

export interface EventLikeObject { currentTarget: { value: string } }
export interface ProcessedRule {
    key: string
    rule: Rule
    isCompleted: boolean
}
export interface ProcessedRules extends Array<ProcessedRule | null> {}
export interface PasswordProps {
    upperCase: boolean
    lowerCase: boolean
    special: boolean
    number: boolean
    over6: boolean 
}
export interface PasswordState {
    strength: {[prop: string]: boolean}, 
    password: string, 
    visible: boolean, 
    ok: boolean
}
class Password extends React.Component <PasswordProps, PasswordState> {
    constructor(props: PasswordProps) {
        super(props)
        this.state = { strength: {}, password: '', visible: false, ok: false }
    }

    checkStrength = (event: React.FormEvent<HTMLInputElement> | EventLikeObject) => {
        let password = event.currentTarget.value
        this.setState({ password: password })
        let strength = {}
        Object.keys(this.props).forEach((key, index, list) => {
            if (this.props[key] && rules[key].pattern.test(password)) {
                strength[key] = true
            }
        })
        this.setState({ strength: strength }, () => {
            if (Object.keys(this.state.strength).length === Object.keys(this.props).length) {
                this.setState({ ok: true })
            } else {
                this.setState({ ok: false })
            }
        })
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    generate = () => {
        this.setState({ visible: true, password: generatePassword() }, () => {
            this.checkStrength({ currentTarget: { value: this.state.password } })
        })
    }

    render() {
        var processedRules: ProcessedRules = Object.keys(this.props).map(
            (key) => {
                if (this.props[key]) {
                    return {
                        key: key,
                        rule: rules[key],
                        isCompleted: this.state.strength[key] || false
                    }
                }
                return null
        })
        return (
            <div className="well form-group col-md-6">
                <label>Password</label>
                <PasswordInput
                    name="password"
                    onChange={this.checkStrength}
                    value={this.state.password}
                    visible={this.state.visible}
                />
                <PasswordVisibility
                    checked={this.state.visible}
                    onChange={this.toggleVisibility}
                />
                <PasswordInfo rules={processedRules ? processedRules : []} />
                <PasswordGenerate onClick={this.generate}>
                    Generate
                </PasswordGenerate>
                <button 
                    className={'btn btn-primary' + ((this.state.ok) ? '' : ' disabled')}
                >
                    Save
                </button>
            </div>
        )
    }
}

export default Password