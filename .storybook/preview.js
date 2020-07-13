import React from 'react';
import DesignSystemProvider from '../src/DesignSystemProvider'

import { addDecorator } from '@storybook/react';

addDecorator(story => <DesignSystemProvider>{story()}</DesignSystemProvider>);