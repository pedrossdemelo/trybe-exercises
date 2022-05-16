import React from "react";

class DogGallery extends React.Component {
  constructor(props) {
    super(props);
    this.handleDogName = this.handleDogName.bind(this);
    this.clearDogGallery = this.clearDogGallery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchDog = this.fetchDog.bind(this);
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
      <div className="flex flex-col text-center items-center">
        <header>
          <h1 className="text-3xl py-4">Dog Gallery</h1>
        </header>
        <div className="flex w-[408px] justify-between">
          <button
            className="mr-[6px] grow rounded py-0.5 px-3 bg-sky-400 text-white font-bold disabled:bg-slate-200 disabled:text-gray-400 disabled:font-normal pb-[3px]"
            onClick={this.fetchDog}
          >
            Get a new dog
          </button>
          <button
            className="ml-[6px] grow rounded py-0.5 px-3 bg-sky-400 text-white font-bold disabled:bg-slate-200 disabled:text-gray-400 disabled:font-normal pb-[3px]"
            onClick={this.clearDogGallery}
          >
            Clear gallery
          </button>
        </div>
        {loading ? (
          <div className="h-[408px] w-[408px] leading-[24rem] m-3">
            Loading...
          </div>
        ) : (
          <img
            className="h-[408px] w-[408px] object-cover text-[0px] rounded m-3"
            src={imgUrl}
            alt="dog"
          />
        )}
        <form className="flex w-[408px] h-10" onSubmit={this.handleSubmit}>
          <input
            className={`focus:outline-none rounded-l border-r-0 border-2 ${
              submitDisabled ? "border-slate-200" : "border-sky-400"
            } px-3 grow`}
            type="text"
            placeholder="Give your dog a name"
            value={dogName}
            onChange={this.handleDogName}
          />
          <button
            className={`rounded-r py-0.5 px-3 bg-sky-400 text-white font-bold disabled:bg-slate-200 disabled:text-gray-400 disabled:font-normal`}
            type="submit"
            disabled={submitDisabled}
          >
            Add
          </button>
        </form>
        <ul>
          {dogs.map((dog) => (
            <li key={dog.name}>
              <div className="p-3 rounded border-2 border-slate-200 m-3 bg-slate-50 max-w-[408px]">
                <img
                  className={`h-96 w-96 object-cover text-[0px] rounded mb-3`}
                  src={dog.imageUrl}
                  alt="dog"
                />
                <p className="font-bold text-slate-700">{dog.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DogGallery;
