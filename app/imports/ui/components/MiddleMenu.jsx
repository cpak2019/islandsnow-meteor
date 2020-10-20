import React from 'react';
import { Grid, Dropdown, Container } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Container>
        <Grid centered columns={6}>
          <Grid.Column>
            <Dropdown text='MEN'>
              <Dropdown.Menu>
                <Dropdown.Item text='New' />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column>
            <Dropdown text='WOMEN'>
              <Dropdown.Menu>
                <Dropdown.Item text='New' />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column>
            <Dropdown text='KIDS'>
              <Dropdown.Menu>
                <Dropdown.Item text='New' />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column>
            <Dropdown text='BRANDS'>
              <Dropdown.Menu>
                <Dropdown.Item text='New' />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column>
            SALE
          </Grid.Column>
        </Grid>
        </Container>
    );
  }
}
