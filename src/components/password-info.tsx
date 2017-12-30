import * as React from 'react'
import { ProcessedRules } from './password';

export interface PasswordInfoProps { rules: ProcessedRules }
export interface PasswordInfoState {}
class PasswordInfo extends React.Component <PasswordInfoProps, PasswordInfoState> {
    render() {
        return (
            <div>
                <h4>Password Strength</h4>
                <ul>
                    {
                        this.props.rules.map((processedRule, index, list) => {
                        if (processedRule) {
                            if (processedRule.isCompleted)
                                return (
                                    <li key={processedRule.key}>
                                        <s>
                                            {processedRule.rule.message}
                                        </s>
                                    </li>)
                            else
                                return <li key={processedRule.key}>{processedRule.rule.message}</li>
                        } else 
                            return null
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PasswordInfo