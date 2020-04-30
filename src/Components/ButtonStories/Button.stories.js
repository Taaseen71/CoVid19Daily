import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Search', () => <Button label="Search" type="buttonSearch" />)
    .add('Home', () => <Button label="Home" type="buttonHome" />)
    .add('Country', () => <Button label="Country" type="buttonCountry" />)