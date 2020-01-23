import React, { Component } from "react";

function Graph(props) {
  const graphItems = props.stats.map(stat => {
    return (
      <li>
        Title: {stat.title}, Amount: {stat.amount}
      </li>
    );
  });

  return (
    <div className="section2__graph">
      <div className="graph__title">{props.title}</div>
      <h2 className="graph__text">{props.graphText}</h2>
      <ul>{graphItems}</ul>
    </div>
  );
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: null,
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const errors = this.validate(
      this.state.phone,
      this.state.email,
      this.state.password
    );

    if (errors.phone || errors.email || errors.password) {
      alert(JSON.stringify(errors));
    } else {
      console.log("Current State is: " + JSON.stringify(this.state));

      alert("Current State is: " + JSON.stringify(this.state));
    }

    event.preventDefault();
  }

  validate(phone, email, password) {
    const errors = {
      phone: "",
      email: "",
      password: ""
    };

    const regPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;

    if (phone && !phone.match(regPhone))
      errors.phone = "Not a valid phone number";

    if (email && email.split("").filter(x => x === "@").length !== 1)
      errors.email = "Email should contain a @";

    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

    if (password && !password.match(regPassword))
      errors.password =
        "The password should include at least:" +
        "a number, a capital letter, a symbol and a low case letter";

    return errors;
  }

  render() {
    return (
      <div className="form-box">
        <h2 className="form__title">{String(this.props.formText)}</h2>
        <div className="form__description">
          We work with ecosystem leaders, corporations, and startups worldwide.
          How can we help you?
        </div>
        <form onSubmit={this.handleSubmit} className="form__body">
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder={this.props.formLabels[0]}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder={this.props.formLabels[1]}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder={this.props.formLabels[2]}
            onChange={this.handleChange}
          />
          <input type="submit" value={this.props.buttonText} />
        </form>
      </div>
    );
  }
}

function Section2(props) {
  return (
    <div className="sections__content section2__content">
      <Graph
        title={props.title}
        graphText={props.graphText}
        stats={props.stats}
      />
      <div className="section2__form">
        <Form
          formText={props.formText}
          formLabels={props.formLabels}
          buttonText={props.buttonText}
        />
      </div>
    </div>
  );
}

export default Section2;
