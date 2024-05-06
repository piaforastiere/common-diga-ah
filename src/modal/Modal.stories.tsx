import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Modal from './Modal';
import { ModalProps } from 'types';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = args => {
  return <Modal {...args} />;
};

export const OpenModal = Template.bind({});
OpenModal.args = {
  isOpen: true,
  onClose: () => {},
  children: (
    <div>
      <h1>Modal Title</h1>
      <p>This is the modal content.</p>
    </div>
  ),
};

export const ClosedModal = Template.bind({});
ClosedModal.args = {
  ...OpenModal.args,
  isOpen: false,
};
