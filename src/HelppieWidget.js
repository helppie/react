import React, { Component } from "react"

class HelppieWidget extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		(function(e,t,p){
			e.helppieData=e.helppieData||[];
			e.helppie=function(){e.helppieData.push(arguments)};
			const n=t.createElement("script"),
			c=t.getElementsByTagName("script")[0];
			n.type="application/javascript";
			n.src=`http://localhost:3000/widget.js?id=${p.widgetId}`;
			n.async=!0;
			c.parentNode.insertBefore(n,c);
		})(window,document,this.props);
	}

	render() {
		return (
			<span
				className={this.props.className}
				open-helppie-widget="true">
					{this.props.children}
			</span>
		)
	}
}

export default HelppieWidget;