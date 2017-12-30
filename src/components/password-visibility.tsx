import * as React from 'react'

export interface PasswordVisibilityProps { 
    checked: boolean 
    onChange: () => void
}
export interface PasswordVisibilityState {}
class PasswordVisibility extends 
React.Component <PasswordVisibilityProps, PasswordVisibilityState> {

    render() {
        return (
            <label className="form-control">
                <input 
                    className=""
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                Show password
      </label>
        )
    }
}

export default PasswordVisibility