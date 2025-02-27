import React from 'react'

class Pet extends React.Component {
  render() {
    let g = ""
    if (this.props.pet.gender === 'male') {
      g = '♂'
    } else {
      g = '♀'
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {g}


            PET NAME
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE{this.props.pet.age}</p>
            <p>Weight: PET WEIGHT{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">




          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
              <button
                onClick={() => this.props.onAdoptPet(this.props.pet.id)}
                className="ui primary button">
                Adopt pet
            </button>
            )}

        </div>
      </div>
    )
  }
}

export default Pet
