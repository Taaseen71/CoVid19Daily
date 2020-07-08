import React from 'react';
import { storiesOf } from '@storybook/react';


import Chart from './Chart2';

storiesOf('Chart2', module)
    .add('Primary', () => <Chart label="Primary" />)