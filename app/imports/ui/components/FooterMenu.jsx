import React from 'react';
import { Grid, List, Input, Container } from 'semantic-ui-react';

export default class FooterList extends React.Component {
  render() {
    return (

        <Grid borderless centered columns={4}>
          <Grid.Column>
            <List vertical className="bottomList">
                <List.Item>
                  About us
                </List.Item>
                <List.Item>
                  Store locations
                </List.Item>
                <List.Item>
                  Employment
                </List.Item>
                <List.Item>
                  Videos
                </List.Item>
                <List.Item>
                  Shipping and Returns
                </List.Item>
                <List.Item>
                  Terms and conditions
                </List.Item>
                <List.Item>
                  Privacy Policy
                </List.Item>
            </List>

          </Grid.Column>
          <Grid.Column>

            <List >
              <List.Item>
                Men
              </List.Item>
              <List.Item>
                Women
              </List.Item>
              <List.Item>
                Kids
              </List.Item>
              <List.Item>
                Brands
              </List.Item>
              <List.Item>
                Sale
              </List.Item>
            </List>

          </Grid.Column>
          <Grid.Column>

            <List vertical borderless className="topList">
              <List.Item>
                Join our mailing list for updates
              </List.Item>

              <List.Item>
                Sign up to receive our email updates!
              </List.Item>
              <List.Item>
                <Input action='Join' placeholder='Enter email address' />
              </List.Item>
            </List>

          </Grid.Column>
        </Grid>
    );
  }
}
