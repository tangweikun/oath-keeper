import React, { Component } from 'react'
import styled from 'styled-components'

export default class BMIDashBoard extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Section>
            <SliderContainer>
              <Row>
                <span>
                  Weight: <span id="weight-text" />kg
                </span>
                <input
                  style={{
                    display: 'block',
                    marginTop: '.5em',
                    width: '100%',
                  }}
                  id="weight-slider"
                  type="range"
                  min="40"
                  max="120"
                  step="1"
                  value="71"
                />
              </Row>
              <Row>
                <span>
                  Height: <span id="height-text" />kg
                </span>
                <input
                  style={{
                    display: 'block',
                    marginTop: '.5em',
                    width: '100%',
                  }}
                  id="height-slider"
                  type="range"
                  min="40"
                  max="120"
                  step="1"
                  value="71"
                />
              </Row>
            </SliderContainer>
          </Section>
        </Container>
      </Wrapper>
    )
  }
}

// $border-r : 10px;
const borderWidth = '10px'

// $dark-grey: #333;
const darkGray = '#333'

// $body-c: #5870EC;
const bodyColor = '#5870EC'

// $body-c-light: #97A3DC;
const bodyLightColor = '#97A3DC'

// $body-c-dark: #5870EC;
const bodyDarkColor = '#5870EC'

// $linear-gr-start: #FFF;
const linearStartColor = '#FFF'

// $linear-gr-mid1: #EEE;
const linearMidColor = '#EEE'

// $linear-gr-stop: #D2D2D2;
const lineearStop = '#D2D2D2'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`

const Container = styled.div`
  display: flex;
  transition: all 0.4s;
  perspective: 900px;
  width: 318px;
  height: 527px;
  background-color: gray;
`

const Section = styled.div`
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.3);
  backface-visibility: hidden;
  transform-style: preserve3d;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
`

const SliderContainer = styled.div`
  position: relative;
  padding: 3em 2em;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  background-image: linear-gradient(#fff, #eee, #d2d2d2);
`

const Row = styled.div`margin-top: 1.5em;`
