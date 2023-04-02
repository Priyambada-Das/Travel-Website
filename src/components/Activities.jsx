const Activities = () => {
  return (
    <>
      <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Resorts</h3>
          <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Cruises</h3>
          <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1559600088-01f7d8974913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNydWlzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div className="relative p-4">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Excursions</h3>
          <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://media.istockphoto.com/id/1146139335/photo/woman-scuba-diver-smiling-underwater.jpg?b=1&s=170667a&w=0&k=20&c=TjrjYE5c_ewlwMjkhNjIrQ-T_KfXd55vTI8yvsAOmOc="
            alt="/"
          />
        </div>
      </div>
    </>
  );
};
export default Activities;
