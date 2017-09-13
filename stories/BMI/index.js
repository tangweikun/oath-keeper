import React, { Component } from 'react'
import Rx from 'rxjs'
import styled from 'styled-components'

export default class BMIDashBoard extends Component {
  state = { weight: 71, height: 170, weightSliderElem: null }

  componentDidMount() {
    var infoButton = document.getElementById('jsInfoButton')
    var closeButton = document.getElementById('jsCloseButton')
    var bmiContainer = document.querySelector('.c-bmi-container')
    const infoButtonClicks$ = Rx.Observable.fromEvent(infoButton, 'click')
    const closeButtonClicks$ = Rx.Observable.fromEvent(closeButton, 'click')
    const flipSubscription = Rx.Observable
      .merge(infoButtonClicks$, closeButtonClicks$)
      .subscribe(() => bmiContainer.classList.toggle('flipped'))
    var weightSliderElem = document.querySelector('#weight-slider')
    var weightSliderElem = document.querySelector('#weight-slider')
    var heightSliderElem = document.querySelector('#height-slider')

    var weightTextElem = document.querySelector('#weight-text')
    var heightTextElem = document.querySelector('#height-text')

    var bmiTextElem = document.querySelector('#bmi-text')
    var weight = Rx.Observable
      .fromEvent(weightSliderElem, 'input')
      .map(ev => ev.target.value)
      .startWith(weightSliderElem.value)

    // weight.subscribe(x => console.log('x'))

    var height = Rx.Observable
      .fromEvent(heightSliderElem, 'input')
      .map(ev => ev.target.value)
      .startWith(heightSliderElem.value)
    var bmi = weight.combineLatest(height, (w, h) =>
      (w / (h * h * 0.0001)).toFixed(1),
    )

    // Observers
    var weightObserver = x => (weightTextElem.innerHTML = x)
    var heightObserver = x => (heightTextElem.innerHTML = x)
    var bmiObserver = x => (bmiTextElem.innerHTML = x)

    // Subscriptions
    weight.subscribe(weightObserver)
    height.subscribe(heightObserver)
    bmi.subscribe(bmiObserver)

    // weight.subscribe(x => console.log('x'))
  }
  render() {
    return (
      <Wrapper className="c-bmi-container">
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
                />
              </Row>
              <Result>
                your BMI is<Number id="bmi-text" />
              </Result>
              <button
                id="jsInfoButton"
                class="g-buttonClean g-btn-shadow c-bmi__info"
              >
                <i>i</i>
              </button>
            </SliderContainer>
          </Section>
          <button
            id="jsCloseButton"
            class="g-buttonClean g-btn-shadow c-bmi__info c-bmi__info--x"
          >
            x
          </button>
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

const Result = styled.h2`
  color: #333;
  margin: 3em 0 0 0;
`

const Number = styled.span`
  border-width: 5px;
  width: 4em;
  height: 4em;
  font-size: 2rem;
  line-height: 3.5em;
  font-weight: normal;
  margin: auto;
  margin-top: 10px;
`
