import React, { Component } from 'react'

class ProteinForm extends Component{

  // state = {
  //   protein: [],
  // }

  // props.handleOnChange = (e) => {
  //   if (this.state.protein.includes(e.target.id)){
  //     const filteredProtein = this.state.protein.filter(protein => protein !== e.target.id)
  //     this.setState({
  //       protein: filteredProtein
  //     })
  //   } else{
  //     this.setState({
  //       protein: [...this.state.protein, e.target.id]
  //     })
  //   }
  //   this.props.handleOnChange(e)
  // }



  render() {
    return (
      <div>
        <h1><label htmlFor="protein">Protein</label></h1>
        <div className="inline fields ui centered grid">
          <div className="field">
            <div className="ui checkbox">
              <input
                id="barbacoa"
                type="checkbox"
                value="Barbacoa"
                name="protein"
                checked={ this.props.protein.includes('Barbacoa')}
                onChange={ this.props.handleOnChange}
              />
              <img src={ require('../images/protein/barbacoa.png') } height="100px" width="100px" alt="barbacoa" />
              <label htmlFor="barbacoa">Barbacoa</label>
            </div>
          </div>

          <div className="field">
            <div className="ui checkbox">
              <input
                id="steak"
                type="checkbox"
                value="Steak"
                name="protein"
                checked={ this.props.protein.includes('Steak')}
                onChange={ this.props.handleOnChange}
              />
              <img src={ require('../images/protein/steak.png') } height="100px" width="100px" alt="steak" />
              <label htmlFor="steak">Steak</label>
            </div>
          </div>

          <div className="field">
            <div className="ui checkbox">
              <input
                id="chicken"
                type="checkbox"
                value="Chicken"
                name="protein"
                checked={ this.props.protein.includes('Chicken')}
                onChange={ this.props.handleOnChange}
              />
              <img src={ require('../images/protein/chicken.png') } height="100px" width="100px" alt="chicken" />
              <label htmlFor="chicken">Chicken</label>
            </div>
          </div>

          <div className="field">
            <div className="ui checkbox">
              <input
                id="carnitas"
                type="checkbox"
                value="Carnitas"
                name="protein"
                checked={ this.props.protein.includes('Carnitas')}
                onChange={ this.props.handleOnChange}
              />
              <img src={ require('../images/protein/carnitas.png') } height="100px" width="100px" alt="carnitas" />
              <label htmlFor="carnitas">Carnitas</label>
            </div>
          </div>

          <div className="field">
            <div className="ui checkbox">
              <input
                id="sofritas"
                type="checkbox"
                value="Sofritas"
                name="protein"
                checked={ this.props.protein.includes('Sofritas')}
                onChange={ this.props.handleOnChange}
              />
              <img src={ require('../images/protein/sofritas.png') } height="100px" width="100px" alt="sofritas" />
              <label htmlFor="sofritas">Sofritas</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProteinForm
