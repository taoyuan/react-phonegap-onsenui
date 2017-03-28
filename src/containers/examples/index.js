import React from 'react';

import {
  Page,
  Navigator,
  Toolbar,
  List,
  ListItem
} from 'react-onsenui';

import PageExample from './Page';
import ListExample from './List';
import LazyListExample from './LazyList';
import TabbarExample from './Tabbar';
import AlertDialogExample from './AlertDialog';
import SplitterExample from './Splitter';
import InputExample from './Input';
import IconExample from './Icon';
import RippleExample from './Ripple';
import SpeedDialExample from './SpeedDial';
import PullHookExample from './PullHook';
import CarouselExample from './Carousel';
import PopoverExample from './Popover';
import DialogExample from './Dialog';
import ModalExample from './Modal';
import SwitchExample from './Switch';
import ProgressBarExample from './ProgressBar';
import RangeExample from './Range';
import RowColumnExample from './RowColumn';
import BackButtonExample from './BackButton';
import BottomToolbarExample from './BottomToolbar';

class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {class: 'test'};
    this.getExamples = this.getExamples.bind(this);
  }

  getExamples() {
    return [
      {
        title: 'Bottom Toolbar',
        component: BottomToolbarExample,
      },
      {
        title: 'Page',
        component: PageExample
      },
      {
        title: 'Back button',
        component: BackButtonExample
      },
      {
        title: 'Row & Column',
        component: RowColumnExample
      },
      {
        title: 'Carousel',
        component: CarouselExample
      },
      {
        title: 'Switch',
        component: SwitchExample
      },
      {
        title: 'RangeExample',
        component: RangeExample
      },
      {
        title: 'ProgressBar',
        component: ProgressBarExample
      },

      {
        title: 'Dialog',
        component: DialogExample
      },
      {
        title: 'Modal',
        component: ModalExample
      },

      {
        title: 'Popover',
        component: PopoverExample
      },
      {
        title: 'Tabbar',
        component: TabbarExample
      },
      {
        title: 'Splitter',
        component: SplitterExample
      },
      {
        title: 'SpeedDial',
        component: SpeedDialExample
      },
      {
        title: 'PullHook',
        component: PullHookExample
      },
      {
        title: 'Ripple',
        component: RippleExample
      },

      {
        title: 'Icon',
        component: IconExample
      },
      {
        title: 'List',
        component: ListExample
      },
      {
        title: 'Lazy List',
        component: LazyListExample
      },
      {
        title: 'Alert dialog',
        component: AlertDialogExample
      },
      {
        title: 'Input',
        component: InputExample
      }
    ];
  }

  goto(example) {
    this.props.navigator.pushPage({
      component: example.component,
      props: {
        key: example.title
      }
    });
  }

  render() {
    return (
      <Page style={{background: 'green'}}
            renderToolbar={() => <Toolbar> <div className='center'> Up Toolbar </div> </Toolbar>}
      >
        <List modifier='inset'
              dataSource={this.getExamples()}
              renderHeader={() =>
                <ListItem lockOnDrag style={{background: 'green'}} tappable tap-background-color='red'> HEADER </ListItem>
              }
              renderRow={(example) => (
                <ListItem key={example.title} onClick={this.goto.bind(this, example)}>{example.title}</ListItem>
              )}
        />
      </Page>
    );
  }
}

export default class ExampleApp extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Navigator
        renderPage={this.renderPage}
        onPrePush={e => console.log('prepush', e)}
        onPostPush={e => console.log('postpush', e)}
        onPrePop={e => console.log('prepop', e)}
        onPostPop={e => console.log('postpop', e)}
        initialRoute={{
          component: Examples,
          props: {
            key: 'examples'
          }
        }}
      />
    );
  }
}