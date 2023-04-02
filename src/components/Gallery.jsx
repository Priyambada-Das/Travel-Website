const Gallery = () => {
  return (
    <>
      <div id="galery" className="max-w-[1140px] m-auto w-full p-4 py-16">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
          <div className="sm:col-span-3 col-span-2 row-span-2">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1560251180-1a0b93970379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RXhjdXJzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1585254589738-aff16702b974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fEV4Y3Vyc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1408161147/photo/excited-black-family-packing-their-car-trunk-for-a-trip-to-the-beach-happy-single-dad-and.jpg?b=1&s=170667a&w=0&k=20&c=wFO0mEmoKfYJXU-XIkjy1fix-JHgk9wvbEgOykiUJtE="
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
