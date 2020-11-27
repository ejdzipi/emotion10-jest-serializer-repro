import React from 'react'
import {mount} from 'enzyme'
import StyleArrayComponent from "./StyleArrayComponent";
import toJson from "enzyme-to-json";

describe('StyleArrayComponent', () => {
    it('enzyme - snapshot', () => {
        const component = mount(
            <StyleArrayComponent/>
        )

        expect(toJson(component)).toMatchSnapshot()
    })
})
