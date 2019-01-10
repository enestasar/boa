import React from 'react';
import { assert } from 'chai';
import { stub } from 'sinon';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@boa/components/Button';
import Dialog from './Dialog';
import DialogHelper from './DialogHelper';
import { context, createShallow } from '../../../test/utils';

describe('<Dialog />', () => {
  let shallow;

  before(() => {
    shallow = createShallow();
  });

  it('should render a <MuiDialog> element', () => {
    const wrapper = shallow(<Dialog context={context} open={false} />);
    assert.strictEqual(wrapper.dive().type(), MuiDialog);
  });

  it('should change open', () => {
    const wrapper = shallow(<Dialog context={context} open />);
    wrapper.setProps({ open: false });
    assert.strictEqual(wrapper.state().open, false);
    assert.strictEqual(wrapper.dive().shallow().props().open, false);
  });

  it('should change title', () => {
    const wrapper = shallow(<Dialog context={context} open />);
    wrapper.setProps({ title: 'test' });
    assert.strictEqual(wrapper.state().title, 'test');
  });

  it('should show header', () => {
    const wrapper = shallow((
      <Dialog
        context={context}
        open
        title="test"
        titleWithCloseButtonEnabled
        showHeader />
    ));
    let title = wrapper.dive().find(MuiDialogTitle);
    assert.strictEqual(title.childAt(0).text(), 'test');
    wrapper.instance().getInstance().setTitle('test-title');
    title = wrapper.find(MuiDialogTitle);
    assert.strictEqual(title.childAt(0).text(), 'test-title');
  });

  it('should show left title button', () => {
    const wrapper = shallow((
      <Dialog
        context={context}
        title="test"
        titleWithCloseButtonEnabled
        open
        showHeader />
    ));

    const leftButton = (
      <Button
        context={context}
        type="icon"
        style={{ width: 40, height: 40 }}
        dynamicIcon={'ArrowBack'}
        iconProperties={{ nativeColor: '#FFF' }} />
    );

    wrapper.instance().getInstance().setLeftTitleButton(leftButton);
    const title = wrapper.find(MuiDialogTitle);
    // double dive to child inside of a div
    assert.strictEqual(title.childAt(0).childAt(0).type(), Button);
    assert.strictEqual(title.childAt(0).childAt(0).type(), Button);
    assert.strictEqual(title.childAt(0).childAt(0).props().dynamicIcon, 'ArrowBack');
  });

  it('should change status with open method', () => {
    const wrapper = shallow(<Dialog context={context} open dialogKey="dialogKey" />);
    const clearRefs = stub(DialogHelper, 'clearRefs');
    wrapper.instance().getInstance().open(false);
    assert.strictEqual(wrapper.state().open, false);
    assert.strictEqual(clearRefs.callCount, 1);
    clearRefs.restore();
  });
});
