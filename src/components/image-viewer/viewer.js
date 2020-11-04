import React, { Component, Fragment } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { colors } from './theme';
import { largeDevice } from './utils';
import { Header } from './header';

const navButtonStyles = base => ({
  ...base,
  backgroundColor: 'white',
  boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
  color: colors.N60,

  '&:hover, &:active': {
    backgroundColor: 'white',
    color: colors.N100,
    opacity: 1,
  },
  '&:active': {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
    transform: 'scale(0.96)',
  },
});

export default class ImageViewer extends Component {
  state = { currentModal: null };
  toggleModal = (index = null) => {
    this.setState({ currentModal: index });
  };
  render() {
    const { images, isLoading } = this.props.data
    const { currentModal } = this.state;

    return (
      <div>
        <Fragment>
          {!isLoading ? (
            <Gallery>
              {images.map(({ caption, source }, j) => (
                <Image onClick={() => this.toggleModal(j)} key={source.regular}>
                  <img
                    alt={caption}
                    src={source.thumbnail}
                    css={{
                      cursor: 'pointer',
                      position: 'absolute',
                      maxWidth: '100%',
                    }}
                  />
                </Image>
              ))}
            </Gallery>
          ) : null}
        </Fragment>
        <ModalGateway>
          {Number.isInteger(currentModal) ? (
            <Modal
              allowFullscreen={false}
              closeOnBackdropClick={false}
              onClose={this.toggleModal}
              styles={{
                blanket: base => ({
                  ...base,
                  backgroundColor: colors.N05,
                }),
                positioner: base => ({
                  ...base,
                  display: 'block',
                }),
              }}
            >
              <Carousel
                currentIndex={currentModal}
                components={{ Footer: null, Header }}
                views={images}
                styles={{
                  container: base => ({
                    ...base,
                    height: '100vh',
                  }),
                  view: base => ({
                    ...base,
                    alignItems: 'center',
                    display: 'flex ',
                    height: 'calc(100vh - 54px)',
                    justifyContent: 'center',

                    [largeDevice]: {
                      padding: 20,
                    },

                    '& > img': {
                      maxHeight: 'calc(100vh - 94px)',
                    },
                  }),
                  navigationPrev: navButtonStyles,
                  navigationNext: navButtonStyles,
                }}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

const gutter = 2;

const FilmStrip = (props) => (
  <div
    css={{
      //borderBottom: `1px solid ${colors.N10}`,
      borderTop: `1px solid ${colors.N10}`,
      marginLeft: -gutter,
      marginRight: -gutter,
      overflowX: 'auto',
      paddingBottom: 10,
      paddingTop: 10,
      WebkitOverflowScrolling: 'touch',
      whiteSpace: 'nowrap',
    }}
    {...props}
  />
);

const Gallery = (props) => (
  <div
    css={{
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter,
    }}
    {...props}
  />
)
/*
const Image = (props) => (
  <div
    css={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      display: 'inline-block',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '15%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
)
*/
const Image = (props) => (
  <div
    css={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '16%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
)