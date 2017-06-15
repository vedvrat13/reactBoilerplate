import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

// THE COMPONENT TO BE TESTED
import {App} from '../../src/components/App';

describe('APP : ', function (){
    let wrapper;

    before(function () {
        wrapper = shallow(<App/>);
    });

    it('Should render headers', () => {
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('h2')).to.have.length(1);
    });

});
