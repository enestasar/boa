import { assert } from 'chai';
import { stub } from 'sinon';
import setLocalization from './localization';
import { Localization } from '@boa/utils';

describe('setLocalization', () => {
  it('should call right functions', () => {
    const staticConstructor = stub(Localization, 'staticConstructor');
    setLocalization({ languageId: 1 });
    staticConstructor.restore();
    assert.strictEqual(staticConstructor.callCount, 1, 'should have called the staticConstructor');
  });
});
