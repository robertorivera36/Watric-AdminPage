import React from 'react';
import { Breadcrumb } from 'reactstrap';

export default class TitleComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <h1><div>{this.props.name}</div></h1>
        </Breadcrumb>
      </div>
    );
  };
}
