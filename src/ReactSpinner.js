var PropTypes = require('prop-types');
var React = require('react');

class ReactSpinner extends React.Component {
    static propTypes = {
		size: PropTypes.number,
		borderColor: PropTypes.string,
		borderTopColor: PropTypes.string,
		state: PropTypes.string
	};

    static defaultProps = {
        size: 20,
        borderColor: '#f3f3f3',
        borderTopColor: '#3498db'
    };

    render() {
		let spinnerClass = 'mg-react-spinner__main' + ' ' + 'l-center';
    let size = this.props.size;

    let margin = -1*(size/2);
		let borderWidth = 2*size/15;
		let minHeight = (borderWidth + size)*1.41;
		let borderColor = this.props.borderColor;
		let borderTopColor = this.props.borderTopColor;
    return (
    <div
      className={(this.props.state==='hide'?'hide ':' ') + 'mg-react-spinner'}
      style={{
        'minHeight': minHeight+'px'
      }}>
      <div
        className={spinnerClass}
        style={{
          'width': size+'px',
          'height': size+'px',
          'marginTop': margin,
          'marginLeft': margin,
          'borderWidth': borderWidth,
					'border-color' : borderColor,
					'border-top-color' : borderTopColor
        }}
      ></div>
    </div>);
	}
}

export default ReactSpinner;
