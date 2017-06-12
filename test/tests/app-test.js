import React from 'react';
import {shallow} from 'enzyme';
import {expect, should, assert} from 'chai';

// THE COMPONENT TO BE TESTED
import App from '../../src/App';

describe('APP : ', function(){
    let wrapper;
    before(function() {
        wrapper = shallow(<App/>);
    });

    it('Should get rendered', () => {
        expect(wrapper.find('h1')).to.have.length(1);
    });

});
