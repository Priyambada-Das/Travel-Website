const Hero = () => {
  return (
    <>
      <div className="w-full h-[90vh]">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
          alt="/"
          className="w-full h-full object-cover"
        />
        <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl italic py-4">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            veniam corrupti quibusdam exercitationem, obcaecati impedit,
            aspernatur a assumenda, nobis explicabo itaque! Sed impedit itaque
            corrupti dolore reprehenderit quos alias maxime.
          </p>
        </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
