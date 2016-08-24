import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import Results from '../src/components/Results';
import {expect} from 'chai';

describe('Results', () => {

  it('renders entries with vote count or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const component = renderIntoDocument(<Results pair={pair} tally={tally}/>)

    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');

    expect(entries.length).to.equal(2);
    expect(entries[0].textContent).to.contain('Trainspotting');
    expect(entries[0].textContent).to.contain('5');
    expect(entries[1].textContent).to.contain('28 Days');
    expect(entries[1].textContent).to.contain('0');
  })

})