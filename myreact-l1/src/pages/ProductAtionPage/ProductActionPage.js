import React, { Component } from 'react';
import apiCall from './../../utilsApi/apiCall'
import { Link } from 'react-router-dom'
import './../../App.css'

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      checStatus: ''
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      apiCall(`Products/${id}`, 'GET', null).then(res => {
        var data = res.data;
        console.log(res.data.status)
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          checStatus: data.status
        })
      })
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var { history } = this.props.history;
    var { id, txtName, txtPrice, checStatus } = this.state;

    if (id) {
      apiCall(`Products/${id}`,'PUT',{
        name: txtName,
        price: txtPrice,
        status: checStatus
      }).then(res  => {
       history.push('/')
      })
    }
    else {
      txtName === '' || txtPrice === '' ? alert('Please input name product and price product') :
        apiCall('Products', 'POST', {
          name: txtName,
          price: txtPrice,
          status: checStatus
        }).then(res => {
          history.push('/product-list');

        })
    }




  }
  render() {
    var { txtName, txtPrice, checStatus } = this.state;
  
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Ten san pham: </label>
            <input value={txtName} onChange={this.onChange} type="text" className="form-control" name="txtName" />
          </div>
          <div className="form-group">
            <label >Gia: </label>
            <input value={txtPrice} onChange={this.onChange} type="text" className="form-control" name="txtPrice" />
          </div>
          <div className="form-group">
            <label >Trang thai</label>
          </div>


          <div className="checkbox">
            <label>
              <input value={checStatus} onChange={this.onChange} checked={checStatus} type="checkbox" name="checStatus" />
              Con hang
        </label>
          </div>

          <button type="submit" className="btn btn-primary">Luu</button>
          <Link to='/product-list' className="btn btn-danger ml-10">Tro Lai</Link>
        </form>

      </div>



    )
  }
}








export default ProductActionPage;
