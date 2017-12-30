// For older version of Jest, turn automocking off by uncommenting the next line
// jest.autoMockOff()
import * as TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Password from './password'

// import PasswordGenerate from './password-generate'
// import PasswordInfo from './password-info'
// import PasswordInput from './password-input'
// import PasswordVisibility from './password-visibility'

describe('Password', function () {
    it('changes after clicking the Generate button', (done) => {

        const fD = ReactDOM.findDOMNode

        let password = TestUtils.renderIntoDocument(
        <Password
            upperCase={true}
            lowerCase={true}
            special={true}
            number={true}
            over6={true}
        />
        ) as Password 

        // SHALLOW RENDERING: No children

        const passwordRenderer = createRenderer()
        passwordRenderer.render(React.createElement(Password))
        let p = passwordRenderer.getRenderOutput()
        expect(p.type).toBe('div')
        expect(p.props.children.length).toBe(6)

        // NORMAL RENDERING

        let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li')
        expect(rules.length).toBe(5)
        expect(rules.length).toEqual(5)
        expect(fD(rules[0]).textContent).toEqual('Must have at least one upper-case character')
        expect(fD(rules[0]).textContent).toBe('Must have at least one upper-case character')
        let generateButton = TestUtils.findRenderedDOMComponentWithClass(
            password, 'generate-btn')
            
        const getFirstNodeName = () => {
            let fs = fD(rules[0]).firstChild
            return fs ? fs.nodeName.toLocaleLowerCase() : ''
        }

        expect(getFirstNodeName()).toBe('#text')
        TestUtils.Simulate.click(fD(generateButton))
        expect(getFirstNodeName()).toBe('s')
        done()
    })
})
