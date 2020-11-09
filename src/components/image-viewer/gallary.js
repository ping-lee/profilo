import React, { Component, Fragment } from 'react';

import Carousel, { Modal, ModalGateway } from 'react-images'
import { FooterCaption } from './footer-caption'
import { getAltText } from './formatters'
import styled from 'styled-components'
import { colors } from './theme'
import { largeDevice } from './utils'
import { Header } from './header'


export default class Home extends Component {
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false,
    isMobile: false,
  };
  toggleLightbox = (selectedIndex,vmode) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
      isMobile: vmode=='m',
    }));
  };
  render() {
    const { images, isLoading } = this.props.data
    const { selectedIndex, lightboxIsOpen, isMobile } = this.state
    console.log(isMobile, 'isMobile')
    return (
      <Fragment>
        {!isLoading ? (
          <ImageUl>
            {images.map(({ caption, source, vmode }, j) => (
              <ImageLi
                onClick={() => this.toggleLightbox(j,vmode)}
                key={source.thumbnail}
              >
                <img
                  alt={caption}
                  src={source.thumbnail}
                  css={{
                    maxHeight: `100%`,
                    minWidth: `100%`,
                    objectFit: `cover`,
                    verticalAlign: `bottom`,
                  }}
                />
              </ImageLi>
            ))}
          </ImageUl>
        ) : null}

        <ModalGateway>
          {lightboxIsOpen && !isLoading ? (
            <Modal
              onClose={this.toggleLightbox}
              allowFullscreen={!isMobile}
              closeOnBackdropClick={!isMobile}
              styles={isMobile?{
                blanket: base => ({
                  ...base,
                  backgroundColor: colors.N05,
                }),
                positioner: base => ({
                  ...base,
                  display: 'block',
                }),
              }:"none"}
            >
              <Carousel
                components={isMobile?{ Footer: null, Header }:{ Footer: FooterCaption }}
                currentIndex={selectedIndex}
                formatters={{ getAltText }}
                views={images}
                styles={isMobile?{
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
                }:"none"}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    );
  }
}

const ImageUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    flex-direction: row;
  }
`

const ImageLi  = styled.li`
  height: 40vh;
  flex-grow: 1;
  
  :last-child {
    flex-grow: 10;
  }

  :hover {
    opacity: 0.9;
  }

  @media (max-aspect-ratio: 1/1) {
    height: 30vh;
  }

  @media (max-height: 480px) {
    height: 80vh;
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    height: auto;
    width: 100%;

    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }

`

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
})