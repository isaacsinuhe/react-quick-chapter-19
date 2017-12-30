import * as React from 'react'

export interface PasswordGenerateProps { 
    onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}
export interface PasswordGenerateState {}
class PasswordGenerate extends React.Component <PasswordGenerateProps, PasswordGenerateState> {
    render() {
        return (
            <button 
                {...this.props}
                className="btn generate-btn"
            >
                {this.props.children}
            </button>
        )
    }
}
export default PasswordGenerate