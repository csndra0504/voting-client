import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE (w/ palin JS payload )by merging server state into client state', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: 
        vote: 
          pair: ['Trainspotting', '28 Days Later'],
          tally: {Trainspotting: 1}
        }
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {Trainspotting: 1}
        }
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }));
  });

})