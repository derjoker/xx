import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, WebView, Dimensions } from 'react-native';
import { Header } from 'react-navigation';
import Carousel from 'react-native-looped-carousel';
import showdown from 'showdown';

const converter = new showdown.Converter();

function html(text) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
      body {
        color: black;
      }
      .word {
        background: black;
      }
    </style>
  </head>
  
  <body>
    ${text}
  </body>
  
  </html>
  `;
}

function replace(text, percent = 0.5) {
  return text.replace(/[a-zäöüß]+\b/gi, match => {
    return Math.random() > percent
      ? match
      : `<span class="word">${match}</span>`;
  });
}

const { width, height } = Dimensions.get('window');

export default class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = event => {
    const layout = event.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    const { item } = this.props;
    return (
      <View onLayout={this._onLayoutDidChange}>
        <Carousel style={this.state.size} autoplay={false} pageInfo>
          {[
            html(converter.makeHtml(item.text)),
            html(converter.makeHtml(replace(item.text, 0.2))),
            html(converter.makeHtml(replace(item.text))),
            html(converter.makeHtml(replace(item.text, 0.8))),
          ].map((html, index) => (
            <View
              key={index}
              style={[
                this.state.size,
                { height: this.state.size.height - Header.HEIGHT },
              ]}
            >
              <WebView source={{ html }} />
            </View>
          ))}
        </Carousel>
      </View>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
};
