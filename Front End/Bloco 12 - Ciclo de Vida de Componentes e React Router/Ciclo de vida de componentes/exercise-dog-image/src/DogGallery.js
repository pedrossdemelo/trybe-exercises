import React from "react";

class DogGallery extends React.Component {
  // add a button to clear local storage and dogs array
  constructor(props) {
    super(props);
    this.handleDogName = this.handleDogName.bind(this);
    this.clearDogGallery = this.clearDogGallery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      imgUrl: "",
      loading: false,
      dogName: "",
      submitDisabled: true,
      dogs: localStorage.getItem("dogs")
        ? [...JSON.parse(localStorage.getItem("dogs"))]
        : [],
    };
  }

  fetchDog() {
    this.setState({ loading: true });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          imgUrl: data.message,
          loading: false,
        });
      });
  }

  clearDogGallery() {
    localStorage.clear();
    this.setState({ dogs: [] });
  }

  componentDidMount() {
    this.fetchDog();
  }

  handleDogName(e) {
    let name = e.target.value;
    this.setState({ dogName: name });
    if (name.length > 1) this.setState({ submitDisabled: false });
    else this.setState({ submitDisabled: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dogName, imgUrl } = this.state;
    const dog = {
      name: dogName,
      imageUrl: imgUrl,
    };
    this.setState((prevState) => ({
      dogs: [dog, ...prevState.dogs],
    }));
    localStorage.setItem("dogs", JSON.stringify([dog, ...this.state.dogs]));
    this.setState({ dogName: "", submitDisabled: true });
    this.fetchDog();
  }

  render() {
    const { imgUrl, loading, dogName, dogs, submitDisabled } = this.state;
    return (
      <>
        <header>
          <h1>Dog Gallery</h1>
        </header>
        <button onClick={this.fetchDog}>Get a new dog</button>
        <button onClick={this.clearDogGallery}>Clear gallery</button>
        {loading ? <p>Loading...</p> : <img src={imgUrl} alt="dog" />}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={dogName}
            onChange={this.handleDogName}
          />
          <button type="submit" disabled={submitDisabled}>
            Add
          </button>
        </form>
        <ul>
          {dogs.map((dog) => (
            <li key={dog.name}>
              <img src={dog.imageUrl} alt="dog" />
              <p>{dog.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default DogGallery;
