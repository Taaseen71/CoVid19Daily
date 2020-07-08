import React from 'react';
import { storiesOf } from '@storybook/react';


import NavBar from './Nav';

storiesOf('NavBar', module)
    .add('Primary', () => <NavBar label="Primary" />)