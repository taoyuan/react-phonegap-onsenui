import React from 'react';
import {
  Toolbar,
  Page,
  Modal,
  Button
} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Modal</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page
        renderToolbar={this.renderToolbar}
        renderModal={() => (
          <Modal
            isOpen={this.state.isOpen}
          >
            <section style={{margin: '16px'}}>
              <p style={{opacity: 0.6}}>
                This is a Modal. Show some information here.
              </p>
              <p>
                <Button onClick={() => this.setState({isOpen: false})}>
                  Close
                </Button>
              </p>
            </section>
          </Modal>
        )}
      >
        <section style={{margin: '16px'}}>
          <p style={{textAlign: 'center'}}>
            <Button ref='button' onClick={() => this.setState({isOpen: true})}>Tap here!</Button>
          </p>
        </section>
      </Page>
    );
  }
}
