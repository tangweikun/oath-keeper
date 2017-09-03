import React, { Component } from 'react'
import update from 'react/lib/update'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './Card'

const style = {
  width: 400,
  marginRight: 20,
}

class Container extends Component {
  constructor(props) {
    super(props)
    this.moveCard = this.moveCard.bind(this)
    this.state = {
      taskList: [
        [
          {
            id: 'asdd',
            text: 'Write a cool JS library',
          },
          {
            id: 'hwl',
            text: 'Make it generic enough',
          },
          {
            id: 'ac',
            text: 'Write README',
          },
          {
            id: 'df',
            text: 'Create some examples',
          },
        ],
        [
          {
            id: 'lk',
            text:
              'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
          },
          {
            id: 'sadfdf',
            text: '???',
          },
          {
            id: 'a9',
            text: 'PROFIT',
          },
        ],
      ],
    }
  }

  moveCard(dragIndex, hoverIndex, column) {
    const { taskList } = this.state

    const elementA = taskList[column][dragIndex - 1]
    const elementB = taskList[column][hoverIndex - 1]
    taskList[column][dragIndex - 1] = elementB
    taskList[column][hoverIndex - 1] = elementA

    this.setState({ taskList })

    // const cards = taskList[column]
    // const dragCard = cards[dragIndex]

    // this.setState(
    //   update(this.state, {
    //     taskList: {
    //       $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
    //     },
    //   }),
    // )
  }

  render() {
    const { taskList } = this.state

    return (
      <div style={{ display: 'flex' }}>
        {taskList.map((item, index) => (
          <div style={style}>
            {item.map((card, i) => (
              <Card
                column={index}
                key={card.id}
                index={i + 1}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Container)
