export default function Pokemon(props) {
  const { name, sprites, types, weight, height } = props.pokemon;
  return (
    <div className="shadow-xl rounded-xl h-36 aspect-[2/1] bg-white flex my-8 overflow-hidden">
      <img
        className="[image-rendering:pixelated] aspect-square h-full text-[0]"
        src={sprites.front_default}
        alt={name}
      />
      <div className="w-1/2 mt-[18px] mr-5">
        <h1 className="capitalize text-xl mb-1 overflow-ellipsis whitespace-nowrap overflow-hidden">{name}</h1>
        <p>{weight} kg</p>
        <p>{height * 10} cm</p>
        <p className="capitalize">
          {types[0].type.name} {types[1] ? types[1].type.name : ""}
        </p>
      </div>
    </div>
  );
}
